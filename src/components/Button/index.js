import React from "react";
import { Button } from './style'

function ButtonContainers({ children, ...props }) {

    return <Button {...props}>{children}</Button>
}

export default ButtonContainers