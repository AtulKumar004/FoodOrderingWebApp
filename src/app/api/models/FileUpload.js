const { Schema, models, model } = require("mongoose");

const FileSchema = new Schema({
  user_id: {
    type: String,
   
  },
  originalName: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const File = models.File || model('File', FileSchema);

export default File;
