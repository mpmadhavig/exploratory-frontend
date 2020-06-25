import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import FileUploader from "../FinalPaper/FileUploader";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

let useStyles = makeStyles((theme) => ({
  fileUploader: {
    padding: theme.spacing(0.5, 2),
  },
  buttonClose: theme.spacing(0.5, 2),
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function FormDialog(props) {
  const classes = useStyles();
  const [sucess, setSucess] = React.useState(false);
  const [fail, setFail] = React.useState(false);

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        fullWidth
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="edit-final-paper" onClose={props.onClose}>
          Edit Final Paper
        </DialogTitle>

        <DialogContent>
          {sucess && (
            <React.Fragment>
              <Alert
                severity="success"
                onClose={() => {
                  setSucess(false);
                  props.onClose();
                }}
              >
                The file Upload is Success!
              </Alert>
              <br />
            </React.Fragment>
          )}
          {fail && (
            <React.Fragment>
              <Alert
                severity="error"
                onClose={() => {
                  setFail(false);
                  props.onClose();
                }}
              >
                Try again!
              </Alert>
              <br />
            </React.Fragment>
          )}
          <Paper className={classes.fileUploader} elevation={3}>
            <FileUploader
              maxFiles={1}
              multiple={false}
              accept={"application/pdf"}
              type="final_paper"
              project_id={props.id}
              onSucess={() => setSucess(true)}
              onFail={() => setFail(true)}
              default={props.final_paper}
            />
          </Paper>
          <br /> <br />
        </DialogContent>
      </Dialog>
    </div>
  );
}