@extends('admin.layout')
@section('app')

<div class="row mb-2">
    <div class="col-sm-6">
        <h1 class="m-0">Certificates</h1>
    </div><!-- /.col -->
    <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="/admin">Home</a></li>
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
                        <h3 class="card-title">Certificates List</h3>
                        <a href="{{ route('certificates.create') }}" class="btn btn-primary btn-sm float-right">Create Certificate</a>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0" style="overflow-x: auto">
                        <table class="table table-striped" style="overflow-x: auto">
                            <thead>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <th>Name</th>
                                    <th>Refrence No.</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($certificates as $character)
                                    <tr>
                                        <td>{{ $character->id }}</td>
                                        <td>{{ $character->name }}</td>
                                        <td>{{ $character->reference }}</td>
                                        {{-- <td>{{ $character->type == 'free' ? 'Free' : 'Paid' }}</td>
                                        <td>{{ $character->character_description }}</td>
                                        <td><img style="width: 100px" src="{{ url($character->icon_link) }}" alt=""></td> --}}
                                        <td>
                                            <a href="{{ route('certificates.edit', $character->id) }}" class="btn btn-primary btn-sm">Edit</a>
                                            <form class="form-inline" action="{{ route('certificates.destroy', $character->id) }}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                            </form>
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
