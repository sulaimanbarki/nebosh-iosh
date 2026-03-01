<?php

namespace App\Http\Controllers;

use App\Models\NeboshRecord;
use Illuminate\Http\Request;

class NeboshRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->input('search');

        $records = NeboshRecord::query()
            ->when($search, function ($query) use ($search) {
                $query->where(function ($q) use ($search) {
                    $q->where('student_name', 'like', "%{$search}%")
                        ->orWhere('course_name', 'like', "%{$search}%")
                        ->orWhere('certificate_number', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(10)
            ->appends(['search' => $search]);

        return view('admin.nebosh_records.index', compact('records', 'search'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $formDefaults = [
            'course_name' => config('nebosh.course_name', 'IOSH Managing Safely'),
            'institution_occupational' => config('nebosh.institution_occupational', 'Institution for Occupational Safety and Health'),
            'institution_name' => config('nebosh.institution_name', 'Global World Safety Institute'),
            'approved_centre' => config('nebosh.approved_centre', '2216'),
            'chief_executive' => config('nebosh.chief_executive', 'Vanessa Harwood-Whitcher'),
        ];
        
        return view('admin.nebosh_records.create', compact('formDefaults'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'student_name' => 'required|string|max:255',
            'course_name' => 'required|string|max:255',
            'institution_occupational' => 'nullable|string|max:255',
            'institution_name' => 'required|string|max:255',
            'approved_centre' => 'required|string|max:255',
            'certificate_number' => 'required|string|max:255',
            'issue_date' => 'required|date',
            // optional fields
            'chief_executive' => 'nullable|string|max:255',
            'course_organiser' => 'nullable|string|max:255',
        ]);

        NeboshRecord::create($request->all());

        return redirect()->route('nebosh_records.index')
            ->with('success', 'Record created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\NeboshRecord  $neboshRecord
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // This could be the certificate view
        $neboshRecord = NeboshRecord::findOrFail($id);
        return view('front.nebosh.certificate', compact('neboshRecord'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\NeboshRecord  $neboshRecord
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $neboshRecord = NeboshRecord::findOrFail($id);
        return view('admin.nebosh_records.edit', compact('neboshRecord'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\NeboshRecord  $neboshRecord
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $neboshRecord = NeboshRecord::findOrFail($id);
        
        $request->validate([
            'student_name' => 'required|string|max:255',
            'course_name' => 'required|string|max:255',
            'institution_occupational' => 'nullable|string|max:255',
            'institution_name' => 'required|string|max:255',
            'approved_centre' => 'required|string|max:255',
            'certificate_number' => 'required|string|max:255',
            'issue_date' => 'required|date',
            'chief_executive' => 'nullable|string|max:255',
            'course_organiser' => 'nullable|string|max:255',
        ]);

        $neboshRecord->update($request->all());

        return redirect()->route('nebosh_records.index')
            ->with('success', 'Record updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\NeboshRecord  $neboshRecord
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $neboshRecord = NeboshRecord::findOrFail($id);
        $neboshRecord->delete();

        return redirect()->route(route: 'nebosh_records.index')
            ->with('success', 'Record deleted successfully');
    }
}
