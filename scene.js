var canvas;
var ctx;
var keyCode;
var a;
var bgimg1 = new Image();
bgimg1.src="bg1.jpg";
function scene()
{
  canvas=document.getElementById("canvas");
  ctx=canvas.getContext("2d");
  bgimg1.onload=function(){
    ctx.drawImage(bgimg1,0,0);
    a=self.setInterval(start, 200); 
  } 
  window.addEventListener('keydown',changescene,false);
}

function changescene(event)
{
  keyCode=event.keyCode;
    if(keyCode==13)
    {
      clearInterval(a);
      init();
    }
}
var r=10;
var start = function() {  
  
          ctx.drawImage(bgimg1, 0, 0);  
          ctx.globalCompositeOperation = "source-over";  
          ctx.font = "30px fantasy";  
          ctx.textAlign = "center";  
          ctx.fillStyle = "#FF0000";  
          ctx.fillText("press enter to start",r,475);  
          if(r<=300)
          {
             r = r + 10;  
          }
        }  
       