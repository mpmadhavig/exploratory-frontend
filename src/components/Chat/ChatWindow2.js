import React, { useState } from 'react';
import { createStyles, Theme, fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Container, GridList, InputBase, GridListTile, Button } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import Message from './Message'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const messages = [
  {
    id: 1,
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      width: 300,
      height: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    upperRoot: {
      width: 300,
      height: '100%',
    },
    gridList: {
      width: 300,
      height: `calc(100% - ${125}px)`,
    },
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 0,
      bottom: 'auto',
      height: '60px',
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },

    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',

    },

    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

    },

    // 
  }),
);


const tileData = [
  {
    img: "/food.jpg",
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: "/food.jpg",
    title: 'Image',
    author: 'author',
    cols: 2,
  },

  {
    img: "/food.jpg",
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: "/food.jpg",
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: "/food.jpg",
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: "/food.jpg",
    title: 'Image',
    author: 'author',
    cols: 2,
  },

  //  {
  //   [etc...]
  //  },
];



const ChatWindow = (props) => {
  const classes = useStyles();
  // console.log("state is")
  // console.log(props.state)
  const [input,setInput]=useState("")
  // var listID= props.state.chatRooms.forEach((chat,ind)=>{
  //   chat.chat_id==props.state.currentChatID?listID=ind:None
  // })
  var listID = 0
  const getListID = () => {
    props.state.chatRooms.forEach((chat, ind) => {
      if (chat.chat_id == props.state.currentChatID) {
        listID = ind
      }
      // chat.chat_id == props.state.currentChatID ? listID = ind : null
    })
  }
  getListID()
  // console.log("listID IS ",listID)
  // console.log("Selected")
  // console.log(props.state.chatRooms[listID].chatMesseges)

  const onInput = (e) => {
    setInput(e.target.value)
  }
  const formatDate=(date1)=> {

    var year = date1.getFullYear(),
        month = date1.getMonth()+1,
        day = date1.getDate(),
        hours = date1.getHours(),
        minutes = date1.getMinutes(),
        seconds = date1.getSeconds();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds; 

    return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;

  }
    const onSendMessage= ()=>{
      var date = new Date()
      var newMessege={
        chat_id:props.state.currentChatID,
        message:input,
        message_time:formatDate(date),
        sender_id:props.state.user_id
      }
      // console.log(newMessege)
      setInput("")
      props.state.client.sendMessage(newMessege,(res)=>console.log("res is",res))
    }
  return (

    <div className={classes.upperRoot} hidden={props.controls.hiddenState}>
      <div className={classes.root}>
        <AppBar position="relative" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={() => { props.controls.setHiddenState(true); }} >
              <ArrowBackIcon />
            </IconButton>

            <Avatar alt={props.state.chatRooms[listID].logo} src={props.state.chatRooms[listID].logo} />

            <Typography>{props.state.chatRooms[listID].name}</Typography>
            <div className={classes.grow} />

            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <GridList cellHeight={160} className={classes.gridList} cols={1}>
          <div >
            <CssBaseline />
            <Paper square className={classes.paper}>

              <List className={classes.list}>

                {
                  props.state.chatRooms[listID].chatMesseges.map((currentMsg, ind) => (
                    currentMsg ?
                      <Message
                        key={currentMsg.id}
                        msg={currentMsg}
                      />
                      : null
                  ))
                }

              </List>
            </Paper>

          </div>
        </GridList>

        <AppBar position="relative" color="primary" className={classes.appBar}>
          <Toolbar>

            <div className={classes.search}>
              <InputBase
                placeholder="Send..."
                onChange={onInput}
                value={input}
                onKeyPress={e => (e.key === 'Enter' ? onSendMessage() : null)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={onSendMessage}
              endIcon={<Icon>send</Icon>}
            >
            </Button>

          </Toolbar>
        </AppBar>
      </div>
    </div>


  );
}



export default ChatWindow
