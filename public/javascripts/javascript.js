
$(document).ready(function(){

      $("#updateImage1").hover(function(){
      	$("#updateImage2").hide();
      	$("#rightColShow").hide();
      	$("#leftColShow").hide();
      	$("#hiddenRow").show();
      	$("#updateImage").css("border","solid 1px blue");
      	$("#updateImage").css("height","400px");
      	$("#updateImage").css("overflow-y","scroll");

      	var myImage = $('<img/>');
		                 myImage.attr('width', 800);
		                 myImage.attr('height', 1318);
               			 myImage.attr('src', 'images/file-page2.png');
               			 myImage.attr( "id", "myImg" )
      	myImage.appendTo($('#updateImage'));
     	},
      	function(){
      		$("#updateImage2").stop().show();
    	});

  	$("#hiddenRow").hover(function(){

	      	},
	      	function(){
	      $("#rightColShow").stop().show();
		  $("#leftColShow").stop().show();
          $("#hiddenRow").hide();
          $("#myImg").remove();
    });

    $("#updateImage2").hover(function(){
         	$("#updateImage1").hide();
         	$("#rightColShow").hide();
		    $("#leftColShow").hide();
		    $("#hiddenRow").show();
		    $("#updateImage").css("border","solid 1px blue");
		    $("#updateImage").css("height","400px");
		    $("#updateImage").css("overflow-y","scroll");

		    var myImage = $('<img/>');
		 	             myImage.attr('width', 800);
		 	             myImage.attr('height', 1237);
		           		 myImage.attr('src', 'images/111_poster2.png');
		           		 myImage.attr( "id", "myImg" )
		    myImage.appendTo($('#updateImage'));
		    },
	      	function(){
	      $("#updateImage1").stop().show();
    });
});