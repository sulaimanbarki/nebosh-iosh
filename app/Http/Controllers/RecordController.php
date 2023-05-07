<?php

namespace App\Http\Controllers;

use App\Models\Record;
use App\Models\Certificate;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.records.index', [
            'records' => Record::paginate(10)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.records.create', [
            'certificates' => Certificate::all(),
        ]);
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
            'learner_name' => 'required',
            'learner_number' => 'required',
            'certificate_id' => 'required',
            'sqa_reference' => 'required',
            'date_awarded' => 'required',
            'certificate_log_number' => 'required'
        ]);

        $registration_code = bin2hex(random_bytes(12));
        $registration_code = strtoupper($registration_code);

        // https://neboshazurewebsites.net/Validation/Details/F64051CC87698453D34ACB8
        $query_string = 'https://neboshazurrewebsites.net/Validation/Details/' . $registration_code;

        \QrCode::format('png')->size(200)->generate($query_string, public_path('images/' . $registration_code . '.png'));

        Record::create([
            'learner_name' => $request->learner_name,
            'learner_number' => $request->learner_number,
            'certificate_id' => $request->certificate_id,
            'sqa_reference' => $request->sqa_reference,
            'date_awarded' => $request->date_awarded,
            'certificate_log_number' => $request->certificate_log_number,
            'link' => $query_string,
            'registration_no' => $registration_code
        ]);

        return redirect()->route('records.index')->with('success', 'Record created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function show(Record $record)
    {
        return view('admin.records.show', [
            'record' => $record
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function edit(Record $record)
    {
        return view('admin.records.edit', [
            'record' => $record,
            'certificates' => Certificate::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Record $record)
    {

        $request->validate([
            'learner_name' => 'required',
            'learner_number' => 'required',
            'certificate_id' => 'required',
            'sqa_reference' => 'required',
            'date_awarded' => 'required',
            'certificate_log_number' => 'required'
        ]);

        $record->update([
            'learner_name' => $request->learner_name,
            'learner_number' => $request->learner_number,
            'certificate_id' => $request->certificate_id,
            'sqa_reference' => $request->sqa_reference,
            'date_awarded' => $request->date_awarded,
            'certificate_log_number' => $request->certificate_log_number
        ]);

        return redirect()->route('records.index')->with('success', 'Record updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Record  $record
     * @return \Illuminate\Http\Response
     */
    public function destroy(Record $record)
    {
        // soft delete the record
        $record->delete();
        return redirect()->route('records.index')->with('success', 'Record deleted successfully.');
    }


    public function details($registration_no)
    {
        $record = Record::where('registration_no', $registration_no)->firstOrFail();
        return view('front.certificate', [
            'record' => $record
        ]);
    }
}
