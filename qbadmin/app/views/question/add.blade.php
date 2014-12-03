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
<style>
    .smart-form .btn{
        padding: 6px 12px;

    }
    .smart-form .btn-group{
        margin:0;
    }
</style>
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
<!--<section id="widget-grid" class="">-->

<!-- row -->
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

<article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-1" data-widget-editbutton="false">
        <header>
            <span class="widget-icon"> <i class="fa fa-table"></i> </span>
            <h2>Add Question </h2>
        </header>


        <div class="widget-body ">
        <div class="widget-body-toolbar">
            <div class="row">
                <div class="col-xs-9 col-sm-5 col-md-5 col-lg-5">
                    <div class="row" style="color:#333 !important">
                        <section class="col col-md-6">
                            <label class="select">
                                <select id="seltor" name="budget" class="control-form">
                                    <option value="0" selected="" disabled="">Select Question Type</option>
                                    <option value="1">Single Question Subjective </option>
                                    <option value="2">Single Question Multiple Choice</option>
                                    <option value="3">Sectional Question</option>

                                </select> <i></i> </label>
                        </section>
                    </div>

                </div>
            </div>
        </div>
        <div class="row">

            <div id="arena" class="edt-hidden">

            </div>
            <div id="arena2" class="edt-hidden" >
                <textarea name="ckeditor">
                    &lt;h1&gt;&lt;img alt="Saturn V carrying Apollo 11" class="right" src="<?php echo ASSETS_URL; ?>/img/demo/sample.jpg"/&gt; Apollo 11&lt;/h1&gt; &lt;p&gt;&lt;b&gt;Apollo 11&lt;/b&gt; was the spaceflight that landed the first humans, Americans &lt;a href="http://en.wikipedia.org/wiki/Neil_Armstrong" title="Neil Armstrong"&gt;Neil Armstrong&lt;/a&gt; and &lt;a href="http://en.wikipedia.org/wiki/Buzz_Aldrin" title="Buzz Aldrin"&gt;Buzz Aldrin&lt;/a&gt;, on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the first to step onto the lunar surface 6 hours later on July 21 at 02:56 UTC.&lt;/p&gt; &lt;p&gt;Armstrong spent about &lt;strike&gt;three and a half&lt;/strike&gt; two and a half hours outside the spacecraft, Aldrin slightly less; and together they collected 47.5 pounds (21.5&amp;nbsp;kg) of lunar material for return to Earth. A third member of the mission, &lt;a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)" title="Michael Collins (astronaut)"&gt;Michael Collins&lt;/a&gt;, piloted the &lt;a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module" title="Apollo Command/Service Module"&gt;command&lt;/a&gt; spacecraft alone in lunar orbit until Armstrong and Aldrin returned to it for the trip back to Earth.&lt;/p&gt; &lt;h2&gt;Broadcasting and &lt;em&gt;quotes&lt;/em&gt; &lt;a id="quotes" name="quotes"&gt;&lt;/a&gt;&lt;/h2&gt; &lt;p&gt;Broadcast on live TV to a world-wide audience, Armstrong stepped onto the lunar surface and described the event as:&lt;/p&gt; &lt;blockquote&gt;&lt;p&gt;One small step for [a] man, one giant leap for mankind.&lt;/p&gt;&lt;/blockquote&gt; &lt;p&gt;Apollo 11 effectively ended the &lt;a href="http://en.wikipedia.org/wiki/Space_Race" title="Space Race"&gt;Space Race&lt;/a&gt; and fulfilled a national goal proposed in 1961 by the late U.S. President &lt;a href="http://en.wikipedia.org/wiki/John_F._Kennedy" title="John F. Kennedy"&gt;John F. Kennedy&lt;/a&gt; in a speech before the United States Congress:&lt;/p&gt; &lt;blockquote&gt;&lt;p&gt;[...] before this decade is out, of landing a man on the Moon and returning him safely to the Earth.&lt;/p&gt;&lt;/blockquote&gt; &lt;h2&gt;Technical details &lt;a id="tech-details" name="tech-details"&gt;&lt;/a&gt;&lt;/h2&gt; &lt;table align="right" border="1" bordercolor="#ccc" cellpadding="5" cellspacing="0" style="border-collapse:collapse;margin:10px 0 10px 15px;"&gt; &lt;caption&gt;&lt;strong&gt;Mission crew&lt;/strong&gt;&lt;/caption&gt; &lt;thead&gt; &lt;tr&gt; &lt;th scope="col"&gt;Position&lt;/th&gt; &lt;th scope="col"&gt;Astronaut&lt;/th&gt; &lt;/tr&gt; &lt;/thead&gt; &lt;tbody&gt; &lt;tr&gt; &lt;td&gt;Commander&lt;/td&gt; &lt;td&gt;Neil A. Armstrong&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Command Module Pilot&lt;/td&gt; &lt;td&gt;Michael Collins&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt; &lt;td&gt;Lunar Module Pilot&lt;/td&gt; &lt;td&gt;Edwin &amp;quot;Buzz&amp;quot; E. Aldrin, Jr.&lt;/td&gt; &lt;/tr&gt; &lt;/tbody&gt; &lt;/table&gt; &lt;p&gt;Launched by a &lt;strong&gt;Saturn V&lt;/strong&gt; rocket from &lt;a href="http://en.wikipedia.org/wiki/Kennedy_Space_Center" title="Kennedy Space Center"&gt;Kennedy Space Center&lt;/a&gt; in Merritt Island, Florida on July 16, Apollo 11 was the fifth manned mission of &lt;a href="http://en.wikipedia.org/wiki/NASA" title="NASA"&gt;NASA&lt;/a&gt;&amp;#39;s Apollo program. The Apollo spacecraft had three parts:&lt;/p&gt; &lt;ol&gt; &lt;li&gt;&lt;strong&gt;Command Module&lt;/strong&gt; with a cabin for the three astronauts which was the only part which landed back on Earth&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Service Module&lt;/strong&gt; which supported the Command Module with propulsion, electrical power, oxygen and water&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Lunar Module&lt;/strong&gt; for landing on the Moon.&lt;/li&gt; &lt;/ol&gt; &lt;p&gt;After being sent to the Moon by the Saturn V&amp;#39;s upper stage, the astronauts separated the spacecraft from it and travelled for three days until they entered into lunar orbit. Armstrong and Aldrin then moved into the Lunar Module and landed in the &lt;a href="http://en.wikipedia.org/wiki/Mare_Tranquillitatis" title="Mare Tranquillitatis"&gt;Sea of Tranquility&lt;/a&gt;. They stayed a total of about 21 and a half hours on the lunar surface. After lifting off in the upper part of the Lunar Module and rejoining Collins in the Command Module, they returned to Earth and landed in the &lt;a href="http://en.wikipedia.org/wiki/Pacific_Ocean" title="Pacific Ocean"&gt;Pacific Ocean&lt;/a&gt; on July 24.&lt;/p&gt; &lt;hr/&gt; &lt;p style="text-align: right;"&gt;&lt;small&gt;Source: &lt;a href="http://en.wikipedia.org/wiki/Apollo_11"&gt;Wikipedia.org&lt;/a&gt;&lt;/small&gt;&lt;/p&gt;
                </textarea>

            <div class="optionarena">

            </div>
                <div class="row">

                    <div class="col-sm-4">

                        <div class="well well-sm bg-color-darken txt-color-white text-center">

                                <a class="btn btn-primary btn-lg" id="multichoice" href="javascript:void(0);">Multiple Chice Question</a>

                        </div>

                    </div>

                    <div class="col-sm-4 ">

                        <div class="well well-sm bg-color-teal txt-color-white text-center">
                            <a class="btn btn-primary btn-lg " id="singlechoice"  href="javascript:void(0);">Subjective Question</a>
                        </div>

                    </div>

                    <div class="col-sm-4 ">

                        <div class="well well-sm bg-color-pinkDark txt-color-white text-center">
                            <h5>

                            </h5>

                        </div>

                    </div>

                </div>
            </div>

                <br clear="all">
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
<!--<script src="<?php echo ASSETS_URL; ?>/js/plugin/summernote/summernote.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/markdown/markdown.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/markdown/to-markdown.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/markdown/bootstrap-markdown.min.js"></script>-->


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
        CKEDITOR.replace( 'ckeditor', { height: '380px', startupFocus : true} );
        /*$('.summernote').summernote({
            height : 180,
            focus : false,
            tabsize : 2
        });*/
        $("div#arena, div#arena2").on("click","div[id^='editor']",function(){

                var thisEdtControl  = $(this).siblings("div.btn-toolbar")
                var edtControls     = $("div.btn-toolbar");edtControls.addClass("edt-hidden").removeClass("edt-focused");thisEdtControl.addClass("edt-focused").removeClass("edt-hidden")
                $(this).css("border","2px solid #3276b1 !important;")
            //})
        })

        $("#seltor").on("change",function(){
            if($("#seltor").val()==1){
                $("div#arena").removeClass("edt-hidden").addClass("edt-focused")
                $("div#arena2").removeClass("edt-focused").addClass("edt-hidden");
                $("div#arena").html($.templateQB.singleTemp())
            }else if($("#seltor").val()==2){
               $("div#arena").removeClass("edt-hidden").addClass("edt-focused")
                $("div#arena2").removeClass("edt-focused").addClass("edt-hidden");
                $("div#arena").html($.templateQB.multipleTemp())
            }else if($("#seltor").val()==3){
               if( $("div#arena").hasClass("edt-focused")){
                    $("div#arena").removeClass("edt-focused");
                    $("div#arena").addClass("edt-hidden");$("div#arena").html("");}
                $("div#arena2").removeClass("edt-hidden").addClass("edt-focused");

               $("div#arena2 .optionarena").html($.templateQB.sectionTemp())
            }

        })

        $("div#arena2").on("click","#multichoice",function(e){
            $("div#arena2 .optionarena").append($.templateQB.sectionTemp())
        })
        $("div#arena2").on("click","#singlechoice",function(e){
            $("div#arena2 .optionarena").append($.templateQB.singleTemp())
        })

        $("#arena, div#arena2").on("click",".add-option",function(e){

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

            }//else if()
            e.stopImmediatePropagation()

        })

        //alert($.templateQB.singleqb());


        $("#arena, div#arena2").on("click",".remove-option", function(){
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
<script src="<?php echo ASSETS_URL; ?>/js/plugin/ckeditor/ckeditor.js"></script>
<?php
//include footer
include ("inc/google-analytics.php");
?>