import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class CadastroMentor4 extends Component {
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
                    <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#F6F6FA' }}><span className="d-flex justify-content-center pt-3">2</span></div>
                    <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#462842' }}><span className="text-white d-flex justify-content-center pt-3">3</span></div>
                    <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#F6F6FA' }}><span className="d-flex justify-content-center pt-3">4</span></div>
                </div>

                <div className="container text-center my-4">
                    <h4 className="font-weight-bold">Queremos ouvir um pouco da sua tragetória para indicar os mentorados que se conectarão com você</h4>
                </div>

                <form className="container mx-auto" style={{ width: 350 }}>
                    <div class="form-group">
                        <label for="inputSobre">Conte um pouco sobre sua história</label>
                        <textarea type="text" class="form-control input-default" id="inputSobre" rows="7" />
                    </div>

                    <Link className="button-primary float-left" style={{ backgroundColor: 'grey' }} to="/cadastro-mentor-2">Voltar</Link>
                    <Link className="button-primary float-right" to="/cadastro-mentor-4">Próximo</Link>
                </form>

            </div >
        );
    }

}

export default CadastroMentor4;