import React from 'react';
import Header from '../../layout/Header';

import './CadastroMotorista.css';

export default function CadastroMotorista() {
    return (
        <div>
            <Header />
            <div className="form">
                <form>
                    <h4 className="center">Cadastro de Motorista</h4>
                    <h5 className="center">Dados Pessoais</h5>
                    <div className="row">
                        <div className="col-3">
                            <input type="text" className="form-control" placeholder="Nome" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control" placeholder="Sobrenome" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control" placeholder="CPF" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control" placeholder="Telefone" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input type="email" className="form-control" placeholder="E-Mail" />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Endereço" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <input type="text" className="form-control" placeholder="Número" />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control" placeholder="Bairro" />
                        </div>
                        <div className="col-4">
                            <input type="text" className="form-control" placeholder="Complemento" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <h5>Cidades que você atende:</h5>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" for="inlineCheckbox1">Guaíba</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" for="inlineCheckbox2">Porto Alegre</label>
                            </div>
                        </div>
                        <div className="col">
                            <h5>Disponibilidade:</h5>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" for="inlineRadio1">Dia</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" for="inlineRadio2">Noite</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                                <label className="form-check-label" for="inlineRadio3">Dia e Noite</label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label for="valor">Valor da Hora*</label>
                                <input type="text" className="form-control" placeholder="R$100" id="valor" />
                            </div>
                        </div>
                        <div className="col">
                            <small>* A jornada compreende três horas de trabalho no período do dia e seis horas no período da noite, a partir da hora acordada com o contratante.</small>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
