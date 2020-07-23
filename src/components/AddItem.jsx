import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldInput from "../common/TextFieldInput";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addItemToList } from "../redux/actions";

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

function AddItem(props) {
  const classes = useStyles();
  const [item, setItem] = useState({
    item: "",
    category: "",
    price: "",
  });

  const handleAddItem = e => {
    e.preventDefault();
    console.log("item", item);
    props.addItemToList(item);
    setItem({
      item: "",
      category: "",
      price: "",
    });
  };

  const handleItemChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleAddItem}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextFieldInput
        onChange={handleItemChange}
        value={item.item}
        name="item"
        label="Item"
      />
      <TextFieldInput
        onChange={handleItemChange}
        name="category"
        label="Category"
        value={item.category}
      />
      <TextFieldInput
        onChange={handleItemChange}
        value={item.price}
        name="price"
        label="Price"
      />
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

// const mapStateToProps = state => {
//   console.log("state", state.item);
//   return { item: state.item };
// };

export default connect(null, { addItemToList })(AddItem);
