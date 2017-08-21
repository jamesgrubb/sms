const express = require('express');
const app = express();
const moment = require('moment')
require('moment-recur');
require('dotenv/config');
// const path = require('path');
// app.use('view engine' , 'pug')

var accountSid = 'ACaa9c4e830cb8eddcba5739b8e1eb3539';
var authToken = 'd8bc2117241703ff6e1e6d46b665744d'
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
client.messages.create({
	body : 'Rubish',
	to : '+447974453650',
	from : '+441133204832'
}).then((message) => console.log(message.sid))

app.get('/', (req,res) => {
	res.send('Hello')
}
)

app.listen(3000, ()=> console.log('listening on port 3000'));