/**
 * Created by rifhan on 10/19/16.
 * Description :
 */
"use strict";

const GithubAPI = require('github');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

let github = new GithubAPI({
    debug : true,
    protocol : 'https',
    host : 'api.github.com',
    pathPrefix : '/api/v3',
    headers : {
        'user-agent' : 'Jenkins-Builder'
    },
    Promise : require('blue-bird'),
    followRedirects :  false,
    timeout : 5000
});

module.exports = function(router){
    router.get('/auth',(req,res)=>{
       github.authenticate({
           type : 'oauth',
           //test
       })
    });

    router.post('/event',(req,res) => {
        data = req.body;
        
    });

    router.get('/test', (req,res) => {
        res.json({data:CLIENT_ID,temp:CLIENT_SECRET});
    })
    return router;
}