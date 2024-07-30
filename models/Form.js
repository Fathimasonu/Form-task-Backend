const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inputSchema = new Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    placeholder: String,
  });
  
  const formSchema = new mongoose.Schema({
    title: { type: String, required: true },
    inputs: [inputSchema],
  });

module.exports = mongoose.model('Form', formSchema);
