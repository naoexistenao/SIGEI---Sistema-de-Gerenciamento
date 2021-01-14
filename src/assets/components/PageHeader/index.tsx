import React from 'react'

interface PageHeaderProps{
    title?: string;
    subtitle?: string;
    text?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(

        <header className="page-header">
            <div className="top-bar-container">
                {props.children}
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                <br/>
                <h3>{props.subtitle}</h3>
            </div>
        </header>

    );
}

export default PageHeader;