<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class VerificationRequestVerifier extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $recipientName;
    public $certificateId;
    public $certificateLogNumber;

    public function __construct($recipientName, $certificateLogNumber)
    {
        $this->recipientName = $recipientName;
        $this->certificateLogNumber = $certificateLogNumber;
    }

    public function build()
    {
        return $this->subject('Your verification request has been received')
                    ->markdown('emails.verification-request-verifier');
    }
}
