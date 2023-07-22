<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/main.css') }}">

<div style="position:relative; top:10px; bottom:10px; left:10px; right:10px">
    <img src="{{ asset('images/NeboshLogo.jpg') }}" height="200" width="200"
        style="display:block; margin-left:auto; margin-right:auto" />

    <h2 style="text-align:center">THIS IS A VALID CERTIFICATE</h2>
    <hr />
    <div>
        <h4>PLEASE ENSURE THAT THE DETAILS ON THE PRINTED CERTIFICATE MATCH THE VERIFIED DETAILS BELOW:</h4>
        <hr />
        <dl class="dl-horizontal">

            <dd>
                <strong>Learner Name: </strong>{{ $record->learner_name }}
            </dd>

            <dd>
                <strong>Learner Number: </strong>{{ $record->learner_number }}
            </dd>

            <dd>
                <strong>Qualification Name: </strong>{{ $record->certificate->name }}
            </dd>

            @if ($record->qualification_grade)
                <dd>
                    <strong>Qualification Grade: </strong> CREDIT
                </dd>
            @endif

            <dd>
                <strong>SQA Reference: </strong>{{ $record->sqa_reference }}
            </dd>

            <dd>
                <strong>Date Awarded: </strong>{{ date('d/m/Y', strtotime($record->date_awarded)) }}
            </dd>

            <dd>
                <strong>Certificate log Number: </strong>{{ $record->certificate_log_number }}
            </dd>

        </dl>
    </div>
</div>
