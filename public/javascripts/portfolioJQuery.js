///  portfolioJQuery.js ; Liliya Artyukh ;  page that provides interactive functionality for user using jQuery            -->

/// <reference path="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" >

function main(){

    $("#javaEx").on("mouseover", function(){
		clearAll.clear();
	 	$("#javaDetails").css('display', 'block');
 		$("#javaDetails").css('position', 'absolute');
  		$("#javaDetails").css('z-index', '1');
   	});

    $("#javaDetails").on("mouseout", function(){
	   	$("#javaDetails").css('display', 'none');
    });


    $("#dataEx").on("mouseover", function(){
		clearAll.clear();
		$("#dataDetails").css('display', 'block');
		$("#dataDetails").css('position', 'absolute');
  		$("#dataDetails").css('z-index', '1');
   	});
    $("#dataDetails").on("mouseout", function(){
		$("#dataDetails").css('display', 'none');
    });

    $("#testEx").on("mouseover", function(){
		clearAll.clear();
	   	$("#testDetails").css('display', 'block');
		$("#testDetails").css('position', 'absolute');
		$("#testDetails").css('z-index', '1');
	});

	$("#testDetails").on("mouseout", function(){
	   	$("#testDetails").css('display', 'none');
    });

    $("#webEx").on("mouseover", function(){
		clearAll.clear();
		$("#webDetails").css('display', 'block');
		$("#webDetails").css('position', 'absolute');
		$("#webDetails").css('z-index', '1');
	});
    $("#webDetails").on("mouseout", function(){
	    $("#webDetails").css('display', 'none');
    });

    $("#docEx").on("mouseover", function(){
		clearAll.clear();
		$("#docDetails").css('display', 'block');
		$("#docDetails").css('position', 'absolute');
		$("#docDetails").css('z-index', '1');
	 });
	 $("#docDetails").on("mouseout", function(){
	    $("#docDetails").css('display', 'none');
     });

     $("#csharpEx").on("mouseover", function(){
		clearAll.clear();
	    $("#csharpDetails").css('display', 'block');
	    $("#csharpDetails").css('position', 'absolute');
		$("#csharpDetails").css('z-index', '1');
	 });
	 $("#csharpDetails").on("mouseout", function(){
		$("#csharpDetails").css('display', 'none');
     });

clearAll ={
	clear: (function () {
	  $("#javaDetails").css('display', 'none');
	  $("#dataDetails").css('display', 'none');
	  $("#testDetails").css('display', 'none');
	  $("#webDetails").css('display', 'none');
      $("#docDetails").css('display', 'none');
	  $("#csharpDetails").css('display', 'none');
})};

 $("#collegeInfo").on("mouseover", function(){
	  $("#collegeVisible").css('display', 'none');
	    $("#collegeHidden").css('display', 'block');
	    $("#collegeHidden").css('position', 'absolute');
		$("#collegeHidden").css('z-index', '1');
	 });
	 $("#collegeInfo").on("mouseout", function(){
		$("#collegeVisible").css('display', 'block');
			$("#collegeHidden").css('display', 'none');
     });

     $("#univInfo").on("mouseover", function(){
	 	  $("#univVisible").css('display', 'none');
	 	    $("#univHidden").css('display', 'block');
	 	    $("#univHidden").css('position', 'absolute');
	 		$("#univHidden").css('z-index', '1');
	 	 });
	 	 $("#univInfo").on("mouseout", function(){
	 		$("#univVisible").css('display', 'block');
	 			$("#univHidden").css('display', 'none');
     });


       $("#socialMediaIconsF").on("mouseover", function(){
	 	 	  $("#facebookVisible").css('display', 'none');
	 	 	    $("#facebookHidden").css('display', 'block');
	 	 	    $("#facebookHidden").css('position', 'relative');
	 	 		$("#facebookHidden").css('z-index', '1');
	 	 	 });
	 	 	 $("#socialMediaIconsF").on("mouseout", function(){
	 	 		$("#facebookVisible").css('display', 'block');
	 	 			$("#facebookHidden").css('display', 'none');
     });


       $("#socialMediaIconsL").on("mouseover", function(){
	 	 	  $("#linkedinVisible").css('display', 'none');
	 	 	    $("#linkedinHidden").css('display', 'block');
	 	 	    $("#linkedinHidden").css('position', 'relative');
	 	 		$("#linkedinHidden").css('z-index', '1');
	 	 	 });
	 	 	 $("#socialMediaIconsL").on("mouseout", function(){
	 	 		$("#linkedinVisible").css('display', 'block');
	 	 			$("#linkedinHidden").css('display', 'none');
     });


       $("#socialMediaIconsG").on("mouseover", function(){
	 	 	  $("#googleVisible").css('display', 'none');
	 	 	    $("#googleHidden").css('display', 'block');
	 	 	    $("#googleHidden").css('position', 'relative');
	 	 		$("#googleHidden").css('z-index', '1');
	 	 	 });
	 	 	 $("#socialMediaIconsG").on("mouseout", function(){
	 	 		$("#googleVisible").css('display', 'block');
	 	 			$("#googleHidden").css('display', 'none');
     });

   if ($(window).width()< 752){
   	   $("#stayConnectedText").css('display', 'none');
	   $("#socialMediaIconsF").css('margin-left', '50px');
}
    $(window).resize(function() {
	  if ($(window).width()< 752){
	   $("#stayConnectedText").css('display', 'none');
	   var percentForLeftMargin = 33;
	    if ($(window).width()< 700 && $(window).width()> 570){
			percentForLeftMargin = 30;
		}
		  if ($(window).width()< 570 && $(window).width()> 430){
					percentForLeftMargin = 17;
		}
		  if ($(window).width()< 430 && $(window).width()> 200){
							percentForLeftMargin = 7;
		}
	      	    var marginLeftFacebook = ($(window).width()*percentForLeftMargin)/100;
		  	   $("#socialMediaIconsF").css('margin-left', marginLeftFacebook+'px');

   }else if ($(window).width()> 752){

	   $("#stayConnectedText").css('display', 'block');
	      $("#socialMediaIconsF").css('margin-left', '0px');
   }
});








var b = 'false';

if (getQueryVariable('isComingFromMobile')== 'true'){
 b = 'true';
}
console.log("b from the beginning is  >>>>>>>>>>>>  " + b);
var myScript = document.getElementById("scriptcontainer").getElementsByTagName("script");
if (b=='true'){
	$("#scriptcontainer").css('display', 'none');
myScript.src="" ;
console.log("the string from query if true     >>>>>>>>>>>>  "  + myScript.src);
}else {
	//myScript.src="scripts/detectmobilebrowser.js" ;
console.log("the string from query if false    3 >>>>>>>>>>>>  "  + myScript.src);
}

function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++)
  {
    var pair = vars[i].split("=");
    if (pair[0] == variable)
    {
		console.log("the string from query is  " + pair[1] );
      return pair[1];
    }
  }
  return -1; //not found
}


var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
 if (mobile && b == 'false') {
    document.location = "http://studentweb.cencol.ca/lartyukh/portfolioWebsite/myMobileSite/index.html";
    console.log("document.location  = " + document.location  );
 }
  }