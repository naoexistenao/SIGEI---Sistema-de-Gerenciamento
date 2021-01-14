import React from 'react'

import "../../assets/components/PageHeader/index.css"
import PageHeader from "../../assets/components/PageHeader/index"
import Input from '../../assets/components/Input';
import Important from "../../assets/images/exclamacao.svg";

import "./login.css"
import { Link } from 'react-router-dom';

import Back from "../../assets/images/back.svg"

function Login(){
    return(

    <div id="page">
        <PageHeader title="Login">
                <Link to="/">
                    <img src={Back} alt="voltar"/>
                </Link>
        </PageHeader>
        <main>
            <fieldset>
                <legend>Seus Dados</legend>

                <Input label="E-mail"
                htmlFor="email"
                type="email"/>

                <Input label="Senha"
                htmlFor="senha"
                type="password"/>

            </fieldset>

            <footer>
                <a href="/">
                    <img src={Important} alt="importante"/>
                    Esqueci a senha
                </a>
                <button type="button">
                    Entrar
                </button>
            </footer>
        </main>
    </div>

    );
}

export default Login;