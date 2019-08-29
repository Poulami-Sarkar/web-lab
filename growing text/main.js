var delayInMilliseconds = 1000; //1 second

function grow(){
    d =1;
    for(i = 0; i < 10; i++) {
        setTimeout(function () {
          console.log(d);
          d++;
        }, 3000);
        //console.log(i);
    }/*
    while (true){
        //sleep(5000);
        i =0;
        setTimeout(function() {
            document.getElementById('growing-text').style.fontSize = i.toString()+"px";
            //your code to be executed after 1 second
            console.log(i);
            i++;
          }, delayInMilliseconds);   

    }*/
}
var i=5;
var grow =1;
var interval = setInterval(function(){ 
    if (grow ==1)
        if (i<50)
            i++;
        else {
            grow =0;
            document.getElementById('growing-text').style.color = "blue";
        }
    else 
        if (i>5)
            i--;
        else{
            grow =1;
            document.getElementById('growing-text').style.color = "red";
        }
    document.getElementById('growing-text').style.fontSize = i.toString()+"px"; 
  }, 100);
/*
  setTimeout(function() { 
    clearInterval(interval); 
  }, 10000);
  */