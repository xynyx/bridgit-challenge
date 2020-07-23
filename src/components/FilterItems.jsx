import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import { setCategoryFilters } from "../redux/actions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categoryData = ["Vegetable", "Fruit", "Meat", "Grains"];

function getStyles(name, categories, theme) {
  return {
    fontWeight:
      categories.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function FilterItems({ setCategoryFilters, filters }) {
  const classes = useStyles();
  const theme = useTheme();
  // const [categories, setCategories] = useState([]);
  // const [filteredItems, setFilteredItems] = useState()

  const handleChange = e => {
    // setCategories(event.target.value);
    // console.log("e.target.value", e.target.value);
    setCategoryFilters(e.target.value)
  };

  // useEffect(() => {
  //   // console.log("categories", categories);
  //   filterItems();
  // }, []);

  const filterItems = () => {
    // setCategoryFilters(categories);
  };

  // const itemsAfterFilter = state.filter(item => {
  //   return action.payload.includes(item.category);
  // });
  // console.log('itemsAfterFilter', itemsAfterFilter)

  // const handleChangeMultiple = event => {
  //   const { options } = event.target;
  //   const value = [];
  //   for (let i = 0, l = options.length; i < l; i += 1) {
  //     if (options[i].selected) {
  //       value.push(options[i].value);
  //     }
  //   }
  //   setCategories(value);
  // };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Filter</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={filters}
          // categories
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {categoryData.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, filters, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const mapStateToProps = state => {
  return { items: state.item, filters: state.filters };
};

export default connect(mapStateToProps, { setCategoryFilters })(FilterItems);
