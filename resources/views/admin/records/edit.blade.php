@extends('admin.layout')

@section('app')
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  
  <style>
    /* Optionally, you can add custom styling here */
    .ui-datepicker {
      font-size: 14px;
    }
  </style>
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1 class="m-0">Records</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="/admin">Home</a></li>
                <li class="breadcrumb-item">Records</li>
                <li class="breadcrumb-item active">Edit Record</li>
            </ol>
        </div><!-- /.col -->
    </div><!-- /.row -->

    <div class="container-fluid">

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Edit Record</h3>
                        <a href="{{ route('records.index') }}" class="btn btn-primary btn-sm float-right">Back</a>
                    </div>
                    <div class="card-body p-0">
                        <form action="{{ route('records.update', $record->id) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="card-body">

                                <!-- Learner Name -->
                                <div class="form-group">
                                    <label for="learner_name">Learner Name</label>
                                    <input type="text" class="form-control" id="learner_name" placeholder="Enter name"
                                        value="{{ old('learner_name') ?? $record->learner_name }}" name="learner_name">
                                    @error('learner_name')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <!-- Learner Number -->
                                <div class="form-group">
                                    <label for="learner_number">Learner No</label>
                                    <input type="text" class="form-control" id="learner_number"
                                        value="{{ old('learner_number') ?? $record->learner_number }}"
                                        placeholder="Enter learner number" name="learner_number">
                                    @error('learner_number')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <!-- Email -->
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter Email"
                                        value="{{ old('email') ?? $record->email }}" name="email">
                                    @error('email')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <!-- Date of Birth -->
                                <div class="form-group">
                                    <label for="date_of_birth">Date of Birth</label>
                                    <input type="text" class="form-control" id="date_of_birth"
                                        value="{{ old('date_of_birth') ?? \Carbon\Carbon::parse($record->date_of_birth)->format('d/m/Y') }}"
                                        placeholder="Enter date of birth" name="date_of_birth" required>
                                    @error('date_of_birth')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <!-- Certificate -->
                                <div class="form">
                                    <label for="certificate_id">Certificate</label>
                                    <select name="certificate_id" id="certificate_id" class="form-control">
                                        <option value="">Select Certificate</option>
                                        @foreach ($certificates as $certificate)
                                            <option value="{{ $certificate->id }}"
                                                {{ $record->certificate_id == $certificate->id ? 'selected' : '' }}>
                                                {{ $certificate->name }}
                                            </option>
                                        @endforeach
                                    </select>
                                    @error('certificate_id')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <!-- Qualification Grade (Optional) -->
                                <div class="form-check my-2">
                                    <input type="checkbox" class="form-check-input" id="qualification_grade"
                                        name="qualification_grade" @if ($record->qualification_grade) checked @endif>
                                    <label class="form-check-label" for="qualification_grade"><b>Qualification Grade
                                            (optional)</b></label>
                                </div>

                                <!-- SQA Reference -->
                                <div class="form-group">
                                    <label for="sqa_reference">SQA Reference No.</label>
                                    <input type="text" class="form-control" id="sqa_reference"
                                        value="{{ old('sqa_reference') ?? $record->sqa_reference }}"
                                        placeholder="Enter SQA reference no." name="sqa_reference">
                                    @error('sqa_reference')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <!-- Date Awarded -->
                                <div class="form-group">
                                    <label for="date_awarded">Date Awarded</label>
                                    <input type="date" class="form-control" id="date_awarded"
                                        value="{{ old('date_awarded') ?? $record->date_awarded }}"
                                        placeholder="Enter date awarded" name="date_awarded">
                                    @error('date_awarded')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <!-- Certificate Log Number -->
                                <div class="form-group">
                                    <label for="certificate_log_number">Certificate Log No.</label>
                                    <input type="text" class="form-control" id="certificate_log_number"
                                        value="{{ old('certificate_log_number') ?? $record->certificate_log_number }}"
                                        placeholder="Enter certificate log number" name="certificate_log_number">
                                    @error('certificate_log_number')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                            </div>

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            // Initialize jQuery UI Datepicker for Date of Birth
            $('#date_of_birth').datepicker({
                dateFormat: 'dd/mm/yy', // Set the format to dd/mm/yyyy
                changeMonth: true, // Allow changing the month
                changeYear: true, // Allow changing the year
                setDate: '{{ old('date_of_birth') ?? \Carbon\Carbon::parse($record->date_of_birth)->format('d/m/Y') }}', // Set the default date
            });
        });
    </script>
@endsection

@push('styles')
@endpush

@push('scripts')
   
@endpush
