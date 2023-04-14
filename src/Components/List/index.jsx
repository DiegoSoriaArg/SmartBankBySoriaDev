import React from "react";
import { BoxCss, BtnCss } from "../UI";
import { lista } from "../../info";
import Card from "../Card";

const List = () => {
    return <BoxCss>
        {
            lista.cargos.map( (cargo, i) => {
                return <Card key={i} cargo={cargo} />
            })
        }
        <BtnCss>Ver mas</BtnCss>
    </BoxCss>
};

export default List;