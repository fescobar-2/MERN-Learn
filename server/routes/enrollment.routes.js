import express from 'express'
import enrollmentCtrl from '../controllers/enrollment.controller'
import courseCtrl from '../controllers/course.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/enrollment/new/:courseId')
  .post(authCtrl.requireSignin, enrollmentCtrl.findEnrollment, enrollmentCtrl.create)

router.param('courseId', courseCtrl.courseByID)