import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../../assets/components/PageHeader/index";
import "../../../../assets/components/PageHeader/index.css";
import "./coordturmas.css"

import Back from "../../../../assets/images/back.svg"
import User from "../../../../assets/images/user.svg"

function GradeCoord(){
    return(
        <div id="page">
            <PageHeader title="Grade de aulas">
                <Link to="/coordambiente">
                    <img src={Back} alt="voltar"/>
                </Link>
                <Link to="/">
                    <img src={User} alt="usuario"/>
                </Link>
            </PageHeader>

            <h1>Grade</h1>

        </div>
    );
}

export default GradeCoord;