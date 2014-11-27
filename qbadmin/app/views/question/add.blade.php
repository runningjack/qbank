<style type="text/css">
    #draggable, #droppable {font-size: large; border: thin solid black; padding: 4px;
        width: 50%; text-align: center; background-color: lightgray; margin: 4px;}
    #droppable {padding: 20px; position: absolute; right: 5px; bottom: 5px}

    .tooltip-options a[rel="tooltip"]{
        width: 350px;
        /* If max-width does not work, try using width instead */
        width: 550px !important;
    }

    #editor {min-height:80px;}
    [id ^='option'] {min-height : 30px;  margin-bottom: 10px !important }
    .radio input:checked+i,.checkbox input:checked+i, .toggle input:checked+i{border-color:#3b9ff3}
    .radio{
        padding-left: 25px;
        line-height: 25px;
        color: #404040;
        cursor: pointer;
        font-size: 13px;
        width:30px !important;
        height:30px !important;
    }
    .btn-circle{
        height:25px !important;
        width: 25px !important;
        padding: 4px 0 !important;
    }


    .edt-focused{

        visibility: visible;

    }

    .edt-hidden{
        visibility: hidden;
    }
    
</style>
<?php //initilize the page
require_once ("inc/init.php");

//require UI configuration (nav, ribbon, etc.)
require_once ("inc/config.ui.php");

/*---------------- PHP Custom Scripts ---------

 YOU CAN SET CONFIGURATION VARIABLES HERE BEFORE IT GOES TO NAV, RIBBON, ETC.
 E.G. $page_title = "Custom Title" */

$page_title = "DataTables";

/* ---------------- END PHP Custom Scripts ------------- */

//include header
//you can add your custom css in $page_css array.
//Note: all css files are inside css/ folder
$page_css[] = "your_style.css";
include ("inc/header.php");

//include left panel (navigation)
//follow the tree in inc/config.ui.php
$page_nav["tables"]["sub"]["data"]["active"] = true;
include ("inc/nav.php");
?>
<!-- ==========================CONTENT STARTS HERE ========================== -->
<!-- MAIN PANEL -->
<div id="main" role="main">

<?php
//configure ribbon (breadcrumbs) array("name"=>"url"), leave url empty if no url
//$breadcrumbs["New Crumb"] => "http://url.com"
$breadcrumbs["Tables"] = "";
include("inc/ribbon.php");
?>

<!-- MAIN CONTENT -->
<div id="content">

<div class="row">
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-4">
        <h1 class="page-title txt-color-blueDark">
            <i class="fa fa-table fa-fw "></i>
            Table
					<span>>
						Data Tables
					</span>
        </h1>
    </div>
    <div class="col-xs-12 col-sm-5 col-md-5 col-lg-8">
        <ul id="sparks" class="">
            <li class="sparks-info">
                <h5> My Income <span class="txt-color-blue">$47,171</span></h5>
                <div class="sparkline txt-color-blue hidden-mobile hidden-md hidden-sm">
                    1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471
                </div>
            </li>
            <li class="sparks-info">
                <h5> Site Traffic <span class="txt-color-purple"><i class="fa fa-arrow-circle-up" data-rel="bootstrap-tooltip" title="Increased"></i>&nbsp;45%</span></h5>
                <div class="sparkline txt-color-purple hidden-mobile hidden-md hidden-sm">
                    110,150,300,130,400,240,220,310,220,300, 270, 210
                </div>
            </li>
            <li class="sparks-info">
                <h5> Site Orders <span class="txt-color-greenDark"><i class="fa fa-shopping-cart"></i>&nbsp;2447</span></h5>
                <div class="sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm">
                    110,150,300,130,400,240,220,310,220,300, 270, 210
                </div>
            </li>
        </ul>
    </div>
</div>

<!-- widget grid -->
<section id="widget-grid" class="">

<!-- row -->
<div class="row">

<!-- NEW WIDGET START -->
<article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-1" data-widget-editbutton="false">
    <header>
        <span class="widget-icon"> <i class="fa fa-table"></i> </span>
        <h2>Add Question </h2>
    </header>
    <div class="widget-body ">


        <div class="col-lg-12 center ">
            <div class="well">

                    <div class="popover-options">
                        <a href="javascript:void(0);" class="btn btn-default" rel="popover" data-placement="right" data-original-title="Popover Right" data-content="<?php echo   htmlentities('Use this template to create questions that requires only one question. <br />') ;?>"> <strong>Single Question</strong> </a>
                    </div>
                    <div>
                        <a href="javascript:void(0);" class="btn btn-default" rel="popover" data-placement="right" data-original-title="Popover Right" data-content="Use this template to create questions that requires only one question. <br />"><strong>Sectional Question</strong> </a>
                    </div>

                <p class="popover-options">
                    <a href="#" type="button" class="btn btn-warning" title="<h2>Title</h2>"
                       data-container="body" data-toggle="popover" data-content="
         <h4>Some content in Popover-options method</h4> <input type='text'>">
                        Popover
                    </a>
                </p>

                <p class="tooltip-options" >
                    This is a <a href="#" rel="tooltip" data-toggle="tooltip" data-original-title='

                        <div class="row">
                            <div class="bg-color-teal ">
                                <bold>Select this option if you want to create a single question type</bold>
                            </div>
                        </div>
  <hr>
                        <div class="row">
                            <div class="col-md-1">1</div><div class="col-md-10">Which of the following is true about a plant?</div>

                         </div>
                         <hr>
                        <div class="row">
                            <div class="col-md-1"><input type="radio"></div><div class="col-md-10">Plants have chlorophy</div>
                        </div>
                        <div class="row">
                            <div class="col-md-1"><input type="radio"></div><div class="col-md-10">Plants have chlorophy</div>
                        </div>
                        <div class="row">
                            <div class="col-md-1"><input type="radio"></div><div class="col-md-10">Plants have chlorophy</div>
                        </div>
                        <div class="row">
                            <div class="col-md-1"><input type="radio"></div><div class="col-md-10">Plants have chlorophy</div>
                        </div>


         ' data-placement="right">Tooltip on method options
                    </a>.
                </p>



                <p class="tooltip-options" >
                    This is a <a href="#" rel="tooltip" data-toggle="tooltip" data-original-title='

                        <div class="row">
                            <div class="bg-color-teal ">
                                <bold>Select this option if you want to create a single question type</bold>
                            </div>
                        </div>
                       <div class="col-md-12">
                        <p>
                            <h3>Introduction</h3>
Since the inception of the trend in the business world where IT (Information Technology) services has been employed to enhance the efficiency of businesses, Individuals, Government agencies, and other Corporate organisations doing business today wants to have a test of global image, and provide services in a global class manner. This only is achieved through and with the aid of IT services. In view of this, Ekenedilichukwu Express Limited beingone of the long standing functional, and reputable courier services providers in Nigeria desires to employ this global technology trend to enhance its services and operations to their customers and prospective customers.

                        </p>

                       </div>


                    <div class="row">
                            <div class="col-md-1">1</div><div class="col-md-10">Which of the following is true about a plant?</div>

                         </div>
                         <hr>
                        <div class="row">
                            <div class="col-md-1"><input type="radio"></div><div class="col-md-10">Plants have chlorophy</div>
                        </div>
                        <div class="row">
                            <div class="col-md-1"><input type="radio"></div><div class="col-md-10">Plants have chlorophy</div>
                        </div>
                        <div class="row">
                            <div class="col-md-1"><input type="radio"></div><div class="col-md-10">Plants have chlorophy</div>
                        </div>
                        <div class="row">
                            <div class="col-md-1"><input type="radio"></div><div class="col-md-10">Plants have chlorophy</div>
                        </div>


         ' data-placement="right">Tooltip on method options
                    </a>.
                </p>

            </div>
        </div>




    </div>
    </div>
</article>
<!-- WIDGET END -->

<article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-1" data-widget-editbutton="false">
        <header>
            <span class="widget-icon"> <i class="fa fa-table"></i> </span>
            <h2>Add Question </h2>
        </header>
        <div class="widget-body ">

        <div class="tab-content">
            <div class="tab-pane active" id="hr1">


                <div class="tabbable tabs-below">
                    <div class="tab-content padding-10">
                        <div class="tab-pane active" id="AA">
                            <div id="multiple-choice" class="anstypetemplate" question-type="multiple-choice">
                            <form class="smart-form" style="border:1px solid #c3c3c3">
                            <header>
                                <h1>Question</h1>
                            </header>

                            <fieldset>
                                <div class="row">
                                <section  class="col col-md-12">

                                    <div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editor">

                                        <div class="btn-group">
                                            <a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>
                                            <a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>
                                            <a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>
                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>
                                            <div class="dropdown-menu input-append">
                                                <input class="span2" placeholder="URL" type="text" data-edit="createLink">
                                                <button class="btn" type="button">Add</button>
                                            </div>
                                            <a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>

                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>
                                            <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">
                                        </div>

                                    </div>

                                    <div id="editor" class="well" style="padding: 5px !important">
                                        Go ahead..
                                    </div>

                                </section>
                                </div>
                            </fieldset>
                            <hr>
                            <fieldset>
                            <div class="row">
                                <section class="col col-md-1">

                                    <label class="radio">
                                        <input type="radio" name="rad-ans-opt" id="rad-ans-opt">
                                        <i></i>
                                    </label>


                                </section>
                                <section class="col col-md-9">
                                    <div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption2">

                                        <div class="btn-group">
                                            <a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>
                                            <a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>
                                            <a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>
                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>
                                            <div class="dropdown-menu input-append">
                                                <input class="span2" placeholder="URL" type="text" data-edit="createLink">
                                                <button class="btn" type="button">Add</button>
                                            </div>
                                            <a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>
                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>
                                            <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">
                                        </div>

                                    </div>

                                    <div id="editoroption2" class="well" style="padding: 5px !important">
                                        Go ahead..
                                    </div>
                                </section>
                                <section class="col col-md-2" style="text-align: left; ">
                                    <div class="padd-control" style="text-align: left !important; margin-top: 30px ">
                                        <span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>
                                        <span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>
                                    </div>
                                </section>
                            </div>

                            <div class="row">
                                <section class="col col-md-1">

                                    <label class="radio">
                                        <input type="radio" name="rad-ans-opt" id="rad-ans-opt">
                                        <i></i>
                                    </label>

                                </section>
                                <section class="col col-md-9">
                                    <div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption3">

                                        <div class="btn-group">
                                            <a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>
                                            <a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>
                                            <a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>
                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>
                                            <div class="dropdown-menu input-append">
                                                <input class="span2" placeholder="URL" type="text" data-edit="createLink">
                                                <button class="btn" type="button">Add</button>
                                            </div>
                                            <a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>

                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>
                                            <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">
                                        </div>

                                    </div>

                                    <div id="editoroption3" class="well" style="padding: 5px !important">
                                        Go ahead..
                                    </div>
                                </section>
                                <section class="col col-md-2" style="text-align: left; ">
                                    <div class="padd-control" style="text-align: left !important; margin-top: 30px ">
                                        <span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>
                                        <span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>
                                    </div>
                                </section>
                            </div>


                            <div class="row">
                                <section class="col col-md-1">

                                    <label class="radio">
                                        <input type="radio" name="rad-ans-opt" id="rad-ans-opt4">
                                        <i></i>
                                    </label>


                                </section>
                                <section class="col col-md-9">
                                    <div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption4">

                                        <div class="btn-group">
                                            <a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>
                                            <a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>
                                            <a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>
                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>
                                            <div class="dropdown-menu input-append">
                                                <input class="span2" placeholder="URL" type="text" data-edit="createLink">
                                                <button class="btn" type="button">Add</button>
                                            </div>
                                            <a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>

                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>
                                            <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">
                                        </div>

                                    </div>

                                    <div id="editoroption4" class="well" style="padding: 5px !important">
                                        Go ahead..
                                    </div>
                                </section>
                                <section class="col col-md-2" style="text-align: left; ">
                                    <div class="padd-control" style="text-align: left !important; margin-top: 30px ">
                                        <span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>
                                        <span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>
                                    </div>
                                </section>
                            </div>

                            <div class="row">
                                <section class="col col-md-1">

                                    <label class="radio">
                                        <input type="radio"  name="rad-ans-opt" id="rad-ans-opt5" style="border:1px solid #000000 !important">
                                        <i></i>
                                    </label>


                                </section>
                                <section class="col col-md-9">
                                    <div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption5">


                                        <div class="btn-group">
                                            <a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>
                                            <a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>
                                            <a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>
                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>
                                            <div class="dropdown-menu input-append">
                                                <input class="span2" placeholder="URL" type="text" data-edit="createLink">
                                                <button class="btn" type="button">Add</button>
                                            </div>
                                            <a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>

                                        </div>

                                        <div class="btn-group">
                                            <a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>
                                            <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">
                                        </div>

                                    </div>

                                    <div id="editoroption5" class="well " style="padding: 5px !important">
                                        Go ahead..
                                    </div>
                                </section>
                                <section class="col col-md-2" style="text-align: left; ">
                                    <div class="padd-control" style="text-align: left !important; margin-top: 30px ">
                                        <span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>
                                        <span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>
                                    </div>
                                </section>
                            </div>
                            </fieldset>
                            <footer>
                                <div class="row">

                                    <section class="col col-md-8">
                                        <label >
                                            <input type="radio" name="chkbox" id="chkbox">
                                            <i></i>Toggle to change answer option control</label>

                                    </section>

                                    <section class="col col-md-2">
                                        <a class="btn btn-success " href="javascript:void(0);"><i class="fa fa-check"></i> Save</a>
                                    </section>
                                </div>
                            </footer>
                            </form>
                            </div>


                            <!--This section is to store single line comm
                            ent-->
                            <div class="anstypetemplate" question-type="single-answer">
                            <form class="smart-form" style="border:1px solid #c3c3c3">
                            <header>
                                <h1>Question</h1>
                            </header>

                            <fieldset>
                                <div class="row">
                                    <section  class="col col-md-12">

                                        <div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editor">

                                            <div class="btn-group">
                                                <a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>
                                                <a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>
                                                <a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>
                                            </div>

                                            <div class="btn-group">
                                                <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>
                                                <div class="dropdown-menu input-append">
                                                    <input class="span2" placeholder="URL" type="text" data-edit="createLink">
                                                    <button class="btn" type="button">Add</button>
                                                </div>
                                                <a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>

                                            </div>

                                            <div class="btn-group">
                                                <a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>
                                                <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">
                                            </div>

                                        </div>

                                        <div id="editor" class="well" style="padding: 5px !important">
                                            Go ahead..
                                        </div>

                                    </section>
                                </div>
                            </fieldset>
                            <hr>
                            <fieldset>
                                <div class="row">

                                    <section class="col col-md-9">
                                        <div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption5">


                                            <div class="btn-group">
                                                <a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>
                                                <a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>
                                                <a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>
                                            </div>

                                            <div class="btn-group">
                                                <a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>
                                                <div class="dropdown-menu input-append">
                                                    <input class="span2" placeholder="URL" type="text" data-edit="createLink">
                                                    <button class="btn" type="button">Add</button>
                                                </div>
                                                <a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>

                                            </div>

                                            <div class="btn-group">
                                                <a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>
                                                <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">
                                            </div>

                                        </div>

                                        <div id="editoroption5" class="well " style="padding: 5px !important">
                                            Go ahead..
                                        </div>
                                    </section>
                                    <section class="col col-md-2" style="text-align: left; ">
                                        <div class="padd-control" style="text-align: left !important; margin-top: 30px ">
                                            <span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>
                                            <span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>
                                        </div>
                                    </section>
                                </div>
                            </fieldset>
                            <footer>
                                <div class="row">



                                    <section class="col col-md-2">
                                        <a class="btn btn-success " href="javascript:void(0);"><i class="fa fa-check"></i> Save</a>
                                    </section>
                                </div>
                            </footer>
                            </form>
                            </div>
                        </div>
                        <div class="tab-pane" id="BB">
                            <p>
                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
                            </p>
                        </div>
                        <div class="tab-pane" id="CC">
                            <p>
                                Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table.
                            </p>
                        </div>
                    </div>
                    <ul class="nav nav-tabs">
                        <li class="active">
                            <a data-toggle="tab" href="#AA">Question</a>
                        </li>
                        <li class="">
                            <a data-toggle="tab" href="#BB">Settings</a>
                        </li>
                        <li class="">
                            <a data-toggle="tab" href="#CC">Privacy</a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>






        </div>
    </div>
</article>



   <!-- <article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div id="draggable">
            <h3>Drag Me Here</h3>
        </div>

        <div id="droppable">
            <h3>Drag Me Here</h3>
        </div>
    </article>-->

</div>

<!-- end row -->

<!-- end row -->


</section>
<!-- end widget grid -->


</div>
<!-- END MAIN CONTENT -->

</div>
<!-- END MAIN PANEL -->
<!-- ==========================CONTENT ENDS HERE ========================== -->

<!-- PAGE FOOTER -->
<?php // include page footer
include ("inc/footer.php");
?>
<!-- END PAGE FOOTER -->

<?php //include required scripts
include ("inc/scripts.php");
?>


<script type="text/javascript">
    // DO NOT REMOVE : GLOBAL FUNCTIONS!
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
    $(function () { $(".popover-options a").popover({html : true });});
    $("[rel=tooltip]").tooltip({html:true});



    $.getScript('http://mindmup.github.io/bootstrap-wysiwyg/external/jquery.hotkeys.js',function(){
        $.getScript('http://mindmup.github.io/bootstrap-wysiwyg/bootstrap-wysiwyg.js',function(){

            $("div[id^='editor']").wysiwyg();
            $("div[id^='editor']").cleanHtml();

        });
    });

    $(document).ready(function() {

        $(".tab-content").on("click","div[id^='editor']",function(){

                var thisEdtControl  = $(this).siblings("div.btn-toolbar")
                var edtControls     = $("div.btn-toolbar");edtControls.addClass("edt-hidden").removeClass("edt-focused");thisEdtControl.addClass("edt-focused").removeClass("edt-hidden")
                $(this).css("border","2px solid #3276b1 !important;")
            //})
        })

        $(".tab-content").on("click",".add-option",function(e){

                var did = $("div[id^='editor']").size() + 1;
            //console.log()
            var c = $(this).parents('div.anstypetemplate')

            var rel = c.attr('question-type');
            console.log(rel)
            if(rel ==="multiple-choice"){
                $(this).parents("div.row").eq(0).after('<div class="row">'+
                '<section class="col col-md-1">'+

                    '<label class="radio">'+
                    '<input type="radio" name="rad-ans-opt" id="rad-ans-opt">'+
                    '<i></i>'+
                    '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                    '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editor'+did+'">'+

                        '<div class="btn-group">'+
                            '<a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>'+
                            '<a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>'+
                            '<a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>'+
                        '</div>'+

                        '<div class="btn-group">'+
                            '<a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>'+
                            '<div class="dropdown-menu input-append">'+
                                '<input class="span2" placeholder="URL" type="text" data-edit="createLink">'+
                                '<button class="btn" type="button">Add</button>'+
                            '</div>'+
                            '<a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>'+
                        '</div>'+

                        '<div class="btn-group">'+
                            '<a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>'+
                            '<input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">'+
                            '</div>'+
                    '</div>'+

                    '<div id="editor'+did+'" class="well" style="padding: 5px !important" contenteditable="true">'+
                        'Go ahead..'+
                    '</div>'+
                '</section>'+
                '<section class="col col-md-2" style="text-align: left; ">'+
                    '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                    '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span> '+
                    '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                '</div>'+
                '</section>'+
                '</div>')
            }else if(rel ==="single-answer"){
                $(this).parents("div.row").eq(0).after('<div class="row">'+
                    '<section  class="col col-md-9">'+
                        '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editor">'+
                            '<div class="btn-group">'+
                                '<a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>'+
                                '<a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>'+
                                '<a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>'+
                            '</div>'+
                            '<div class="btn-group">'+
                                '<a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>'+
                                '<div class="dropdown-menu input-append">'+
                                    '<input class="span2" placeholder="URL" type="text" data-edit="createLink">'+
                                    '<button class="btn" type="button">Add</button>'+
                                '</div>'+
                                '<a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>'+
                            '</div>'+
                            '<div class="btn-group">'+
                                '<a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>'+
                                '<input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">'+
                            '</div>'+
                        '</div>'+
                        '<div id="editor'+did+'" class="well" style="padding: 5px !important" contenteditable="true">'+
                            'Go ahead..'+
                        '</div>'+
                    '</section>'+
                    '<section class="col col-md-2" style="text-align: left; ">'+
                    '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                    '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span> '+
                    '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                    '</div>'+
                    '</section>'+
                    '</div>')

            }
            e.stopImmediatePropagation()

        })


        $(".tab-content").on("click",".remove-option", function(){
            $(this).parents("div.row").eq(0).detach()
        })

        $("#draggable").draggable();
              
            $("#droppable").droppable({
                drop: function() {
                    $("#draggable").text("Dropped")
                }
            });

        $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
            _title : function(title) {
                if (!this.options.title) {
                    title.html("&#160;");
                } else {
                    title.html(this.options.title);
                }
            }
        }));
        $('#dialog_link').click(function() {
            $('#dialog_simple').dialog('open');
            return false;

        });
        $('#dialog_simple').dialog({
            autoOpen : false,
            width : 600,
            resizable : false,
            modal : true,
            title : "<div class='widget-header'><h4><i class='fa fa-warning'></i> Add New Module</h4></div>",
            buttons : [{
                html : "<i class='fa fa-save'></i>&nbsp; Save",
                "class" : "btn btn-success",
                click : function() {
                    var request =  $.ajax({
                        url:"passwordchange",
                        type:"post",
                        data:{uid:$("#uid").val(),oldpass:$("#oldpassword").val(),newpass:$("#password").val(),repass:$("#repassword").val()},
                        dataType:"html"
                    })

                    request.done(function(data){
                        $("#msg").html(data)
                    })

                    request.fail(function(){
                        alert("Request failed: ")
                    })

                    //$(this).dialog("close");
                }
            }, {
                html : "<i class='fa fa-times'></i>&nbsp; Cancel",
                "class" : "btn btn-default",
                click : function() {
                    $(this).dialog("close");
                }
            }]
        });
    })

</script>
<!-- PAGE RELATED PLUGIN(S) -->
<script src="<?php echo ASSETS_URL; ?>/js/plugin/datatables/jquery.dataTables.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/datatables/dataTables.colVis.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/datatables/dataTables.tableTools.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/datatables/dataTables.bootstrap.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/datatable-responsive/datatables.responsive.min.js"></script>
<?php
//include footer
include ("inc/google-analytics.php");
?>