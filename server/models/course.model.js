import mongoose from 'mongoose'

const ForumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Text is required'
  },
  comments: [{
    text: String,
    created: { type: Date, default: Date.now },
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
    likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
  }],
  created: {
    type: Date,
    default: Date.now
  }
})
const Forum = mongoose.model('Forum', ForumSchema)

const LessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  resource_url: String,
  forum: {ForumSchema}
})
const Lesson = mongoose.model('Lesson', LessonSchema)

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    required: 'Category is required'
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  instructor: { type: mongoose.Schema.ObjectId, ref:'User'},
  published: {
    type: Boolean,
    default: false
  },
  lessons: [LessonSchema]
})

export default mongoose.model('Course', CourseSchema)