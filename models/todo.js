const { Schema, model } = require("mongoose")

const todoModel = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      default: "",
      required: false,
      type: String,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model("Todo", todoModel)
