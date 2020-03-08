import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class CadastroMentor2 extends Component {
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
                    <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#F6F6FA' }}><span className="d-flex justify-content-center pt-3">1</span></div>
                    <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#462842' }}><span className="text-white d-flex justify-content-center pt-3">2</span></div>
                    <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#F6F6FA' }}><span className="d-flex justify-content-center pt-3">3</span></div>
                    <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#F6F6FA' }}><span className="d-flex justify-content-center pt-3">4</span></div>
                </div>

                <div className="container text-center my-4">
                    <h4 className="font-weight-bold">Você está a poucos passos de começar a mudar  a história através da sua hstória</h4>
                </div>

                <form className="container mx-auto" style={{ width: 350 }}>
                    <div class="form-group">
                        <label for="inputCelular">Celular</label>
                        <input type="cel" class="form-control input-default" id="inputCelular" placeholder="+55 (55) 55555-5555" />
                    </div>

                    <div class="form-group">
                        <label for="inputData">Data de nascimento</label>
                        <input type="text" class="form-control input-default" id="inputData" placeholder="DD/MM/AAAA"/>
                    </div>

                    <div class="form-group">
                        <label for="inputLinkedin">Linkedin</label>
                        <input type="text" class="form-control input-default" id="inputLinkedin" />
                    </div>
                    <Link className="button-primary float-left" style={{ backgroundColor: 'grey' }} to="/cadastro-mentor">Voltar</Link>
                    <Link className="button-primary float-right" to="/cadastro-mentor-3">Próximo</Link>
                </form>

            </div >
        );
    }

}

export default CadastroMentor2;