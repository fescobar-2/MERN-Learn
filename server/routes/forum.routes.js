import express from 'express'
import authCtrl from './../controllers/auth.controller'
import forumCtrl from './../controllers/forum.controller'
import userCtrl from './../controllers/user.controller'
//import Controllers for routes

const router = express.Router()

//Route for creating comment
router.route('/api/forum/new/:lessonId')
    .put(authCtrl.requireSignin, forumCtrl.comment)

//Route for uncommenting
router.route('/api/forum/uncomment')
    .put(authCtrl.requireSignin, forumCtrl.uncomment)

router.param('userId', userCtrl.userByID)
//route for creating forum
// POST ('/api/forum/new/:lessonId')
//route for removing forum
// DELETE ('/api/forum/:forumId', )
//route for creating comment
// PUT ('/api/forum/comment')
//route for uncommenting
//PUT ('/api/forum/uncomment')