import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function MentorProfile() {
  return (
    <div className="MentorProfile">
      <div className="container">
        <div className="profile-box d-flex justify-content-center">
          
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
          <Link className="button-primary" style={{ backgroundColor: 'grey' }} to="/">Home</Link>
          <button className="button-primary" style={{ width: 250 }} data-toggle="modal" data-target="#mentorModal">Selecionar Mentor</button>
        </div>

        <div class="modal fade" id="mentorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Aviso</h5>
              </div>
              <div class="modal-body">
                Mentor selecionado! Aproveite cada segundo da mentoria.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorProfile;