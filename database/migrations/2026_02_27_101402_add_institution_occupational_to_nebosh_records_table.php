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
            Schema::table('nebosh_records', function (Blueprint $table) {
                $table->string('institution_occupational')->nullable()->after('course_name');
            });
        }

        /**
         * Reverse the migrations.
         *
         * @return void
         */
        public function down()
        {
            Schema::table('nebosh_records', function (Blueprint $table) {
                $table->dropColumn('institution_occupational');
            });
        }
    };
