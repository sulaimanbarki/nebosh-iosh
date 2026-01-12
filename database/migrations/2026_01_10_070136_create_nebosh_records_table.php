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
        Schema::create('nebosh_records', function (Blueprint $table) {
            $table->id();
            $table->string('student_name'); // Changed from name to be specific
            $table->string('course_name')->default('IOSH Managing Safely');
            $table->string('institution_name')->default('Global World Safety Institute');
            $table->string('approved_centre'); // 2216
            $table->string('certificate_number');
            $table->date('issue_date');
            
            // Should we add signers? Maybe static in code or dynamic. 
            // Let's add them just in case they want to change them.
            $table->string('chief_executive')->nullable();
            $table->string('course_organiser')->nullable();
            
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
        Schema::dropIfExists('nebosh_records');
    }
};
