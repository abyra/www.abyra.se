import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import omit from "lodash/omit";
import withProps from "recompose/withProps";

const FlexBox = styled(props => <div {...omit(props, FlexBox.OmitProps)} />)`
	display: flex;
	flex-direction: ${props => props.direction};
	align-items: ${props => props["align-items"]};
	justify-content: ${props => props["justify-content"]};
	flex-wrap: ${props => props["wrap"]};
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

export const FlexItem = styled(props =>
    <div {...omit(props, FlexItem.OmitProps)} />
)`
	flex-grow: ${props => props.grow};
	flex-basis: ${props => props.basis};
	align-self: ${props => props["align-self"]};
    ${props => props.pullRight && "margin-left: auto;"}
    ${props => {
        if (props.padded) {
            if (props.padded === "left") {
                return "padding-left: 2%;";
            }
        }
    }}

`;

FlexItem.OmitProps = ["grow", "basis", "pullRight", "align-self", "padded"];

FlexItem.propTypes = {
    grow: PropTypes.number,
    basis: PropTypes.string,
    pullRight: PropTypes.bool,
    "align-self": PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch"
    ]),
    padded: PropTypes.oneOf(["left", "right"])
};

FlexItem.defaultProps = {
    grow: 0,
    basis: "auto",
    pullRight: false,
    "align-self": "stretch"
};

FlexBox.Item = FlexItem;

FlexBox.Center = withProps({ "justify-content": "center" })(FlexBox);

export default FlexBox;
