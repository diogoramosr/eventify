import mongoose, { Schema, model } from "mongoose";

const opts = { toJSON: { virtuals: true } };
const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: [String],
      required: true,
    },
    satisfaction: {
      type: Number,
    },
    comments: {
      type: Array,
    },
    likes: {
      type: Array,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  opts
);

eventSchema.virtual("banner_url").get(function () {
  if (this.banner && this.banner.length > 0) {
    return this.banner.map((banner) => `http://localhost:3000/files/${banner}`);
  }
  return [];
});

eventSchema.index({ title: "text", category: "text", organizer: "text" });

const event = model("Event", eventSchema);

export default event;
