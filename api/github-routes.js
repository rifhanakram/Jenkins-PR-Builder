/**
 * Created by rifhan on 10/19/16.
 * Description :
 */
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

module.exports = function(router){
    router.get('/auth',(req,res)=>{
       console.log(req);
       //res.status(200).json({message:CLIENT_ID,status : "true"});
    });

    router.post('/event',(req,res) => {
       console.log(req);
        res.json({message:"hell"})
    });
    return router;
}