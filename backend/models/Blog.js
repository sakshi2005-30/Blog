const mongoose=require("mongoose");
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Design", "Technology", "Culture", "Travel", "Food", "Science"],
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);
module.exports=mongoose.model("Blog",blogSchema);
