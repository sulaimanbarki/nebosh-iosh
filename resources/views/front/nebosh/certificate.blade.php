<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certificate - {{ $neboshRecord->student_name }}</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}

        @page {
            size: A4 landscape;
            margin: 0;
        }

        /* body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            -webkit-print-color-adjust: exact;
            background-color: #ececec;
        } */

        .container {
            width: 100%;
            height: 130vh;
            margin: 0;
            background-color: rgba(212, 212, 212, 0.781);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .page-container {
            width: 235mm;
            height: 205mm;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background-color: rgb(252, 251, 251);
            border-top: 2px dotted #b1b1b15d;
            /* margin-top:150px; */
        }

        .border-outer {
            width: 230mm;
            height: 200mm;
            border: 2.5px solid #b8967844;
            position: relative;
            background-color: rgb(248, 247, 247);
            /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
        }

        .border-inner {
            position: absolute;
            top: 8mm;
            bottom: 8mm;
            left: 8mm;
            right: 8mm;
            border: 1px solid #219ebc;
            /* content centering via padding or flex if needed, but content assumes flow */
        }

        .content {
            text-align: center;
            color: #333;
            height: 100%;
            padding-top: 5mm;
            position: relative;
        }

        .coat-of-arms {
            height: 30mm;
            margin-bottom: 2mm;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .coat-of-arms img {
            max-height: 100%;
            width: auto;
        }

        .intro-text {
            font-size: 14pt;
            margin-bottom: 2mm;
        }

        .student-name {
            font-size: 26pt;
            font-weight: bold;
            margin-bottom: 2mm;
            text-transform: capitalize;
        }

        .course-title {
            font-size: 22pt;
            font-weight: bold;
            margin: 2mm 0;
            color: #000;
        }

        .awarding-body {
            font-size: 18pt;
            font-weight: bold;
            margin: 2mm 0;
        }

        .institution {
            font-size: 16pt;
            font-weight: bold;
            margin-top: 2mm;
        }

        .centre-number {
            font-size: 10pt;
            font-style: italic;
            margin-bottom: 4mm;
        }

        .signatures-section {
            display: flex;
            justify-content: center;
            margin-top: 2mm;
            gap: 50mm;
        }

        .signature-block {
            text-align: center;
        }

        .signature-image {
            height: 15mm;
            font-family: 'Brush Script MT', cursive;
            font-size: 18pt;
            color: #555;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }

        .signature-title {
            font-size: 10pt;
            border-top: 1px solid #ccc;
            padding-top: 2px;
            margin-top: 2px;
        }

        .footer {
            position: absolute;
            bottom: 5mm;
            left: 10mm;
            right: 10mm;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        .footer-left {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .iosh_logo {
            width: 20mm;
            height: 20mm;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }

        .iosh_logo img {
            width: 100%;
        }

        .qr-code {
            width: 18mm;
            height: 18mm;
            border: 1px solid #ddd;
            padding: 2px;
        }

        .footer-right {
            text-align: right;
            font-size: 8pt;
        }

        .text-course-approved {
            font-size: 12pt;
            margin: 1mm 0;
        }

        .text-in-association {
            font-size: 12pt;
            margin-top: 2mm;
        }

        @media print {
            body, .container {
                background-color: white;
            }
            .container {
                width: 297mm;
                height: 210mm;
            }
            .border-outer {
                box-shadow: none;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="page-container">
            <div class="border-outer">
                <div class="border-inner">
                    <div class="content">
                        <!-- Top Logo / Coat of Arms -->
                        <div class="coat-of-arms">
                            <!-- Try to find a logo, else show nothing or text -->
                            {{-- <!-- <img src="{{ asset('images/coat_of_arms.png') }}" alt="Coat of Arms"> --> --}}
                            <!-- Using Nebosh Logo temporarily if compatible, mostly it won't be correct but better than empty space? -->
                            <!-- Actually stick to text specific or generic shield if user hasn't provided one?
                          User provided image reference only. I will leave it empty but structured. -->
                            <!-- Note: User mentioned 'uploaded_image_1768042738871.png' in previous turns but here code has 'iosh_logo_shield.png' -->
                            <img src="{{ asset('images/iosh_logo_shield.png') }}" alt="Coat of Arms">
                        </div>

                        <div class="intro-text">This is a certificate awarded to</div>

                        <div class="student-name">{{ $neboshRecord->student_name }}</div>

                        <div class="intro-text">on successfully completing</div>

                        <div class="course-title">{{ $neboshRecord->course_name }}</div>

                        <div class="text-course-approved">a course approved and validated by the</div>

                        <div class="awarding-body">Institution of Occupational Safety and Health</div>

                        <div class="text-in-association">in association with</div>

                        <div class="institution">{{ $neboshRecord->institution_name }}</div>

                        <div class="centre-number">Approved Centre: {{ $neboshRecord->approved_centre }}</div>

                        <div class="signatures-section">
                            <div class="signature-block">
                                <div class="signature-text" style="font-size: 10pt; margin-bottom: 5mm;">Signed on
                                    behalf of IOSH</div>
                                <div class="signature-image">
                                    <img src="{{ asset('images/sign_1.png') }}" alt="" style="margin-top: -55px;">
                                    <!-- Placeholder signature -->
                                    {{-- {{ $neboshRecord->chief_executive ?? 'Vanessa Harwood-Whitcher' }} --}}
                                </div>
                                <div class="">Chief Executive</div>
                                <div class="signature-image">
                                    <img src="{{ asset('images/sign_2.png') }}" alt="" style="margin-top:;">
                                    <!-- Placeholder signature -->
                                    {{-- {{ $neboshRecord->chief_executive ?? 'Vanessa Harwood-Whitcher' }} --}}
                                </div>
                            </div>
                        </div>

                        <!-- Course Organiser below or nearby? Image shows Chief Executive centered mostly?
                      Actually image shows "Signed on behalf of " then Chief Executive.
                      Then below that "Course Organiser" signature. -->

                        <div class="signatures-section" style="margin-top: 0;">
                            <div class="signature-block" style="margin-top: 3mm;">
                                <div class="signature-image">
                                    <!-- Placeholder for Organiser Signature -->
                                    <span
                                        style="font-family: 'Brush Script MT', cursive; font-size: 16pt;">Signature</span>
                                </div>
                                <div class="signature-title">Course Organiser</div>
                            </div>
                        </div>

                    </div>

                    <div class="footer">
                        <div class="footer-left">
                            <div class="iosh_logo">
                                <!-- IOSH Logo -->
                                {{-- <span style="color: #0085ca; font-size: 20px; font-weight: bold;">iosh</span> --}}
                                <img src="{{ asset('images/logo_2.png') }}" alt="" style="margin-top: -170px;width:400px">
                            </div>
                            <div class="qr-code">
                                <!-- QR Code Simulation -->
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data={{ $neboshRecord->certificate_number }}"
                                    style="width:100%; height:100%;" alt="QR">
                            </div>
                        </div>
                        <div class="footer-right">
                            <div>IOSH certificate number: {{ $neboshRecord->certificate_number }}</div>
                            <div>Issued Date: {{ \Carbon\Carbon::parse($neboshRecord->issue_date)->format('d F Y') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {{-- <script>
    window.onload = function() {
        window.print();
    }
</script> --}}

</body>

</html>
