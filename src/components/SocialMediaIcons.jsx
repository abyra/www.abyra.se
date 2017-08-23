import React from "react";
import { Label, Icon } from "semantic-ui-react";
import styled from "styled-components";

const InstagramLabel = styled(Label)`

    &.ui.label {
        > .icon{
            margin: 0;
            margin-right: 0.3em
        }
    }
`;

export const Instagram = () =>
    <InstagramLabel
        as="a"
        href="https://www.instagram.com/adrianssonadvokatbyra/"
        target="_blank"
        rel="noopener">
        <Icon name="instagram" size="large" />
        Följ oss på instagram
    </InstagramLabel>;

const SocialMediaIcons = props =>
    <Label.Group {...props}>
        <Instagram />
    </Label.Group>;

SocialMediaIcons.defaultProps = {
    size: "large",
    color: "blue"
};

export default SocialMediaIcons;
