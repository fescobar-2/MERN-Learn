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

//get forum by lessonId

//remove forum

//comment

//uncomment

//isPoster (to check if user is the one that posted comment)
