@extends('admin.layout')
@section('app')
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="/admin">Home</a></li>
                <li class="breadcrumb-item">certificates</li>
                <li class="breadcrumb-item active">Create Character</li>
            </ol>
        </div><!-- /.col -->
    </div><!-- /.row -->
    <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Create Character</h3>
                        {{-- create user button float right --}}
                        <a href="{{ route('certificates.index') }}" class="btn btn-primary btn-sm float-right">Back</a>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                        <form action="{{ route('certificates.store') }}" method="post" enctype="multipart/form-data">
                            @csrf
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Enter name" name="name">

                                    {{-- if error message --}}
                                    @error('name')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="reference">Reference No</label>
                                    <input type="text" class="form-control" id="reference" placeholder="Enter reference" name="reference">

                                    {{-- if error message --}}
                                    @error('reference')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" name="status" class="form-check-input" id="status">
                                    <label class="form-check-label" for="status">Status</label>
                                </div>
                            </div>

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
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
