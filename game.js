 var buttonColors=["green","red","blue","yellow"];
console.log(buttonColors);
var randomChosenColor;
var gamePattern=[];var clickPattern=[];var lvl=0;var start=false;
/*for starting game*/
document.addEventListener("keypress",function(){
  if(start==false)
  {$("h1").html("LEVEL"+lvl);
createRandom();
start=true;
}
});
/*for sound*/


function animatePress(clickedColor)
{
  $("."+clickedColor).addClass("pressed");
  setTimeout(function(){$("."+clickedColor).removeClass("pressed")},100);
}
/*TO CHECK ANSWER*/
function checkAnswer(l)
{
  if(clickPattern[l]==gamePattern[l])
  {
    console.log("success");
    if(clickPattern.length==gamePattern.length)
    {
      setTimeout(function(){
        createRandom();

      },100);
    }
  }
  else
  { $("h1").html("GAME OVER,PRESS ANY KEY TO RESTART");
    var aud=new Audio("sounds/wrong.mp3");aud.play();$("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },500);
    restart();
  }
}
/*TO GET CLICKED PATTERN*/
  $(".btn").click(function() {

  var userChosenColor=$(this).attr("id");console.log(userChosenColor);clickPattern.push(userChosenColor);
animatePress(userChosenColor);
   playSound(userChosenColor);
   checkAnswer(clickPattern.length-1);

  });

/*TO GENERATE THE RANDOM COLOR*/

function createRandom()
  {lvl++;
    clickPattern=[];
    $("h1").html("LEVEL "+lvl);
     var x=Math.random();
  x=x*4;
  x=Math.floor(x);
  randomChosenColor=buttonColors[x];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  $("#"+randomChosenColor).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColor);
}
function playSound(name)
{
  var aud=new Audio("sounds/"+name+".mp3");aud.play();
}
function restart()
{
  lvl=0;gamePattern=[];clickPattern=[];start=false;
}
