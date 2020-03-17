import React from 'react';


class FileInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageUploaded: false,
    }
  }

  render() {
    return (
      <React.Fragment>
        <input 
			    type="file" 
				  className="form-control file-input" 
				  />
        { !this.state.imageUploaded ? (
          <label>Upload Profile Picture</label>
        ) : (
          <label>Profile Picture Uploaded</label>
        ) }
			  
      </React.Fragment>
    )
  }
}


export default FileInput;


