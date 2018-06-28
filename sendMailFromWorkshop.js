var sendMail = require('./sendMail');

var sendMailFromWorkshop = function(id, device, subject){
	var date = new Date();
	sendMail([
      subject + " :" + id, "",
      "Data: "+[date.getDate(), 1 + date.getMonth(), date.getFullYear()].join("/")+" "+[date.getHours(), date.getMinutes(), date.getSeconds()].join(":"),
      "Dispositivo: " + device.toUpperCase()
  ].join("\r\n"), null, 'do site Ephrom.com.br (' + id + ')');
}

module.exports = sendMailFromWorkshop;
