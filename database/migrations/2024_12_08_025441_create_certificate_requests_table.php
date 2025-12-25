<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('certificate_requests', function (Blueprint $table) {
            $table->id();
            $table->string('requester_name')->nullable();
            $table->string('requester_email')->nullable();
            $table->string('requester_organisation')->nullable();
            $table->unsignedBigInteger('record_id')->nullable();
            $table->string('authorisation_code')->nullable();
            $table->string('uuid')->nullable();
            $table->date('expiry_date')->nullable();
            $table->string('status')->default('pending');
            $table->string('certificate_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('certificate_requests');
    }
};
