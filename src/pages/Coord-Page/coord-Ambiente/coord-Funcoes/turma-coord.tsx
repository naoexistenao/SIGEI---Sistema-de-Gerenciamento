import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../../assets/components/PageHeader/index";
import "../../../../assets/components/PageHeader/index.css";
import "./coordturmas.css"

import Back from "../../../../assets/images/back.svg"
import User from "../../../../assets/images/user.svg"
import TurmasImg from "../../../../assets/images/turmas.svg"

function CoordTurmas(){
    return(
        <div id="page">
            <PageHeader title="Turmas">
                <Link to="/coordambiente">
                    <img src={Back} alt="voltar"/>
                </Link>
                <Link to="/">
                    <img src={User} alt="usuario"/>
                </Link>
            </PageHeader>

            <div className="buttons-turmas-coord">
                <Link to="/turma1Binfo" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    1º ANO B Info
                </Link>

                <Link to="/turma1Cinfo" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    1º ANO C Info
                </Link>

                <Link to="/turma2Ainfo" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    2º ANO A Info
                </Link>

                <Link to="/turma2Binfo" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    2º ANO B Info
                </Link>

                <Link to="/turma2Cinfo" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    2º ANO C Info
                </Link>

                <Link to="/turma3Ainfo" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    3º ANO A Info
                </Link>

                <Link to="/turma3Binfo" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    3º ANO B Info
                </Link>

                <Link to="/turma1Abio" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    1º ANO A bio
                </Link>

                <Link to="/turma1Bbio" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    1º ANO B bio
                </Link>

                <Link to="/turma2Abio" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    2º ANO A bio
                </Link>

                <Link to="/turma2Bbio" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    2º ANO B bio
                </Link>

                <Link to="/turma3Abio" className="turma">
                    <img src={TurmasImg} alt="Turma"/>
                    3º ANO A bio
                </Link>
            </div>

        </div>
    );
}

export default CoordTurmas;