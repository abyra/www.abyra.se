import "semantic-ui-css/semantic.min.css";
import "../css/abyra.css";
import React from "react";
import { CompactNavigation } from "../components";
import styled from "styled-components";
import { Provider, Image, Flex, Box } from "rebass";
import logo from "../images/logo.png";

const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;

    background-color: #fff;
`;

const Container = styled.div`
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
`;

export default class Template extends React.Component {
    render() {
        return (
            <Provider>
                <Header>
                    <Flex>
                        <Image src={logo} />
                        <Box ml="auto">
                            <CompactNavigation />
                        </Box>
                    </Flex>
                </Header>

                <main>
                    <Container>
                        {this.props.children()}
                    </Container>
                </main>
            </Provider>
        );
    }
}
