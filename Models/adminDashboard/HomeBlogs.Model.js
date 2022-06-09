const mongoose = require("mongoose");

const schema = mongoose.Schema;

const HomeBlogs = new schema(
  {
    title: {
      type: String,
      trim: true,
      max: 64,
    },

    image: {
      type: String,
    },
    description: {
      type: String,
      trim: true,
      max: 64,
    },

    auther: {
      type: String,
      trim: true,
      max: 64,
    },
    date: {
      type: String,
      trim: true,
      max: 64,
    },
    // shortdesc: {
    //   type: String,
    //   trim: true,
    //   max: 64,
    // },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("HomeBlogs", HomeBlogs);
