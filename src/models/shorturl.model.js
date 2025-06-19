import mongoose from "mongoose";    

const shortUrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    index:true,
    unique: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: false, 
  }


}, { timestamps: true });

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);
export default ShortUrl;
