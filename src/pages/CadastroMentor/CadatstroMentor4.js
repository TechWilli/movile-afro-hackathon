import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class CadastroMentor3 extends Component {
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
                    <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#F6F6FA' }}><span className="d-flex justify-content-center pt-3">3</span></div>
                    <div className="rounded-circle mx-3" style={{ width: 50, height: 50, backgroundColor: '#462842' }}><span className="text-white d-flex justify-content-center pt-3">4</span></div>
                </div>

                <div className="container text-center my-4">
                    <h4 className="font-weight-bold">Marque as áreas que pode compartilhar</h4>
                </div>

                <form className="container mx-auto" style={{ width: 350 }}>
                    <div className="d-flex justify-content-center align-items-center">

                        <div className="col mx-3">
                            <div className="row">
                                <button className="button-primary m-2" style={{ backgroundColor: 'grey', width: 150 }}>Design</button>
                            </div>
                            <div className="row">
                                <button className="button-primary m-2" style={{ backgroundColor: '#462842', width: 150 }}>Marketing</button>
                            </div>

                            <div className="row">
                                <button className="button-primary m-2" style={{ backgroundColor: '#462842', width: 150 }}>Produto</button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <button className="button-primary m-2" style={{ backgroundColor: '#462842', width: 150 }}>Tecnologia</button>
                            </div>
                            <div className="row">
                                <button className="button-primary m-2" style={{ backgroundColor: '#462842', width: 150 }}>Dados</button>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Link className="button-primary float-right my-4" to="/cadastro-mentor">Revisar</Link>
                        <Link className="button-primary float-left my-4" to="/">FINALIZAR</Link>
                    </div>

                </form>

            </div >
        );
    }

}

export default CadastroMentor3;