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
    public function index()
    {
        $records = NeboshRecord::latest()->paginate(10);
        return view('admin.nebosh_records.index', compact('records'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.nebosh_records.create');
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

        return redirect()->route('nebosh_records.index')
            ->with('success', 'Record deleted successfully');
    }
}
