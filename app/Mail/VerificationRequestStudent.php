<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class VerificationRequestStudent extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $learner_name;
    public $recipientName;
    public $requesterOrganisation;
    public $certificateLogNumber;
    public $expiry_date;
    public $authorisation_code;
    public $uuid;
    public $base_url;

    public function __construct($learner_name, $recipientName, $requesterOrganisation, $certificateLogNumber, $authorisation_code, $uuid, $expiry_date)
    {
        $this->learner_name = $learner_name;
        $this->recipientName = $recipientName;
        $this->requesterOrganisation = $requesterOrganisation;
        $this->certificateLogNumber = $certificateLogNumber;
        $this->authorisation_code = $authorisation_code;
        $this->uuid = $uuid;
        $this->expiry_date = $expiry_date;
        $this->base_url = env('APP_URL');
    }

    public function build()
    {
        return $this->subject('NEBOSH has received a request to verify your NEBOSH certificate')
                    ->markdown('emails.verification-request-student');
    }
}
