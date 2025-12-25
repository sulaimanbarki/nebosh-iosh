<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CertificateRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'requester_name',
        'requester_email',
        'requester_organisation',
        'record_id',
        'authorisation_code',
        'uuid',
        'expiry_date',
        'status',
        'certificate_id',
    ];

    public function record()
    {
        return $this->belongsTo(Record::class);
    }

    public function certificate()
    {
        return $this->belongsTo(Certificate::class);
    }
}
