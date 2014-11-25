<?php

//CONFIGURATION for SmartAdmin UI

//ribbon breadcrumbs config
//array("Display Name" => "URL");
$breadcrumbs = array(
	"Home" => APP_URL
);

/*navigation array config

ex:
"dashboard" => array(
	"title" => "Display Title",
	"url" => "http://yoururl.com",
	"url_target" => "_self",
	"icon" => "fa-home",
	"label_htm" => "<span>Add your custom label/badge html here</span>",
	"sub" => array() //contains array of sub items with the same format as the parent
)

*/
$page_nav = array(
	"dashboard" => array(
		"title" => "Dashboard",
		"url" => APP_URL,
		"icon" => "fa-home"
	),
	"role" => array(
        "title" => "Role",
        "icon" => "fa-bar-chart-o",
        "sub" => array(
            "listing" => array(
                "title" => "Listing",
                "url" => APP_URL."/role/list"
            ),
            "morris" => array(
                "title" => "Add New",
                "url" => APP_URL."/role/add"
            )
        )
    ),
    "modules" => array(
        "title" => "Module",
        "icon" => "fa-bar-chart-o",
        "sub" => array(
            "listing" => array(
                "title" => "Listing",
                "url" => APP_URL."/module/list"
            ),
            "morris" => array(
                "title" => "Add New",
                "url" => APP_URL."/role/add"
            )
        )
    ),
    "question" => array(
        "title" => "Questions",
        "icon" => "fa-bar-chart-o",
        "sub" => array(
            "listing" => array(
                "title" => "Listing",
                "url" => APP_URL."/question/list"
            ),
            "addnew" => array(
                "title" => "Add New",
                "url" => APP_URL."/question/add"
            )
        )
    ),
	"smartint" => array(
		"title" => "SmartAdmin Intel",
		"icon" => "fa-cube txt-color-blue",
		"sub" => array(
			"difver" => array(
		        "title" => "Different Versions",
		        "icon" => "fa-stack-overflow",
		        "url" => APP_URL."/difver.php"
		    ),
		    "applayout" => array(
		        "title" => "App Settings",
		        "icon" => "fa-cube",
		        "url" => APP_URL."/applayout.php"
		    ),
		   "doc" => array(
		        "title" => "Documentation",
		        "icon" => "fa-book",
		        "url" => "http://bootstraphunter.com/smartadmin/BUGTRACK/track_/documentation/index.html",
		        "url_target"=> "_blank"
		    ),
		   "bugtrack" => array(
		        "title" => "Bug Tracker",
		        "icon" => "fa-bug",
		        "url" => "http://bootstraphunter.com/smartadmin/BUGTRACK/track_/",
		        "url_target"=> "_blank"
		    )
		)
	)
);

//configuration variables
$page_title = "";
$page_css = array();
$no_main_header = false; //set true for lock.php and login.php
$page_body_prop = array(); //optional properties for <body>
$page_html_prop = array(); //optional properties for <html>
?>