import mongoose from 'mongoose'
const ForumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Text is required'
  },
  //Agregar id de leccion asociada a foro
  
  // photo: {
  //   data: Buffer,
  //   contentType: String
  // },
  // 
  comments: [{
    text: String,
    created: { type: Date, default: Date.now },
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
    likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
  }],
  lesson: {type: mongoose.Schema.ObjectId, ref: 'Lesson'},
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Forum', ForumSchema)
