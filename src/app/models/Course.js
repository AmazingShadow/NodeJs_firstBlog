const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, maxLength: 255 , require: true,},
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, maxLength: 30, slug: 'name', unique: true },
    videoId: { type: String, maxLength: 20, require: true, },
    level: { type: String, maxLength: 50 },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Course', Course);
