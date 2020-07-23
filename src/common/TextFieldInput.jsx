import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    "& > *": {
      margin: theme.spacing(2),
      marginLeft: theme.spacing(6),
    },

  },
}));

export default function TextFieldInput({ ...props }) {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
      <TextField variant="outlined" {...props} />
    // </div>
  );
}
