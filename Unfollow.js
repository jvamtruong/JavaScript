// source: https://www.quora.com/How-do-I-unfollow-everyone-on-Facebook-at-once

var a = document.getElementsByClassName("_5u3n");
var x = 0;
var time = 300;
function amol(){
	a[x].click();
    if(x++ < a.length){
		setTimeout(amol, time);
    }
}
amol();
