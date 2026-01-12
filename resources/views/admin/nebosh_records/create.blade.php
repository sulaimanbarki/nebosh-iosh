@extends('admin.layout')

@section('app')
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1 class="m-0">Create New Record</h1>
        </div>
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="{{ route('nebosh_records.index') }}">Records</a></li>
                <li class="breadcrumb-item active">Create</li>
            </ol>
        </div>
    </div>

    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <form action="{{ route('nebosh_records.store') }}" method="POST">
                    @csrf
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label>Student Name</label>
                            <input type="text" name="student_name" class="form-control" required value="{{ old('student_name') }}">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>Course Name</label>
                            <input type="text" name="course_name" class="form-control" value="IOSH Managing Safely" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>Institution Name</label>
                            <input type="text" name="institution_name" class="form-control" value="Global World Safety Institute" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>Approved Centre</label>
                            <input type="text" name="approved_centre" class="form-control" value="2216" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>Certificate Number</label>
                            <input type="text" name="certificate_number" class="form-control" required value="{{ old('certificate_number') }}">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>Issue Date</label>
                            <input type="date" name="issue_date" class="form-control" required value="{{ old('issue_date') }}">
                        </div>
                        
                        <div class="col-md-6 mb-3">
                            <label>Chief Executive Name</label>
                            <input type="text" name="chief_executive" class="form-control" value="Vanessa Harwood-Whitcher">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>Course Organiser Name</label>
                            <input type="text" name="course_organiser" class="form-control" value="">
                        </div>
                    </div>

                    <button type="submit" class="btn btn-success">Save Record</button>
                    <a href="{{ route('nebosh_records.index') }}" class="btn btn-secondary">Cancel</a>
                </form>
            </div>
        </div>
    </div>
@endsection
