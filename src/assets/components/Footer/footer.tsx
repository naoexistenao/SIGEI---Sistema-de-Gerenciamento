import React from "react"

import "./footer.css"

import Important from "../../images/exclamacao.svg"

interface FooterProps {
    frase: string;
}
const Footer: React.FC<FooterProps> = (props) =>{
    return(
        <div className="footer">
             <p>
                <img src={Important} alt="importante"/>
                Importante! <br/>
                Preencha todos os dados. <br/>
                <p>
                {props.frase}
                </p>
            </p>
            <button type="button">
                Salvar cadastro
            </button>
        </div>
        
    );
}
export default Footer;