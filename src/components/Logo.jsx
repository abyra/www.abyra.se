import React from "react";
import logotype from "../images/logo.png";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import omit from "lodash/omit";

const Logo = styled(props => <Image {...omit(props, Logo.OmitProps)} />)`
    ${props => props.small && "width: 180px;"}
    ${props => props.large && "width: 240px;"}
`;

Logo.OmitProps = ["small", "large"];

export default props => <Logo {...props} src={logotype} />;
