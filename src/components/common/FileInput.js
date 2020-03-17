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
          id="file-input"
          name="file"
          onChange={ this.props.handleFileInputChange }
				/>
          
        { !this.state.imageUploaded ? (
          <label htmlFor="file-input" className="file-input-label">{ this.props.notUploadedLabel }</label>
        ) : (
          <label htmlFor="file-input" className="file-input-label">{ this.props.uploadedLabel }</label>
        ) }
			  
      </React.Fragment>
    )
  }
}


export default FileInput;


