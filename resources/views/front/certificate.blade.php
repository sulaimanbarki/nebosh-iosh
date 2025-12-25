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

        body,
        html {
            margin: 0;
            padding: 0;
            background-color: #e9e9e9;
            display: flex;
            flex-direction: column;
            align-items: center;
            /* Centers the certificate on screen */
            padding: 20px 0;
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
            font-weight:550;
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

        .date{
            display: block;
            font-size: 20.5pt;
            /* font-weight: bold; */
            color: #001944;
            /* margin: 10mm 0; */
            margin-top: 15px;
            margin-left: -20px;
        }

        .award_head {
            display: block;
            font-size: 20pt;
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

        /* Signature Section */
        .signatures {
            margin-top: 1mm;
            display: flex;
            justify-content: space-between;
            padding: 0 20mm;
        }

        .sign-box {
            text-align: center;
            width: 60mm;
        }

        /* .sign-line {
            border-top: 1px solid #002c77;
            margin-bottom: 2mm;
        } */

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
            margin-left: -280px;
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
    </style>
</head>

<body>

    <div class="certificate section_A">
        @php
            $displayYear = null;
            if (isset($record->date_awarded) && $record->date_awarded) {
                $displayYear = date('Y', strtotime($record->date_awarded));
            } elseif (isset($record->certificate_log_number) && preg_match('/(20\d{2})/', $record->certificate_log_number, $m)) {
                $displayYear = $m[1];
            }
            // show on footer for years 2021-2024 or when year is unknown
            $showOnFooter = is_null($displayYear) || ($displayYear >= 2001 && $displayYear <= 2024);
            $showOnMasterPage = !$showOnFooter;
            // show watermark only for 2025 and above
            $showWatermark = !is_null($displayYear) && intval($displayYear) >= 2025;
        @endphp

        @if($showWatermark)
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

        <div class="signatures">
            <div class="sign-box">
                <span style=" font-size: 16pt; margin-bottom: 5px;">Rob Hull</span><br>
                <span style=" font-size: 16pt; margin-bottom: 5px; margin-left: 30px;">Chair</span>
                <br>
                <br>
                {{-- <div class="sign-line"></div> --}}
                {{-- <div style="font-style: italic; font-size: 20pt; margin-bottom: 50px;">Dee Arp</div> --}}
                {{-- <div class="sign-line"></div> --}}
                <span style=" font-size: 16pt; margin-bottom: -50px; margin-left: 15px;">Dee Arp</span><br>
                <span style=" font-size: 16pt; margin-bottom: -50px; margin-left: -80px;">Accountable Officer</span>
                {{-- <strong>Rob Hull</strong><br>Chair --}}
            </div>
            {{-- <div class="sign-box">
                <div style="font-style: italic; font-size: 20pt; margin-bottom: 5px;">Dee Arp</div>
                <div class="sign-line"></div>
                <strong>Dee Arp</strong><br>Accountable Officer
            </div> --}}
        </div>

        <div class="footer-info">

            @if($showOnFooter)
                <div class="log_num" style="font-size: 14px; margin-left: 0px;">
                    Master log Certificate No: {{ $record->certificate_log_number ?? '' }}
                </div>
                <br><br>
            @endif

            <div class="SQA_num">
                <strong>SQA Reference: </strong>{{ $record->sqa_reference }}
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

    @if($showOnMasterPage)
        <div class="master section_B" style="page-break-before: always;">
            <div style="font-size: 18px; position: absolute; left: 50%; transform: translateX(-50%); bottom: 24mm;">
                Master log Certificate No: {{ $record->certificate_log_number ?? '' }}
            </div>
        </div>
    @endif




    @if($showWatermark)
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
