const mongoose = require('mongoose');
const PatternType = require('./patternType');
const User = require('./user');
const Schema = mongoose.Schema;


const patternSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {type: String, required: true},
  author: {type: String, required: true},
  publication: {type: String, required: true},
  year: {type: Number, required: true},
  url: String,
  patternType: {
    name: {type: String, required: true},
    description: {type: String, required: true}
  },
  patternDetails: {
    type: Schema.Types.ObjectId,
    ref: 'PatternType'
  },
  text: [{
    text: {type: String, required: true},
    analysis: Schema.Types.Mixed,
    data: Schema.Types.Mixed
  }],
  commentary: {type: String, required: true}
});

module.exports = mongoose.model('Pattern', patternSchema);
