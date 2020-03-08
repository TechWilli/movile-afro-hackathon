import React from 'react';
import './index.scss';

function MentorProfile() {
  return (
    <div className="MentorProfile">
      <div className="container">
        <div className="profile-box">
          <div className="profile-box--image">
            <img
                src={require("../../assets/foto-mentor.png")}
                className="m-0-auto img-responsive"
              />
          </div>
          <div className="profile-box--content">
            <h3>Fabio da Silva</h3>
            <p>Cientista de Dados</p>
          </div>
        </div>
        <div className="m-b-48">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="text-center">
          <button className="button-primary">Selecionar Mentor</button>
        </div>
      </div>
    </div>
  );
}

export default MentorProfile;