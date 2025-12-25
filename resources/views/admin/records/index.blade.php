@extends('admin.layout')
@section('app')
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1 class="m-0">Records</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="/admin">Home</a></li>
                <li class="breadcrumb-item active">Records List</li>
            </ol>
        </div><!-- /.col -->
    </div><!-- /.row -->
    <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <form class="">
                            <div class="form-row align-items-center">


                                    <input type="text" class="form-control" name="search" id="inlineFormInputName"
                                        placeholder="search...">
                                </div>
                                <div class="col-auto my-1">
                                    <button type="submit" class="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </form>
                        <a href="{{ route('records.create') }}" class="btn btn-primary btn-sm float-right">Create
                            Record</a>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0" style="overflow-x: auto">
                        <table class="table table-striped" style="overflow-x: auto">
                            <thead>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Registration No.</th>
                                    <th>Name</th>
                                    <th>Learner No.</th>
                                    <th>Cert.</th>
                                    <th>Grade</th>
                                    <th>Qr</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($records as $record)
                                    <tr>
                                        <td>{{ $record->id }}</td> 
                                        <td>{{ $record->registration_no }}</td>
                                        <td>{{ $record->learner_name }}</td>
                                        <td>{{ $record->learner_number }}</td>
                                        <td>{{ $record->certificate->name }}</td>
                                        <td>{{ $record->qualification_grade == 'CREDIT' ? 'CREDIT' : 'N/A' }}</td>
                                        <td class="align-middle" style="width:50px; padding:5px;">
                                            <a href="{{ route('validation.details', $record->registration_no) }}" target="_blank" rel="noopener">
                                                <img src="/images/{{ $record->registration_no }}.png" alt="QR code for {{ $record->registration_no }}" style="display:block; width:50px; height:auto;">
                                            </a>
                                        </td>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <form class="m-0 delete-form" action="{{ route('records.destroy', $record->id) }}" method="POST" id="delete-form-{{ $record->id }}">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="button" class="btn btn-danger btn-sm mx-1 mt-3 delete-btn" data-id="{{ $record->id }}" data-name="{{ $record->learner_name }}" aria-label="Delete record {{ $record->id }}">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </form>

                                                <a href="{{ route('records.edit', $record->id) }}" class="btn btn-primary mt-3 btn-sm mx-1" aria-label="Edit record {{ $record->id }}">
                                                    <i class="fas fa-edit"></i>
                                                </a>

                                                <a href="{{ url('certificate/preview/'.$record->id) }}" class="btn btn-outline-secondary mt-3 btn-sm mx-1" target="_blank" rel="noopener" aria-label="Open PDF for record {{ $record->id }}">
                                                    <i class="fas fa-file-pdf"></i>
                                                </a>

                                                <a href="{{ route('records.show', $record->id) }}" class="btn btn-success mt-3 btn-sm mx-1" aria-label="View record {{ $record->id }}">
                                                    <i class="fas fa-eye"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>

                            {{-- render pagination --}}
                            <tfoot>
                                <tr>
                                    <td colspan="7">
                                        {{ $records->render() }}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
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

@push('scripts')
<script>
    // SweetAlert for delete confirmation
    document.addEventListener('DOMContentLoaded', function() {
        // Handle delete buttons
        const deleteButtons = document.querySelectorAll('.delete-btn');
        
        deleteButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const recordId = this.getAttribute('data-id');
                const recordName = this.getAttribute('data-name');
                const form = document.getElementById('delete-form-' + recordId);
                
                Swal.fire({
                    title: 'Are you sure?',
                    text: `You are about to delete the record for "${recordName}". This action cannot be undone!`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'Cancel',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Show loading state
                        Swal.fire({
                            title: 'Deleting...',
                            text: 'Please wait while we delete the record.',
                            allowOutsideClick: false,
                            showConfirmButton: false,
                            willOpen: () => {
                                Swal.showLoading();
                            }
                        });
                        
                        // Submit the form
                        form.submit();
                    }
                });
            });
        });

        // Show success message if session has success message
        @if(session('success'))
            Swal.fire({
                title: 'Success!',
                text: '{{ session('success') }}',
                icon: 'success',
                confirmButtonText: 'OK',
                timer: 3000,
                timerProgressBar: true
            });
        @endif

        // Show error message if session has error message
        @if(session('error'))
            Swal.fire({
                title: 'Error!',
                text: '{{ session('error') }}',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        @endif
    });
</script>
@endpush
@endsection
