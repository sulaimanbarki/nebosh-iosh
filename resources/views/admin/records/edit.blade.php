@extends('admin.layout')
@section('app')
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
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Edit Record</h3>
                        {{-- create user button float right --}}
                        <a href="{{ route('records.index') }}" class="btn btn-primary btn-sm float-right">Back</a>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                        <form action="{{ route('records.update', $record->id) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="learner_name">Learner Name</label>
                                    <input type="text" class="form-control" id="learner_name" placeholder="Enter name"
                                        value="{{ old('learner_name') ?? $record->learner_name }}" name="learner_name">

                                    {{-- if error message --}}
                                    @error('learner_name')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="learner_number">Learner No</label>
                                    <input type="text" class="form-control" id="learner_number"
                                        value="{{ old('learner_number') ?? $record->learner_number }}"
                                        placeholder="Enter learner number" name="learner_number">

                                    {{-- if error message --}}
                                    @error('learner_number')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="form">
                                    <label for="certificate_id">Certificate</label>
                                    <select name="certificate_id" id="certificate_id" class="form-control">
                                        <option value="">Select Certificate</option>
                                        @foreach ($certificates as $certificate)
                                            <option value="{{ $certificate->id }}">{{ $certificate->name }}</option>
                                        @endforeach
                                    </select>

                                    {{-- if error message --}}
                                    @error('certificate_id')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                
                                <div class="form-check my-2">
                                    <input type="checkbox" class="form-check-input" id="qualification_grade"
                                        name="qualification_grade" @if($record->qualification_grade) checked @endif>
                                    <label class="form-check-label" for="qualification_grade"><b>Qualification Grade
                                            (optional)</b></label>
                                </div>

                                <div class="form-group">
                                    <label for="sqa_reference">SQA Reference No.</label>
                                    <input type="text" class="form-control" id="sqa_reference"
                                        value="{{ old('sqa_reference') ?? $record->sqa_reference }}"
                                        placeholder="Enter SQA reference no." name="sqa_reference">

                                    {{-- if error message --}}
                                    @error('sqa_reference')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                {{-- date_awarded --}}
                                <div class="form-group">
                                    <label for="date_awarded">Date Awarded</label>
                                    <input type="date" class="form-control" id="date_awarded"
                                        value="{{ old('date_awarded') ?? $record->date_awarded }}"
                                        placeholder="Enter date awarded" name="date_awarded">

                                    {{-- if error message --}}
                                    @error('date_awarded')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                {{-- certificate_log_number --}}
                                <div class="form-group">
                                    <label for="certificate_log_number">Certificate Log No.</label>
                                    <input type="text" class="form-control" id="certificate_log_number"
                                        value="{{ old('certificate_log_number') ?? $record->certificate_log_number }}"
                                        placeholder="Enter certificate log number" name="certificate_log_number">

                                    {{-- if error message --}}
                                    @error('certificate_log_number')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>

                    </div>

                </div>
                <!-- /.card-body -->
            </div>
            <!-- /.card -->
        </div>
        <!-- /.col -->
    </div>
    </div>
    <!-- /.row (main row) -->
    </div><!-- /.container-fluid -->
@endsection
