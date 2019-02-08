var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var request = require('request');
  
var handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload?"] = requestHandler.upload;

// Pass server the action "route"
// server.start(router.route, handle);

var MyProtoDeviceAuth = "bc1b1dc815d641d4a436f2724ffdac92";
var YellowDeviceAuth = "cacfd3ca3ba4440b9a802e99217ca9b5";

// extra stuff for fun
// getting data from the device
request('http://iot.nortcele.win:8080/'+MyProtoDeviceAuth+'/get/V5', function (error, response, body) {
    var serverSaid = JSON.parse(body)[0].substr(0, 4);
    console.log(serverSaid);
});

// sending data to the device
request('http://iot.nortcele.win:8080/'+YellowDeviceAuth+'/update/V8?value=lol', function (error, response, body) {
    
    console.log("message sent");
});

