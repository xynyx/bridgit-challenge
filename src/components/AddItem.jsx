import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldInput from "../common/TextFieldInput";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    marginTop: 9,
    marginLeft: 10,
    fontSize: "1.5em"
  }
}));

export default function AddItem() {
  const classes = useStyles();
  return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextFieldInput label="Item" />
        <TextFieldInput label="Category" />
        <TextFieldInput label="Price" />
        <Button className={classes.button} type="submit" variant="contained" color="primary">
          +
        </Button>
      </form>
  );
}
