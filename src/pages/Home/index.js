import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home container">
      <img className="m-0-auto img-responsive m-b-48" src={require("../../assets/logo-triunfo.png")} />
        <div className="container">
        <div className="row text-center m-b-48">
          <div className="col-md-6 col-md-offset-3">
            <p>Acreditamos que o compartilhamento Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua Mussum Ipsum, cacilds vidis litro abertis. 
              Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Em pé sem cair, 
              deitado sem dormir, sentado sem cochilar e fazendo pose. Quem num gosta di mé, 
              boa gentis num é. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
            </p>
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