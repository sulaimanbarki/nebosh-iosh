<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>NEBOSH Certificate</title>
    <style>
        /* Set A4 page size */
        @page {
            size: A4;
            margin: 0;
        }

        * {
            box-sizing: border-box;
            margin: 0%;
            padding: 0%;

        }

        body,
        html {
            margin: 0;
            padding: 0;
            background-color: #e9e9e9;
            display: flex;
            flex-direction: column;
            align-items: center;
            /* Centers the certificate on screen */
            padding: 10px 10px;
            border: none;
        }

        /* Container for the certificate */
        .certificate {
            position: relative;
            width: 210mm;
            height: 297mm;
            background: #ffffff;
            /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
            font-family: "Arial", sans-serif;
            /* NEBOSH uses clean sans-serif for titles */
            color: #022258;
            overflow: hidden;
            /* margin-right: 105px; */
        }

        .signatures {
            position: absolute;
            top: 190mm;
            /* Adjust based on PDF layout */
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 20mm;
            box-sizing: border-box;
        }

        .sign-left {
            text-align: left;
            width: 55%;
            margin-left: -17%;
            color: #022258;
        }

        .sign-right {
            text-align: center;
            width: 45%;
        }

        .sign-name {
            /* font-weight: bold; */
            margin-bottom: 5px;
        }

        .sign-role {
            font-size: 12pt;
            color: #022258;
            margin-bottom: 15px;
        }

        .signature-img {
            width: 170px;
            /* Adjust based on your image */
            height: 130px;
            margin-top: 0px;
        }

        .signature-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* --- THE HEADER STYLE --- */
        .header-container {
            position: relative;
            width: 100%;
            height: 70mm;
            /* Adjust height as needed */
        }

        /* Yellow Shape (Right Side) */
        .header-yellow {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 120%;
            background-color: #d19704;
            /* Authentic Gold/Yellow */
            /* Creates a triangle from top-mid to top-right to bottom-right */
            clip-path: polygon(25% 0, 100% 0, 100% 100%);
            z-index: 2;
        }

        /* Blue Shape (Left Side) */
        .header-blue {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 120%;
            background-color: #001944;
            /* Authentic NEBOSH Blue */
            /* Creates the large diagonal sweep */
            clip-path: polygon(0 -100%, 100% 70%, 0 100%);
            z-index: 1;
        }

        .nebosh-logo {
            position: absolute;
            top: 15mm;
            left: 11mm;
            width: 42mm;
            filter: brightness(0) invert(1);
            /* background: none; */
            z-index: 3;
        }

        .name_head {
            margin-top: -20px;
            margin-left: -20px;
        }

        /* Content Styles */
        .cert-content {
            padding: 20mm;
            /* text-align: center; */
        }

        .cert-title {
            font-size: 27.61pt;
            font-weight: 550;
            margin-left: -20px;
            margin-top: 13mm;
            /* Fit inside A4 while accounting for .cert-content padding (20mm each side) */
            width: calc(235mm - 40mm);
        }

        .cert-body {
            margin-top: 15mm;
            font-size: 14pt;
            color: #333;
        }

        .name {
            display: block;
            font-size: 24.24pt;
            font-weight: bold;
            color: #001944;
            /* margin: 10mm 0; */
            margin-top: 15px;
            margin-left: -20px;
        }

        .date {
            display: block;
            font-size: 18.5pt;
            /* font-weight: bold; */
            color: #001944;
            /* margin: 10mm 0; */
            margin-top: 15px;
            margin-left: -20px;
        }

        .award_head {
            display: block;
            font-size: 17pt;
            /* font-weight: bold; */
            color: #001944;
            /* margin: 10mm 0; */
            margin-top: 20px;
            margin-left: -20px;
        }

        .master {
            position: relative;
            margin: 10mm 0 0 0;
            text-align: center;
            width: 210mm;
            height: 297mm;
            background: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            page-break-before: always;
        }




        .footer-info {
            position: absolute;
            bottom: 32mm;
            width: 100%;
            /* display: flex; */
            justify-content: space-around;
            font-size: 10pt;
            /* margin-left: -285px; */
            color: #001944;
            margin-left: 50px;
        }

        .QR_code {
            width: 100%;
            /* height: 500px; */
            display: flex;
            justify-content: center;
            /* margin-left: 0; */
            margin-left: -170px;
            /* z-index: 1; */
        }

        .footer-bottom-text {
            position: absolute;
            bottom: 10mm;
            width: 100%;
            /* text-align: center; */
            font-size: 8pt;
            color: #001944;
            padding: 0 30mm;
            margin-left: 350px;
        }

        /* ===== CLASSIC LAYOUT STYLES (Pre-2020 Certificates) ===== */
        .classic-certificate {
            /* background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border: 3px solid #001944;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 25, 68, 0.3); */
        }

        .classic-header {
            /* background: linear-gradient(90deg, #001944 0%, #002c6c 100%);
            height: 80mm;
            border-radius: 12px 12px 0 0;
            position: relative;
            overflow: hidden; */
        }

        .classic-header::before {
            /* content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 60%;
            height: 100%;
            background: linear-gradient(45deg, #0011ff 0%, #ff02ea 100%);
            clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%); */
        }

        .classic-logo {
            position: absolute;
            top: 20mm;
            left: 20mm;
            width: 50mm;
            filter: brightness(0) invert(1);
            z-index: 3;
        }

        .classic-content {
            padding: 25mm;
            background: white;
            margin: -20mm 15mm 15mm 15mm;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .classic-title {
            font-size: 28pt;
            font-weight: 600;
            color: #001944;
            text-align: center;
            margin-bottom: 15mm;
            font-family: 'Georgia', serif;
        }

        .classic-name {
            font-size: 26pt;
            font-weight: bold;
            color: #001944;
            text-align: center;
            margin: 10mm 0;
            font-family: 'Times New Roman', serif;
        }

        .classic-date {
            font-size: 20pt;
            color: #001944;
            text-align: center;
            margin: 8mm 0;
            font-style: italic;
        }

        .classic-signatures {
            display: flex;
            /* justify-content: space-around; */
            /* margin: 10mm 0; */
            /* top: 200mm; */
            /* margin-top: 50px; */
            padding: 0 15mm;
        }

        .classic-signature {
            text-align: center;
            padding: 15mm;
            background: #f8f9fa;
            /* border-radius: 8px; */
            margin-top: 50px;

            /* border: 2px solid #d19704; */
        }

        .classic-sign-name {
            font-size: 16pt;
            font-weight: bold;
            color: #001944;
            margin-bottom: 100mm;
        }

        .classic-sign-role {
            font-size: 12pt;
            color: #666;
            font-style: italic;
        }

        .classic-footer {
            background: #001944;
            color: white;
            padding: 8mm;
            text-align: center;
            border-radius: 0 0 12px 12px;
        }

        .classic-watermark {
            position: absolute;
            opacity: 0.03;
            font-size: 120pt;
            font-weight: bold;
            color: #001944;
            transform: rotate(-45deg);
            z-index: 0;
            pointer-events: none;
        }

        /* consolidated .master rule above; duplicate removed */

        /* ADD THIS CSS (APPEND AT END) */
        /* ===== WATERMARK LAYER ===== */
        #watermark-layer {
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
            width: 580px;
            height: 290px;
            margin-top: 450px;
            margin-left: 220px;
            -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0.055), rgba(0, 0, 0, 0.767));

            /* mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.514), rgb(0, 0, 0)); */
            /* mask-image: linear-gradient(to top, rgba(0, 0, 0, 0.233), rgb(0, 0, 0)); */
        }

        .watermark-text {
            position: absolute;
            font-size: 8.47pt;
            /* font-weight: 600; */
            color: rgba(7, 3, 245, 0.274);
            white-space: nowrap;
            /* transform: rotate(-2deg); */
            user-select: none;

        }

        /* ===== CUSTOM STYLES FOR PRE-2025 CERTIFICATES ===== */
        /* This class is added when the year is below 2025 */
        .certificate.layout-pre-2025 .cert-title {
            /* Example: Change font size for Title */
            font-size: 27pt;
        }

        .certificate.layout-pre-2025 .cert-body {
            /* Example: Change font size for Body text */
            font-size: 13pt;
        }

        .certificate.layout-pre-2025 .name {
            /* Example: Change font size for Name */
            font-size: 22pt;
        }

        .certificate.layout-pre-2025 .signatures{
            /* Example: Change font size for Name */
            font-size: 2pt;
            /* margin-right: 100px;
            margin-top: 50px; Custom margin for pre-2025 signatures */
            top: 190mm;
        }

    </style>
</head>

<body>

    @php
        $displayYear = null;
        if (isset($record->date_awarded) && $record->date_awarded) {
            $displayYear = date('Y', strtotime($record->date_awarded));
        } elseif (
            isset($record->certificate_log_number) &&
            preg_match('/(20\d{2})/', $record->certificate_log_number, $m)
        ) {
            $displayYear = $m[1];
        }
        // show on footer for years 2021-2024 or when year is unknown
        $showOnFooter = is_null($displayYear) || ($displayYear >= 2001 && $displayYear <= 2024);
        $showOnMasterPage = !$showOnFooter;
        // show watermark only for 2025 and above
        $showWatermark = !is_null($displayYear) && intval($displayYear) >= 2025;
        // show classic layout for certificates before 2020
        $showClassicLayout = !is_null($displayYear) && intval($displayYear) < 2020;

        // Flag for generic pre-2025 layout (Modern but single page)
        $isPre2025 = !is_null($displayYear) && intval($displayYear) < 2025;
    @endphp

    <div class="certificate section_A {{ $isPre2025 ? 'layout-pre-2025' : '' }}">

        @php
            /*
    |--------------------------------------------------------------------------
    | Signature Image Logic
    |--------------------------------------------------------------------------
    | Before July 2024  -> signature_old.png
    | July 2024 onward  -> signature_new.png
    */

            $signatureImage = 'images/signature_new.png'; // default (Before July 2024)

            if (!empty($record->date_awarded)) {
                $awardDate = \Carbon\Carbon::parse($record->date_awarded);

                if ($awardDate->gte(\Carbon\Carbon::create(2024, 7, 1))) {
                    // After July 2024
                    $signatureImage = 'images/signature_old.png';
                }
            }
        @endphp

        @if ($showWatermark)
            <div id="watermark-layer"></div>
        @endif
        <div class="header-container">
            <div class="header-yellow"></div>
            <div class="header-blue"></div>
            <img src="{{ asset('images/NeboshLogo.png') }}" class="nebosh-logo" alt="NEBOSH Logo">
            <div class="nebosh-name">nebosh</div>
        </div>

        <div class="cert-content">
            <div class="cert-title">
                NEBOSH International General Certificate
                in Occupational Health and Safety
            </div>

            <div class="cert-body">
                <div style="color: #001944; font-size: 25px;" class="name_head">This is to certify that</div>
                <span class="name">{{ $record->learner_name ?? '' }}</span>
                <span class="award_head">was awarded this qualification on</span>
                <span
                    class="date">{{ $record->date_awarded ? date('d F Y', strtotime($record->date_awarded)) : '' }}</span>
            </div>
        </div>

        <!-- Updated Signatures Section -->
        <div class="signatures" style="margin-bottom: 0px">
            <div class="sign-left">
                <div class="signature-container">
                    <div class="sign-name" style="font-size:16pt;margin-left: 50px;">Rob Hull</div>
                    <div class="sign-role" style="margin-left: 80px;font-size:16pt;">Chair</div>
                    {{-- <div style="margin-top: px;"></div> <!-- Spacer for visual alignment --> --}}
                    <div class="sign-name" style="margin-left: 80px; font-size: 16pt;">Dee Arp</div>
                    <div class="sign-role" style="font-size:16pt">Accountable Officer</div>
                </div>
            </div>

            <div class="sign-right">
                <div class="signature-container">
                    <img src="{{ asset($signatureImage) }}" class="signature-img" style="margin-right:130mm;">
                    {{-- <div style="margin-top: 5px; font-size: 11pt; color: #333;"></div> --}}
                </div>
            </div>
        </div>


        <div class="footer-info">

            @if ($showOnFooter)
                <div class="log_num" style="font-size: 14px; margin-left: 0px;">
                    Master log Certificate No: {{ $record->certificate_log_number ?? '' }}
                </div>
                <br><br>
            @endif

            <div class="SQA_num" style="margin-bottom: -00px">
                <div>
                    <strong>SQA Reference: </strong>{{ $record->sqa_reference }}
                </div>
                <br>
                <div class="SQA_image">
                    <img src="{{ asset('images/SQA_logo.png') }}" alt="SQA Logo"
                        style="width:100px; margin-bottom: -60px;">
                </div>
            </div>
        </div>

        <div class="footer-bottom-text">
            <div class="QR_code">
                @if (isset($record) && $record->certificate_log_number)
                    {!! QrCode::size(150)->generate($record->certificate_log_number) !!}
                @else
                    {!! QrCode::size(150)->generate(url()->current()) !!}
                @endif
            </div>


            <strong style="font-size: 12pt;">
                The National Examination Board <br> in Occupational Safety and Health <br>
            </strong>
            <span style="font-size: 8pt; margin-top: -10px;">
                Registered in England & Wales No.
                2698100 <br>
                A Charitable Company Charity No. 1010444
            </span>
        </div>
    </div>

    @if ($showOnMasterPage)
        <div class="master section_B" style="page-break-before: always;">
            <div style="font-size: 18px; position: absolute; left: 50%; transform: translateX(-50%); bottom: 24mm;">
                Master log Certificate No: {{ $record->certificate_log_number ?? '' }}
            </div>
        </div>
    @endif

    {{-- ===== CLASSIC LAYOUT (Pre-2020 Certificates) ===== --}}
    @if ($showClassicLayout)
        <div class="certificate classic-certificate">
            {{-- Classic Header with Gradient --}}
            <div class="classic-header">
                <img src="{{ asset('images/NeboshLogo.png') }}" class="classic-logo" alt="NEBOSH Logo">
                <div class="classic-watermark">NEBOSH</div>
            </div>

            {{-- Main Content --}}
            <div class="classic-content">
                <div class="classic-title">
                    NEBOSH International General Certificate<br>
                    in Occupational Health and Safety
                </div>

                <div style="text-align: center;">
                    <div style="color: #001944; font-size: 18pt; margin-bottom: 10mm;">
                        This is to certify that
                    </div>

                    <div class="classic-name">
                        {{ $record->learner_name ?? '' }}
                    </div>

                    <div style="color: #001944; font-size: 18pt; margin-bottom: 8mm;">
                        was awarded this qualification on
                    </div>

                    <div class="classic-date">
                        {{ $record->date_awarded ? date('d F Y', strtotime($record->date_awarded)) : '' }}
                    </div>
                </div>

                {{-- Signatures --}}
                <div class="classic-signatures">
                    <div class="classic-signature">
                        <div class="classic-sign-name">Rob Hull</div>
                        <div class="classic-sign-role">Chair</div>
                    </div>

                    <div class="classic-signature">
                        <div class="classic-sign-name">Dee Arp</div>
                        <div class="classic-sign-role">Accountable Officer</div>
                        @if (file_exists(public_path('images/signature_old.png')))
                            <img src="{{ asset('images/signature_old.png') }}" alt="Signature"
                                style="width: 80mm; margin-top: 5mm;">
                        @endif
                    </div>
                </div>

                {{-- Certificate Details --}}
                <div style="text-align: center; margin-top: 15mm;">
                    <div style="font-size: 14pt; color: #001944; margin-bottom: 5mm;">
                        <strong>Master log Certificate No:</strong> {{ $record->certificate_log_number ?? '' }}
                    </div>
                    <div style="font-size: 14pt; color: #001944;">
                        <strong>SQA Reference:</strong> {{ $record->sqa_reference }}
                    </div>
                </div>
            </div>

            {{-- Footer --}}
            <div class="classic-footer">
                <div style="margin-bottom: 3mm;">
                    <strong>The National Examination Board in Occupational Safety and Health</strong>
                </div>
                <div style="font-size: 10pt;">
                    Registered in England & Wales No. 2698100 | A Charitable Company Charity No. 1010444
                </div>
            </div>
        </div>
    @endif




    @if ($showWatermark)
        <script>
            document.addEventListener("DOMContentLoaded", function() {

                const learnerName = @json($record->learner_name ?? '');
                if (!learnerName) return;

                const layer = document.getElementById("watermark-layer");
                if (!layer) return;
                const width = layer.offsetWidth;
                const height = layer.offsetHeight;

                /* ===== Measure text width dynamically ===== */
                const tempSpan = document.createElement("span");
                tempSpan.className = "watermark-text";
                tempSpan.style.visibility = "hidden";
                tempSpan.style.position = "absolute";
                tempSpan.textContent = learnerName;
                document.body.appendChild(tempSpan);

                const textWidth = tempSpan.offsetWidth;
                const textHeight = tempSpan.offsetHeight;
                tempSpan.remove();

                /* ===== Dynamic spacing based on text length ===== */
                const gapX = textWidth + 14; // 🔥 key fix
                const gapY = textHeight + 2;

                for (let y = -100; y < height + 100; y += gapY) {
                    for (let x = -200; x < width + 200; x += gapX) {
                        const span = document.createElement("span");
                        span.className = "watermark-text";
                        span.textContent = learnerName;
                        span.style.left = x + "px";
                        span.style.top = y + "px";
                        layer.appendChild(span);
                    }
                }
            });
        </script>
    @endif


</body>

</html>
