/**
 * Created by Amedora on 11/28/14.
 */
(function($){
    var tc = 3;
    var c=0;
    $.templateQB = {
        /*var settings = {"singleTemp":null,
            "sectionalTemp":nulloption
        }

        if(option){
            $.extend(settings,option)
        }*/

        singleTemp : function(){
            var temp ='<div class="tab-content">' +
                '<div class="tab-pane active" id="hr1">' +
                '   <div class="tabbable tabs-below">' +
                '       <div class="tab-content padding-10">' +
                '           <div class="tab-pane active" id="multipleAA">' +
                            '<div class="anstypetemplate" question-type="single-answer">'+
                                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                                    '<header>'+
                                        '<h1>Question</h1>'+
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
                                                        '<div id="editor" class="well" style="padding: 5px !important">'+
                                                        'Go ahead..'+
                                                        '</div>'+
                                                    '</section>'+
                                                '</div>'+
                                            '</fieldset>'+
                                            '<hr>'+
                                                '<fieldset>'+
                                                    '<div class="row">'+
                                                        '<section class="col col-md-9">'+
                                                            '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption5">'+
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
                                                                    '<div id="editoroption5" class="well " style="padding: 5px !important">'+
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
                                                                    '<a class="btn btn-success " href="javascript:void(0);"><i class="fa fa-check"></i> Save</a>'+
                                                                '</section>'+
                                                            '</div>'+
                                                        '</footer>'+
                                                    '</form>'+
                                                '</div>' +
                                            '</div>'+
                                            '<div class="tab-pane" id="multipleBB">'+
                                            '</div>'+
                                            '<div class="tab-pane" id="multipleCC">'+
                                            '</div>'+
                                        '</div>'+
                                        '<ul class="nav nav-tabs">'+
                                            '<li class="active">'+
                                                '<a data-toggle="tab" href="#multipleAA">Question</a>'+
                                            '</li>'+
                                            '<li class="">'+
                                                '<a data-toggle="tab" href="#multipleBB">Settings</a>'+
                                            '</li>'+
                                            '<li class="">'+
                                                '<a data-toggle="tab" href="#multipleCC">Privacy</a>'+
                                            '</li>'+
                                        '</ul>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
            return temp;
        },
        multipleTemp : function(){
/*
* Template for section question
*
*
* */
            /*var temp2 = $("<div/>",{
                class:"tab-content"
            })
            $("<div/>",{class:"tab-pane active",id:"hr1"}).appendTo(temp2);$("<div/>",{class:"tabbable tabs-below"}).appendTo(temp2);
            $("<div/>",{class:"tab-content padding-10"}).appendTo(temp2,function(){
                for(x=0; x<tb; x++){
                    if(x==0){
                        $("<div/>",{
                            class:"tab-pane active",
                            id:"section"+x
                        }).appendTo(temp2 +"tab-content div:nth-child(3)")
                    }else{
                        $("<div/>",{
                            class:"tab-pane",
                            id:"section"+x
                        }).appendTo(temp2 +"tab-content div:nth-child(3)")
                    }

                }
            })
            console.log(temp2.children().eq(3))*/

            var temp ='<div class="tab-content">'+
                '<div class="tab-pane active" id="hr1">'+
                '<div class="tabbable tabs-below">'+
                 '<div class="tab-content padding-10">'+
                        '<div class="tab-pane active" id="sectionAA">'+
                            '<div class="sectiontemplate"  >'+
                                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                                    '<div class="row">'+

                                        '<section class="col col-md-12">'+
                                            '<div class="multiple-choice anstypetemplate" question-type="multiple-choice">'+
                                                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                                                    '<header>'+
                                                        '<h1>Question</h1>'+
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
                                                                        '<div id="editor" class="well" style="padding: 5px !important">'+
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
                                                                                '<input type="radio" name="rad-ans-opt" id="rad-ans-opt">'+
                                                                                    '<i></i>'+
                                                                                '</label>'+
                                                                            '</section>'+
                                                                            '<section class="col col-md-9">'+
                                                                                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption2">'+
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
                                                                                        '<div id="editoroption2" class="well" style="padding: 5px !important">'+
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
                                                                                            '<input type="radio" name="rad-ans-opt" id="rad-ans-opt">'+
                                                                                                '<i></i>'+
                                                                                            '</label>'+
                                                                                        '</section>'+
                                                                                        '<section class="col col-md-9">'+
                                                                                            '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption3">'+
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
                                                                                                    '<div id="editoroption3" class="well" style="padding: 5px !important">'+
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
                                                                                                        '<input type="radio" name="rad-ans-opt" id="rad-ans-opt4">'+
                                                                                                            '<i></i>'+
                                                                                                        '</label>'+
                                                                                                    '</section>'+
                                                                                                    '<section class="col col-md-9">'+
                                                                                                        '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption4">'+
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
                                                                                                                '<div id="editoroption4" class="well" style="padding: 5px !important">'+
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
                                                                                                                    '<input type="radio"  name="rad-ans-opt" id="rad-ans-opt5" style="border:1px solid #000000 !important">'+
                                                                                                                        '<i></i>'+
                                                                                                                    '</label>'+
                                                                                                                '</section>'+
                                                                                                                '<section class="col col-md-9">'+
                                                                                                                   '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption5">'+
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
                                                                                                                           '<div id="editoroption5" class="well " style="padding: 5px !important">'+
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
                                                                                                                                '<a class="btn btn-success " href="javascript:void(0);"><i class="fa fa-check"></i> Save</a>'+
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
                                                                                        '<div class="tab-pane" id="sectionBB">'+
                                                                                        '</div>'+
                                                                                        '<div class="tab-pane" id="sectionCC">'+
                                                                                        '</div>'+
                                                                                    '</div>'+
                                                                                    '<ul class="nav nav-tabs">'+
                                                                                        '<li class="active">'+
                                                                                            '<a data-toggle="tab" href="#sectionAA">Question</a>'+
                                                                                        '</li>'+
                                                                                        '<li class="">'+
                                                                                                    '<a data-toggle="tab" href="#sectionBB">Settings</a>'+
                                                                                        '</li>'+
                                                                                        '<li class="">'+
                                                                                            '<a data-toggle="tab" href="#sectionCC">Privacy</a>'+
                                                                                        '</li>'+
                                                                                    '</ul>'+
                                                                                '</div>'+
                                                                            '</div>'+
                                                                        '</div>'
            return temp;
        },
        sectionTemp : function(){
            //$('.click2edit').summernote({focus: true});
            var temp ='<div class="tab-content">'+
                '<div class="tab-pane active" id="hr1">'+
                '<div class="tabbable tabs-below">'+
                '<div class="tab-content padding-10">'+
                '<div class="tab-pane active" id="sectionAA">'+
                '<div class="sectiontemplate"  >'+
                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                '<div class="row">'+
                '<section class="col col-md-12">'+
                '<div class="multiple-choice anstypetemplate" question-type="multiple-choice">'+
                '<form class="smart-form" style="border:1px solid #c3c3c3">'+
                '<header>'+
                '<h1>Question</h1>'+
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
                '<div id="editor" class="well" style="padding: 5px !important">'+
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
                '<input type="radio" name="rad-ans-opt" id="rad-ans-opt">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption2">'+
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
                '<div id="editoroption2" class="well" style="padding: 5px !important">'+
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
                '<input type="radio" name="rad-ans-opt" id="rad-ans-opt">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption3">'+
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
                '<div id="editoroption3" class="well" style="padding: 5px !important">'+
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
                '<input type="radio" name="rad-ans-opt" id="rad-ans-opt4">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption4">'+
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
                '<div id="editoroption4" class="well" style="padding: 5px !important">'+
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
                '<input type="radio"  name="rad-ans-opt" id="rad-ans-opt5" style="border:1px solid #000000 !important">'+
                '<i></i>'+
                '</label>'+
                '</section>'+
                '<section class="col col-md-9">'+
                '<div class="btn-toolbar edt-hidden" data-role="editor-toolbar" data-target="#editoroption5">'+
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
                '<div id="editoroption5" class="well " style="padding: 5px !important">'+
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
                '<a class="btn btn-success " href="javascript:void(0);"><i class="fa fa-check"></i> Save</a>'+
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
                '<div class="tab-pane" id="sectionBB">'+
                '</div>'+
                '<div class="tab-pane" id="sectionCC">'+
                '</div>'+
                '</div>'+
                '<ul class="nav nav-tabs">'+
                '<li class="active">'+
                '<a data-toggle="tab" href="#sectionAA">Question</a>'+
                '</li>'+
                '<li class="">'+
                '<a data-toggle="tab" href="#sectionBB">Settings</a>'+
                '</li>'+
                '<li class="">'+
                '<a data-toggle="tab" href="#sectionCC">Privacy</a>'+
                '</li>'+
                '</ul>'+
                '</div>'+
                '</div>'+
                '</div>'
            return temp;

        }

    };
})(jQuery);
