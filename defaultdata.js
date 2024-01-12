const productdata = require("./constant/productsdata");
const Products = require("./models/productsSchema");
const Mobiles=require("./models/mobileSchema");
const data=require("./constant/mobiledata")


const DefaultData = async()=>{
    try {
        await Products.deleteMany({});
        await Mobiles.deleteMany({});
        const storeData = await Products.insertMany(productdata);
        const mobileData=await Mobiles.insertMany(data);
        console.log(storeData);
        console.log(mobileData);
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;