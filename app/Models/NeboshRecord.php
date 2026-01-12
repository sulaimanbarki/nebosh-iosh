<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NeboshRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_name',
        'course_name',
        'institution_name',
        'approved_centre',
        'certificate_number',
        'issue_date',
        'chief_executive',
        'course_organiser'
    ];
}
