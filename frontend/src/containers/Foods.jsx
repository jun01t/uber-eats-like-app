import React,{Fragment} from "react";

export const Foods = ({
    match
}) => {
    return(
        <Fragment>
            Food List
            <p>
                restrunsId is {match.params.restaurantsId}
            </p>
        </Fragment>
    )
}