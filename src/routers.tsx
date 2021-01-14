import React from "react"

import {BrowserRouter, Route} from "react-router-dom"
import CadastroEscola from "./pages/Escola-Page/cadastro-escola";
import TurmaProf from "./pages/Prof-Page/turmas-prof"
import Landing from "./pages/Landing";
import CadastroProf from "./pages/Prof-Page/cadastro-prof";
import Login from "./pages/Login-Page/login";
import CadastroCoord from "./pages/Coord-Page/cadastro-coord";
import CoordAmbiente from "./pages/Coord-Page/coord-Ambiente/ambiente"
import CoordTurmas from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/turma-coord"

import Turma1BInfo from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma1Binfo"
import Turma1CInfo from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma1Cinfo"
import Turma2AInfo from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma2Ainfo"
import Turma2BInfo from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma2Binfo"
import Turma2CInfo from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma2Cinfo"
import Turma3AInfo from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma3Ainfo"
import Turma3BInfo from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma3Binfo"
import Turma1ABio from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma1Abio"
import Turma1BBio from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma1Bbio"
import Turma2ABio from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma2Abio"
import Turma2BBio from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma2Bbio"
import Turma3ABio from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grades/turma3Abio"



import GradeCoord from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/grade"
import ProfCoord from "./pages/Coord-Page/coord-Ambiente/coord-Funcoes/professores"
import Sobre from "./pages/Sobre/sobre";

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/entrar" component={Login}/>
            <Route path="/cadastroescola" component={CadastroEscola}/>
            <Route path="/cadastrocoord" component={CadastroCoord}/>
            <Route path="/cadastroprof" component={CadastroProf}/>
            <Route path="/profturmas" component={TurmaProf}/>
            <Route path="/coordambiente" component={CoordAmbiente}/>
            <Route path="/coordturmas" component={CoordTurmas}/>
            <Route path="/coordgrade" component={GradeCoord}/>

            <Route path="/turma1BInfo" component={Turma1BInfo}/>
            <Route path="/turma1CInfo" component={Turma1CInfo}/>
            <Route path="/turma2AInfo" component={Turma2AInfo}/>
            <Route path="/turma2BInfo" component={Turma2BInfo}/>
            <Route path="/turma2CInfo" component={Turma2CInfo}/>
            <Route path="/turma3AInfo" component={Turma3AInfo}/>
            <Route path="/turma3BInfo" component={Turma3BInfo}/>
            <Route path="/turma1ABio" component={Turma1ABio}/>
            <Route path="/turma1BBio" component={Turma1BBio}/>
            <Route path="/turma2ABio" component={Turma2ABio}/>
            <Route path="/turma2BBio" component={Turma2BBio}/>
            <Route path="/turma3ABio" component={Turma3ABio}/>

            <Route path="/coordprof" component={ProfCoord}/>
            <Route path="/sobre" component={Sobre}/>

        </BrowserRouter>
    );
}

export default Routes;