<?php

namespace App\Http\Controllers;

use App\Models\NeboshRecord;
use App\Services\CertificatePdfService;
use Illuminate\Http\Request;
use Exception;

class CertificatePdfController extends Controller
{
    protected $pdfService;

    public function __construct(CertificatePdfService $pdfService)
    {
        $this->pdfService = $pdfService;
    }

    /**
     * Download the certificate PDF for a given record.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function download($id)
    {
        try {
            $record = NeboshRecord::findOrFail($id);
            
            $pdfContent = $this->pdfService->generate($record);

            $safeCertNum = preg_replace('/[^a-zA-Z0-9_-]/', '_', $record->certificate_number);
            $filename = 'certificate_' . $safeCertNum . '.pdf';

            return response($pdfContent)
                ->header('Content-Type', 'application/pdf')
                ->header('Content-Disposition', 'inline; filename="' . $filename . '"');
        } catch (Exception $e) {
            return response('Error: ' . $e->getMessage() . ' Trace: ' . $e->getTraceAsString(), 500);
            // return back()->with('error', 'Could not generate certificate: ' . $e->getMessage());
        }
    }
}
