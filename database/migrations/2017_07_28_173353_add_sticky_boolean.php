<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddStickyBoolean extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
	    Schema::table('todos', function (Blueprint $table) {
		    $table->boolean( 'sticky')->nullable()->default(null)->after('completed');
	    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
	    Schema::table('todos', function (Blueprint $table) {
		    $table->dropColumn( 'sticky');
	    });
    }
}
