import React from "react";

const AddImageCard = props => {

    return (
            <div className="addImage">
                {props.image_base64 ? (
                    <img src={"data:image/png;base64," + props.image_base64}/>
                ) : (
                    <img src={require ("./Placeholder.png")}/>
                )}
            </div>
    )
}

export default AddImageCard;