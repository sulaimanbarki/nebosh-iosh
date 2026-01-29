@extends('admin.layout')
@section('app')

<div class="row mb-2">
    <div class="col-sm-6">
        <h1 class="m-0">Certificates</h1>
    </div><!-- /.col -->
    <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Home</a></li>
            <li class="breadcrumb-item active">Certificates List</li>
        </ol>
    </div><!-- /.col -->
</div><!-- /.row -->
    <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <h3 class="card-title mb-0">Certificates List</h3>
                            <a href="{{ route('certificates.create') }}" class="btn btn-primary btn-sm">Create Certificate</a>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                        <table class="table table-striped table-hover mb-0">
                            <thead>
                                <tr>
                                    <th class="border-0" style="width: 10px">#</th>
                                    <th class="border-0">Name</th>
                                    <th class="border-0">Reference No.</th>
                                    <th class="border-0" style="width: 120px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($certificates as $certificate)
                                    <tr>
                                        <td class="align-middle">{{ $certificate->id }}</td>
                                        <td class="align-middle">
                                            <div class="font-weight-medium">{{ $certificate->name }}</div>
                                            @if($certificate->character_description)
                                                <small class="text-muted">{{ Str::limit($certificate->character_description, 40) }}</small>
                                            @endif
                                        </td>
                                        <td class="align-middle">
                                            <span class="badge badge-light">{{ $certificate->reference }}</span>
                                        </td>
                                        <td class="align-middle">
                                            <div class="d-flex gap-2">
                                                <a href="{{ route('certificates.edit', $certificate->id) }}" class="btn btn-sm btn-outline-primary" title="Edit">
                                                    <i class="fas fa-edit"></i>
                                                </a>
                                                <form action="{{ route('certificates.destroy', $certificate->id) }}" method="POST" class="d-inline" onsubmit="return confirm('Delete this certificate?')">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-sm btn-outline-danger" title="Delete">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
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
@endsection
