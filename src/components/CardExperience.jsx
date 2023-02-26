import { Icon } from '@iconify/react';
import React, { useState } from "react";

import "../scss/card.scss";

function CardExperience(props) {

    const [isSeeMoreClicked, setIsSeeMoreClicked] = useState(false)
    const [showButtonText, setShowButtonText] = useState("more")

    const handleSeeMore = () => {
        setIsSeeMoreClicked(!isSeeMoreClicked)

        if (showButtonText === "more") {
            setShowButtonText("less")
        }
        if (showButtonText === "less") {
            setShowButtonText("more")
        }
    }

    const descriptions = Object.values(props.description)

    return (
        <div className="py-3">
            <div className='card-experience' onClick={handleSeeMore}>
                <div className='px-4 pt-4'>
                    <p className='text-muted d-flex justify-content-end textSM'>{props.duration}</p>
                    <h6>{props.company}</h6>
                    <h5 className='eqHeight textMD'>{props.role}</h5>
                    <hr className='col-12'/>
                    {isSeeMoreClicked &&
                        <div>
                            <ul>
                                {descriptions.map(item => (
                                    <li className='textSM'>{item}</li>
                                ))}
                            </ul>
                        </div>}
                </div>

                <div className='show-more d-flex justify-content-center'>
                    <Icon
                        icon={
                            showButtonText === "less"
                                ? "ic:baseline-arrow-drop-up"
                                : "ic:baseline-arrow-drop-down"
                        }
                        width="30"
                        height="30"

                    />
                </div>

            </div>


        </div>
    )
}
export default CardExperience;