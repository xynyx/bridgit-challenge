import React from "react";
import TextField from "@material-ui/core/TextField";

export default function TextFieldInput({ ...props }) {
  return <TextField variant="outlined" {...props} />;
}
