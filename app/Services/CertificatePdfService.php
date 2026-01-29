<?php

namespace App\Services;

use setasign\Fpdi\Fpdi;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use App\Models\NeboshRecord;
use Exception;
use Carbon\Carbon;

class CertificatePdfService
{
    // Default margins (mm)
    protected float $marginLeft   = 15;
    protected float $marginRight  = 15;
    protected float $marginTop    = 0;
    protected float $marginBottom = 0;

    protected float $lineHeightFactor = 0.6;

    protected float $pageWidth  = 210; // A4
    protected float $pageHeight = 297;

    public function generate(NeboshRecord $record)
    {
        $templatePath = storage_path('app/templates/certificate.pdf');

        if (!file_exists($templatePath)) {
            throw new Exception("Certificate template not found");
        }

        $pdf = new Fpdi();
        $pdf->SetAutoPageBreak(false);
        $pdf->AddPage();

        $pdf->setSourceFile($templatePath);
        $tplIdx = $pdf->importPage(1);
        $pdf->useTemplate($tplIdx, 0, 0, $this->pageWidth);

        // ---------------- AUTO-CENTERED TEXT ----------------

        // Full Name (centered)
        $this->addText(
            $pdf,
            0,
            85,
            $record->student_name,
            26,
            'B',
            'C',
            null,
            null,
            null,
            null,
            false,
            1,
            // 56,
            // 56,
            // 56
        );

        // Certificate Number (bottom center)
        $this->addText(
            $pdf,
            141,
            272.5,
            $record->certificate_number,
            8,
            '',
            'L',
            null,
            null,
            null,
            null,
            false,
            0,
            56,
            56,
            56
        );

        // Issue Date (centered, dynamic)
        $this->addText(
            $pdf,
            126,
            278.2,
            Carbon::parse($record->issue_date)->format('d F Y'),
            8,
            '',
            'L',
            null,
            null,
            null,
            null,
            false,
            0,
            56,
            56,
            56
        );

        // Institution Name
        $this->addText(
            $pdf,
            0, // X position for center
            185,
            $record->institution_name ?? 'Institution Name',
            21,
            'B',
            'C', // Center alignment
            null,
            null,
            null,
            null,
            false,
            1.1,
            56,
            56,
            56
        );

        // Approved Number
                $this->addText(
                    $pdf,
                    0,
                    194.5,
                    ($record->approved_centre ? 'Approved Centre : ' . $record->approved_centre : ''),
                    10,
                    'BI',
                    'C',
                    null,
                    null,
                    null,
                    null,
                    false,
                    0,
                    56,
                    56,
                    56
                );

        // Course Organise (dynamic)
        $this->addText(
            $pdf,
            0,
            249,
            $record->course_organiser ?? $record->course_organize ?? 'Course Organiser',
            11,
            '',
            'C',
            null,
            null,
            null,
            null,
            false,
            0,
            43,
            42,
            42
        );

        // Course Name (centered, dynamic)
        // $this->addText(
        //     $pdf,
        //     0,
        //     145,
        //     $record->course_name,
        //     14,
        //     '',
        //     'C'
        // );

        // --- QR CODE GENERATION AND EMBEDDING ---
        try {
            // Data for QR code (customize as needed)
            $qrData = url('/verify?reference=' . $record->certificate_number);
            $qrTempPath = storage_path('app/temp_qr_' . $record->certificate_number . '.png');
            // Set background color to white (default: [255,255,255]), change as needed
            \QrCode::format('png')->size(200)->margin(0)->backgroundColor(245, 250, 245)->generate($qrData, $qrTempPath);

            // Add QR code image to PDF (bottom right corner, adjust as needed)
            if (file_exists($qrTempPath)) {
                $qrX = 24; // X position in mm
                $qrY = 265; // Y position in mm
                $qrSize = 17.5; // Size in mm
                $pdf->Image($qrTempPath, $qrX, $qrY, $qrSize, $qrSize, 'PNG');
                @unlink($qrTempPath);
            }
        } catch (\Exception $e) {
            \Illuminate\Support\Facades\Log::warning('QR Code generation failed for certificate ' . $record->certificate_number . ': ' . $e->getMessage());
        }

        return $pdf->Output('S');
    }

    /**
     * Add text with margins + auto-center support
     */
    private function addText(
        Fpdi $pdf,
        float $x,
        float $y,
        string $text,
        int $fontSize,
        string $fontStyle = '',
        string $align = 'L',
        ?float $marginLeft = null,
        ?float $marginRight = null,
        ?float $marginTop = null,
        ?float $marginBottom = null,
        bool $autoCenterY = false,
        float $charSpacing = 0, // REAL character spacing (PDF Tc)
        int $textColorR = 0,
        int $textColorG = 0,
        int $textColorB = 0
    ) {
        // Resolve margins
        $marginLeft   = $marginLeft   ?? $this->marginLeft;
        $marginRight  = $marginRight  ?? $this->marginRight;
        $marginTop    = $marginTop    ?? $this->marginTop;
        $marginBottom = $marginBottom ?? $this->marginBottom;

        $encodedText = iconv('UTF-8', 'ISO-8859-1//TRANSLIT', $text);

        $pdf->SetFont('Helvetica', $fontStyle, $fontSize);
        $pdf->SetTextColor($textColorR, $textColorG, $textColorB);

        // Available space
        $usableWidth  = $this->pageWidth  - $marginLeft - $marginRight;
        $usableHeight = $this->pageHeight - $marginTop - $marginBottom;

        // X position
        if ($align === 'C') {
            $xPos = $marginLeft;
        } elseif ($align === 'R') {
            $xPos = $this->pageWidth - $marginRight - $usableWidth;
        } else {
            $xPos = $x + $marginLeft;
        }

        // Y position
        $yPos = $autoCenterY
            ? $marginTop + ($usableHeight / 2)
            : $y + $marginTop;

        $pdf->SetXY($xPos, $yPos);

        // APPLY REAL CHARACTER SPACING (Tc)
        if ($charSpacing > 0) {
            $pdf->_out(sprintf('BT %.3F Tc ET', $charSpacing));
        }

        $pdf->Cell(
            $usableWidth,
            $fontSize * $this->lineHeightFactor,
            $encodedText,
            0,
            1,
            $align
        );

        // RESET character spacing
        if ($charSpacing > 0) {
            $pdf->_out('BT 0 Tc ET');
        }
    }
}
