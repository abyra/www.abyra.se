import "../css/abyra.css";
import React from "react";
import { SiteHeader, SiteFooter } from "../components";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import Helmet from "react-helmet";

const Site = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    > main {
        flex: 1;
    }

    > footer {
        margin-top: 1%;
        display: flex;
        justify-content: center;
    }

    > header {
        margin-bottom: 1%;
    }
`;

export default class Template extends React.Component {
    render() {
        return (
            <Site>
                <Helmet
                    titleTemplate="%s | Adriansson Advokatbyrå"
                    defaultTitle="Adriansson Advokatbyrå">
                    <link rel="canonical" href="http://www.abyra.se" />
                    <meta
                        name="description"
                        content="Adriansson Advokatbyrå är en affärsjuridisk byrå med fokus på tvistlösning, bygg- och entreprenadrelaterad juridik och familjerätt."
                    />
                </Helmet>
                <header>
                    <Container>
                        <SiteHeader />
                    </Container>
                </header>

                <Container as="main">
                    {this.props.children()}
                </Container>

                <footer>
                    <SiteFooter />
                </footer>
            </Site>
        );
    }
}
