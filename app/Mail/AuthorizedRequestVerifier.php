<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AuthorizedRequestVerifier extends Mailable
{
    use Queueable, SerializesModels;


    public $certificate_request, $record, $certificate;
    
    public function __construct($certificate_request, $record, $certificate)
    {
        $this->certificate_request = $certificate_request;
        $this->record = $record;
        $this->certificate = $certificate;
    }

    public function build()
    {
        return $this->subject('Your request to verify a NEBOSH certificate has been authorised')
                    ->markdown('emails.authorize-request-verfier');
    }

}
