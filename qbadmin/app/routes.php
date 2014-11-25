<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('dashboard/home');
});

Route::get("dashboard/home",array("as"=>"home","uses"=>"HomeController@showHome"));
Route::get("role/list", array("as"=>"rolelisting","uses"=>"HomeController@showRole"));
Route::get("module/list", array("as"=>"modulelist","uses"=>"HomeController@showModule"));
Route::get("question/add", array("as"=>"addquestion","uses"=>"QuestionController@showAddQuestion"));
Route::get("question/list", array("as"=>"listquestion","uses"=>"QuestionController@showQuestion"));