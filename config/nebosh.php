<?php

return [
    /*
    |--------------------------------------------------------------------------
    | NEBOSH Records Configuration
    |--------------------------------------------------------------------------
    |
    | This configuration file contains default values for NEBOSH certificate
    | and course records. You can modify these values to match your
    | organization's information.
    |
    */

    'course_name' => env('NEBOSH_COURSE_NAME', 'IOSH Managing Safely'),
    
    'institution_occupational' => env('NEBOSH_INSTITUTION_OCCUPATIONAL', 'Institution for Occupational Safety and Health'),
    
    'institution_name' => env('NEBOSH_INSTITUTION_NAME', 'Global World Safety Institute'),
    
    'approved_centre' => env('NEBOSH_APPROVED_CENTRE', '2216'),
    
    'chief_executive' => env('NEBOSH_CHIEF_EXECUTIVE', 'Vanessa Harwood-Whitcher'),
];
