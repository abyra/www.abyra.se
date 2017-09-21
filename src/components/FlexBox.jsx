import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import omit from "lodash/omit";
import withProps from "recompose/withProps";
import { space, width, removeProps } from "styled-system";

const FlexBox = styled(props => (
    <div {...omit(removeProps(props), FlexBox.OmitProps)} />
))`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: ${props => props["align-items"]};
    justify-content: ${props => props["justify-content"]};
    flex-wrap: ${props => props["wrap"]};
    ${space};
    ${width};
`;

FlexBox.OmitProps = ["direction", "align-items", "justify-content", "wrap"];

FlexBox.defaultProps = {
    direction: "row",
    "align-items": "stretch",
    "justify-content": "flex-start",
    wrap: "nowrap"
};

FlexBox.propTypes = {
    direction: PropTypes.oneOf(["row", "column"]),
    "align-items": PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch"
    ]),
    "justify-content": PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around"
    ]),
    wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"])
};

export const FlexItem = styled(props => (
    <div {...omit(removeProps(props), FlexItem.OmitProps)} />
))`
    flex-grow: ${props => props.grow};
    flex-basis: ${props => props.basis};
    align-self: ${props => props["align-self"]};
    ${space};
    ${width};
`;

FlexItem.OmitProps = ["grow", "basis", "pullRight", "align-self"];

FlexItem.propTypes = {
    grow: PropTypes.number,
    basis: PropTypes.string,
    "align-self": PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch"
    ])
};

FlexItem.defaultProps = {
    grow: 0,
    basis: "auto",
    "align-self": "stretch"
};

FlexBox.Item = FlexItem;

FlexBox.Center = withProps({ "justify-content": "center" })(FlexBox);
FlexBox.Column = withProps({ direction: "column" })(FlexBox);

export default FlexBox;
