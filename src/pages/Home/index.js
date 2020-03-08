import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <div className="">
        <div className="conatiner" style={{ backgroundColor: '#FF5B01' }}>
          <img className="m-0-auto img-responsive mb-4 py-4" src={require("../../assets/logo-triunfo.png")} />
        </div>
        <div className="bg-white shadow m-5 p-4" style={{ borderRadius: 20 }}>
          <div className="" style={{ marginTop: 20, width: '100%' }}>
            <p>Acreditamos que o compartilhamento Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Quem num gosta di mé, boa gentis num é. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!</p>
          </div>

          <div className="mx-auto mt-5" style={{ width: 220 }}>
            <Link className="pt-3 mb-4 d-block btn text-white font-weight-bold" style={{ width: 220, height: 60, borderRadius: 30, backgroundColor: "#FF5B01" }} to="/cadastro-mentor">Quero ser mentor</Link>
            <Link className="pt-3 mb-4 d-block btn text-white font-weight-bold" style={{ width: 220, height: 60, borderRadius: 30, backgroundColor: "#FF5B01" }} to="/cadastro-mentorado">Quero ser mentorado</Link>
            <Link className="mb-4 d-block btn font-weight-bold shadow-none " style={{ width: 220, borderRadius: 20,  }} to="/login">Já tenho cadastro</Link>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;