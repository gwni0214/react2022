import React from "react";

function PortItem({link,image,title,category}){
    return (
        <article className="port__item">
            <figure className="img">
                <a href={link}><img src={image} alt={title} /></a>
            </figure>
            <div className="text">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>
    )
}

function PortCont(props){
    return (
    <section className="port__cont">
        <div className="container">
            <div className="port__inner">
                {props.port.map(port => (
                    <PortItem 
                        key={port.id}
                        id={port.id}
                        category={port.category}
                        image={port.image}
                        link={port.link}
                        title={port.title}                        
                    />
                ))}                                                                    
            </div>
        </div>
    </section>
    )
}

export default PortCont;