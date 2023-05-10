<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use App\Models\Record;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function dashboard()
    {
        $total_certificates = Certificate::all()->count();
        $total_records = Record::all()->count();

        return view('admin.index', compact('total_certificates', 'total_records'));
    }
}
