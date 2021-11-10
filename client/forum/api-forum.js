//Why are there no imports in API?
//How come only one API?

//Create forum 
// fetch('/api/forum/new' + params.lesssonId, {
// method: 'POST'
//})


//Remove forum

//Comment
const comment = async (params, credentials, forumId, comment) => {
  try {
    let response = await fetch('/api/forum/comment', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify({userId: params.userId, forumId: forumId, comment:comment})
    })
  } catch (err) {
    console.log(err)
  }
}
//Uncomment
const uncomment = async (req, res) => {
  let comment = req.body.comment
  try{
    let result = await Post.findByIdAndUpdate(req.body.postId, {$pull: {comments: {_id: comment._id}}}, {new: true})
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
//Edit forum

//exports