
<!DOCTYPE html>
<html>
<head>
</head>
<body onload="populate_table()">
<table id='table' border="2">


</table>
<script>

function populate_table(){
    var i;
    data ="<tr>\
    <th>Number</th>\
    <th>Square</th>\
    <th>Cube</th>\
    </tr>"
    for (i = 0; i <=10; i++) { 
        data+='<tr><td>'+i+'</td><td>'+i*i+'</td><td>'+i*i*i+'</td></tr>'
    }
    document.getElementById("table").innerHTML =data;
}
</script>
</body>
</html>
