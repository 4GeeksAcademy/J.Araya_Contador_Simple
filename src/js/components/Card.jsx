import React from "react";
import propTypes from "prop-types";


import { icon } from "@fortawesome/fontawesome-svg-core";


const Card = ({numero, icono}) => {
    return (
        <div>
            <div className="card col d-flex justify-content-center align-items-center" style={{ minWidth: "5rem", minHeight: "180px", fontSize: "40px" }}>
                {numero}
                {icono}
            </div>
        </div>
    )
}

Card.propTypes = {
    icon : propTypes.node
}

export default Card