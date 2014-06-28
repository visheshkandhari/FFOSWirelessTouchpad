/*
This script gets all the touch gestures from the screen and sends it to the server application through AJAX GET calls.
Contributors : Vishesh Kandhari	
*/

$(document).ready(function(e) {

	//This is supposed to lock the orientation to landscape, but doesn't seem to work.
	screen.mozLockOrientation('landscape'); 		
		
	//The touch area of the touch pad.
	var canvas = document.getElementById("canvas");	
	
	//Getting screen co-ordinates
	var screen_width = screen.width;
	var screen_height = screen.height;
	
	//Setting the canvas dimensions
	canvas.width = screen_width * 0.95;
	canvas.height = screen_height * 0.7;
	
	//Adding touch listeners to canvas
	canvas.addEventListener("touchstart", handlecanvastouch, false);
	canvas.addEventListener("touchmove", handlecanvasmove, false);
	
	//Left mouse button
	var left_click = document.getElementById("left_click");
	left_click.addEventListener("touchstart", handleleftdown, false);
	left_click.addEventListener("touchend", handleleftup, false);
	
	//Right mouse button
	var right_click = document.getElementById("right_click");
	right_click.addEventListener("touchend", handlerightup, false);
	
	//The IP address of the server machine.
	//NOTE: CHANGE THIS TO THE IP OF THE SERVER MACHINE. KEEP THE PORT NUMBER UNCHANGED
	var url_str = "192.168.206.1:1500";			
	
	//SAMPLE CODE FOR TESTING CONNECTION
	/*$("#test_button").click(function()
	{
		$.ajax({
 			type: "GET",
  			//url: 'http://192.168.206.1:1500',
			url: url_str,
  			data: "12,23",
			async: true,
  			crossDomain: true,
			success: function(data){
			return;
		  },
		  error: function(data){
			  return;
		  }
		});
	}); */   
});

//Canvas touch start handler. For simulating touch event on touchpad.
function handlecanvastouch()
{
	$.ajax({
 			type: "GET",
  			//url: 'http://192.168.206.1:1500',
			url: url_str,
  			data: "MouseDown",
			async: true,
  			crossDomain: true,
			success: function(data){
			return;
		  },
		  error: function(data){
			  return;
		  }
		});
}

//Canvas touch move handler. For simulatig drag event on touchpad.
function handlecanvasmove(evt)
{
	evt.preventDefault();
	var touches = evt.changedTouches;
	$.ajax({
 			type: "GET",
  			//url: 'http://192.168.206.1:1500',
			url: url_str,
  			data: "MouseMove@"+touches[0].pageX+":"+touches[0].pageY,
			async: true,
  			crossDomain: true,
			success: function(data){
			return;
		  },
		  error: function(data){
			  return;
		  }
		});
}

//Left mouse button touch start handler. For simulating left mouse button left mouse button press.
function handleleftdown()
{
	$.ajax({
 			type: "GET",
  			//url: 'http://192.168.206.1:1500',
			url: url_str,
  			data: "MousePress",
			async: true,
  			crossDomain: true,
			success: function(data){
			return;
		  },
		  error: function(data){
			  return;
		  }
		});	
}

//Left mouse button touch end handler. For simulating left mouse button left mouse button release.
function handleleftup()
{
	$.ajax({
 			type: "GET",
  			//url: 'http://192.168.206.1:1500',
			url: url_str,
  			data: "MouseRelease",
			async: true,
  			crossDomain: true,
			success: function(data){
			return;
		  },
		  error: function(data){
			  return;
		  }
		});
}

//Right mouse button touch start handler. For simulating mouse right click.
function handlerightup()
{
	//console.log("Left Right up");
	$.ajax({
 			type: "GET",
  			//url: 'http://192.168.206.1:1500',
			url: url_str,
  			data: "MouseRightClick",
			async: true,
  			crossDomain: true,
			success: function(data){
			return;
		  },
		  error: function(data){
			  return;
		  }
		});
}

