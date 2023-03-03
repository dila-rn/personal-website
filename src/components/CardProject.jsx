import "../scss/card.scss";
import React from "react";
import { Icon } from "@iconify/react";

function CardProject(props) {
    const stacks = Object.values(props.stack)
    return (
        <div className="card-project py-5">
            {props.id % 2 !== 0 ?
                <div className="card-project-odd flex-row-reverse ">
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + props.image} alt="" />
                    </div>
                    <div className="explanation ">
                        <div className="open-link d-flex justify-content-end">
                            <a href={props.link}
                                target="_blank"
                                rel="noreferrer"
                                className="icon-position p-4">
                                <Icon icon="material-symbols:open-in-new" width="20" height="20" />
                            </a>
                        </div>
                        <div className=" px-4 py-5">
                            <h5 className="textReg">{props.type}</h5>
                            <h3 className="textSubtitle">{props.name}</h3>
                            <p className="textSM  py-4">{props.description}</p>
                            <div className="d-flex flex-wrap">
                                {stacks.map(item => (
                                    <div className='textSM pe-4 pt-2' key={item}>{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="card-project-even ">
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + props.image} alt="" />
                    </div>
                    <div className="explanation">
                        <div className="open-link d-flex justify-content-start">
                            <a href={props.link}
                                target="_blank"
                                rel="noreferrer"
                                className="icon-position p-4">
                                <Icon icon="material-symbols:open-in-new" width="20" height="20" />
                            </a>
                        </div>
                        <div className=" px-4 py-5">
                            <h5 className="textReg">{props.type}</h5>
                            <h3 className="textSubtitle">{props.name}</h3>
                            <p className="textSM  py-4">{props.description}</p>
                            <div className="d-flex flex-wrap">
                                {stacks.map(item => (
                                    <div className='textSM pe-4 pt-2' key={item}>{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="card-project-md">
                <div className="box px-4 py-5">
                    <div className="wrapper">
                        <img src={process.env.PUBLIC_URL + props.image} alt="" />
                    </div>

                    <div className="pt-5 explanation-md">
                        <h5 className="textReg">{props.type}</h5>
                        <h3 className="textSubtitle">{props.name}</h3>
                        <p className="textSM py-4">{props.description}</p>
                        <div className="d-flex flex-wrap">
                            {stacks.map(item => (
                                <div className='textSM pt-2' key={item}>{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProject;
