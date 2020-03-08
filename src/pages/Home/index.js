import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home container">
      <img className="m-0-auto img-responsive m-b-48 mt-5" src={require("../../assets/logo-triunfo.png")} />
      <div className="container">
        <div className="row text-center m-b-48">
          <div className="col-md-6 col-md-offset-3">
            <p>Nós sabemos a importância de se conectar com os pessoas, e nada melhor do que uma história parecida para juntar duas ou mais pessoas. É isso queremos oferecer para você, uma mentoria com uma pessoa que entende sua história.</p>
          </div>
        </div>
        <div className="row text-center m-b-48">
          <div className="col-md-6 col-md-offset-3">
            <Link className="button-primary" to="/cadastro-mentor">Quero ser mentor</Link>
            <Link className="button-primary" to="/cadastro-mentorado">Quero ser mentorado</Link>

          </div>
        </div>
        <div className="row text-center m-b-48">
          <div className="col-md-6 col-md-offset-3">
            <Link className="button-link" to="/login">Já tenho cadastro</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;