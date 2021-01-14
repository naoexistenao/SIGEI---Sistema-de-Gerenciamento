import React from "react";
import PageHeader from "../../../assets/components/PageHeader/index";
import "../../../assets/components/PageHeader/index.css";
import "./coordAmbiente.css"

import visualizarTurmas from "../../../assets/images/visualizarT.svg"
import grade from "../../../assets/images/grade.svg"
import professores from "../../../assets/images/teacher.svg"
import User from "../../../assets/images/user.svg"
import Back from "../../../assets/images/back.svg"

import { Link } from "react-router-dom";

function Ambiente(){
    return(
        <div id="page">
            <PageHeader title="Seja bem vindo ao seu ambiente coordenador!!">
                <Link to="/">
                    <img src={Back} alt="voltar"/>
                </Link>
                <Link to="/">
                    <img src={User} alt="usuario"/>
                </Link>
            </PageHeader>

            <div className="buttons-contente">
                <Link to="/coordturmas" className="visualizarTurmas">
                    <img src={visualizarTurmas} alt="visualizar Turmas"/>
                    Visualizar turmas
                </Link>

                <Link to="/coordgrade" className="grade">
                    <img src={grade} alt="grade de aula" />
                    Grade
                </Link> 

                <Link to="/coordprof" className="professores">
                    <img src={professores} alt="professores"/>
                    Professores
                </Link>
            </div>
        </div>
    );
}

export default Ambiente;