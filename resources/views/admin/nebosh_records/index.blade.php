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
                <div class="card-tools d-flex" style="gap: 8px;">
                    <form action="{{ route('nebosh_records.index') }}" method="GET" class="input-group input-group-sm" style="width: 400px;">
                        <input type="text" name="search" class="form-control" placeholder="Search student, course, certificate" value="{{ $search ?? '' }}">
                        <span class="input-group-append">
                            <button type="submit" class="btn btn-default">
                                <i class="fas fa-search"></i>
                            </button>
                        </span>
                    </form>
                    <a href="{{ route('nebosh_records.create') }}" class="btn btn-primary btn-sm">
                        <i class="fas fa-plus"></i> Add New Record
                    </a>
                </div>
            </div>
            <div class="card-body">
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
                                   
                                    <a href="{{ route('certificate.download', $record->id) }}" target="_blank" class="btn btn-info btn-sm download-btn">
                                        <i class="fas fa-download"></i>
                                    </a>
                                    <!-- {{-- <a href="{{ route('certificate.download', $record->id) }}" class="btn btn-secondary btn-sm" title="Download PDF">
                                        <i class="fas fa-download"></i>
                                    </a> --}} -->
                                    <a href="{{ route('nebosh_records.edit', $record->id) }}" class="btn btn-warning btn-sm" title="Edit">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <form action="{{ route('nebosh_records.destroy', $record->id) }}" method="POST" style="display:inline-block;" class="delete-form">
                                        @csrf
                                        @method('DELETE')
                                        <button type="button" class="btn btn-danger btn-sm delete-btn" title="Delete">
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

@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script>
    // Success message for create/update
    @if(session('success'))
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: '{{ session('success') }}',
            timer: 3000,
            showConfirmButton: false
        });
    @endif

    // Delete confirmation
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const form = this.closest('.delete-form');
            
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    form.submit();
                }
            });
        });
    });

    // Allow default download behavior
    document.querySelectorAll('.download-btn').forEach(button => {
        button.addEventListener('click', function() {
            // no-op: keep default browser handling
        });
    });
</script>
@endpush
