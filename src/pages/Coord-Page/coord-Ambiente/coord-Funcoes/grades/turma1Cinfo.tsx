import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../../../assets/components/PageHeader/index";
import "../../../../../assets/components/PageHeader/index.css";
import "./turmagrade.css"

import Back from "../../../../../assets/images/back.svg"
import User from "../../../../../assets/images/user.svg"

function Turma1CInfo(){
    return(
        <div id="page">
            <PageHeader title="Turma 1º C Info">
                <Link to="/profturmas">
                    <img src={Back} alt="voltar"/>
                </Link>
                <Link to="/">
                    <img src={User} alt="usuario"/>
                </Link>
            </PageHeader>

            <div className="tabela">
                <table>
                    <tr>
                        <th>Hora</th>
                        <th>Segunda</th>
                        <th>Teça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                    </tr>
                    <tr>
                        <td>8h</td>
                        <td className="quimica">Quimica -<br/>Caio Gilberto</td>
                        <td className="ingles">Ingles -<br/>João Vitor</td>
                        <td className="fisica">Fisica -<br/>Caio Gilberto</td>
                        <td className="portugues">Portugues -<br/>João Vitor</td>
                        <td className="matematica">Matematica -<br/>Gabriella</td>
                    </tr>
                    <tr>
                        <td>9h</td>
                        <td className="quimica">Quimica -<br/>Caio Gilberto</td>
                        <td className="ingles">Ingles -<br/>João Vitor</td>
                        <td className="fisica">Fisica -<br/>Caio Gilberto</td>
                        <td className="portugues">Portugues -<br/>João Vitor</td>
                        <td className="matematica">Matematica -<br/>Gabriella</td>
                    </tr>
                    <tr>
                        <td className="intervalo">Intervalo</td>
                        <td className="intervalo">Intervalo</td>
                        <td className="intervalo">Intervalo</td>
                        <td className="intervalo">Intervalo</td>
                        <td className="intervalo">Intervalo</td>
                        <td className="intervalo">Intervalo</td>
                    </tr>
                    <tr>
                        <td>10h</td>
                        <td className="portugues">Portugues -<br/>João Vitor</td>
                        <td className="geografia">Geografia -<br/>Marcio do Sul</td>
                        <td className="historia">Historia -<br/>Marcio do Sul</td>
                        <td className="ingles">Ingles -<br/>João Vitor</td>
                        <td className="fisica">Fisica -<br/>Caio Gilberto</td>
                    </tr>
                    <tr>
                        <td>11h</td>
                        <td className="portugues">Portugues -<br/>João Vitor</td>
                        <td className="geografia">Geografia -<br/>Marcio do Sul</td>
                        <td className="historia">Historia -<br/>Marcio do Sul</td>
                        <td className="ingles">Ingles -<br/>João Vitor</td>
                        <td className="fisica">Fisica -<br/>Caio Gilberto</td>
                    </tr>
                    <tr>
                        <td className="almoco">Almoço</td>
                        <td className="almoco">Almoço</td>
                        <td className="almoco">Almoço</td>
                        <td className="almoco">Almoço</td>
                        <td className="almoco">Almoço</td>
                        <td className="almoco">Almoço</td>
                    </tr>
                    <tr>
                        <td>13h</td>
                        <td className="quimica">Quimica -<br/>Caio Gilberto</td>
                        <td className="portugues">Portugues -<br/>João Vitor</td>
                        <td className="matematica">Matematica -<br/>Gabriella</td>
                        <td className="geografia">Geografia -<br/>Marcio do Sul</td>
                        <td className="historia">Historia -<br/>Marcio do Sul</td>
                    </tr>
                    <tr>
                        <td>14h</td>
                        <td className="quimica">Quimica -<br/>Caio Gilberto</td>
                        <td className="portugues">Portugues -<br/>João Vitor</td>
                        <td className="matematica">Matematica -<br/>Gabriella</td>
                        <td className="geografia">Geografia -<br/>Marcio do Sul</td>
                        <td className="historia">Historia -<br/>Marcio do Sul</td>
                    </tr>
                    <tr>
                        <td className="intervalo">Intervalo</td>
                        <td className="intervalo">Intervalo</td>
                        <td className="intervalo">Intervalo</td>
                        <td className="intervalo">Intervalo</td>
                        <td className="intervalo">Intervalo</td>
                        <td className="intervalo">Intervalo</td>
                    </tr>
                    <tr>
                        <td>15h</td>
                        <td className="portugues">Portugues -<br/>João Vitor</td>
                        <td className="fisica">Fisica -<br/>Caio Gilberto</td>
                        <td className="quimica">Quimica -<br/>Caio Gilberto</td>
                        <td className="ingles">Ingles -<br/>João Vitor</td>
                        <td className="matematica">Matematica -<br/>Gabriella</td>
                    </tr>
                    <tr>
                        <td>16h</td>
                        <td className="portugues">Portugues -<br/>João Vitor</td>
                        <td className="fisica">Fisica -<br/>Caio Gilberto</td>
                        <td className="quimica">Quimica -<br/>Caio Gilberto</td>
                        <td className="ingles">Ingles -<br/>João Vitor</td>
                        <td className="matematica">Matematica -<br/>Gabriella</td>
                    </tr>
                </table>
            </div>

            <div className="alunos">
                <h1>alunos</h1>
            </div>

        </div>
    );
}

export default Turma1CInfo;