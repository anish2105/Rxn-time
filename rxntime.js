window.onload = appear();
var clicked;
var start;
var total;
function disappear(){
  document.getElementById('shapes').style.display='none';
  clicked=Date.now();
  var rxntime = (clicked - start)/1000;
  document.getElementById('rxntime').innerHTML="Your reaction time is = "+rxntime;
  var ran= Math.floor(Math.random() * 2);
  setTimeout(appear,ran*1000);

}

function appear(){
  var randtop=Math.random()*300;
  var randleft=Math.random()*300;
  var randheight=(Math.random()*200)+10;
  var randwidth=(Math.random()*200)+10;
  var randcolor="#" + ((1<<24)*Math.random() | 0).toString(16);
  var randcurve = Math.random();
  if(randcurve<0.5){
    document.getElementById('shapes').style.borderRadius = 25+'px';
  }else{
    document.getElementById('shapes').style.borderRadius = 0+'px';
  }
  document.getElementById('shapes').style.top = randtop+'px';
  document.getElementById('shapes').style.left = randtop+'px';
  document.getElementById('shapes').style.height = randheight+'px';
  document.getElementById('shapes').style.width = randwidth+'px';
  document.getElementById('shapes').style.display='block';
  document.getElementById('shapes').style.backgroundColor=randcolor;
  start = Date.now();
}

function stop(){
  document.getElementById('shapes').style.display='none';

}
