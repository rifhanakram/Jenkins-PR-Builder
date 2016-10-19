/**
 * Created by rifhan on 10/19/16.
 * Description :
 */
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
let temp;
let data;

module.exports = function(router){
    router.get('/auth',(req,res)=>{
       temp = req;
       //res.status(200).json({message:CLIENT_ID,status : "true"});
    });

    router.post('/event',(req,res) => {
        data = req.body;
        //res.json({message:"hell"})
    });

    router.get('/test', req,res => {
        res.json({data:data,temp:temp});
    })
    return router;
}