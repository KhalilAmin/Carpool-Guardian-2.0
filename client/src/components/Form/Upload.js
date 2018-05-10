import React from "react";

export const Upload = props => (
  <div className="form-group">
    <input type="file" className="form-control" style={{display: 'none'}} ref={fileInput => this.fileInput = fileInput} {...props} />
  </div>
);

//I CANNOT MAKE THIS WORK - IT ALWAYS SAYS THE CLICK PROPERTY IS UNDEFINED