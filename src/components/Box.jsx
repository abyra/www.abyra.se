import React from "react";
import styled from "styled-components";
import { space, width, removeProps } from "styled-system";
import defaultProps from "recompose/defaultProps";

const Box = styled(({ as: ElementType, ...props }) => (
    <ElementType {...removeProps(props)} />
))`
    ${space};
    ${width};
`;

export default defaultProps({
    as: "div"
})(Box);
