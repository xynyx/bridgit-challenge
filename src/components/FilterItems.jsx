import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { setCategoryFilters } from "../redux/actions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    marginBottom: "4em",
    marginTop: "2em",
    width: 350,
  },
  formControl: {
    margin: theme.spacing(1),
    width: 350,
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

function getStyles(name, categories, theme) {
  return {
    fontWeight:
      categories.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function FilterItems({ setCategoryFilters, filters, items }) {
  const classes = useStyles();
  const theme = useTheme();

  const categoryData = items.map(item => item.category);

  const handleChange = e => {
    setCategoryFilters(e.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Filter</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={filters}
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
  return { items: state.items, filters: state.filters };
};

export default connect(mapStateToProps, { setCategoryFilters })(FilterItems);
