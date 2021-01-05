<?php

namespace Database\Seeders;

use App\Models\WebPage;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //  \App\Models\User::factory(10)->create();
        \App\Models\User::factory()->create([
             'name' => 'Safal Pokharel',
             'email' => 'safal@gmail.com',
             'password' => bcrypt('password')
        ]);

        WebPage::factory(10)->create();


    }
}
