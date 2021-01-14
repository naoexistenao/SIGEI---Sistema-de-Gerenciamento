import React from 'react'

import "../../assets/components/PageHeader/index.css"
import "./sobre.css"
import PageHeader from "../../assets/components/PageHeader/index"
import Back from "../../assets/images/back.svg"
import Gaby from "../../assets/images/prof-gabriella.jpg"
import Caio from "../../assets/images/prof-caio.jpg"
import Biliu from "../../assets/images/prof-biliu.jpg"
import { Link } from 'react-router-dom';

function Sobre(){
    return(

    <div id="page">
        <PageHeader title="Sobre" subtitle="Conheça melhor nossa plataforma">
                <Link to="/">
                    <img src={Back} alt="voltar"/>
                </Link>
        </PageHeader>
        <div className="sobre">
            <p>SIGEI é um sistema criado para um melhor desempenho e gerenciamento das atividades  pedagógicas em um ambiente escolar. <br/>É possivel criar grades escolares, contabilizar as aulas dadas e faltadas, contabilizar a falta dos professores, mostrar com facilidade as respectivas aulas a serem efetivadas durante a semana e muito mais.</p>

            <div className="foto">
                <div className="card">
                    <img src={Gaby} alt="gaby"/>
                    <p>Gaby</p>
                </div>

                <div className="car">
                    <img src={Caio} alt="caio"/>
                    <p>Caio</p>
                </div>
                    
                <div className="card">
                    <img src={Biliu} alt="biliu"/>
                    <p>Biliu</p>
                </div>
            </div>
            <div className="suporte">
                <h5>Suporte</h5>
                <p>Email: suporte@sigei.com</p>
                <p>Número: 3740-2510</p>
                <p>Instagram: @SIGEI</p>
                <p>Facebook: SIGEI</p>
            </div>
        </div>
    </div>

    );
}

export default Sobre;