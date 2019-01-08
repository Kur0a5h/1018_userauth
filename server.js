        const express = require('express');
        const mysql = require('mysql');
        const creds = require('./mysql_cred.js');

    

        const db = mysql.createConnection(creds);

        const server = express();
        server.use(express.urlencoded({extended:false}));
        server.use (express.static( __dirname + '/documentroot'));

        server.post('/login', (request, response)=>{
            db.connect(()=>{
                const username=request.body.user;
                const password= sha1(request.body.pass);
                delete request.body.pass;
                console.log(username,password);
                const query = "SELECT * FROM `users` WHERE `email` ='"+username+"' AND `password`='"+password+"'";
                db.query(query,(error,fields)=>{
                    if(error){response.send('you have logged in');
                    return
                }
                if(fields.length!==1){
                    response.send('error with the username or password');
                }
                const userToken = sha1(username+password+Date.now());
                response.cookie('userauth','usertoken');
                response.send('you have logged in');
                })
            })
        })

        server.listen(4000, ()=>{
            console.log('carrier has arrived');
        });