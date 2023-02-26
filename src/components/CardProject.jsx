import "../scss/card.scss";
import React from "react";

function CardProject(props) {
    const stacks = Object.values(props.stack)
    return (
        <div className="card-project py-5">
            {props.id % 2 !== 0 ?

                <div className="card-project-odd d-flex justify-content-end">
                    <div className="wrapper">
                    <img src={process.env.PUBLIC_URL + props.image} alt="" />
                    </div>

                    <div className="explanation  px-4 py-5">
                        <h5 className="textReg">{props.type}</h5>
                        <h3 className="textSubtitle">{props.name}</h3>
                        <p className="textSM  py-4">{props.description}</p>
                        <div className="d-flex flex-wrap">
                            {stacks.map(item => (
                                <div className='textSM px-3' key={item}>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>

                :

                <div className="card-project-even ">
                    <div className="wrapper">
                    <img src={process.env.PUBLIC_URL + props.image} alt="" />
                    </div>

                    <div className="explanation  px-4 py-5">
                        <h5 className="textReg">{props.type}</h5>
                        <h3 className="textSubtitle">{props.name}</h3>
                        <p className="textSM  py-4">{props.description}</p>
                        <div className="d-flex flex-wrap">
                            {stacks.map(item => (
                                <div className='textSM px-3' key={item}>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            }




        </div>
    )

}

export default CardProject;