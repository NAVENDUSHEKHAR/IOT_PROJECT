var express = require("express");
var app = express();
var mqtt=require("mqtt");
var  bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var temp1=0;
var pir1="";
var gas1=0;
var humid1=0;
var led0=0;
var led1=0;
var led2=0;


var client  = mqtt.connect('mqtt://localhost');




client.on('connect', function () {
 client.subscribe('gas');
client.subscribe('temp');
client.subscribe('pir');
client.subscribe('humid');
});

client.on('message', function(topic, message)
	{
    if(topic==='temp'){		
   temp1=message.toString();
 
	console.log(temp1);
	}
	 else if(topic==='pir'){		
   pir1=message.toString();
 
	console.log(pir1);
	}
	 else if(topic==='gas'){		
   gas1=message.toString();
	 }
	console.log(gas1);
	
	 if(topic==='humid'){		
   humid1=message.toString();
 
	console.log(humid1);
	}

 
   
	 });




app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home",{temp:temp1,humid:humid1,gas:gas1,pir:pir1});
    console.log("wea re");
});

app.get("/rooms",function(req,res){
    res.render("room",{led0:led0,led1:led1,led2:led2,});
    
});

app.post("/rooms",function(req,res){
	console.log(req.body);
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("app started");
});