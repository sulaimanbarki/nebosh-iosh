@extends('admin.layout')
@section('app')
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="/admin">Home</a></li>
                <li class="breadcrumb-item">Plans</li>
                <li class="breadcrumb-item active">Edit Plan</li>
            </ol>
        </div><!-- /.col -->
    </div><!-- /.row -->
    <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Edit Plan</h3>
                        {{-- create user button float right --}}
                        <a href="{{ route('plans.index') }}" class="btn btn-primary btn-sm float-right">Back</a>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                        <form action="{{ route('plans.update', $plan->id) }}" method="post" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control" id="name"
                                        value="{{ old('name') ?? $plan->name }}" placeholder="Enter name" name="name">

                                    @error('name')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <label for="sub_title">Sub Title</label>
                                    <input type="text" class="form-control" id="sub_title"
                                        value="{{ old('sub_title') ?? $plan->sub_title }}" placeholder="Enter sub title"
                                        name="sub_title">

                                    @error('sub_title')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="number" class="form-control" id="price"
                                        value="{{ old('price') ?? $plan->price }}" placeholder="Enter price"
                                        name="price">

                                    @error('price')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="form-group">
                                    <label for="duration">Duration in days</label>
                                    <input type="number" class="form-control" id="duration"
                                        value="{{ old('duration') ?? $plan->duration }}" placeholder="Enter duration"
                                        name="duration">

                                    @error('duration')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="form-group">
                                    <label for="icon_path">File input</label>
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="icon_path"
                                                name="icon_path">
                                            <label class="custom-file-label" for="icon_path">Choose file</label>
                                        </div>
                                    </div>
                                    @error('icon_path')
                                        <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>

                                <div class="form-check">
                                    <input type="checkbox" name="status" class="form-check-input" id="status"
                                        {{ $plan->status == 1 ? 'checked' : '' }}>
                                    <label class="form-check-label" for="status">Status</label>
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
