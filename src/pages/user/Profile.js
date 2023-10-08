import React from 'react';

const UserProfile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <form className="form-horizontal">
            <fieldset>

              <legend>User profile form requirement</legend>

              <div className="form-group">
                <label className="col-md-4 control-label" htmlFor="name">
                  Name (Full name)
                </label>
                <div className="col-md-4">
                  <div className="input-group">
                    <div className="input-group-addon">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <input 
                      id="name" 
                      name="name" 
                      type="text" 
                      placeholder="Name (Full name)" 
                      className="form-control input-md" 
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
  <label className="col-md-4 control-label" htmlFor="photo">
    Upload photo
  </label>
  <div className="col-md-4">
    <input 
      name="photo"
      type="file" 
      className="input-file" 
    />
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label" htmlFor="birthDate">
    Date Of Birth
  </label>
  
  <div className="col-md-4">
    <div className="input-group">
      <div className="input-group-addon">
        <i className="fa fa-birthday-cake"></i>
      </div>
      <input 
        name="birthDate"
        type="text" 
        placeholder="Date Of Birth"
        className="form-control input-md"
      />
    </div>
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label">Gender</label>
  
  <div className="col-md-4">
    <label className="radio-inline">
      <input type="radio" name="gender" value="male" defaultChecked />
      Male
    </label>

    <label className="radio-inline">
      <input type="radio" name="gender" value="female" />
      Female 
    </label>

    <label className="radio-inline">
      <input type="radio" name="gender" value="other" />
      Other
    </label>
  </div>
</div>

              <div className="form-group">
                <div className="col-md-4">
                  <button className="btn btn-success">
                    <span className="glyphicon glyphicon-thumbs-up"></span> Submit
                  </button>
                  <button className="btn btn-danger" value="">
                    <span className="glyphicon glyphicon-remove-sign"></span> Clear
                  </button>
                </div>
              </div>

              

            </fieldset>
          </form>
        </div>

        <div className="col-md-2 hidden-xs">
          <img 
            src="http://websamplenow.com/30/userprofile/images/avatar.jpg" 
            className="img-responsive img-thumbnail" 
          />
        </div>

      </div>
    </div>
  );
}

export default UserProfile;