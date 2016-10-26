/**
 * Created by rifhan on 10/19/16.
 */
"use strict";

const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const githubRoutes = require('./api/github-routes');
const port = process.env.PORT || 3000;

//app.use('*')
fs.watch("D:/test/build",{ encoding : 'utf-8'} , (evenType,filename) => {
    console.dir(evenType);
    console.log(filename);
    try {
        const fileExists =  fs.accessSync(`D:/test/build/${filename}/`,fs.R_OK);
        const file = fs.readFileSync(path.join(`D:/test/build/${filename}/build.xml`), 'ascii');
        
    } catch(e) {
        console.log(e);
    }
});
    // try {
    //     const fileExists =  fs.accessSync(`C:/test/build/2/build.xml`,fs.F_OK);
    // } catch(e) {
    //     console.log(e);
    // }
    //vfn
app.use('/api',githubRoutes(express.Router()));
app.get('/',(req,res) => {
    res.status(200).json({message : "app is runing"});
});
app.listen(port,() => {
    console.log("Server Listening on Port",port)
})