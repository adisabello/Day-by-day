

var now = luxon.DateTime.now();
var dateString = now.toLocaleString({ month: 'long', day: 'numeric' })
$("#currentDay").text(now.toLocaleString({ weekday: 'long' })+", "+dateString)

var currHour = luxon.DateTime.now().c.hour;

for(var i = 8; i < 18; i++){
    if(i < currHour){
        var id = i+"";
        $("#"+id).css("background-color","grey");
    }else if(i == currHour){
        var id = i+"";
        $("#"+id).css("background-color","red");
        $("#"+id).css("color","white");
    }else{
        var id = i+"";
        $("#"+id).css("background-color","green");
        $("#"+id).css("color","white");
    }
}

function loadSaved(){
    var id = 8;
    var data = localStorage.getItem('schedule');
    if(data == null) return;
    data = JSON.parse(data)

    for(var i = 0; i < data.length; i++){
        $("#"+id).val(data[i]);  
        id++;      
    }
}

function save(id){
    var data = localStorage.getItem('schedule');
    if(data == null) {
        data = []
        for(var i = 8; i < 18; i++){
            data.push("");
        }
    }else{
        data = JSON.parse(data)
    }
    var index = id - 8;
    var info = $("#"+id).val();    
    data[index] = info;
    alert($("#"+id).val()+" and "+ index)
    localStorage.setItem("schedule", JSON.stringify(data));
}

loadSaved();