import React from 'react';
import { connect } from 'react-redux';
import {cameraSVG} from '../components/svgs/profile_over_svg'

class ProfilePhotoForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { photoFile: null}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleFile(e){
    this.setState({ photoFile: e.currentTarget.files[0] })
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    if (this.state.photoFile){
      formData.append('user[profile_photo]', this.state.photoFile)
    }
    $.ajax({
      url: `/api/users/${this.props.currUser.id}`,
      method: "PATCH",
      data: formData,
      contentType: false,
      processData: false  
    })
  }

  render(){
    return (
      <form className="profile-image-form" onSubmit={this.handleSubmit}>
        <label className="profile-upload-label" htmlFor="profile-pic-upload">
          {cameraSVG()}
        </label>
        <input
          id="profile-pic-upload"
          accept=".jpg, .jpeg, .png"
          onChange={this.handleFile}
          type="file"
        />
        <input id="profile-pic-submit-btn" type="submit" value="submit" />
      </form>
    );
  }
}

const mSTP = (state) => {
  return ({
    currUser: state.entities.users[state.session.id]
  })
}

export default connect(mSTP, null)(ProfilePhotoForm)
// export default ProfilePhotoForm;