import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class CadastroMentorado extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="">
        <div style={{ height: 25, backgroundColor: '#FF5B01' }}></div>
        <div className="d-flex justify-content-center my-4">
          <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#462842' }}><span className="text-white d-flex justify-content-center pt-3">1</span></div>
          <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#F6F6FA' }}><span className="d-flex justify-content-center pt-3">2</span></div>
          <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#F6F6FA' }}><span className="d-flex justify-content-center pt-3">3</span></div>
          <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#F6F6FA' }}><span className="d-flex justify-content-center pt-3">4</span></div>
        </div>

        <div className="container text-center my-4">
          <h4 className="font-weight-bold">Vamos começar o cadastro : D</h4>
        </div>

        <form className="container mx-auto" style={{ width: 350 }}>
          <div class="form-group">
            <label for="inputEmail">Email</label>
            <input type="email" class="form-control input-default" id="inputEmail" aria-describedby="emailHelp" />
            <small id="emailHelp" class="form-text text-muted">nomesobrenome@email.com</small>
          </div>

          <div class="form-group">
            <label for="inputPassword">Senha</label>
            <input type="password" class="form-control input-default" id="inputPassword" />
          </div>

          <div class="form-group">
            <label for="inputPasswordConfirm">Confirmar senha</label>
            <input type="password" class="form-control input-default" id="inputPasswordConfirm" />
          </div>
          <Link className="button-primary float-left" style={{ backgroundColor: 'grey' }} to="/">Home</Link>
          <Link className="button-primary float-right" to="/cadastro-mentorado-2">Próximo</Link>
        </form>

      </div >
    );
  }

}

export default CadastroMentorado;