import React from 'react'
import { getWords } from './lib/api'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'




const useStyles = makeStyles((theme) => ({

  paper1: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  layout: {
    width: 'auto',
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
  },
}))




function App() {

  const classes = useStyles()

  const [inputData, setInputData] = React.useState('')
  const [wordData, setWordData] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  const postData = { 'userInput': inputData }


  const handleClick = event => {
    const input = inputData + event.currentTarget.value
    setInputData(input)
  }

  const handleClear = () => {
    setInputData('')
    setWordData('')
    setIsError(false)
  }

  const handleSubmit = async () => {
    try {
      const res = await getWords(postData)

      console.log(res.data)
      setWordData(res.data)

    } catch (error) {
      console.log(error)
      setIsError(true)
    }

  }

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper1}>

            <Typography variant="h5" color="textPrimary">Number to Text Converter</Typography>

            <TextField
              variant="outlined"
              margin="normal"
              name="userInput"
              value={postData.userInput}
            />



            <Container className={classes.cardGrid} maxWidth="xs">
              <Grid className="keys" container spacing={2} >
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="1" >∞<br />1</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="2">abc<br />2</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="3">def<br />3</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="4">ghi<br />4</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="5">jkl<br />5</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="6">mno<br />6</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="7">pqrs<br />7</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="8">tuv<br />8</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="9">wxyz<br />9</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value=""><br />*</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="0">™<br />0</Button>
                </Grid>
                <Grid item md={4}>
                  <Button variant="contained" onClick={handleClick} value="">#<br />+</Button>
                </Grid>
              </Grid>
            </Container>
            <Grid>

              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary">click for words </Button>


              <Button
                onClick={handleClear}
                variant="contained">clear </Button>

            </Grid>

            {wordData && wordData.map((word) => (
              <List key={word} >
                <ListItem>
                  <Typography variant="body1" color="textPrimary">
                    {word}
                  </Typography>
                </ListItem>
              </List>
            ))}

            {isError && (
              <p>
                something went wrong
              </p>
            )}

          </div>
        </Container>
      </Paper>
    </main>
  )
}

export default App
