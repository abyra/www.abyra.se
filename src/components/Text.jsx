import React from "react";
import styled from "styled-components";
import omit from "lodash/omit";

const Text = styled(props => <span {...omit(props, Text.OmitProps)} />)`
    ${props => props.capitalize && "text-transform: capitalize;"};
    ${props => props.italic && "font-style: italic;"};
`;

Text.OmitProps = ["capitalize", "italic"];

export default Text;
