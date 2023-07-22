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
                                <div class="col-sm-3 my-1">
                                    <label class="sr-only" for="inlineFormInputName">Name</label>
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
                                        <td>
                                            <a href="{{ route('validation.details', $record->registration_no) }}"
                                                target="_blank">
                                                <img src="/images/{{ $record->registration_no }}.png" alt=""
                                                    width="50">
                                            </a>
                                        </td>
                                        <td>
                                            <form style="display: inline !important;"
                                                action="{{ route('records.destroy', $record->id) }}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </form>
                                            <a href="{{ route('records.edit', $record->id) }}"
                                                class="btn btn-primary btn-sm">
                                                <i class="fas fa-edit"></i>
                                            </a>

                                            {{-- show --}}
                                            <a href="{{ route('records.show', $record->id) }}"
                                                class="btn btn-success btn-sm">
                                                <i class="fas fa-eye"></i>
                                            </a>
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
@endsection
