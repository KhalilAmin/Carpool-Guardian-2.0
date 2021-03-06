import React from "react";
import Button from '@material-ui/core/Button';

export const FormBtn = props => (
  <Button {...props} variant="raised" color="primary">
    {props.children}
  </Button>
);

// style={{ float: "right", marginBottom: 10 }} className="btn btn-success"