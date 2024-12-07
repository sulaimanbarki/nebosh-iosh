<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Record extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'learner_name',
        'learner_number',
        'certificate_id',
        'sqa_reference',
        'date_awarded',
        'certificate_log_number',
        'link',
        'registration_no',
        'qualification_grade',
        'email'
    ];

    protected $dates = [
        'deleted_at'
    ];

    public function certificate()
    {
        return $this->belongsTo(Certificate::class);
    }
}
