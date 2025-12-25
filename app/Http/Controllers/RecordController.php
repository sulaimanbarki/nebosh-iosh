<?php

namespace App\Http\Controllers;

use App\Models\Record;
use App\Models\Certificate;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Models\CertificateRequest;
use App\Mail\RejectedRequestStudent;
use Illuminate\Support\Facades\Mail;
use App\Mail\AuthorizeRequestStudent;
use App\Mail\RejectedRequestVerifier;
use App\Mail\AuthorizedRequestVerifier;
use App\Mail\VerificationRequestStudent;
use App\Mail\VerificationRequestVerifier;

class RecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request  $request)
    {
        // ten items per page
        if ($request->has('search')) {
            $records = Record::where('learner_name', 'like', "%{$request->search}%")
                ->paginate(10);
        } else {
            $records = Record::paginate(10);
        }

        return view('admin.records.index', [
            'records' => $records
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
            'certificate_log_number' => 'required',
            'date_of_birth' => 'required|date_format:d/m/Y',
            'email' => 'required'
        ]);

        $date_of_birth = Carbon::createFromFormat('d/m/Y', $request->date_of_birth);

        $registration_code = bin2hex(random_bytes(12));
        $registration_code = strtoupper($registration_code);

        // https://neboshazurewebsites.net/validation/details/F64051CC87698453D34ACB8
        $query_string = env('APP_URL') . '/Validation/Details/' . $registration_code;

        \QrCode::format('png')->size(200)->generate($query_string, public_path('images/' . $registration_code . '.png'));

        Record::create([
            'learner_name' => $request->learner_name,
            'learner_number' => $request->learner_number,
            'certificate_id' => $request->certificate_id,
            'qualification_grade' => $request->qualification_grade == 'on' ? 'CREDIT' : null,
            'sqa_reference' => $request->sqa_reference,
            'date_awarded' => $request->date_awarded,
            'certificate_log_number' => $request->certificate_log_number,
            'link' => $query_string,
            'registration_no' => $registration_code,
            'date_of_birth' => $date_of_birth,
            'email' => $request->email
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
            'certificate_log_number' => 'required',
            'date_of_birth' => 'required|date_format:d/m/Y',
            'email' => 'required'
        ]);

        $date_of_birth = Carbon::createFromFormat('d/m/Y', $request->date_of_birth);

        $record->update([
            'learner_name' => $request->learner_name,
            'learner_number' => $request->learner_number,
            'certificate_id' => $request->certificate_id,
            'qualification_grade' => $request->qualification_grade == 'on' ? 'CREDIT' : null,
            'sqa_reference' => $request->sqa_reference,
            'date_awarded' => $request->date_awarded,
            'certificate_log_number' => $request->certificate_log_number,
            'date_of_birth' => $date_of_birth,
            'email' => $request->email
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

        return redirect()->route('validation.verification.step1', $registration_no);

        $record = Record::with('certificate')->where('registration_no', $registration_no)->firstOrFail();
        return view('front.certificate', [
            'record' => $record
        ]);
    }

    // public function verification($registration_no)
    // {
    //     $record = Record::where('registration_no', $registration_no)->firstOrFail();

    //     return view('front.verification-step1', [
    //         'record' => $record
    //     ]);
    // }

    public function verification($registration_no)
    {
        $record = Record::where('registration_no', $registration_no)->firstOrFail();

        return view('front.verification-step1-duplicate', [
            'record' => $record
        ]);
    }

    public function ConfirmRequest($registration_no)
    {
        $certificateRequest = CertificateRequest::where('uuid', $registration_no)
            ->where('expiry_date', '>', now())
            ->firstOrFail();
        $certificate = $certificateRequest->certificate;
        $record = $certificateRequest->record;

        return view('front.verification-step2-duplicate', [
            'certificateRequest' => $certificateRequest,
            'certificate' => $certificate,
            'record' => $record
        ]);
    }

    public function changeStatus(Request $request, $id)
    
    // public function changeStatus($id)
    {
        $record = Record::findOrFail($id);
        $record->status = $record->status == 'active' ? 'inactive' : 'active';
        $record->save();
        
        return redirect()->route('records.index')->with('success', 'Record status updated successfully.');
    }

    public function checkCertExists(Request $request)
    {

        $registration_no = request('certificateKey');
        $record = Record::where('registration_no', $registration_no)->first();

        return response()->json([
            'failedCaptcha' => false,
            'exists' => true,
            'void' => false,
            'certificateKey' => $registration_no,
            'errorMessage' => null,
            'learnerName' => $record->learner_name,
            'certMasterLog' => $record->certificate_log_number,
            'certDate' => $record->date_awarded
        ], 200);
    }

    public function validationRequest(Request $request)
    {
        $registration_no = request('certificateKey');
        $record = Record::where('registration_no', $registration_no)->first();
        $randomString = strtoupper(Str::random(28)) . mt_rand(10000000, 99999999);
        $authorizationCode = strtoupper(Str::random(6)) . mt_rand(10, 99);
        $expires = now()->addDays(2);

        $certificate_request = CertificateRequest::create([
            'requester_name' => $request->requesterName,
            'requester_email' => $request->requesterEmail,
            'requester_organisation' => $request->requesterOrganisation,
            'record_id' => $record->id,
            'authorisation_code' => $authorizationCode,
            'uuid' => $randomString,
            'expiry_date' => $expires,
            'status' => 'pending',
            'certificate_id' => $record->certificate_id
        ]);


        Mail::to($request->requesterEmail)
            ->send(new VerificationRequestVerifier($request->requesterName, $record->certificate_log_number));

        Mail::to($record->email)
            ->send(new VerificationRequestStudent($record->learner_name, $request->requesterName, $request->requesterOrganisation, $record->certificate_log_number, $authorizationCode, $randomString, $expires));

        return response()->json([
            'failedCaptcha' => false,
            'certificateKey' => $registration_no,
            'exists' => true,
            'requestSentToOwner' => true,
            'certificateCancelled' => false,
            'errorMessage' => null
        ], 200);
    }

    public function checkValidation(Request $request)
    {
        $uuid = request('uid');
        $certificate_request = CertificateRequest::where('uuid', $uuid)->firstOrFail();

        return response()->json([
            'failedCaptcha' => false,
            'exists' => true,
            'expired' => $certificate_request->expiry_date < now(),
            'requesterName' => $certificate_request->requester_name,
            'requesterOrg' => $certificate_request->requester_organisation,
            'requesterEmail' => $certificate_request->requester_email,
            'dateRequested' => $certificate_request->created_at,
            'certificateName' => $certificate_request->record->learner_name,
            'certificateDate' => $certificate_request->record->date_awarded,
            'masterLogNo' => $certificate_request->record->certificate_log_number,
            'qualificationName' => $certificate_request->record->certificate->name
        ], 200);
    }

    public function completeRequest(Request $request)
    {
        $uuid = request('validationRequestId');
        $authorisation_code = request('authCode');
        $certificate_request = CertificateRequest::where('uuid', $uuid)
            ->where('expiry_date', '>', now())
            ->where('authorisation_code', $request->authCode)
            ->where('status', 'pending')
            ->first();

        if (!$certificate_request) {
            return response()->json([
                'failedCaptcha' => false,
                'exists' => true,
                'expired' => false,
                'requesterName' => null,
                'requesterOrg' => null,
                'requesterEmail' => null,
                'dateRequested' => null,
                'certificateName' => null,
                'certificateDate' => null,
                'masterLogNo' => null,
                'qualificationName' => null,
                'success' => false,
                'error' => 'Invalid authorization code',
                'body' => null
            ], 200);
        }

        $record = $certificate_request->record;

        $accepted = $request->accepted;

        if ($accepted == 'true') {
            $certificate_request->status = 'accepted';
            $certificate_request->save();

            Mail::to($record->email)
                ->send(new AuthorizeRequestStudent($record->learner_name, $certificate_request->requester_name, $certificate_request->requester_organisation, $record->certificate_log_number));

            Mail::to($certificate_request->requester_email)
                ->send(new AuthorizedRequestVerifier($certificate_request, $record, $certificate_request->certificate));
        } else {
            $certificate_request->status = 'rejected';
            $certificate_request->save();

            Mail::to($record->email)
                ->send(new RejectedRequestStudent($record, $certificate_request));

            Mail::to($certificate_request->requester_email)
                ->send(new RejectedRequestVerifier($record, $certificate_request));
        }

        return response()->json([
            'certificateKey' => $uuid,
            'authCodeAccepted' => $certificate_request->authorisation_code == $authorisation_code,
            'certificateCancelled' => false,
            'learnerName' => $certificate_request->record->learner_name,
            'learnerNumber' => $certificate_request->record->learner_number,
            'qualificationName' => $certificate_request->record->certificate->name,
            'dateAwarded' => $certificate_request->record->date_awarded,
            'certificateLogNumber' => $certificate_request->record->certificate_log_number,
            'success' => true,
            'error' => null,
            'body' => 'Confirmation requested send successfully!'
        ], 200);
    }








    // api
    public function apiDetails(Request $request, $registration_no)
    {

        $record = Record::where('registration_no', $registration_no)->first();

        return response()->json([
            'student_name' => $record->learner_name,
            'certificate_log_number' => $record->certificate_log_number,
            'date_awarded' => $record->date_awarded
        ], 200);
    }
}
