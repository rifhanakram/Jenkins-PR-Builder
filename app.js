/**
 * Created by rifhan on 10/19/16.
 */
const express = require('express');
const app = express();
const githubRoutes = require('./api/github-routes');
const port = process.env.PORT || 3000;

//app.use('*')
app.use('/api',githubRoutes(express.Router()));
app.use('/',(req,res) => {
    res.status(200).json({message : "app is running"});
});
app.listen(port,()=>{
    console.log("Server Listening on Port",port)
})