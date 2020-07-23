import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextFieldInput from "../common/TextFieldInput";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addItemToList, setErrors } from "../redux/actions";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    margin: "3em auto",
    transform: "translateX(30px)",
    maxWidth: 900,
    minWidth: 400,
  },
  button: {
    marginTop: 9,
    marginLeft: 10,
    fontSize: "1.5em",
  },
}));

function AddItem({ addItemToList, setErrors, errors }) {
  console.log("errors", errors);
  const classes = useStyles();
  const [item, setItem] = useState({
    name: "",
    category: "",
    price: "",
  });

  const handleAddItem = e => {
    e.preventDefault();

    const errors = {};

    if (!item.name) {
      errors.name = "A name for the item is required";
    }
    if (!item.category) {
      errors.category = "A category is required";
    }
    if (!item.price.includes("$")) {
      errors.price = "Must be in dollar format and include a `$`";
    }
    if (item.price.includes("$") && !item.price.match(/\d+/g)) {
      errors.price = "Must include a number";
    }
    if (!item.price) {
      errors.price = "A price is required";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      if (!item.price.includes(".")) {
        item.price += ".00";
      }
      addItemToList(item);
      setItem({
        name: "",
        category: "",
        price: "",
      });
      setErrors({});
    }
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
        name="name"
        label="Item"
        value={item.name}
        error={errors.name}
        helperText={errors.name}
      />
      <TextFieldInput
        onChange={handleItemChange}
        name="category"
        label="Category"
        value={item.category}
        error={errors.category}
        helperText={errors.category}
      />
      <TextFieldInput
        onChange={handleItemChange}
        name="price"
        label="Price"
        placeholder="$"
        value={item.price}
        error={errors.price}
        helperText={errors.price}
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

const mapStateToProps = state => {
  return { errors: state.errors };
};

export default connect(mapStateToProps, { addItemToList, setErrors })(AddItem);
