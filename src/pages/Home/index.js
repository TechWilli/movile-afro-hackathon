import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <div className="container"> 
        <img
              src={require("../../assets/logo-triunfo.png")}
              className="m-0-auto img-responsive"
            />
            <p>Acreditamos que o compartilhamento
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <Link to="/cadastro-mentor">Quero ser mentor</Link>
              <Link to="/cadastro-mentorado">Quero ser mentorado</Link>
              <Link to="/login">Já tenho cadastro</Link>
      </div>
    </div>
  );
}

export default Home;