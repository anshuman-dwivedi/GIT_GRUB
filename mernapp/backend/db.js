const mongoose=require('mongoose');
const mongoURI=process.env.DB_URL
const mongoDB=async ()=>{
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
     // let fetched_data = mongoose.connection.db.collection("food_items");
     //
      //console.log(data);
      const fetched_data =await  mongoose.connection.db.collection("food_items");
      let data=await fetched_data.find({}).toArray() 
      const food_category =await  mongoose.connection.db.collection("foodCategory");
      let data1=await food_category.find({}).toArray() 
     // fetched_data.find({}).toArray(function(err,data){
        //if(err)
        //console.log(err);
       // else{
          global.food_items=data;
         // console.log(global.food_items);
          global.foodCategory=data1;
    } catch (error) {
      console.log('err: ', error);
      process.exit();
    }


 /* await mongoose.connect(mongoURI,{useNewUrlParser:true,
    useUnifiedTopology:true
})//.then(async()=>{
   // console.log("connected Sucessfully")
    const fetched_data=await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray((err,data)=>{
      if(err)
        console.log(err);
      else
        console.log(data);
  })
 // })
  // .catch((err)=>{console.error(err);})*/
}
module.exports=mongoDB;