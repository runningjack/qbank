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


    <!-- Widget ID (each widget will need unique ID)-->
    <div class="jarviswidget jarviswidget-color-blueDark" id="wid-id-1" data-widget-editbutton="false">
    <!-- widget options:
						usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">

						data-widget-colorbutton="false"
						data-widget-editbutton="false"
						data-widget-togglebutton="false"
						data-widget-deletebutton="false"
						data-widget-fullscreenbutton="false"
						data-widget-custombutton="false"
						data-widget-collapsed="true"
						data-widget-sortable="false"

						-->
    <header>
        <span class="widget-icon"> <i class="fa fa-table"></i> </span>
        <h2>Column Filters </h2>

    </header>

    <!-- widget div-->
    <div>

    <!-- widget edit box -->
    <div class="jarviswidget-editbox">
        <!-- This area used as dropdown edit box -->

    </div>
    <!-- end widget edit box -->

    <!-- widget content -->
    <div class="widget-body no-padding">
    <div class="text-right"><a href="#" id="dialog_link" class="btn btn-labeled btn-success"><span class="btn-label"><i class="glyphicon glyphicon-plus"></i> Add New </a></div>
    <div id="dialog_simple" title="Dialog Simple Title">
        <div id="msg"></div>
        <p>
        <form>

            <div class="row">
                <div class="col-md-3">
                    <h5>Module Name</h5>
                </div>
                <div class="col-md-9">
                    <section >

                        <input type="text" class="col-md-12" id="role_name" name="role_name"  required="required" value="">

                    </section>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <h5>Accornym</h5>
                </div>
                <div class="col-md-9">
                    <section >

                        <input type="text" class="col-md-12" id="role_name" name="role_name"  required="required" value="">

                    </section>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <h5>Link Url</h5>
                </div>
                <div class="col-md-9">
                    <section >

                        <input type="text" class="col-md-12" id="role_name" name="role_name"  required="required" value="">

                    </section>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <h5>Icon</h5>
                </div>
                <div class="col-md-9">
                    <section>
                        <input type="file" class="btn btn-default" id="exampleInputFile1">
                        <!--<div class="input input-file">
                            <span class="button"><input type="file" id="file" name="file" onchange="this.parentNode.nextSibling.value = this.value">Browse</span><input type="text" placeholder="Include some files" readonly="">
                        </div>-->
                    </section>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3">
                    <h5>Description</h5>
                </div>
                <div class="col-md-9">
                    <section >

                        <textarea class="form-control" placeholder="Textarea" rows="4"></textarea>

                    </section>
                </div>
            </div>

        </form>
        </p>
    </div>
    <table id="datatable_fixed_column" class="table table-striped table-bordered" width="100%">

    <thead>
    <tr>
        <th style="width:17%">

        </th>
        <th class="hasinput" style="width:17%">
            <input type="text" class="form-control" placeholder="Filter Name" />
        </th>

        <th>

        </th>
        <th class="hasinput" style="width:17%">
            <input type="text" class="form-control" placeholder="Filter Date Created" />
        </th>
        <th class="hasinput icon-addon">
            <input id="dateselect_filter" type="text" placeholder="Filter Date Modified" class="form-control datepicker" data-dateformat="yy/mm/dd">
            <label for="dateselect_filter" class="glyphicon glyphicon-calendar no-margin padding-top-15" rel="tooltip" title="" data-original-title="Filter Date"></label>
        </th>
        <th class="hasinput" style="width:16%">
            <input type="text" class="form-control" placeholder="Filter Salary" />
        </th>
    </tr>
    <tr>
        <th data-class="expand">Icon</th>
        <th data-hide="phone">Name</th>
        <th data-hide="phone">Description</th>
        <th data-hide="phone">link</th>
        <th data-hide="phone,tablet">Date Created</th>
        <th data-hide="phone,tablet">Date Modified</th>

    </tr>
    </thead>

    <tbody>
    <tr>
        <td>Tiger Nixon</td>
        <td>System Architect</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2014/12/12</td>
        <td>$320,800</td>
    </tr>
    <tr>
        <td>Garrett Winters</td>
        <td>Accountant</td>
        <td>System Architect</td>
        <td>2011/07/25</td>
        <td>2014/12/12</td>
        <td>$170,750</td>
    </tr>
    <tr>
        <td>Ashton Cox</td>
        <td>Junior Technical Author</td>
        <td>System Architect</td>
        <td>2014/01/12</td>
        <td>2014/12/12</td>
        <td>$86,000</td>
    </tr>
    <tr>
        <td>Cedric Kelly</td>
        <td>Senior Javascript Developer</td>
        <td>System Architect</td>
        <td>2012/03/29</td>
        <td>2014/12/12</td>
        <td>$433,060</td>
    </tr>
    <tr>
        <td>Airi Satou</td>
        <td>Accountant</td>
        <td>System Architect</td>
        <td>2008/11/28</td>
        <td>2014/12/12</td>
        <td>$162,700</td>
    </tr>
    <tr>
        <td>Brielle Williamson</td>
        <td>Integration Specialist</td>
        <td>System Architect</td>
        <td>2012/12/02</td>
        <td>2014/12/12</td>
        <td>$372,000</td>
    </tr>
    <tr>
        <td>Herrod Chandler</td>
        <td>Sales Assistant</td>
        <td>System Architect</td>
        <td>2012/08/06</td>
        <td>2014/12/12</td>
        <td>$137,500</td>
    </tr>
    <tr>
        <td>Rhona Davidson</td>
        <td>Integration Specialist</td>
        <td>System Architect</td>
        <td>2010/10/14</td>
        <td>2014/12/12</td>
        <td>$327,900</td>
    </tr>
    <tr>
        <td>Colleen Hurst</td>
        <td>Javascript Developer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2014/09/15</td>
        <td>$205,500</td>
    </tr>
    <tr>
        <td>Sonya Frost</td>
        <td>Software Engineer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2008/12/13</td>
        <td>$103,600</td>
    </tr>
    <tr>
        <td>Jena Gaines</td>
        <td>Office Manager</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2008/12/19</td>
        <td>$90,560</td>
    </tr>
    <tr>
        <td>Quinn Flynn</td>
        <td>Support Lead</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2013/03/03</td>
        <td>$342,000</td>
    </tr>
    <tr>
        <td>Charde Marshall</td>
        <td>Regional Director</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2008/10/16</td>
        <td>$470,600</td>
    </tr>
    <tr>
        <td>Haley Kennedy</td>
        <td>Senior Marketing Designer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2012/12/18</td>
        <td>$313,500</td>
    </tr>
    <tr>
        <td>Tatyana Fitzpatrick</td>
        <td>Regional Director</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2010/03/17</td>
        <td>$385,750</td>
    </tr>
    <tr>
        <td>Michael Silva</td>
        <td>Marketing Designer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2012/11/27</td>
        <td>$198,500</td>
    </tr>
    <tr>
        <td>Paul Byrd</td>
        <td>Chief Financial Officer (CFO)</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2010/06/09</td>
        <td>$725,000</td>
    </tr>
    <tr>
        <td>Gloria Little</td>
        <td>Systems Administrator</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2014/04/10</td>
        <td>$237,500</td>
    </tr>
    <tr>
        <td>Bradley Greer</td>
        <td>Software Engineer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2012/10/13</td>
        <td>$132,000</td>
    </tr>
    <tr>
        <td>Dai Rios</td>
        <td>Personnel Lead</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2012/09/26</td>
        <td>$217,500</td>
    </tr>
    <tr>
        <td>Jenette Caldwell</td>
        <td>Development Lead</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/09/03</td>
        <td>$345,000</td>
    </tr>
    <tr>
        <td>Yuri Berry</td>
        <td>Chief Marketing Officer (CMO)</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2014/06/25</td>
        <td>$675,000</td>
    </tr>
    <tr>
        <td>Caesar Vance</td>
        <td>Pre-Sales Support</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/12/12</td>
        <td>$106,450</td>
    </tr>
    <tr>
        <td>Doris Wilder</td>
        <td>Sales Assistant</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2010/09/20</td>
        <td>$85,600</td>
    </tr>
    <tr>
        <td>Angelica Ramos</td>
        <td>Chief Executive Officer (CEO)</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2014/10/09</td>
        <td>$1,200,000</td>
    </tr>
    <tr>
        <td>Gavin Joyce</td>
        <td>Developer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2010/12/22</td>
        <td>$92,575</td>
    </tr>
    <tr>
        <td>Jennifer Chang</td>
        <td>Regional Director</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2010/11/14</td>
        <td>$357,650</td>
    </tr>
    <tr>
        <td>Brenden Wagner</td>
        <td>Software Engineer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/06/07</td>
        <td>$206,850</td>
    </tr>
    <tr>
        <td>Fiona Green</td>
        <td>Chief Operating Officer (COO)</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2010/03/11</td>
        <td>$850,000</td>
    </tr>
    <tr>
        <td>Shou Itou</td>
        <td>Regional Marketing</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/08/14</td>
        <td>$163,000</td>
    </tr>
    <tr>
        <td>Michelle House</td>
        <td>Integration Specialist</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/06/02</td>
        <td>$95,400</td>
    </tr>
    <tr>
        <td>Suki Burks</td>
        <td>Developer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>

        <td>2014/10/22</td>
        <td>$114,500</td>
    </tr>
    <tr>
        <td>Prescott Bartlett</td>
        <td>Technical Author</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/05/07</td>
        <td>$145,000</td>
    </tr>
    <tr>
        <td>Gavin Cortez</td>
        <td>Team Leader</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2008/10/26</td>
        <td>$235,500</td>
    </tr>
    <tr>
        <td>Martena Mccray</td>
        <td>Post-Sales support</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/03/09</td>
        <td>$324,050</td>
    </tr>
    <tr>
        <td>Unity Butler</td>
        <td>Marketing Designer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2014/12/09</td>
        <td>$85,675</td>
    </tr>
    <tr>
        <td>Howard Hatfield</td>
        <td>Office Manager</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2008/12/16</td>
        <td>$164,500</td>
    </tr>
    <tr>
        <td>Hope Fuentes</td>
        <td>Secretary</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2010/02/12</td>
        <td>$109,850</td>
    </tr>
    <tr>
        <td>Vivian Harrell</td>
        <td>Financial Controller</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2014/02/14</td>
        <td>$452,500</td>
    </tr>
    <tr>
        <td>Timothy Mooney</td>
        <td>Office Manager</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2008/12/11</td>
        <td>$136,200</td>
    </tr>
    <tr>
        <td>Jackson Bradshaw</td>
        <td>Director</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2008/09/26</td>
        <td>$645,750</td>
    </tr>
    <tr>
        <td>Olivia Liang</td>
        <td>Support Engineer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/02/03</td>
        <td>$234,500</td>
    </tr>
    <tr>
        <td>Bruno Nash</td>
        <td>Software Engineer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/05/03</td>
        <td>$163,500</td>
    </tr>
    <tr>
        <td>Sakura Yamamoto</td>
        <td>Support Engineer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2014/08/19</td>
        <td>$139,575</td>
    </tr>
    <tr>
        <td>Thor Walton</td>
        <td>Developer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2013/08/11</td>
        <td>$98,540</td>
    </tr>
    <tr>
        <td>Finn Camacho</td>
        <td>Support Engineer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2014/07/07</td>
        <td>$87,500</td>
    </tr>
    <tr>
        <td>Serge Baldwin</td>
        <td>Data Coordinator</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2012/04/09</td>
        <td>$138,575</td>
    </tr>
    <tr>
        <td>Zenaida Frank</td>
        <td>Software Engineer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2010/01/04</td>
        <td>$125,250</td>
    </tr>
    <tr>
        <td>Zorita Serrano</td>
        <td>Software Engineer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2012/06/01</td>
        <td>$115,000</td>
    </tr>
    <tr>
        <td>Jennifer Acosta</td>
        <td>Junior Javascript Developer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2013/02/01</td>
        <td>$75,650</td>
    </tr>
    <tr>
        <td>Cara Stevens</td>
        <td>Sales Assistant</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/12/06</td>
        <td>$145,600</td>
    </tr>
    <tr>
        <td>Hermione Butler</td>
        <td>Regional Director</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/03/21</td>
        <td>$356,250</td>
    </tr>
    <tr>
        <td>Lael Greer</td>
        <td>Systems Administrator</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2014/02/27</td>
        <td>$103,500</td>
    </tr>
    <tr>
        <td>Jonas Alexander</td>
        <td>Developer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2010/07/14</td>
        <td>$86,500</td>
    </tr>
    <tr>
        <td>Shad Decker</td>
        <td>Regional Director</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2008/11/13</td>
        <td>$183,000</td>
    </tr>
    <tr>
        <td>Michael Bruce</td>
        <td>Javascript Developer</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/06/27</td>
        <td>$183,000</td>
    </tr>
    <tr>
        <td>Donna Snider</td>
        <td>Customer Support</td>
        <td>System Architect</td>
        <td>2014/12/12</td>
        <td>2011/01/25</td>
        <td>$112,000</td>
    </tr>
    </tbody>

    </table>

    </div>
    <!-- end widget content -->

    </div>
    <!-- end widget div -->

    </div>
    <!-- end widget -->


    </article>
    <!-- WIDGET END -->

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

        $(document).ready(function() {

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

            /* // DOM Position key index //

             l - Length changing (dropdown)
             f - Filtering input (search)
             t - The Table! (datatable)
             i - Information (records)
             p - Pagination (paging)
             r - pRocessing
             < and > - div elements
             <"#id" and > - div with an id
             <"class" and > - div with a class
             <"#id.class" and > - div with an id and class

             Also see: http://legacy.datatables.net/usage/features
             */

            /* BASIC ;*/
            var responsiveHelper_dt_basic = undefined;
            var responsiveHelper_datatable_fixed_column = undefined;
            var responsiveHelper_datatable_col_reorder = undefined;
            var responsiveHelper_datatable_tabletools = undefined;

            var breakpointDefinition = {
                tablet : 1024,
                phone : 480
            };



            /* END BASIC */

            /* COLUMN FILTER  */
            var otable = $('#datatable_fixed_column').DataTable({
                //"bFilter": false,
                //"bInfo": false,
                //"bLengthChange": false
                //"bAutoWidth": false,
                //"bPaginate": false,
                //"bStateSave": true // saves sort state using localStorage
                "sDom": "<'dt-toolbar'<'col-xs-12 col-sm-6 hidden-xs'f><'col-sm-6 col-xs-12 hidden-xs'<'toolbar'>>r>"+
                    "t"+
                    "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",

                "autoWidth" : true,
                "preDrawCallback" : function() {
                    // Initialize the responsive datatables helper once.
                    if (!responsiveHelper_datatable_fixed_column) {
                        responsiveHelper_datatable_fixed_column = new ResponsiveDatatablesHelper($('#datatable_fixed_column'), breakpointDefinition);
                    }
                },
                "rowCallback" : function(nRow) {
                    responsiveHelper_datatable_fixed_column.createExpandIcon(nRow);
                },
                "drawCallback" : function(oSettings) {
                    responsiveHelper_datatable_fixed_column.respond();
                }

            });

            // custom toolbar
            $("div.toolbar").html('<div class="text-right"></div>');

            // Apply the filter
            $("#datatable_fixed_column thead th input[type=text]").on( 'keyup change', function () {

                otable
                    .column( $(this).parent().index()+':visible' )
                    .search( this.value )
                    .draw();

            } );
            /* END COLUMN FILTER */

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