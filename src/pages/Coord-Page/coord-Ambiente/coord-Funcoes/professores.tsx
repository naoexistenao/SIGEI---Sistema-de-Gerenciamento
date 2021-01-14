import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../../assets/components/PageHeader/index";
import ProfItems from "../../../../assets/components/ProfItems/index"
import "../../../../assets/components/PageHeader/index.css";
import "./professorescoord.css"

import Back from "../../../../assets/images/back.svg"
import User from "../../../../assets/images/user.svg"
import Input from "../../../../assets/components/Input";

import BotaoMais from "../../../../assets/images/botao-de-sinal-de-mais.svg"
import BotaoMenos from "../../../../assets/images/botao-sinal-de-menos.svg"
import ProfGaby from "../../../../assets/images/prof-gabriella.jpg"
import ProfBiliu from "../../../../assets/images/prof-biliu.jpg"
import ProfCaio from "../../../../assets/images/prof-caio.jpg"

function ProfCoord(){
    return(
        <div id="page">
            <PageHeader title="Professores">
                <Link to="/coordambiente">
                    <img src={Back} alt="voltar"/>
                </Link>
                <Link to="/">
                    <img src={User} alt="usuario"/>
                </Link>
            </PageHeader>
            <div className="search">
                <Input label="Nome"
                htmlFor="name"
                type="name"/>

                <Input label="Disciplina"
                htmlFor="disciplina"
                type="text"/>
            </div>

            <ProfItems Img={ProfGaby}
            Nome="Gabriella"
            Disciplina="Matematica"
            // Textinho="Professores de quimica por amor a felicidade"
            Total=" 50"
            Efetivas=" 8"
            Resto=" 40"
            Faltas=" 2">

                <div className="buttons">
                    <button type="button">
                        <img src={BotaoMais} alt="adicionar"/>
                    </button>
                    <button type="button">
                        <img src={BotaoMenos} alt="apagar"/>
                    </button>
                </div>
            </ProfItems>

            <ProfItems Img={ProfCaio}
            Nome="Caio Gilberto"
            Disciplina="Fisica, Quimica"
            // Textinho="Professores de quimica por amor a felicidade"
            Total=" 50"
            Efetivas=" 20"
            Resto=" 30" 
            Faltas=" 0">

                <div className="buttons">
                    <button type="button">
                        <img src={BotaoMais} alt="adicionar"/>
                    </button>
                    <button type="button">
                        <img src={BotaoMenos} alt="apagar"/>
                    </button>
                </div>
            </ProfItems>

            <ProfItems Img={ProfBiliu}
            Nome="João Vitor"
            Disciplina="Portugues, Ingles"
            // Textinho="Professores de quimica por amor a felicidade"
            Total=" 50"
            Efetivas=" 9"
            Resto=" 36"
            Faltas=" 3">

                <div className="buttons">
                    <button type="button">
                        <img src={BotaoMais} alt="adicionar"/>
                    </button>
                    <button type="button">
                        <img src={BotaoMenos} alt="apagar"/>
                    </button>
                </div>
            </ProfItems>
            
            <ProfItems Img="https://veja.abril.com.br/wp-content/uploads/2020/01/rainha-elizabeth-ii-1.jpg"
            Nome="Rainha"
            Disciplina="Quimica"
            // Textinho="Professores de quimica por amor a felicidade"
            Total=" 100"
            Efetivas=" 20"
            Resto=" 60"
            Faltas=" 20">

                <div className="buttons">
                    <button type="button">
                        <img src={BotaoMais} alt="adicionar"/>
                    </button>
                    <button type="button">
                        <img src={BotaoMenos} alt="apagar"/>
                    </button>
                </div>
            </ProfItems>

            <ProfItems Img="https://pbs.twimg.com/profile_images/1068854846030258176/msETBIAr.jpg"
            Nome="Chines"
            Disciplina="Culinaria"
            // Textinho="Chefe feliz, comer pastel de flago"
            Total=" 100"
            Efetivas=" 20"
            Resto=" 73"
            Faltas="7">
                <div className="buttons">
                    <button type="button">
                        <img src={BotaoMais} alt="adicionar"/>
                    </button>
                    <button type="button">
                        <img src={BotaoMenos} alt="apagar"/>
                    </button>
                </div>
            </ProfItems>

            <ProfItems Img="https://s2.glbimg.com/vRaMmE_S3khsCp-Ot8GYmgEkvYE=/e.glbimg.com/og/ed/f/original/2017/01/16/tesla_circa_1890.jpeg"
            Nome="Nikola Tesla"
            Disciplina="Fisica, Quimica e Inventor"
            // Textinho="Nossa aulas sera eletrizantes"
            Total=" 100"
            Efetivas=" 20"
            Resto=" 71"
            Faltas="-9">
                <div className="buttons">
                    <button type="button">
                        <img src={BotaoMais} alt="adicionar"/>
                    </button>
                    <button type="button">
                        <img src={BotaoMenos} alt="apagar"/>
                    </button>
                </div>
            </ProfItems>

            <ProfItems Img="https://conteudo.imguol.com.br/c/noticias/52/2020/06/28/einstein-e-um-exemplo-de-espirito-livre-e-criador-que-no-entanto-manteve-seus-preconceitos-1593357101279_v2_450x337.jpg"
            Nome="Elbert Einstein"
            Disciplina="Fisica"
            // Textinho="Você vera a verdade do universo depois da minha aula"
            Total=" 100"
            Efetivas=" 20"
            Resto=" 80"
            Faltas="0">
                <div className="buttons">
                    <button type="button">
                        <img src={BotaoMais} alt="adicionar"/>
                    </button>
                    <button type="button">
                        <img src={BotaoMenos} alt="apagar"/>
                    </button>
                </div>
            </ProfItems>

        </div>
    );
}

export default ProfCoord;