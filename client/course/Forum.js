import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import {makeStyles} from '@material-ui/core/styles'
import Comments from './Comments'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: theme.mixins.gutters({
      maxWidth: 800,
      margin: 'auto',
      padding: theme.spacing(3),
      marginTop: theme.spacing(12)
    }),
    card: {
      padding:'24px 40px 40px'
    }
}))

export default function Forum({match}){
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader
          title="Hello Forum"/>
      <Typography variant="body1">
        Hello!<br/>
      </Typography>
      </Card>
      
    </div>
  )
}