import React, {useState, useEffect} from 'react'
import auth from './../auth/auth-helper'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import CommentIcon from '@material-ui/icons/Comment'
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import {remove, like, unlike} from './api-forum.js'
import Comments from './Comments'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth:600,
    margin: 'auto',
    marginBottom: theme.spacing(3),
    backgroundColor: 'rgba(0, 0, 0, 0.06)'
  },
  cardContent: {
    backgroundColor: 'white',
    padding: `${theme.spacing(2)}px 0px`
  },
  cardHeader: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  text: {
    margin: theme.spacing(2)
  },
  photo: {
    textAlign: 'center',
    backgroundColor: 'f2f5f4',
    padding: theme.spacing(1)
  },
  media: {
    height: 200
  },
  button: {
    margin: theme.spacing(1),
  }
}))

export default function Forum (props) {
  const classes = useStyles()
  const jwt = auth.isAuthenticated()
  // const checkLike = (likes) => {
  //   let match = likes.indexOf(jwt.user._id) !== -1
  //   return match
  // }
  const [values, setValues] = useState({
    comments: props.forum.comments
  })

  const updateComments = (comments) => {
    setValues({...values, comments: comments})
  }

  return(
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader}>
        Lesson 1
      </CardHeader>
      <Comments postId={props.forum._id} comments={values.comments} updateComments={updateComments}/>
    </Card>
  )
}

Forum.propTypes = {
  post: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}
//En que momento se crea el nuevo foro?
//imports


//export default Forum

//update comments

//deleteForum to call forum-api delete function

//return forum