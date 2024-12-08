<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RejectedRequestVerifier extends Mailable
{
    use Queueable, SerializesModels;

    public $record, $record_requester;
    
    public function __construct($record, $record_requester)
    {
        $this->record = $record;
        $this->record_requester = $record_requester;
    }

    public function build()
    {
        return $this->subject('Your request to verify a NEBOSH certificate has rejected')
                    ->markdown('emails.rejected-request-verifier');
    }

}
