<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AuthorizeRequestStudent extends Mailable
{
    use Queueable, SerializesModels;

    public $learner_name, $requester_name, $requester_organisation, $certificate_log_number;
    
    public function __construct($learner_name, $requester_name, $requester_organisation, $certificate_log_number)
    {
        $this->learner_name = $learner_name;
        $this->requester_name = $requester_name;
        $this->requester_organisation = $requester_organisation;
        $this->certificate_log_number = $certificate_log_number;
    }

    public function build()
    {
        return $this->subject('Thank you for authorising our verification request')
                    ->markdown('emails.authorize-request-student');
    }

}
