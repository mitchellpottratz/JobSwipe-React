import React from 'react';


class FileInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageUploaded: false,
    }
  }

  handleFileInputChange = (e) => {
    const file = e.target.files[0];
    this.props.handleFileUpload(file);
    
    this.setState({
      imageUploaded: true
    });
  }

  // so the file input is cleared every time it is clicked
  removeFileFromInput = (e) => {
    e.target.value = null;
  }

  render() {
    return (
      <React.Fragment>
        <input 
          type="file" 
          id="file-input"
          name="file"
          onChange={ this.handleFileInputChange }
          onClick={ this.removeFileFromInput }
				/>
          
        { !this.state.imageUploaded ? (
          <label 
            htmlFor="file-input" 
            className="file-input-label">
              { this.props.notUploadedLabel }
          </label>
        ) : (
          <label 
            htmlFor="file-input" 
            className="file-input-label">
              { this.props.uploadedLabel }
          </label>
        ) }
      </React.Fragment>
    )
  }
}


export default FileInput;


