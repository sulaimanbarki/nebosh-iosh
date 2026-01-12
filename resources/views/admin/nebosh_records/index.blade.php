@extends('admin.layout')

@section('app')
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1 class="m-0">Nebosh IOSH Records</h1>
        </div>
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Dashboard</a></li>
                <li class="breadcrumb-item active">Nebosh Records</li>
            </ol>
        </div>
    </div>

    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">All Records</h3>
                <div class="card-tools">
                    <a href="{{ route('nebosh_records.create') }}" class="btn btn-primary btn-sm">
                        <i class="fas fa-plus"></i> Add New Record
                    </a>
                </div>
            </div>
            <div class="card-body">
                @if(session('success'))
                    <div class="alert alert-success">{{ session('success') }}</div>
                @endif

                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Student Name</th>
                            <th>Course</th>
                            <th>Certificate No.</th>
                            <th>Issue Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($records as $record)
                            <tr>
                                <td>{{ $record->id }}</td>
                                <td>{{ $record->student_name }}</td>
                                <td>{{ $record->course_name }}</td>
                                <td>{{ $record->certificate_number }}</td>
                                <td>{{ $record->issue_date }}</td>
                                <td>
                                    <a href="{{ route('nebosh.certificate', $record->id) }}" target="_blank" class="btn btn-info btn-sm" title="Print Certificate">
                                        <i class="fas fa-print"></i>
                                    </a>
                                    <a href="{{ route('nebosh_records.edit', $record->id) }}" class="btn btn-warning btn-sm" title="Edit">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <form action="{{ route('nebosh_records.destroy', $record->id) }}" method="POST" style="display:inline-block;" onsubmit="return confirm('Are you sure?');">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-sm" title="Delete">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="mt-3">
                    {{ $records->links() }}
                </div>
            </div>
        </div>
    </div>
@endsection
