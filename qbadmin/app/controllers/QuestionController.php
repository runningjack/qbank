<?php
/**
 * Created by PhpStorm.
 * User: Amedora
 * Date: 11/19/14
 * Time: 2:19 PM
 */

class QuestionController extends BaseController{
    public function showAddQuestion(){
        return View::make("question.add");
    }
    public function showQuestion(){
        return View::make("question.list");
    }
}