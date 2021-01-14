import React from 'react'

import "../../assets/components/PageHeader/index.css"
import PageHeader from "../../assets/components/PageHeader/index"
import Input from '../../assets/components/Input';
import Footer from '../../assets/components/Footer/footer';
import Back from "../../assets/images/back.svg"

import { Link } from 'react-router-dom';


function CadastroProf(){
    return(

    <div id="page">
        <PageHeader title="Então você é um professor!"
        subtitle="O primeiro passo, é preencher esse formulário de cadastro.">
                <Link to="/">
                    <img src={Back} alt="voltar"/>
                </Link>
        </PageHeader>

        <main>
            <fieldset>
                <legend>Seus Dados</legend>

                <Input label="Nome completo"
                htmlFor="name"
                type="name"/>

                <Input label="Matrírcula"
                htmlFor="matricula"
                type="text"/>

                <Input label="CPF"
                htmlFor="cpf"
                type="text"/>

                <Input label="Código de verificação da escola (verifique o código com o diretor ou coordenador)"
                htmlFor="cod-da-escola"
                type="text"/>


                <Input label="Área de Atuação"
                htmlFor="areacoord"
                type="text"/>

                <Input label="E-mail"
                htmlFor="email"
                type="email"/>

                
                <Input label="Senha"
                htmlFor="senha"
                type="password"/>

                <Input label="Repita a sua senha"
                htmlFor="repitasenha"
                type="password"/>

            </fieldset>

            <Footer frase=""/>
        </main>
    </div>

    );
}

export default CadastroProf;