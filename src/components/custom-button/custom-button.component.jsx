import React from "react";

import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = ({ children, ...props}) => (
    <CustomButtonContainer className="custom-button" {...props}>
        { children }
    </CustomButtonContainer>
)

export default CustomButton;