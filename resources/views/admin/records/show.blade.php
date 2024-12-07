@extends('admin.layout')
@section('app')
    <div class="row mb-2">
        <div class="col-sm-6">
            <h1 class="m-0">Records</h1>
        </div><!-- /.col -->
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="/admin">Home</a></li>
                <li class="breadcrumb-item active">Record Show</li>
            </ol>
        </div><!-- /.col -->
    </div><!-- /.row -->
    <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    {{-- display record qr code --}}
                    <a href="{{ $record->link }}" target="_blank">
                        <img src="/images/{{ $record->registration_no }}.png" alt="qr code" class="img-fluid"
                            width="200">
                    </a>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                        <table class="table table-striped">
                            <tbody>
                                <tr>
                                    <th style="width: 10px">#</th>
                                    <td>{{ $record->id }}</td>
                                </tr>
                                <tr>
                                    <th>Registration No.</th>
                                    <td>{{ $record->registration_no }}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{{ $record->learner_name }}</td>
                                </tr>
                                <tr>
                                    <th>Learner No.</th>
                                    <td>{{ $record->learner_number }}</td>
                                </tr>

                                <tr>
                                    <th>Email</th>
                                    <td>{{ $record->email }}</td>
                                </tr>
                                <tr>
                                    <th>Cert.</th>
                                    <td>{{ $record->certificate->name }}</td>
                                </tr>
                                <tr>
                                    <th>Action</th>
                                    <td>
                                        <form style="display: inline !important;"
                                            action="{{ route('records.destroy', $record->id) }}" method="POST">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger btn-sm">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </form>
                                        <a href="{{ route('records.edit', $record->id) }}" class="btn btn-primary btn-sm">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                        <a href="{{ route('change.status', $record->id) }}"
                                            class="btn {{ $record->status == 'active' ? 'btn-success' : 'btn-danger' }} btn-sm">
                                            @if ($record->status == 'active')
                                                <i class="fas fa-check"></i>
                                            @else
                                                <b>X</b>
                                            @endif
                                            {{ $record->status }}
                                        </a>
                                    </td>
                                </tr>
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
