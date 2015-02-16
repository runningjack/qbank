<style type="text/css">
    #draggable, #droppable {font-size: large; border: thin solid black; padding: 4px;
        width: 50%; text-align: center; background-color: lightgray; margin: 4px;}
    #droppable {padding: 20px; position: absolute; right: 5px; bottom: 5px}

    .tooltip-options a[rel="tooltip"]{
        width: 350px;
        /* If max-width does not work, try using width instead */
        width: 550px !important;
    }

    #editor {min-height:50px;}
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

    .answertypetemplte{
        background-color: #fff;
    }
    .mydiv{
        background-color: #fffacd;
        border-radius: 10px;
        border: 2px dashed #c3c3c3;
        padding:1px;
        margin-top: 2px;

    }
    .smart-form{
        background-color: #fff;
    }
    .smart-form > fieldset:first-child{
        margin-top:0;
        padding-top: 0 !important;
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

<div class="row" id="menuc">
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

                                </select> <i></i> </label><!--<div class="form-group"><input type="text" class="form-control tagsinput" data-role="tagsinput"></div>-->
                        </section>
                        <div class="form-group">
                            <label>Type and enter to add tag</label>
                            <input type="text"  class="stag" value="science,biology,chemistry,physics" >
                    </div>
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
<script src="<?php echo ASSETS_URL; ?>/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/ckeditor/ckeditor.js"></script>

<script src="<?php echo ASSETS_URL; ?>/js/plugin/bootstrap-tags/bootstrap-tagsinput.min.js"></script>
<script src="<?php echo ASSETS_URL; ?>/js/plugin/selectize/selectize.min.js"></script>



<script type="text/javascript">
    // DO NOT REMOVE : GLOBAL FUNCTIONS!
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
    $(function () { $(".popover-options a").popover({html : true });});
    $("[rel=tooltip]").tooltip({html:true});
    $.getScript('<?php echo ASSETS_URL; ?>/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js',function(){
        $.getScript('<?php echo ASSETS_URL; ?>/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js',function(){

            $("div[id^='editor']").wysiwyg();
            $("div[id^='editor']").cleanHtml();

        });
    });




    $(document).ready(function() {
        var hoverdiv ="";
        CKEDITOR.replace( 'ckeditor', { height: '380px', startupFocus : true} );

        $("div#arena, div#arena2").on("click","div[id^='editor']",function(){
                var thisEdtControl  = $(this).siblings("div.btn-toolbar")
                var edtControls     = $("div.btn-toolbar");edtControls.addClass("edt-hidden").removeClass("edt-focused");thisEdtControl.addClass("edt-focused").removeClass("edt-hidden")
                $(this).css("border","2px solid #3276b1 !important;")
            $(this).selectize({
                plugins: ['remove_button'],
                delimiter: ',',
                persist: false,
                create: function(input) {
                    return {
                        value: input,
                        text: input
                    }
                }
            });

            //})
        })
        /*
        * Selectize functionality
        * allow user to add tags
        * to search question

         **/

        $("#arena, div#arena2").on("mouseenter",".stag",function(e){


        })

        /*
        * This allows user to select a question type
        * an a template is loaded on selecting
        * question category
        * */

        $("#seltor").on("change",function(){


            if($("#seltor").val()==1){
                $("div#arena").removeClass("edt-hidden").addClass("edt-focused")
                $("div#arena2").removeClass("edt-focused").addClass("edt-hidden");
                //if(undef)
               // var q = $("header h1:contains(Question)").size()+1
                $("div#arena").qbankTemp({
                    qid :1,
                    temp:"Subjective",
                    action:"insert",
                    pqid:"",
                    parentCont:"",
                    qtype:"",
                    qoptId :""
                });

            }else if($("#seltor").val()==2){
                $("div#arena").removeClass("edt-hidden").addClass("edt-focused")
                $("div#arena2").removeClass("edt-focused").addClass("edt-hidden");
                $("div#arena2 .optionarena").html("")
                $("div#arena").qbankTemp({
                    qid :"",
                    temp:"Multiple Choice",
                    action:"insert",
                    pqid:"",
                    parentCont:"",
                    qtype:"",
                    qoptId :""
                });

            }else if($("#seltor").val()==3){
               if( $("div#arena").hasClass("edt-focused")){
                    $("div#arena").removeClass("edt-focused");
                    $("div#arena").addClass("edt-hidden");$("div#arena").html("");}
                $("div#arena2").removeClass("edt-hidden").addClass("edt-focused");
                var q = $("header h1:contains(Question)").size()+1

               $("div#arena2 .optionarena").qbankTemp({
                   qid :q,
                   temp:"Section",
                   action:"insert",
                   pqid:"",
                   parentCont:"",
                   qtype:"",
                   qoptId :""
               });
            }

            $("div[id^='editor']").wysiwyg();
            $("div[id^='editor']").cleanHtml();


        })

        /*
        * Adding new child template in section type
        * of question
        * */
        $("div[id^='sectionBB']").on("mouseenter",".stag",function(){
            $(this).selectize({
                plugins: ['remove_button'],
                delimiter: ',',
                persist: false,
                create: function(input) {
                    return {
                        value: input,
                        text: input
                    }
                }
            });
        })

        $("div#arena2").on("click","#multichoice",function(e){
            var q = $("header h1:contains(Question)").size()
            var nq = q+1;
            $("div#arena2 .optionarena").qbankTemp({
                qid :nq,
                temp:"Multiple Choice",
                action:"append",
                pqid:"",
                parentCont:"",
                qtype:"",
                qoptId :""
            });
        })

        $("div#arena2").on("click","#singlechoice",function(e){
            var q = $("header h1:contains(Question)").size()
            var nq = q+1;
            $("div#arena2 .optionarena").qbankTemp({
                qid :nq,
                temp:"Subjective",
                action:"append",
                pqid:"",
                parentCont:"",
                qtype:"",
                qoptId :""
            });
        })


        /*
        * This section is used to add
        * hover effect on multiple
        * question on a paper or on sectional question
        * */

        $("div#arena2").on("mouseenter",".tab-main",function(e){

            $(this).each(function(e){
                //console.log($(this))
                hoverdiv = $("<div class='mydiv' ></div>")
                              if($(this).parents(".mydiv")>1){$(this).unwrap(hoverdiv)}
               // console.log(hoverdiv)
                $(this).wrap(hoverdiv)
                $(this).prepend("<a href='javascript:void(0);' class='btn btn-danger section-remove'>Remove</a>")
            })

        }).on("mouseleave",".tab-main",function(e){
             $(this).each(function(e){
                 //console.log($(this))

                 $("a.section-remove").each(function(){
                     $(this).remove();
                 })
                 //$(this).siblings("a").remove()
                 $(this).unwrap("<div class='mydiv'></div>")

             })

         })

        /*
        * this section is used to add
        * more input
        * */
        $("#arena, div#arena2").on("click",".add-option",function(e){
            var c = $(this).parents('div.anstypetemplate')
            var oids = c.children($("div[id^='editoroption']")).size()
            var q = $("header h1:contains(Question)").size()
            var qid = c.find($("span.qnum")).text()
            console.log(qid);
                var did = $("div[id^='editor']").size() + 1;
                var rel = c.attr('question-type');
                $(this).qbankTempFunction({qid :"",
                    qid :q,
                    temp:"",
                    pqid:"",
                    parentCont:c,
                    qtype:rel,
                    qoptId :oids,
                    removeOption :function(){}
                })
                e.stopImmediatePropagation()
        })



        /*
        * This section is used to remove a question
        * block
        * */

        $("div#arena, div#arena2").on("click",".section-remove",function(e){
            $(this).parents("div.mydiv").detach()
            var c = $(this).parents('div.anstypetemplate'),did = $("div[id^='editor']").size() + 1,q = $("header h1:contains(Question)").size()+ 1,x = 0
            /*
            * Renumbers the question after a section have been deleted
            * */
            $("header h1:contains(Question) span.qnum").each(function(){
                x=x+1;
                $(this).html(x);
            })

            e.preventDefault()
        })

        /*
        * This section is used to remove
        * option input row form the listing of
        * options
        * */
        $("#arena, div#arena2").on("click",".remove-option", function(e){
           var s =($("div.mydiv").size())



            if($("#seltor").val() == 3){ // if the template is used for section category
                //we want to do away with the
                //section remove button
                //$(this).parent("li:fir").unwrap("<div class='mydiv'></div>");
                $("a.section-remove").each(function(){
                    $(this).remove();
                })
                if($("div.mydiv").size() > 1){
                    $(this).parents("div.tab-main").unwrap("<div class='mydiv'></div>").eq(0)
                }



            // alert($("div.tab-main").size());
                $(this).parents("div.row").eq(0).detach()
            }else{
                $(this).parents("div.row").eq(0).detach()
            }

            /*
            * ensure that the wrapped div does not replicate
            * */

            e.stopImmediatePropagation()
            e.preventDefault();
        })

    })

</script>
<!-- PAGE RELATED PLUGIN(S) -->


<?php
//include footer
include ("inc/google-analytics.php");
?>