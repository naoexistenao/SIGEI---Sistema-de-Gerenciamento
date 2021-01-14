import React from 'react';

import {Link} from "react-router-dom"

import logo from '../../assets/images/logo_sigei.svg';
import school from '../../assets/images/schoo.svg';


import entrar from '../../assets/images/entrar.svg';
import education from '../../assets/images/education.svg';
import teacher from '../../assets/images/teacher.svg';
import coordinator from '../../assets/images/coordinator.svg';
import sobre from '../../assets/images/sobre.svg';

import './styles.css';

function Landing() {
    return(

        <div id="page-landing">

            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
            </label>

            <div className="buttons-container">
                <Link to="/entrar" className="entrar">
                    <img src={entrar} alt="entrar"/>
                    Entrar
                </Link>

                <Link to="/cadastroescola" className="school">
                    <img src={education} alt="register school" />
                    Cadastro de Escolas
                </Link>

                <Link to="cadastrocoord" className="coordinator">
                    <img src={coordinator} alt="coordinator"/>
                    Cadastro Coordenator
                </Link>

                <Link to="cadastroprof" className="teacher">
                    <img src={teacher} alt="teacher"/>
                    Cadastro Professor  
                </Link>

                <Link to="/sobre" className="sobre">
                    <img src={sobre} alt="sobre"/>
                    Sobre 
                </Link>

            </div>

            <div className="logo-container">
                <img src={logo} alt="logo"/>
                <h2>Uma plataforma para gerenciamento de horários escolares.</h2>
                
            </div>
            <div className="school-text">
                <img src={school} alt="School" className="school-image"/>
            </div>
        </div>
   ); 
    
}

export default Landing;