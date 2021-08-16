var total=0;
document.getElementById('totalsum').innerText=total;
var wallet=10000;
document.getElementById('wallet').innerText=wallet;
var stuff="";
document.getElementById('stuff').innerText=stuff;
function bigMAc(){
  total=total+2;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-2;
  document.getElementById('wallet').innerText=wallet;
  stuff+="Big Mac        x1 \n";
  document.getElementById('stuff').innerText=stuff;


}
function flipFlops(){
  total=total+3;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-3;
  document.getElementById('wallet').innerText=wallet;

  stuff+="flip Flops        x1 \n";
  document.getElementById('stuff').innerText=stuff;
}
function cocaCola(){
  total=total+5;
  document.getElementById('totalsum').innerText=total;
  
  wallet=wallet-5;
  document.getElementById('wallet').innerText=wallet;
  stuff+="Coca Cola        x1 \n";
  document.getElementById('stuff').innerText=stuff;

}
function movieTicket(){
  total=total+12;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-12;
  document.getElementById('wallet').innerText=wallet;
  stuff+="movie ticket        x1 \n";
  document.getElementById('stuff').innerText=stuff;


}
function book(){
  total=total+15;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-15;
  document.getElementById('wallet').innerText=wallet;
  stuff+="book        x1 \n";
  document.getElementById('stuff').innerText=stuff;


}
function lobster(){
  total=total+45;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-45;
  document.getElementById('wallet').innerText=wallet;
  stuff+="lobster dinner        x1 \n";
  document.getElementById('stuff').innerText=stuff;

}
function videoGame(){
  total=total+60;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-60;
  document.getElementById('wallet').innerText=wallet;
  stuff+="video game        x1 \n";
  document.getElementById('stuff').innerText=stuff;


}
function amazon(){
  total=total+99;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-99;
  document.getElementById('wallet').innerText=wallet;
  stuff+="amazon echo        x1 \n";
  document.getElementById('stuff').innerText=stuff;


}
function airJordan(){
  total=total+125;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-125;
  document.getElementById('wallet').innerText=wallet;
  stuff+="air jordan        x1 \n";
  document.getElementById('stuff').innerText=stuff;


}
function netflix(){
  total=total+100;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-100;
  document.getElementById('wallet').innerText=wallet;

stuff+="A year of netflix        x1 \n";
document.getElementById('stuff').innerText=stuff;
}


function airpods(){
  total=total+199;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-199;
  document.getElementById('wallet').innerText=wallet;
  stuff+="airpods        x1 \n";
  document.getElementById('stuff').innerText=stuff;



}
function Gconsole(){
  total=total+299;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-299;
  document.getElementById('wallet').innerText=wallet;
  stuff+="gaming console        x1 \n";
  document.getElementById('stuff').innerText=stuff;


}
function Drone(){
  total=total+350;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-350;
  document.getElementById('wallet').innerText=wallet;
  stuff+="drone        x1 \n";
  document.getElementById('stuff').innerText=stuff;


}
function smartp(){
  total=total+699;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-699;
  document.getElementById('wallet').innerText=wallet;
  stuff+="smart phone        x1 \n";
  document.getElementById('stuff').innerText=stuff;



}
function bike(){
  total=total+800;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-800;
  document.getElementById('wallet').innerText=wallet;

  stuff+="bike        x1 \n";
  document.getElementById('stuff').innerText=stuff;


}
if(wallet<1000){
  alert("are you sure you want to spend more ?");
}
