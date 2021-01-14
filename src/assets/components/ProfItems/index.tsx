import React, {InputHTMLAttributes} from "react"

import "./index.css"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    Nome: string;
    Disciplina: string;
    Textinho?: string;
    Total: string;
    Efetivas: string;
    Resto: string;
    Faltas: string;
    Img: string
}

const ProfItems: React.FC<InputProps> = (props, ...rest) =>{
    return(
        <div className="prof-lista">
                <article className="prof-items">
                    <header>
                        <img src={props.Img} alt="imagem de perfil"/>
                        <div>
                            <strong>{props.Nome}</strong>
                            <span>{props.Disciplina}</span>
                        </div>
                    </header>
                    <p>{props.Textinho}</p>
                    <footer>
                        <div className="aulas">
                            <p>Aulas total no sememtre: 
                                <strong>{props.Total}</strong>
                            </p>
                            <p>Aulas efetivadas: 
                                <strong>{props.Efetivas}</strong>
                            </p>
                            <p>Resta: 
                                <strong>{props.Resto}</strong>
                            </p>
                        </div>
                        <div className="dividir">
                            <div className="faltas">
                                <p>Faltas: 
                                    <strong>{props.Faltas}</strong>
                                </p>
                            </div>
                            {props.children}
                        </div>
                    </footer>
                </article>
            </div>
    );
}

export default ProfItems;