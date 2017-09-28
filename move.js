var canvas;
var ctx;

//role
var role_x=200;
var role_y=200;
var role_width=32;
var role_height=48;
var role_direction=0;//value[0,3];
var role_status=0;//value[0,3];
//box
var box_x=0;
var box_y=0;
var box_width=1200;
var box_height=700;
//
var bound_left=0;
var bound_right=box_x+box_width-role_width;
var bound_top=0;
var bound_bottom=box_y+box_height-role_height;

var hen1=Math.random()*(800-100);
var zong1=Math.random()*(400-150);

var bgimg=[newImg("bg.png"),newImg("bg1.png"),newImg("bg2.png"),newImg("bg3.png")];
var jian=[newImg("cai.png"),newImg("jiang.png"),newImg("dan.png"),newImg("nai.png")];
function newImg(src)
{
        var obj = new Image();
        obj.src = src;
        return obj;
}
var cur=0;
var unit=10;

var i=-45;
var seed;
var stop;
seed=function()
{
  ctx.lineWidth="5";
  ctx.strokeStyle="rgb(0,0,0)";
  ctx.beginPath();
  ctx.strokeRect(box_x,box_y,box_width,box_height);
  var seeding=new Image();
  seeding.src="seeding.png";
//  var bgimg=new Image();
 //bgimg.src="bg.png";
  seeding.onload=function()
  {
    ctx.drawImage(bgimg[cur],0,0);
    ctx.drawImage(jian[cur],hen1,zong1);
    ctx.fillText("Coins:" +coin,52,32);
    ctx.drawImage(seeding,i,0,40,48,role_x,role_y,40,48);
  };
  i = i+45;
};
var water;
var j=-36;
var stop1;
water=function()
{
  ctx.lineWidth="5";
  ctx.strokeStyle="rgb(0,0,0)";
  ctx.beginPath();
  ctx.strokeRect(box_x,box_y,box_width,box_height);
  var watering=new Image();
  watering.src="water.png";
 // var bgimg=new Image();
  //bgimg.src="bg.png";
  watering.onload=function()
  {
    ctx.drawImage(bgimg[cur],0,0);
    ctx.drawImage(jian[cur],hen1,zong1);
    ctx.fillText("Coins:" +coin,52,32);
    ctx.drawImage(watering,j,0,35,48,role_x,role_y,35,48);
  };
  j=j+36;
};
var hoe;
var x=-36;
var y;
var stop2;
hoe=function()
{
  ctx.lineWidth="5";
  ctx.strokeStyle="rgb(0,0,0)";
  ctx.beginPath();
  ctx.strokeRect(box_x,box_y,box_width,box_height);
  var hoeing=new Image();
  hoeing.src="hoe.png";
 // var bgimg=new Image();
  //bgimg.src="bg.png";
  hoeing.onload=function()
  {
    ctx.drawImage(bgimg[cur],0,0);
    ctx.drawImage(jian[cur],hen1,zong1);
    ctx.fillText("Coins:" +coin,52,32);
    ctx.drawImage(hoeing,x,y,40,48,role_x,role_y,40,48);
  };
  x=x+36;
};
var harvest;
var s=-42;
var t;
var stop3;
harvest=function()
{
  ctx.lineWidth="5";
  ctx.strokeStyle="rgb(0,0,0)";
  ctx.beginPath();
  ctx.strokeRect(box_x,box_y,box_width,box_height);
  var harvesting=new Image();
  harvesting.src="harvest.png";
 // var bgimg=new Image();
  //bgimg.src="bg.png";
  harvesting.onload=function()
  {
    ctx.drawImage(bgimg[cur],0,0);
    ctx.drawImage(jian[cur],hen1,zong1);
    ctx.fillText("Coins:" +coin,52,32);
    ctx.drawImage(harvesting,s,t,39,50,role_x,role_y,39,50);
  };
  s=s+42;
}
var carry;
var m=-28;
var stop5;
carry=function()
{
  ctx.lineWidth="5";
  ctx.strokeStyle="rgb(0,0,0)";
  ctx.beginPath();
  ctx.strokeRect(box_x,box_y,box_width,box_height);
  var carrying=new Image();
  carrying.src="carry.png";
 // var bgimg=new Image();
  //bgimg.src="bg.png";
  carrying.onload=function()
  {
    ctx.drawImage(bgimg[cur],0,0);
    ctx.drawImage(jian[cur],hen1,zong1);
    ctx.fillText("Coins:" +coin,52,32);
    ctx.drawImage(carrying,m,0,20,35,role_x,role_y,20,35);
  };
  m=m+28;
}

var stop4;
var coin=0;
function draw_role()
{
        //ctx.clearRect(box_x,box_y,box_width,box_height);
        ctx.lineWidth="5";
        ctx.strokeStyle="rgb(0,0,0)";
        ctx.beginPath();
        ctx.strokeRect(box_x,box_y,box_width,box_height);
        var img=new Image();
        img.src="move.png";
       // var bgimg=new Image();
	    //bgimg.src="bg.png";
        img.onload=function()
        {
            ctx.drawImage(bgimg[cur],0,0);
            ctx.drawImage(jian[cur],hen1,zong1);
            ctx.drawImage(img,role_status*role_width,role_direction*role_height,role_width,role_height,role_x,role_y,role_width,role_height);
            ctx.fillText("Coins:" +coin,52,32);
        };
        if(flag==1)
        {
          var gan=new Image();
          gan.src="gan.png";
          img.onload=function()
          {
            ctx.drawImage(bgimg[cur],0,0);
            ctx.drawImage(jian[cur],hen1,zong1);
            ctx.fillText("Coins:" +coin,52,32);
            ctx.drawImage(gan,role_x+3,role_y+45);
            ctx.drawImage(img,role_status*role_width,role_direction*role_height,role_width,role_height,role_x,role_y,role_width,role_height);
          };
        }
       if(flag==2)
        {
          var zhong=new Image();
          zhong.src="zhong.png";
          img.onload=function()
          {
            ctx.drawImage(bgimg[cur],0,0);
            ctx.drawImage(jian[cur],hen1,zong1);
            ctx.fillText("Coins:" +coin,52,32);
            ctx.drawImage(zhong,role_x+3,role_y+45);
            ctx.drawImage(img,role_status*role_width,role_direction*role_height,role_width,role_height,role_x,role_y,role_width,role_height);
          };
        }
        if(flag==3)
        {
         stop4=setInterval(growing,1000);
        }
        if(flag==0)
        {
          hen=-14;
        }
}
function fanqie()
{
  var shi=new Image();
    shi.src="shi.png";
    var img=new Image();
        img.src="move.png";
        //var bgimg=new Image();
	    //bgimg.src="bg.png";
    img.onload=function()
    {
      ctx.drawImage(bgimg[cur],0,0);
      ctx.drawImage(jian[cur],hen1,zong1);
      ctx.fillText("Coins:" +coin,52,32);
      ctx.drawImage(shi,role_x+3,role_y+45);
      ctx.drawImage(img,role_status*role_width,role_direction*role_height,role_width,role_height,role_x,role_y,role_width,role_height);
    };
}
var hen=-14;
var zong=20;
var growing=function()
{
  var veg=new Image();
  veg.src="field.png";
  var img=new Image();
  img.src="move.png";
  //var bgimg=new Image();
  //bgimg.src="bg.png";
  img.onload=function()
  {
    ctx.drawImage(bgimg[cur],0,0);
    ctx.drawImage(jian[cur],hen1,zong1);
    ctx.fillText("Coins:" +coin,52,32);
    //ctx.drawImage(shi,hen1,zong1);
    ctx.drawImage(veg,hen,zong,16,16,role_x+3,role_y+45,16,16);
    ctx.drawImage(img,role_status*role_width,role_direction*role_height,role_width,role_height,role_x,role_y,role_width,role_height);
  };
  hen=hen+19;
}
var flag;
function move_role(event)
{
	var keyCode;
	if(event==null)
	{
		keyCode=window.event.keyCode;
		window.event.preventDefault();
	}
	else
	{
		keyCode=event.keyCode;
		event.preventDefault();
	}
	var cur_direction;
	switch(keyCode)
	{
            case 37://left
            //flag=4;
            cur_direction=1;
            role_x=role_x-unit;
            if(role_x<bound_left)
            role_x=bound_left;
            if(role_direction==cur_direction)
	{
		role_status=(role_status+1)%4;
	}
	else
	{
		role_direction=cur_direction;
		role_status=0;
	}
            draw_role();
            break;
            case 38://up
            //flag=4;
            cur_direction=3;
            role_y=role_y-unit;
            if(role_y<bound_top)
            role_y=bound_top;
            if(role_direction==cur_direction)
	{
		role_status=(role_status+1)%4;
	}
	else
	{
		role_direction=cur_direction;
		role_status=0;
	}
            draw_role();
            break;
            case 39://right
            //flag=4;
            cur_direction=2;
            role_x=role_x+unit;
            if(role_x>bound_right)
            role_x=bound_right;
            if(role_direction==cur_direction)
	{
		role_status=(role_status+1)%4;
	}
	else
	{
		role_direction=cur_direction;
		role_status=0;
	}
            draw_role();
            break;
            case 40://down
            //flag=4;
            cur_direction=0;
            role_y=role_y+unit;
            if(role_y>bound_bottom)
            role_y=bound_bottom;
            if(role_direction==cur_direction)
	{
		role_status=(role_status+1)%4;
	}
	else
	{
		role_direction=cur_direction;
		role_status=0;
	}
            draw_role();
            break;
            case 49://0
            cur=0;
            flag=4;
            draw_role();
            break;
            case 50://1
            cur=1;
            flag=4;
            draw_role();
            break;
            case 51://2
            cur=2;
            flag=4;
            draw_role();
            break;
            case 52://3
            cur=3;
            flag=4;
            draw_role();
            break;
            case 65://hoe
            if(role_direction==0)
            {
             y=0;
             if(x<144)
             {
               stop2=setInterval(hoe,250);
             }
            }
            if(role_direction==1||role_direction==2)
            {
             y=60;
             if(x<144)
             {
               stop2=setInterval(hoe,250);
             }
            }
            if(role_direction==3)
            {
             y=120;
             if(x<144)
             {
               stop2=setInterval(hoe,250);
             }
            }
            flag=1;
            break;
            case 68://harvest
            if(role_direction==0)
            {
             t=10;
             if(s<168)
             {
               stop3=setInterval(harvest,250);
             }
            }
            if(role_direction==1||role_direction==2)
            {
             t=140;
             if(s<168)
             {
               stop3=setInterval(harvest,250);
             }
            }
            if(role_direction==3)
            {
             t=80;
             if(s<168)
             {
               stop3=setInterval(harvest,250);
             }
            }
            fanqie();
            flag=0;
            coin=coin+1;
            break;
            case 83://seed
            if(i<135)
            {
              stop=setInterval(seed,250);
            }
            flag=2;
            break;
            case 87://water
           if(j<108)
            {
              stop1=setInterval(water,250);
            }
            flag=3;
            break;
            case 90://carry
            hen1=Math.random()*(box_width-10);
            zong1=Math.random()*(box_height-10);
            coin=coin+1;
            flag=4;
            if(m<56)
            {
              stop5=setInterval(carry,200);
            }
            break;
            default:
	}
}
function judgeseed()
{
  if(i==135)
  {
    clearInterval(stop);
    draw_role();
    i=-45;
  }
}
function judgewater()
{
  if(j==108)
  {
    clearInterval(stop1);
    draw_role();
    j=-36;
  }
}
function judgehoe()
{
  if(x==144)
  {
    clearInterval(stop2);
    draw_role();
    x=-36;
  }
}
function judgeharvest()
{
  if(s == 168)
  {
    clearInterval(stop3);
    draw_role();
    s=-42;
  }
}
function judgecarry()
{
  if(m==56)
  {
    clearInterval(stop5);
    draw_role();
    m=-28;
  }
}
function judgegrow()
{
  if(hen==62)
  {
    clearInterval(stop4);
    fanqie();
  }
}
function duihua()
{
  var duihua1=new Image();
	duihua1.src="duihua1.png";
	duihua1.onload=function()
	{
	  ctx.drawImage(duihua1,0,390);
	};
}
function init()
{
	canvas=document.getElementById("canvas");
	ctx=canvas.getContext('2d');
	window.addEventListener('keydown',move_role,false);
	setInterval(judgeseed,250);
	setInterval(judgewater,250);
	setInterval(judgehoe,250);
	setInterval(judgeharvest,250);
	setInterval(judgecarry,200);
	setInterval(judgegrow,1000);
        ctx.clearRect(box_x,box_y,box_width,box_height);
        ctx.save();
        ctx.lineWidth="5";
        ctx.strokeStyle="rgb(0,0,0)";
        ctx.beginPath();
        ctx.strokeRect(box_x,box_y,box_width,box_height);
        draw_role();
        duihua();
        ctx.restore();
}