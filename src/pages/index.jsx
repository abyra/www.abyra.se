import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Title>startsidan...</Title>
            </div>
        );
    }
}
