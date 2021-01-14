import React from 'react'
import Input from '../../assets/components/Input';
import Footer from '../../assets/components/Footer/footer';
import Back from "../../assets/images/back.svg"

import PageHeader from "../../assets/components/PageHeader/index"
import "../../assets/components/PageHeader/index.css"

import "./escola.css"
import { Link } from 'react-router-dom';

function CadastroEscola(){
    return(

    <div id="page">
        <PageHeader title="Então você deseja cadastrar uma escola!" 
        subtitle="O primeiro passo, é preencher esse formulário de cadastro.">
                <Link to="/">
                    <img src={Back} alt="voltar"/>
                </Link>
        </PageHeader>

        <main>
            <fieldset>
                <legend>Seus Dados</legend>

                <Input label="Nome da escola"
                htmlFor="name"
                type="name"/>

                {/* foto */}

                <Input label="E-mail"
                htmlFor="email"
                type="email"/>

                <Input label="Telefone"
                htmlFor="telefone"
                type="text"/>

                <Input label="Endereço"
                htmlFor="endereco"
                type="text"/>

                {/* mapa */}
            </fieldset>

            <Footer frase="Após o cadastro você receberá em seu e-mail um código que será utilizado para o cadastro de outro servidores da escola."/>
        </main>
    </div>
    );
}

export default CadastroEscola;