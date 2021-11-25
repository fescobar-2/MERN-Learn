import Forum from "../models/forum.model"

//Comment function for forum
const comment = async (req, res) => {
  let comment = req.body.comment
  comment.postedBy = req.body.userId
  try{
    let result = await Post.findByIdAndUpdate(req.body.forumId, {$push: {comments: comment}}, {new: true})
                            .populate('comments.postedBy', '_id name')
                            .populate('postedBy', '_id name')
                            .exec()
    res.json(result)
  }catch(err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}
//imports

//create forum


//get forum by Id
const forumByID = async(req, res, next, id) => {
  try {
    let forum = await Forum.findById(id)
    req.profile = forum
    next()
  } catch (err) {
    return res.status('400').json({
      error: "Could not retrieve Forum"
    })
  }
}

//remove forum

//comment

//uncomment

//isPoster (to check if user is the one that posted comment)
