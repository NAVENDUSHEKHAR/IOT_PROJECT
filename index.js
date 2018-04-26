var express = require("express");
var app = express();
var mqtt=require("mqtt");
var  bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var temp1=0;
var pir1="intruder";
var gas1=0;
var humid1=0;



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
 
	
	}
	 else if(topic==='pir'){		
   pir1=message.toString();
 
	
	}
	 else if(topic==='gas'){		
   gas1=message.toString();
	 }
	
	
	 if(topic==='humid'){		
   humid1=message.toString();
 
	
	}

 
   
	 });




app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home",{temp:temp1,humid:humid1});
    
});

app.get("/rooms",function(req,res){
    res.render("room");
    
});

app.get("/alerts",function(req,res){
	res.render("alert",{gas:gas1,pir:pir1});
});

app.post("/room",function(req,res){

	
	
	if(req.body.led0)
	{
		client.publish("led",req.body.led0 );
		
	}

	 if(req.body.led1)
	{
		client.publish("led1",req.body.led1);
		
	}

	 if(req.body.led2)
	{
		client.publish("led2",req.body.led2 );
		
	}
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("app started");
});