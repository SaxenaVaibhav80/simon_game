// var clicked_by_player=[];
// var start=0;
// var auto_click=[];
// var arr_pre_rec=[0,0,0,0];
// var self_blink=["green","red","blue","yellow"];
// var new_self_blink=["div1new","div2new","div3new","div4new"];
// let level=1;
// function on_click_start()
// {
//   start=start+1;
//   document.getElementById("button_start").style.visibility="hidden"
//    animation_applied();
//    setTimeout(animation_removed,100); 
//    document.getElementById("game_head").innerHTML="LET'S START" ;
//    btn_pressed();
// }
// function animation_applied()
// {
//     var btn_animation=document.getElementById("button_start");
//     btn_animation.classList.add("btn_click_animation");
//     btn_animation.removeAttribute("id");
// }
// function animation_removed()
// {
//     var btn2_animation=document.getElementsByClassName("btn_click_animation");
//     btn2_animation[0].setAttribute("id","button_start");
// }
// function play_audio(music)
// {
//    document.getElementById(music).play();
// }

// function btn_pressed()
// {
  
//   var value=Math.floor(Math.random()*4);
//   var  t=self_blink[value];
//   auto_click.push(t);
//   document.getElementsByClassName(t)[0].classList.add(t+1);
//   setTimeout(function (){
//     document.getElementsByClassName(t)[0].classList.remove(t+1);
//   },100)
//   play_audio(t);

// }

//  function mouse_event_manual(divs)
// {
//  if(start==1){ 
//   clicked_by_player.push(divs);
//   a=document.getElementsByClassName(divs)[0];
//   a.classList.add(divs+1);
//   play_audio(divs);
//   setTimeout(function (){
//     document.getElementsByClassName(divs)[0].classList.remove(divs+1);
//   },100)
//   result((clicked_by_player.length)-1);
// }
// }
// function result(check)
// { 
// if(clicked_by_player[check]===auto_click[check] ){
//   if(clicked_by_player.length===auto_click.length)
//     {
//       document.getElementById("game_head").innerHTML="LEVEL"+" "+level++ ;
//       clicked_by_player=[]
//       setTimeout(btn_pressed,2000);
//     }
//   }
  
// else{
//     document.getElementById("game_head").innerHTML="WRONG" ;
//     document.getElementById("wrong").play()
//     document.querySelector("body").style.backgroundColor="red";

//     setTimeout(function()
//     {
//       document.querySelector("body").style.backgroundColor="#151580";
//     },200);
//     setTimeout(function()
//     {
//       document.getElementById("game_head").innerHTML="YOU LOOSE!!"+" "+"REFRESH TO TRY AGAIN" ;
//     },150)
//     auto_click=[];
//     level=1;
//     start=0;
//   }
// }


// minify the js ----------------------------->>>>>>>>>>
var clicked_by_player=[],start=0,auto_click=[],arr_pre_rec=[0,0,0,0],self_blink=["green","red","blue","yellow"],new_self_blink=["div1new","div2new","div3new","div4new"];let level=1;function on_click_start(){start+=1,document.getElementById("button_start").style.visibility="hidden",animation_applied(),setTimeout(animation_removed,100),document.getElementById("game_head").innerHTML="LET'S START",btn_pressed()}function animation_applied(){var e=document.getElementById("button_start");e.classList.add("btn_click_animation"),e.removeAttribute("id")}function animation_removed(){document.getElementsByClassName("btn_click_animation")[0].setAttribute("id","button_start")}function play_audio(e){document.getElementById(e).play()}function btn_pressed(){var e=Math.floor(4*Math.random()),t=self_blink[e];auto_click.push(t),document.getElementsByClassName(t)[0].classList.add(t+1),setTimeout((function(){document.getElementsByClassName(t)[0].classList.remove(t+1)}),100),play_audio(t)}function mouse_event_manual(e){1==start&&(clicked_by_player.push(e),a=document.getElementsByClassName(e)[0],a.classList.add(e+1),play_audio(e),setTimeout((function(){document.getElementsByClassName(e)[0].classList.remove(e+1)}),100),result(clicked_by_player.length-1))}function result(e){clicked_by_player[e]===auto_click[e]?clicked_by_player.length===auto_click.length&&(document.getElementById("game_head").innerHTML="LEVEL "+level++,clicked_by_player=[],setTimeout(btn_pressed,2e3)):(document.getElementById("game_head").innerHTML="WRONG",document.getElementById("wrong").play(),document.querySelector("body").style.backgroundColor="red",setTimeout((function(){document.querySelector("body").style.backgroundColor="#151580"}),200),setTimeout((function(){document.getElementById("game_head").innerHTML="YOU LOOSE!! REFRESH TO TRY AGAIN"}),150),auto_click=[],level=1,start=0)}