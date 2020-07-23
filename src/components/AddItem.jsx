import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldInput from "../common/TextFieldInput";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    marginTop: 9,
    marginLeft: 10,
    fontSize: "1.5em",
  },
}));

const handleAddItem = e => {
  console.log("e.target", e.target);
};

const handleItemChange = e => {
  console.log(e.target.value);
  console.log('e.target.name', e.target.name)
};

export default function AddItem() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextFieldInput onChange={handleItemChange} name="item" label="Item" />
      <TextFieldInput
        onChange={handleItemChange}
        name="category"
        label="Category"
      />
      <TextFieldInput onChange={handleItemChange} name="price" label="Price" />
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="primary"
      >
        +
      </Button>
    </form>
  );
}
