/**0041097427
 * Created by Amedora on 11/28/14.
 */
;(function($){
    var defaults ={
        qid :1,                        //Question it
        temp:"",                //determine what template to load for question category
        action:"",              //determines if template is to be inserted or appended to element
        pqid:"",                //queesstion parent id
        parentCont:"",
        qtype:"",
        qoptId :"",
        stmp: $.now()
    }

    function qbankTemp(element,options){
        this.config = $.extend({},defaults,options);
        this.element = element;
        this.init();
    }

    qbankTemp.prototype.init = function(){
        if(this.config.temp =="Subjective"){
            if(this.config.action=="insert"){
                    this.element.html('<div class="tab-content tab-main">' +
                        '<div class="tab-pane active" id="hr1">' +
                        '   <div class="tabbable tabs-below">' +
                        '       <div class="tab-content padding-10">' +
                        '           <div class="tab-pane active" id="multipleAA'+this.config.qid+'_'+this.config.stmp+'">' +
                        '<div class="anstypetemplate" question-type="single-answer" id="'+this.config.qid+'_'+this.config.stmp+'">'+
                        '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                        '<header>'+
                        '<h1>Question <span class="qnum">'+this.config.qid+'</span></h1>'+
                        '</header>'+
                        '<fieldset>'+
                        '<div class="row">'+
                        '<section  class="col col-md-12">'+
                        '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editor_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                        '<div id="editor_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                        '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                        '$(\'#editor_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                        '$(\'#editor_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                        '});'+
                        '});">'+
                        'Go ahead..'+
                        '</div>'+
                        '</section>'+
                        '</div>'+
                        '</fieldset>'+
                        '<hr>'+
                        '<fieldset>'+
                        '<div class="row" id="names">'+
                        '<section class="col col-md-9">'+
                        '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                        '<div id="editoroption_1_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                        '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                        '$(\'#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                        '$(\'#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                        '});'+
                        '});">'+
                        'Go ahead..'+
                        '</div>'+
                        '</section>'+
                        '<section class="col col-md-2" style="text-align: left; ">'+
                        '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                        '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                        '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                        '</div>'+
                        '</section>'+
                        '</div>'+
                        '</fieldset>'+
                        '<footer>'+
                        '<div class="row">'+
                        '<section class="col col-md-2">'+
                        '<a class="btn btn-success qsave " href="javascript:void(0);"><i class="fa fa-check"></i> Save</a>'+
                        '</section>'+
                        '</div>'+
                        '</footer>'+
                        '</form>'+
                        '</div>' +
                        '</div>'+
                        '<div class="tab-pane" id="multipleBB'+this.config.qid+'_'+this.config.stmp+'">'+
        
                        '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                        '<section>' +
                        '<h1>Question Setting</h1><fieldset>'+
                        '<div class="row"><section class="col col-md-12">' +
                        '<div class="col col-md-4">Question Level</div><div class="col col-md-5">	<label class="select"><select name="qlevel"><option value="Kindergarten">Kindergarten</option><option value="Kindergarten">Kindergarten</option></select><i></i>	</label></div><div class="col col-3">' +
                        '</div>' +
                        '</section>' +
                        '</div>'+
                        '<div class="row"><section class="col col-md-12">' +
                        '<div class="col col-md-4">Level Rating</div><div class="col col-md-5">	<label class="select"><select name="rlevel"><option value="Basic">Basic</option><option value="Intermediate">Intermediate</option><option value="Advance">Advance</option></select>	</label></div><div class="col col-md-3">	' +
                        '</div>' +
                        '</section>'+
                        '</div>' +
                        '<div class="row"> <section class="col col-md-12">' +
                        '<div class="col col-md-4">Add Search  Tags</div>' +
                        '<div class="col col-md-5">	' +
                        '<label class="input">'+
                        '<input type="text"  class="stag" value="science,biology,chemistry,physics" onclick=" $.getScript(\''+
                        'http://localhost/qbank/qbadmin/public/js/plugin/selectize/selectize.min.js\''+
                        ',function(){});$(this).selectize({plugins: [\''+
                        'remove_button'+
                        '\'],delimiter:'+
                        '\',\',persist: false,create: function(input) {return {value: input,text: input}}})'+
                        '"  >'+
                        '</label></div>' +
                        '<div class="col col-md-3">	' +
                        '</div>' +
                        '</section></div>' +
                        '<div class="row"><section class="col col-md-12">' +
                        '<div class="col col-md-4">Timing</div><div class="col col-md-3">	<label class="input"><input class="" type="text" name="timing" value="" placeholder="Set Timing">	</label></div><div class="col col-md-3">	' +
                        '</div>' +
                        '</section>'+
                        '</div>' +
                        '<div class="row"><section class="col col-md-12">' +
                        '<div class="col col-md-4">Score</div><div class="col col-md-3">	<label class="input"><input class="" type="text" name="score" value="" placeholder="Set Expected Score">	</label></div><div class="col col-md-3">	' +
                        '</div>' +
                        '</section>'+
                        '</div>' +
                        '</section></fieldset>'+
                        '</form>'+
        
                        '</div>'+
                        '<div class="tab-pane" id="multipleCC'+this.config.qid+'_'+this.config.stmp+'">'+
        
                        '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                        '<section>' +
                        '<h1>Social Media</h1><fieldset>'+
                        '<div class="row"><section class="col col-md-12">' +
                        '<div class="col col-md-4">&nbsp;</div><div class="col col-md-5">	<a class="btn btn-primary" href="javascript:void(0);"><i class="fa fa-facebook"></i> Share your question »</a></div><div class="col col-3">' +
                        '</div>' +
                        '</section>' +
                        '</div>'+
                        '<div class="row"><section class="col col-md-12">' +
                        '<div class="col col-md-4">&nbsp;</div><div class="col col-md-5">	<a href="javascript:void(0);" class="btn btn-primary"><i class="fa fa-twitter"></i> Tweet Your Question »</a></div><div class="col col-md-3">	' +
                        '</div>' +
                        '</section>'+
                        '</div>' +
                        '<div class="row"> <section class="col col-md-12">' +
                        '<div class="col col-md-4"></div><div class="col col-md-5">'+
                        '<div class="btn-group">'+
                            '<a class="btn btn-default" href="javascript:void(0);"><i class="fa fa-cog"></i>Privacy Setting</a>'+
                                '<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);"><span class="caret"></span></a>'+
                            '<ul class="dropdown-menu">'+
                                '<li>'+
                                    '<a href="javascript:void(0);">Private</a>'+
                                '</li>'+
                                '<li>'+
                                '<a href="javascript:void(0);">Organizational</a>'+
                                '</li>'+
                                '<li>'+
                                    '<a href="javascript:void(0);">Public</a>'+
                                '</li>'+
        
                            '</ul>'+
                        '</div>'+
                        '</div><div class="col col-md-3">	' +
                        '</div>' +
                        '</section></div>' +
        
                        '</section></fieldset>'+
                        '</form>'+
        
                        '</div>'+
                        '</div>'+
                        '<ul class="nav nav-tabs">'+
                        '<li class="active">'+
                        '<a data-toggle="tab" href="#multipleAA'+this.config.qid+'_'+this.config.stmp+'">Question</a>'+
                        '</li>'+
                        '<li class="">'+
                        '<a data-toggle="tab" href="#multipleBB'+this.config.qid+'_'+this.config.stmp+'">Settings</a>'+
                        '</li>'+
                        '<li class="">'+
                        '<a data-toggle="tab" href="#multipleCC'+this.config.qid+'_'+this.config.stmp+'">Socials &amp; Privacy</a>'+
                        '</li>'+
                        '</ul>'+
                        '</div>'+
                        '</div>'+
                        '</div>');
            }else if(this.config.action=="append"){
                this.element.append('<div class="tab-content tab-main">' +
                    '<div class="tab-pane active" id="hr1_'+this.config.qid+'_'+this.config.stmp+'">' +
                    '   <div class="tabbable tabs-below">' +
                    '       <div class="tab-content padding-10">' +
                    '           <div class="tab-pane active" id="multipleAA'+this.config.qid+'_'+this.config.stmp+'">' +
                    '<div class="anstypetemplate" question-type="single-answer" id="'+this.config.qid+'_'+this.config.stmp+'">'+
                    '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                    '<header>'+
                    '<h1>Question <span class="qnum">'+this.config.qid+'</span></h1>'+
                    '</header>'+
                    '<fieldset>'+
                    '<div class="row">'+
                    '<section  class="col col-md-12">'+
                    '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editor_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                    '<div id="editor_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                    '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                    '$(\'#editor_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                    '$(\'#editor_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                    '});'+
                    '});">'+
                    'Go ahead..'+
                    '</div>'+
                    '</section>'+
                    '</div>'+
                    '</fieldset>'+
                    '<hr>'+
                    '<fieldset>'+
                    '<div class="row">'+
                    '<section class="col col-md-9">'+
                    '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                    '<div id="editoroption_1_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                    '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                    '$(\'#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                    '$(\'#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                    '});'+
                    '});">'+
                    'Go ahead..'+
                    '</div>'+
                    '</section>'+
                    '<section class="col col-md-2" style="text-align: left; ">'+
                    '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                    '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                    '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                    '</div>'+
                    '</section>'+
                    '</div>'+
                    '</fieldset>'+
                    '<footer>'+
                    '<div class="row">'+
                    '<section class="col col-md-2">'+
                    '<a class="btn btn-success qsave " href="javascript:void(0);"><i class="fa fa-check"></i> Save</a>'+
                    '</section>'+
                    '</div>'+
                    '</footer>'+
                    '</form>'+
                    '</div>' +
                    '</div>'+
                    '<div class="tab-pane" id="multipleBB'+this.config.qid+'_'+this.config.stmp+'">'+

                    '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                    '<section>' +
                    '<h1>Question Setting</h1><fieldset>'+
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">Question Level</div><div class="col col-md-5">	<label class="select"><select name="qlevel"><option value="Kindergarten">Kindergarten</option><option value="Kindergarten">Kindergarten</option></select><i></i>	</label></div><div class="col col-3">' +
                    '</div>' +
                    '</section>' +
                    '</div>'+
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">Level Rating</div><div class="col col-md-5">	<label class="select"><select name="rlevel"><option value="Basic">Basic</option><option value="Intermediate">Intermediate</option><option value="Advance">Advance</option></select><i></i>	</label></div><div class="col col-md-3">	' +
                    '</div>' +
                    '</section>'+
                    '</div>' +
                    '<div class="row"> <section class="col col-md-12">' +
                    '<div class="col col-md-4">Add Search  Tags</div>' +
                    '<div class="col col-md-5">	' +
                    '<label class="input">'+
                    '<input type="text"  class="stag" value="science,biology,chemistry,physics" onclick=" $.getScript(\''+
                    '/public/js/plugin/selectize/selectize.min.js\''+
                    ',function(){});$(this).selectize({plugins: [\''+
                    'remove_button'+
                    '\'],delimiter:'+
                    '\',\',persist: false,create: function(input) {return {value: input,text: input}}})'+
                    '"  >'+


                    '</label>' +
                    '</div>'+
                    '<div class="col col-md-3">	' +
                    '</div>' +
                    '</section></div>' +
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">Timing</div><div class="col col-md-3">	<label class="input"><input class="" type="text" name="timing" value="" placeholder="Set Timing">	</label></div><div class="col col-md-3">	' +
                    '</div>' +
                    '</section>'+
                    '</div>' +
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">Score</div><div class="col col-md-3">	<label class="input"><input class="" type="text" name="score" value="" placeholder="Set Expected Score">	</label></div><div class="col col-md-3">	' +
                    '</div>' +
                    '</section>'+
                    '</div>' +
                    '</section></fieldset>'+
                    '</form>'+

                    '</div>'+
                    '<div class="tab-pane" id="multipleCC'+this.config.qid+'_'+this.config.stmp+'">'+

                    '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                    '<section>' +
                    '<h1>Social Media</h1><fieldset>'+
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">&nbsp;</div><div class="col col-md-5">	<a class="btn btn-primary" href="javascript:void(0);"><i class="fa fa-facebook"></i> Share your question »</a></div><div class="col col-3">' +
                    '</div>' +
                    '</section>' +
                    '</div>'+
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">&nbsp;</div><div class="col col-md-5">	<a href="javascript:void(0);" class="btn btn-primary"><i class="fa fa-twitter"></i> Tweet Your Question »</a></div><div class="col col-md-3">	' +
                    '</div>' +
                    '</section>'+
                    '</div>' +
                    '<div class="row"> <section class="col col-md-12">' +
                    '<div class="col col-md-4"></div><div class="col col-md-5">'+
                    '<div class="btn-group">'+
                    '<a class="btn btn-default" href="javascript:void(0);"><i class="fa fa-cog"></i>Privacy Setting</a>'+
                    '<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);"><span class="caret"></span></a>'+
                    '<ul class="dropdown-menu">'+
                    '<li>'+
                    '<a href="javascript:void(0);">Private</a>'+
                    '</li>'+
                    '<li>'+
                    '<a href="javascript:void(0);">Organizational</a>'+
                    '</li>'+
                    '<li>'+
                    '<a href="javascript:void(0);">Public</a>'+
                    '</li>'+

                    '</ul>'+
                    '</div>'+
                    '</div><div class="col col-md-3">	' +
                    '</div>' +
                    '</section></div>' +

                    '</section></fieldset>'+
                    '</form>'+

                    '</div>'+
                    '</div>'+
                    '<ul class="nav nav-tabs">'+
                    '<li class="active">'+
                    '<a data-toggle="tab" href="#multipleAA'+this.config.qid+'_'+this.config.stmp+'">Question</a>'+
                    '</li>'+
                    '<li class="">'+
                    '<a data-toggle="tab" href="#multipleBB'+this.config.qid+'_'+this.config.stmp+'">Settings</a>'+
                    '</li>'+
                    '<li class="">'+
                    '<a data-toggle="tab" href="#multipleCC'+this.config.qid+'_'+this.config.stmp+'">Socials &amp; Privacy</a>'+
                    '</li>'+
                    '</ul>'+
                    '</div>'+
                    '</div>'+
                    '</div>');

            }

        }else if(this.config.temp == "Multiple Choice"){
            if(this.config.action == "insert"){
            this.element.html('<div class="tab-content tab-main">'+
                '<div class="tab-pane active" id="hr1'+this.config.qid+'_'+this.config.stmp+'">'+
                '<div class="tabbable tabs-below">'+
                '<div class="tab-content padding-10">'+
                '<div class="tab-pane active" id="sectionAA'+this.config.qid+'_'+this.config.stmp+'">'+
                '<div class="sectiontemplate"  >'+
                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                '<div class="row">'+

                '<section class="col col-md-12">'+
                '<div class="multiple-choice anstypetemplate" question-type="multiple-choice" id="'+this.config.qid+'_'+this.config.stmp+'">'+
                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                '<header>'+
                '<h1>Question <span class="qnum">'+this.config.qid+'</span></h1>'+
                '</header>'+
                '<fieldset>'+
                '<div class="row">'+
                '<section  class="col col-md-12">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editor_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                '<div id="editor_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                '$(\'#editor_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                '$(\'#editor_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                '});'+
                '});">'+
                'Go ahead..'+
                '</div>'+
                '</section>'+
                '</div>'+
                '</fieldset>'+
                '<hr>'+
                '<fieldset>'+
                '<div class="row">'+
                '<section class="col col-md-1">'+
                '<label class="radio">'+
                '<input type="radio" name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_1_'+this.config.qid+'_'+this.config.stmp+'">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                '<div id="editoroption_1_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                '$(\'#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                '$(\'#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                '});'+
                '});">'+
                'Go ahead..'+
                '</div>'+
                '</section>'+
                '<section class="col col-md-2" style="text-align: left; ">'+
                '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                '</div>'+
                '</section>'+
                '</div>'+
                '<div class="row">'+
                '<section class="col col-md-1">'+
                '<label class="radio">'+
                '<input type="radio" name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_2_'+this.config.qid+'_'+this.config.stmp+'">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_2_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                '<div id="editoroption_2_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                '$(\'#editoroption_2_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                '$(\'#editoroption_2_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                '});'+
                '});">'+
                'Go ahead..'+
                '</div>'+
                '</section>'+
                '<section class="col col-md-2" style="text-align: left; ">'+
                '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                '</div>'+
                '</section>'+
                '</div>'+
                '<div class="row">'+
                '<section class="col col-md-1">'+
                '<label class="radio">'+
                '<input type="radio" name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_3_'+this.config.qid+'_'+this.config.stmp+'">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_3_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                '<div id="editoroption_3_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                '$(\'#editoroption_3_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                '$(\'#editoroption_3_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                '});'+
                '});">'+
                'Go ahead..'+
                '</div>'+
                '</section>'+
                '<section class="col col-md-2" style="text-align: left; ">'+
                '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                '</div>'+
                '</section>'+
                '</div>'+
                '<div class="row">'+
                '<section class="col col-md-1">'+
                '<label class="radio">'+
                '<input type="radio"  name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_4_'+this.config.qid+'_'+this.config.stmp+'" style="border:1px solid #000000 !important">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_4_'+this.config.qid+'_'+this.config.stmp+'">'+
                '<div class="btn-group">'+
                '<a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>'+
                '<a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>'+
                '<a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>'+
                '</div>'+
                '<div class="btn-group">'+
                '<a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>'+
                '<div class="dropdown-menu input-append">'+
                '<input class="span2" placeholder="URL" type="text" data-edit="createLink">'+
                ' <button class="btn" type="button">Add</button>'+
                '</div>'+
                '<a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>'+
                '</div>'+
                '<div class="btn-group">'+
                '<a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>'+
                '<input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">'+
                '</div>'+
                '</div>'+
                '<div id="editoroption_4_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                '$(\'#editoroption_4_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                '$(\'#editoroption_4_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                '});'+
                '});">'+
                'Go ahead..'+
                '</div>'+
                '</section>'+
                '<section class="col col-md-2" style="text-align: left; ">'+
                '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                '</div>                                                                                                                        ' +
                '</section>'+
                ' </div>'+
                '</fieldset>'+
                '<footer>'+
                '<div class="row">'+
                '<section class="col col-md-8">'+
                '<label >'+
                '<input type="radio" name="chkbox" id="chkbox">'+
                '<i></i>Toggle to change answer option control</label>'+
                '</section>'+
                '<section class="col col-md-2">'+
                '<a class="btn btn-success qsave " href="javascript:void(0);"><i class="fa fa-check"></i> Save</a>'+
                '</section>'+
                '</div>'+
                '</footer>'+
                '</form>'+
                '</div>'+
                '</section>'+
                '</div>'+
                '</form>'+
                '</div>'+
                '</div>'+
                '<div class="tab-pane" id="sectionBB'+this.config.qid+'_'+this.config.stmp+'">'+

                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                '<section>' +
                '<h1>Question Setting</h1><fieldset>'+
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">Question Level</div><div class="col col-md-5">	<label class="select"><select name="qlevel"><option value="Kindergarten">Kindergarten</option><option value="Kindergarten">Kindergarten</option></select><i></i>	</label></div><div class="col col-3">' +
                '</div>' +
                '</section>' +
                '</div>'+
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">Level Rating</div><div class="col col-md-5">	<label class="select"><select name="rlevel"><option value="Basic">Basic</option><option value="Intermediate">Intermediate</option><option value="Advance">Advance</option></select><i></i>	</label></div><div class="col col-md-3">	' +
                '</div>' +
                '</section>'+
                '</div>' +
                '<div class="row"> <section class="col col-md-12">' +
                '<div class="col col-md-4">Add Search Tags</div>' +
                '<div class="col col-md-5">	' +
                '<label class="input">'+
                '<input type="text"  class="stag" value="science,biology,chemistry,physics" onclick=" $.getScript(\''+
                '/public/js/plugin/selectize/selectize.min.js\''+
                ',function(){});$(this).selectize({plugins: [\''+
                'remove_button'+
                '\'],delimiter:'+
                '\',\',persist: false,create: function(input) {return {value: input,text: input}}})'+
                '"  >'+


                '</label>' +
                '</div>'+
                '<div class="col col-md-3">	' +
                '</div>' +
                '</section></div>' +
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">Timing</div><div class="col col-md-3">	<label class="input"><input class="" type="text" name="timing" value="" placeholder="Set Timing">	</label></div><div class="col col-md-3">	' +
                '</div>' +
                '</section>'+
                '</div>' +
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">Score</div><div class="col col-md-3">	<label class="input"><input class="" type="text" name="score" value="" placeholder="Set Expected Score">	</label></div><div class="col col-md-3">	' +
                '</div>' +
                '</section>'+
                '</div>' +
                '</section></fieldset>'+
                '</form>'+

                '</div>'+
                '<div class="tab-pane" id="sectionCC'+this.config.qid+'_'+this.config.stmp+'">'+

                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                '<section>' +
                '<h1>Social Media</h1><fieldset>'+
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">&nbsp;</div><div class="col col-md-5">	<a class="btn btn-primary" href="javascript:void(0);"><i class="fa fa-facebook"></i> Share your question »</a></div><div class="col col-3">' +
                '</div>' +
                '</section>' +
                '</div>'+
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">&nbsp;</div><div class="col col-md-5">	<a href="javascript:void(0);" class="btn btn-primary"><i class="fa fa-twitter"></i> Tweet Your Question »</a></div><div class="col col-md-3">	' +
                '</div>' +
                '</section>'+
                '</div>' +
                '<div class="row"> <section class="col col-md-12">' +
                '<div class="col col-md-4"></div><div class="col col-md-5">'+
                '<div class="btn-group">'+
                '<a class="btn btn-default" href="javascript:void(0);"><i class="fa fa-cog"></i>Privacy Setting</a>'+
                '<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);"><span class="caret"></span></a>'+
                '<ul class="dropdown-menu">'+
                '<li>'+
                '<a href="javascript:void(0);">Private</a>'+
                '</li>'+
                '<li>'+
                '<a href="javascript:void(0);">Organizational</a>'+
                '</li>'+
                '<li>'+
                '<a href="javascript:void(0);">Public</a>'+
                '</li>'+

                '</ul>'+
                '</div>'+
                '</div><div class="col col-md-3">	' +
                '</div>' +
                '</section></div>' +

                '</section></fieldset>'+
                '</form>'+

                '</div>'+
                '</div>'+
                '<ul class="nav nav-tabs">'+
                '<li class="active">'+
                '<a data-toggle="tab" href="#sectionAA'+this.config.qid+'_'+this.config.stmp+'">Question</a>'+
                '</li>'+
                '<li class="">'+
                '<a data-toggle="tab" href="#sectionBB'+this.config.qid+'_'+this.config.stmp+'">Settings</a>'+
                '</li>'+
                '<li class="">'+
                '<a data-toggle="tab" href="#sectionCC'+this.config.qid+'_'+this.config.stmp+'">Socials &amp; Privacy</a>'+
                '</li>'+
                '</ul>'+
                '</div>'+
                '</div>'+
                '</div>')
            }else if(this.config.action == "append"){
                this.element.append('<div class="tab-content tab-main">'+
                    '<div class="tab-pane active" id="hr1'+this.config.qid+'_'+this.config.stmp+'">'+
                    '<div class="tabbable tabs-below">'+
                    '<div class="tab-content padding-10">'+
                    '<div class="tab-pane active" id="sectionAA'+this.config.qid+'_'+this.config.stmp+'">'+
                    '<div class="sectiontemplate"  >'+
                    '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                    '<div class="row">'+

                    '<section class="col col-md-12">'+
                    '<div class="multiple-choice anstypetemplate" question-type="multiple-choice" id="'+this.config.qid+'_'+this.config.stmp+'">'+
                    '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                    '<header>'+
                    '<h1>Question <span class="qnum">'+this.config.qid+'</span></h1>'+
                    '</header>'+
                    '<fieldset>'+
                    '<div class="row">'+
                    '<section  class="col col-md-12">'+
                    '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editor_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                    '<div id="editor_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                    '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                    '$(\'#editor_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                    '$(\'#editor_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                    '});'+
                    '});">'+
                    'Go ahead..'+
                    '</div>'+
                    '</section>'+
                    '</div>'+
                    '</fieldset>'+
                    '<hr>'+
                    '<fieldset>'+
                    '<div class="row">'+
                    '<section class="col col-md-1">'+
                    '<label class="radio">'+
                    '<input type="radio" name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_1_'+this.config.qid+'_'+this.config.stmp+'">'+
                    '<i></i>'+
                    '</label>'+
                    '</section>'+
                    '<section class="col col-md-9">'+
                    '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                    '<div id="editoroption_1_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                    '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                    '$(\'#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                    '$(\'#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                    '});'+
                    '});">'+
                    'Go ahead..'+
                    '</div>'+
                    '</section>'+
                    '<section class="col col-md-2" style="text-align: left; ">'+
                    '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                    '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                    '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                    '</div>'+
                    '</section>'+
                    '</div>'+
                    '<div class="row">'+
                    '<section class="col col-md-1">'+
                    '<label class="radio">'+
                    '<input type="radio" name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_2_'+this.config.qid+'_'+this.config.stmp+'">'+
                    '<i></i>'+
                    '</label>'+
                    '</section>'+
                    '<section class="col col-md-9">'+
                    '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_2_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                    '<div id="editoroption_2_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                    '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                    '$(\'#editoroption_2_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                    '$(\'#editoroption_2_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                    '});'+
                    '});">'+
                    'Go ahead..'+
                    '</div>'+
                    '</section>'+
                    '<section class="col col-md-2" style="text-align: left; ">'+
                    '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                    '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                    '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                    '</div>'+
                    '</section>'+
                    '</div>'+
                    '<div class="row">'+
                    '<section class="col col-md-1">'+
                    '<label class="radio">'+
                    '<input type="radio" name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_3_'+this.config.qid+'_'+this.config.stmp+'">'+
                    '<i></i>'+
                    '</label>'+
                    '</section>'+
                    '<section class="col col-md-9">'+
                    '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_3_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                    '<div id="editoroption_3_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                    '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                    '$(\'#editoroption_3_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                    '$(\'#editoroption_3_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                    '});'+
                    '});">'+
                    'Go ahead..'+
                    '</div>'+
                    '</section>'+
                    '<section class="col col-md-2" style="text-align: left; ">'+
                    '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                    '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                    '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                    '</div>'+
                    '</section>'+
                    '</div>'+
                    '<div class="row">'+
                    '<section class="col col-md-1">'+
                    '<label class="radio">'+
                    '<input type="radio"  name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_4_'+this.config.qid+'_'+this.config.stmp+'" style="border:1px solid #000000 !important">'+
                    '<i></i>'+
                    '</label>'+
                    '</section>'+
                    '<section class="col col-md-9">'+
                    '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_4_'+this.config.qid+'_'+this.config.stmp+'">'+
                    '<div class="btn-group">'+
                    '<a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>'+
                    '<a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>'+
                    '<a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>'+
                    '</div>'+
                    '<div class="btn-group">'+
                    '<a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>'+
                    '<div class="dropdown-menu input-append">'+
                    '<input class="span2" placeholder="URL" type="text" data-edit="createLink">'+
                    ' <button class="btn" type="button">Add</button>'+
                    '</div>'+
                    '<a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>'+
                    '</div>'+
                    '<div class="btn-group">'+
                    '<a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>'+
                    '<input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">'+
                    '</div>'+
                    '</div>'+
                    '<div id="editoroption_4_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                    '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                    '$(\'#editoroption_4_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                    '$(\'#editoroption_4_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                    '});'+
                    '});">'+
                    'Go ahead..'+
                    '</div>'+
                    '</section>'+
                    '<section class="col col-md-2" style="text-align: left; ">'+
                    '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                    '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                    '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                    '</div>                                                                                                                        ' +
                    '</section>'+
                    ' </div>'+
                    '</fieldset>'+
                    '<footer>'+
                    '<div class="row">'+
                    '<section class="col col-md-8">'+
                    '<label >'+
                    '<input type="radio" name="chkbox" id="chkbox">'+
                    '<i></i>Toggle to change answer option control</label>'+
                    '</section>'+
                    '<section class="col col-md-2">'+
                    '<a class="btn btn-success qsave " href="javascript:void(0);"><i class="fa fa-check"></i> Save</a>'+
                    '</section>'+
                    '</div>'+
                    '</footer>'+
                    '</form>'+
                    '</div>'+
                    '</section>'+
                    '</div>'+
                    '</form>'+
                    '</div>'+
                    '</div>'+
                    '<div class="tab-pane" id="sectionBB'+this.config.qid+'_'+this.config.stmp+'">'+

                    '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                    '<section>' +
                    '<h1>Question Setting</h1><fieldset>'+
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">Question Level</div><div class="col col-md-5">	<label class="select"><select name="qlevel"><option value="Kindergarten">Kindergarten</option><option value="Kindergarten">Kindergarten</option></select><i></i>	</label></div><div class="col col-3">' +
                    '</div>' +
                    '</section>' +
                    '</div>'+
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">Level Rating</div><div class="col col-md-5">	<label class="select"><select name="rlevel"><option value="Basic">Basic</option><option value="Intermediate">Intermediate</option><option value="Advance">Advance</option></select><i></i>	</label></div><div class="col col-md-3">	' +
                    '</div>' +
                    '</section>'+
                    '</div>' +
                    '<div class="row"> <section class="col col-md-12">' +
                    '<div class="col col-md-4">Add Search  Tags</div>' +
                    '<div class="col col-md-5">	' +
                    '<label class="input">'+
                    '<input type="text"  class="stag" value="science,biology,chemistry,physics" onclick=" $.getScript(\''+
                    '/public/js/plugin/selectize/selectize.min.js\''+
                    ',function(){});$(this).selectize({plugins: [\''+
                    'remove_button'+
                    '\'],delimiter:'+
                    '\',\',persist: false,create: function(input) {return {value: input,text: input}}})'+
                    '"  >'+


                    '</label>' +
                    '</div>' +
                    '<div class="col col-md-3">	' +
                    '</div>' +
                    '</section></div>' +
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">Timing</div><div class="col col-md-3">	<label class="input"><input class="" type="text" name="timing" value="" placeholder="Set Timing">	</label></div><div class="col col-md-3">	' +
                    '</div>' +
                    '</section>'+
                    '</div>' +
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">Score</div><div class="col col-md-3">	<label class="input"><input class="" type="text" name="score" value="" placeholder="Set Expected Score">	</label></div><div class="col col-md-3">	' +
                    '</div>' +
                    '</section>'+
                    '</div>' +
                    '</section></fieldset>'+
                    '</form>'+

                    '</div>'+
                    '<div class="tab-pane" id="sectionCC'+this.config.qid+'_'+this.config.stmp+'">'+

                    '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                    '<section>' +
                    '<h1>Social Media</h1><fieldset>'+
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">&nbsp;</div><div class="col col-md-5">	<a class="btn btn-primary" href="javascript:void(0);"><i class="fa fa-facebook"></i> Share your question »</a></div><div class="col col-3">' +
                    '</div>' +
                    '</section>' +
                    '</div>'+
                    '<div class="row"><section class="col col-md-12">' +
                    '<div class="col col-md-4">&nbsp;</div><div class="col col-md-5">	<a href="javascript:void(0);" class="btn btn-primary"><i class="fa fa-twitter"></i> Tweet Your Question »</a></div><div class="col col-md-3">	' +
                    '</div>' +
                    '</section>'+
                    '</div>' +
                    '<div class="row"> <section class="col col-md-12">' +
                    '<div class="col col-md-4"></div><div class="col col-md-5">'+
                    '<div class="btn-group">'+
                    '<a class="btn btn-default" href="javascript:void(0);"><i class="fa fa-cog"></i>Privacy Setting</a>'+
                    '<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);"><span class="caret"></span></a>'+
                    '<ul class="dropdown-menu">'+
                    '<li>'+
                    '<a href="javascript:void(0);">Private</a>'+
                    '</li>'+
                    '<li>'+
                    '<a href="javascript:void(0);">Organizational</a>'+
                    '</li>'+
                    '<li>'+
                    '<a href="javascript:void(0);">Public</a>'+
                    '</li>'+

                    '</ul>'+
                    '</div>'+
                    '</div><div class="col col-md-3">	' +
                    '</div>' +
                    '</section></div>' +

                    '</section></fieldset>'+
                    '</form>'+

                    '</div>'+
                    '</div>'+
                    '<ul class="nav nav-tabs">'+
                    '<li class="active">'+
                    '<a data-toggle="tab" href="#sectionAA'+this.config.qid+'_'+this.config.stmp+'">Question</a>'+
                    '</li>'+
                    '<li class="">'+
                    '<a data-toggle="tab" href="#sectionBB'+this.config.qid+'_'+this.config.stmp+'">Settings</a>'+
                    '</li>'+
                    '<li class="">'+
                    '<a data-toggle="tab" href="#sectionCC'+this.config.qid+'_'+this.config.stmp+'">Socials &amp; Privacy</a>'+
                    '</li>'+
                    '</ul>'+
                    '</div>'+
                    '</div>'+
                    '</div>')
            }


        }else if(this.config.temp == "Section"){

            this.element.html('<div class="tab-content tab-main">'+
                '<div class="tab-pane active" id="hr1'+this.config.qid+'_'+this.config.stmp+'">'+
                '<div class="tabbable tabs-below">'+
                '<div class="tab-content padding-10">'+
                '<div class="tab-pane active" id="sectionAA'+this.config.qid+'_'+this.config.stmp+'">'+
                '<div class="sectiontemplate"  >'+
                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                '<div class="row">'+
                '<section class="col col-md-12">'+
                '<div class="multiple-choice anstypetemplate" question-type="multiple-choice" id="'+this.config.qid+'_'+this.config.stmp+'">'+
                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                '<header>'+
                '<h1>Question <span class="qnum">'+this.config.qid+'</span></h1>'+
                '</header>'+
                '<fieldset>'+
                '<div class="row">'+
                '<section  class="col col-md-12">'+
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
                '<div id="editor_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                '$(\'#editor_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                '$(\'#editor_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                '});'+
                '});">'+
                'Go ahead..'+
                '</div>'+
                '</section>'+
                '</div>'+
                '</fieldset>'+
                '<hr>'+
                '<fieldset>'+
                '<div class="row">'+
                '<section class="col col-md-1">'+
                '<label class="radio">'+
                '<input type="radio" name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_1_'+this.config.qid+'_'+this.config.stmp+'">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                '<div id="editoroption_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                '$(\'#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                '$(\'#editoroption_1_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                '});'+
                '});">'+
                'Go ahead..'+
                '</div>'+
                '</section>'+
                '<section class="col col-md-2" style="text-align: left; ">'+
                '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                '</div>'+
                '</section>'+
                '</div>'+
                '<div class="row">'+
                '<section class="col col-md-1">'+
                '<label class="radio">'+
                '<input type="radio" name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_2_'+this.config.qid+'_'+this.config.stmp+'">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_2_">'+
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
                '<div id="editoroption_2_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                '$(\'#editoroption_2_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                '$(\'#editoroption_2_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                '});'+
                '});">'+
                'Go ahead..'+
                '</div>'+
                '</section>'+
                '<section class="col col-md-2" style="text-align: left; ">'+
                '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                '</div>'+
                '</section>'+
                '</div>'+
                '<div class="row">'+
                '<section class="col col-md-1">'+
                '<label class="radio">'+
                '<input type="radio" name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_3_'+this.config.qid+'_'+this.config.stmp+'">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_3_'+this.config.qid+'_'+this.config.stmp+'">'+
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
                '<div id="editoroption_3_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                '$(\'#editoroption_3_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                '$(\'#editoroption_3_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                '});'+
                '});">'+
                'Go ahead..'+
                '</div>'+
                '</section>'+
                '<section class="col col-md-2" style="text-align: left; ">'+
                '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                '</div>'+
                '</section>'+
                '</div>'+
                '<div class="row">'+
                '<section class="col col-md-1">'+
                '<label class="radio">'+
                '<input type="radio"  name="rad_ans_opt_'+this.config.qid+'_'+this.config.stmp+'" id="rad_ans_opt_4_'+this.config.qid+'_'+this.config.stmp+'" style="border:1px solid #000000 !important">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_4_">'+
                '<div class="btn-group">'+
                '<a class="btn btn-primary" data-edit="bold" title="" data-original-title="Bold (Ctrl/Cmd+B)"><i class="glyphicon glyphicon-bold"></i></a>'+
                '<a class="btn btn-primary" data-edit="italic" title="" data-original-title="Italic (Ctrl/Cmd+I)"><i class="glyphicon glyphicon-italic"></i></a>'+
                '<a class="btn btn-primary" data-edit="underline" title="" data-original-title="Underline (Ctrl/Cmd+U)"><i class="glyphicon glyphicon-text-width"></i></a>'+
                '</div>'+
                '<div class="btn-group">'+
                '<a class="btn btn-primary dropdown-toggle" data-toggle="dropdown" title="" data-original-title="Hyperlink"><i class="glyphicon glyphicon-link"></i></a>'+
                '<div class="dropdown-menu input-append">'+
                '<input class="span2" placeholder="URL" type="text" data-edit="createLink">'+
                ' <button class="btn" type="button">Add</button>'+
                '</div>'+
                '<a class="btn btn-primary" data-edit="unlink" title="" data-original-title="Remove Hyperlink"><i class="glyphicon glyphicon-remove"></i></a>'+
                '</div>'+
                '<div class="btn-group">'+
                '<a class="btn btn-primary" title="" id="pictureBtn" data-original-title="Insert picture (or just drag &amp; drop)"><i class="glyphicon glyphicon-picture"></i></a>'+
                '<input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" style="opacity: 0; position: absolute; top: 0px; left: 0px; width: 37px; height: 30px;">'+
                '</div>'+
                '</div>'+
                '<div id="editoroption_4_'+this.config.qid+'_'+this.config.stmp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                '$(\'#editoroption_4_'+this.config.qid+'_'+this.config.stmp+'\').wysiwyg();'+
                '$(\'#editoroption_4_'+this.config.qid+'_'+this.config.stmp+'\').cleanHtml();'+
                '});'+
                '});">'+
                'Go ahead..'+
                '</div>'+
                '</section>'+
                '<section class="col col-md-2" style="text-align: left; ">'+
                '<div class="padd-control" style="text-align: left !important; margin-top: 30px ">'+
                '<span><a href="javascript:void(0);" class="btn btn-success btn-circle add-option"><i class="glyphicon glyphicon-plus"></i></a></span>'+
                '<span><a href="javascript:void(0);" class="btn btn-danger btn-circle remove-option"><i class="glyphicon glyphicon-minus"></i></a></span>'+
                '</div>                                                                                                                        ' +
                '</section>'+
                ' </div>'+
                '</fieldset>'+
                '<footer>'+
                '<div class="row">'+
                '<section class="col col-md-8">'+
                '<label >'+
                '<input type="radio" name="chkbox" id="chkbox">'+
                '<i></i>Toggle to change answer option control</label>'+
                '</section>'+
                '<section class="col col-md-2">'+
                '<a class="btn btn-success qsave " href="javascript:void(0);"><i class="fa fa-check"></i> Save</a>'+
                '</section>'+
                '</div>'+
                '</footer>'+
                '</form>'+
                '</div>'+
                '</section>'+
                '</div>'+
                '</form>'+
                '</div>'+
                '</div>'+
                '<div class="tab-pane" id="sectionBB'+this.config.qid+'_'+this.config.stmp+'">'+

                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                '<section>' +
                '<h1>Question Setting</h1><fieldset>'+
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">Question Level</div><div class="col col-md-5">	<label class="select"><select name="qlevel"><option value="Kindergarten">Kindergarten</option><option value="Kindergarten">Kindergarten</option></select><i></i>	</label></div><div class="col col-3">' +
                '</div>' +
                '</section>' +
                '</div>'+
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">Level Rating</div><div class="col col-md-5">	<label class="select"><select name="rlevel"><option value="Basic">Basic</option><option value="Intermediate">Intermediate</option><option value="Advance">Advance</option></select><i></i>	</label></div><div class="col col-md-3">	' +
                '</div>' +
                '</section>'+
                '</div>' +
                '<div class="row"> <section class="col col-md-12">' +
                '<div class="col col-md-4">Add Search  Tags</div>' +
                '<div class="col col-md-5">	' +
                '<label class="input">'+
                '<input type="text"  class="stag" value="science,biology,chemistry,physics" onclick=" $.getScript(\''+
                '/public/js/plugin/selectize/selectize.min.js\''+
                ',function(){});$(this).selectize({plugins: [\''+
                'remove_button'+
                '\'],delimiter:'+
                '\',\',persist: false,create: function(input) {return {value: input,text: input}}})'+
                '"  >'+


                '</label>' +
                '</div>' +
                '<div class="col col-md-3">	' +
                '</div>' +
                '</section></div>' +
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">Timing</div><div class="col col-md-3">	<label class="input"><input class="" type="text" name="timing" value="" placeholder="Set Timing">	</label></div><div class="col col-md-3">	' +
                '</div>' +
                '</section>'+
                '</div>' +
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">Score</div><div class="col col-md-3">	<label class="input"><input class="" type="text" name="score" value="" placeholder="Enter expected score">	</label></div><div class="col col-md-3">	' +
                '</div>' +
                '</section>'+
                '</div>' +
                '</section></fieldset>'+
                '</form>'+

                '</div>'+
                '<div class="tab-pane" id="sectionCC'+this.config.qid+'_'+this.config.stmp+'">'+

                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                '<section>' +
                '<h1>Social Media</h1><fieldset>'+
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">&nbsp;</div><div class="col col-md-5">	<a class="btn btn-primary" href="javascript:void(0);"><i class="fa fa-facebook"></i> Share your question »</a></div><div class="col col-3">' +
                '</div>' +
                '</section>' +
                '</div>'+
                '<div class="row"><section class="col col-md-12">' +
                '<div class="col col-md-4">&nbsp;</div><div class="col col-md-5">	<a href="javascript:void(0);" class="btn btn-primary"><i class="fa fa-twitter"></i> Tweet Your Question »</a></div><div class="col col-md-3">	' +
                '</div>' +
                '</section>'+
                '</div>' +
                '<div class="row"> <section class="col col-md-12">' +
                '<div class="col col-md-4"></div><div class="col col-md-5">'+
                '<div class="btn-group">'+
                '<a class="btn btn-default" href="javascript:void(0);"><i class="fa fa-cog"></i>Privacy Setting</a>'+
                '<a class="btn btn-default dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);"><span class="caret"></span></a>'+
                '<ul class="dropdown-menu">'+
                '<li>'+
                '<a href="javascript:void(0);">Private</a>'+
                '</li>'+
                '<li>'+
                '<a href="javascript:void(0);">Organizational</a>'+
                '</li>'+
                '<li>'+
                '<a href="javascript:void(0);">Public</a>'+
                '</li>'+

                '</ul>'+
                '</div>'+
                '</div><div class="col col-md-3">	' +
                '</div>' +
                '</section></div>' +

                '</section></fieldset>'+
                '</form>'+

                '</div>'+
                '</div>'+
                '<ul class="nav nav-tabs">'+
                '<li class="active">'+
                '<a data-toggle="tab" href="#sectionAA'+this.config.qid+'_'+this.config.stmp+'">Question</a>'+
                '</li>'+
                '<li class="">'+
                '<a data-toggle="tab" href="#sectionBB'+this.config.qid+'_'+this.config.stmp+'">Settings</a>'+
                '</li>'+
                '<li class="">'+
                '<a data-toggle="tab" href="#sectionCC'+this.config.qid+'_'+this.config.stmp+'">Socials &amp; Privacy</a>'+
                '</li>'+
                '</ul>'+
                '</div>'+
                '</div>'+
                '</div>');


        }

    }

    $.fn.qbankTemp = function(options){
        new qbankTemp(this.first(),options);
        return this.first();
    }
})(jQuery);

(function($){
    //$.fn.qbankTempFunction = function(options){
        var defaults ={
            qid :"",
            temp:"",
            pqid:"",
            parentCont:"",
            qtype:"",
            qoptId :"",
            tstamp:"",
            addOpt : "",//optionRow,
            removeOption :""

        }

        function qbankTempFunction(element,options){
            this.config = $.extend({},defaults,options);
            this.element = element;
            this.init();
        }

        //console.log($first);
        qbankTempFunction.prototype.init = function(){

            var did = 1;
            this.config.qoptId = this.config.qoptId + 1
            var rel = this.config.parentCont.attr('question-type');
            console.log(rel);
            if(rel ==="multiple-choice"){
                this.element.parents("div.row").eq(0).after('<div class="row">'+
                    '<section class="col col-md-1">'+

                    '<label class="radio">'+
                    '<input type="radio" name="rad_ans_opt_'+this.config.qid+'_'+this.config.tstamp+'" id="rad_ans_opt_'+this.config.qoptId+'_'+this.config.qid+'_'+this.config.tstamp+' ">'+
                    '<i></i>'+
                    '</label>'+
                    '</section>'+
                    '<section class="col col-md-9">'+
                    '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_'+this.config.qoptId+'_'+this.config.qid+'_'+this.config.tstamp+'">'+

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
                    '<div id="editoroption_'+this.config.qoptId+'_'+this.config.qid+'_'+this.config.tstamp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                    '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                    '$(\'#editoroption_'+this.config.qoptId+'_'+this.config.qid+'_'+this.config.tstamp+'\').wysiwyg();'+
                    '$(\'#editoroption_'+this.config.qoptId+'_'+this.config.qid+'_'+this.config.tstamp+'\').cleanHtml();'+
                    '});'+
                    '});">'+
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
                this.element.parents("div.row").eq(0).after('<div class="row">'+
                    '<section  class="col col-md-9">'+
                    '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption_'+this.config.qoptId+'_'+this.config.qid+'_'+this.config.tstamp+'">'+
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
                    '<div id="editoroption_'+this.config.qoptId+'_'+this.config.qid+'_'+this.config.tstamp+'" class="well" style="padding: 5px !important" contenteditable="true" onclick="$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/jquery.hotkeys.js\',function(){'+
                    '$.getScript(\'http://localhost/qbank/qbadmin/public/js/plugin/bootstrap-wysiwyg/bootstrap-wysiwyg.js\',function(){'+
                    '$(\'#editoroption_'+this.config.qoptId+'_'+this.config.qid+'_'+this.config.tstamp+'\').wysiwyg();'+
                    '$(\'#editoroption_'+this.config.qoptId+'_'+this.config.qid+'_'+this.config.tstamp+'\').cleanHtml();'+
                    '});'+
                    '});">'+
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

            //return $first;
        }
    $.fn.qbankTempFunction = function(options){
        new qbankTempFunction(this.first(),options);
        return this.first();
    }
})(jQuery);
