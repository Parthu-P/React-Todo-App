import React from "react";

function Userlogin(props) {
  return (
    <div className="container-fluid">
      <dl className={props.Theme}>
        <h4>{props.Title}</h4>
        <dt>{props.UserLabel}</dt>
        <dd>
          <input type={props.UserType} className="form-control"/>
        </dd>
        <dt>{props.Verify}</dt>
        <dd>
          <input type={props.VerifyType} className="form-control"/>
        </dd>
        <button className={props.ButtonType}>Login</button>
      </dl>
      
    </div>
  );
}

export default Userlogin;
