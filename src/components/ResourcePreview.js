import React from "react";
import {NavLink} from "react-router-dom";


function ResourcePreview({title, resourceAuthor, rating, hashKey}) {
    const {main, navLink, authorText, ratingText} = style;
    return (

        <div style={main}>
            
            <NavLink style={navLink} to={`/resource/${hashKey}`}>{title}</NavLink>
            
            <span style={authorText}>{resourceAuthor}</span>
            <span style={ratingText}>⭐{rating <= 5 ? rating : 5}/5</span>
        </div>
    )
}

const style = {
    main: {
        display: "flex",
        flexDirection:"column",
        margin: "0 auto",
        width: "100%",
        borderRadius: "0.1rem",
        padding:"3rem",
        
    },
    navLink: {
        fontSize: "1.5rem",
        textDecoration:"none",
        color: "dodgerblue"
    },
    authorText: {
        fontSize: ".9rem",
        margin: "1rem",
        color: "seagreen"
    },
    ratingText: {
        fontSize: ".9rem",
        color: "#444444"
    }
}
export default ResourcePreview;