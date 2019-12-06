const data = require("./public/data/data.json")

const swiperList = [
  {
    id:0,
    color:"skyblue",
    num:1
  },{
    id:1,
    color:"skyblue",
    num:2
  },{
    id:2,
    color:"skyblue",
    num:3
  }
]

module.exports={
  lintOnSave:false,


  devServer:{
    before(app){
      app.get("/api/list",(req,res)=>{
        res.send({status:200,list:data})
      })

      app.get("/api/swiperList",(req,res)=>{
        res.send({status:200,list:swiperList})
      })
    }
  }
}