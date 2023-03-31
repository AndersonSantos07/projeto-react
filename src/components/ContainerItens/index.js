import React from "react";
import { ContainerItens as Container } from "./style";

function ContainerItens({children, newStyle}){

    return <Container newStyle={newStyle}>{children}</Container>
}

export default ContainerItens