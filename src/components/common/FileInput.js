import React from 'react';


class FileInput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <input 
			    type="file" 
				  className="form-control file-input" 
				  />
			  <label>Upload Profile Picture</label>
      </React.Fragment>
    )
  }
}


export default FileInput;


