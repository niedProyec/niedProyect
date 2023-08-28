import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Case = ()=>{

    const { id } = useParams();

    return(
        <div>
            caso # {id}
        </div>
    )
}

export default Case