const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/tourly";

main()
  .then(() => {
    console.log("connected to DB");
    
    // Enable Mongoose debugging
    mongoose.set('debug', true);
    
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  
  // Modify the data to include the owner
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66d15b8151e9a1188cb2935e"
  }));
  
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

// Initialize the database
initDB();
