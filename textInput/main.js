function display(){
    var text = document.getElementById("inps").value;
    if(Number.isInteger(parseInt(text))){
        document.getElementById("output").innerHTML = ("The given input is a number<br />Reverse: "+text.split("").reverse().join(""))
    }else{
        for(i=0; i<text.length;i++){
            lt = text.charAt(i).toLowerCase();
            if(lt == 'a' || lt == 'e' || lt== 'i' || lt == 'o' || lt == 'u'){
                console.log(i)
                document.getElementById("output").innerHTML = "The given input is a string<br />"+text.charAt(i) +" is the leftmost vowel at position: " + (i);
                console.log(text.charAt(i));
                break;
            }
        }
        if (i == text.length)
        document.getElementById("output").innerHTML = "No vowels found"
    }
}