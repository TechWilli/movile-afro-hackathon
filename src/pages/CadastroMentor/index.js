import React, { Component } from 'react';
import './index.scss';

class CadastroMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="">
        <div style={{ height: 25, backgroundColor: '#FF5B01' }}></div>
        <div className="container text-center my-4">
          <h4 className="font-weight-bold">Vamos começar o cadastro ; )</h4>
        </div>

        <form className="container mx-auto" style={{ width: 350 }}>
          <div class="form-group">
            <label for="inputEmail">Email address</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" />
            <small id="emailHelp" class="form-text text-muted">nomesobrenome@email.com</small>
          </div>

          <div class="form-group">
            <label for="inputCPF">CPF</label>
            <input type="password" class="form-control" id="inputCPF" />
          </div>

          <div class="form-group">
            <label for="inputPassword">Password</label>
            <input type="password" class="form-control" id="inputPassword" />
          </div>

          <div class="form-group">
            <label for="inputPasswordConfirm">Confirm password</label>
          <input type="password" class="form-control" id="inputPasswordConfirm" />
          </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
        </form>

      </div >
    );
  }

}

export default CadastroMentor;