import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { BackgroundImage, Heading, Relative, Absolute, Box } from "rebass";
import Card from "./Card";
import { Container } from "semantic-ui-react";

const PageHeading = styled(Heading)`
    text-transform: uppercase;
    text-shadow: 3px 1px 10px rgba(150, 150, 150, 1);
`;

const Page = ({ title, bg, ...props }) =>
    <Card>
        <Helmet>
            <title>
                {title}
            </title>
        </Helmet>
        <Relative>
            <BackgroundImage src={bg} ratio={1 / 5}>
                <Absolute bottom left>
                    <PageHeading
                        ml={[1, 2, 3]}
                        mb={[1, 2, 3]}
                        f={[3, 4, 5]}
                        color={props.color ? props.color : "white"}
                        is="h1">
                        {title}
                    </PageHeading>
                </Absolute>
            </BackgroundImage>
        </Relative>
        <Box py={[1, 2, 3]}>
            <Container text>
                {props.children}
            </Container>
        </Box>
    </Card>;

export default Page;
