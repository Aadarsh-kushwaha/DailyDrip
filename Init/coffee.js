const mongoose = require('mongoose');
const Coffee = require('../models/coffee'); // correct relative path
const initData = require("./init.js");

// ====== MongoDB Connection ======
const dburl = "mongodb://127.0.0.1:27017/coffee-shop";

// Connect to MongoDB
async function main() {
    await mongoose.connect(dburl);
}
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("there is some error", err); 
  });
  
  

const initDB = async () =>{
   // await Listing.deleteMany({});
 //  initData.data =  initData.data.map((obj)=>({...obj,owner:"68b2021bb2aa118316733e68"}));
 
    await Coffee.insertMany(initData.data);
    console.log("Data was initialized");  
};
initDB();