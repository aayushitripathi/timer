window.onload = function () {
  
    let minutes = 00; 
    let sec = 00; 
    let hrs= 00;
    const hrss = document.getElementById("hrs");
    const mins = document.getElementById("mins");
    const secs = document.getElementById("secs");
    const buttonStart = document.getElementById('start');
    const buttonStop = document.getElementById('pause');
    const buttonReset = document.getElementById('reset');
    const showhr=document.getElementById('hour');
    const showmin=document.getElementById('min');
    const showsec=document.getElementById('sec');
    const show=document.getElementById('display');
    const audios=document.querySelector("audio");
    let time ;
    const addtoggle=document.getElementById("toggle");
    const addtoggle2=document.getElementById("toggle2")
  
    buttonStart.onclick = function() {
      
       clearInterval(time);
       time = setInterval(starts, 1000);
    }
    
      buttonStop.onclick = function() {
         clearInterval(time);
    }
    
  
    buttonReset.onclick = function() {
        clearInterval(time);
        hrs="00"
        minutes = "00";
        sec="00"
         mins.innerHTML = minutes;
         secs.innerHTML = sec;
         showhr.value="";
         showmin.value="";
         showsec.value="";
         audios.pause();
         show.innerHTML="";
     }
    const starts=()=>{
      sec++; 
      // show.innerHTML=showhr.value;
      if(showhr.value==hrs && showmin.value==minutes && showsec.value==sec){
        show.innerHTML="Time's Up!";
        audios.play();
        clearInterval(time);
        hrs="00"
        minutes = "00";
        sec="0"
         mins.innerHTML = minutes;
         secs.innerHTML = sec;
        
      }
     

      if(sec <= 9){
        secs.innerHTML="0"+sec;
      }
      
      if (sec > 9){
        secs.innerHTML=sec;
        
      } 
      
      if (sec >= 60) {
        console.log("minutes");
        minutes++;
        mins.innerHTML="0" + minutes;
        tens = 0;
      }
      
      if (minutes >=60){
        hrs++
        hrss.innerHTML=hrs;
        minutes=0;
      }
    
    }

    const modes=()=>{
        document.body.style.backgroundColor="#87A7B3";
        document.getElementById("start").style.backgroundColor="#CCC1FF";
        document.getElementById("pause").style.backgroundColor="#CCC1FF";
        document.getElementById("reset").style.backgroundColor="#CCC1FF";
        document.getElementById("toggle").style.backgroundColor="#CCC1FF";
        document.getElementById("toggle2").style.backgroundColor="#CCC1FF";
    }
    const modes2=()=>{
        document.body.style.backgroundColor="#2c061fb6";
        document.getElementById("start").style.backgroundColor="#374045";
        document.getElementById("pause").style.backgroundColor="#374045";
        document.getElementById("reset").style.backgroundColor="#374045";
        document.getElementById("toggle").style.backgroundColor="#374045";
        document.getElementById("toggle2").style.backgroundColor="#374045";
    }
  addtoggle.addEventListener('click',modes);  
  addtoggle2.addEventListener('click',modes2);  
  
  }
