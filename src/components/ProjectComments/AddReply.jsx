import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
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
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function AddComment(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [reply, setReply] = React.useState("");
  const user = useSelector((state) => state.user);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || {
    from: { pathname: `/signin` },
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = () => {
    if (user.userData !== undefined) {
      props.onPost(reply);
      setOpen(false);
    } else {
      history.replace(from);
    }
  };

  const handleChange = (e) => {
    console.log(reply);
    setReply(e.target.value);
  };

  return (
    <div>
      <Fab
        color="Primary"
        aria-label="add"
        className={classes.fabButton}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        fullWidth
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Reply</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can reply to this comment section
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Answer"
            type="text"
            fullWidth
            multiline
            value={reply}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handlePost} color="primary" variant="contained">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
