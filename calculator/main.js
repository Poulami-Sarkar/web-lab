var res =''
function update(){
    document.getElementById('text-box').value = res;
}
function buttonfnc(btn){
    res+=btn.value;
    console.log(res);
    update();
}

function equal(){
    res = eval(res);
    console.log(res);
    update();
}
function ac(){
    res =""
    update();
}

function bk(){
    res = res.slice(0,-1);
    update();
}

function changed(val){
    res = val.value;
    update();
}
