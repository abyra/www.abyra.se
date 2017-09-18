import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Segment, Header, Label, Icon } from "semantic-ui-react";
import Link from "gatsby-link";

export const PageWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
`;

export const ContentWrapper = ({ children, ...props }) => (
    <Segment basic padded {...props}>
        {children}
    </Segment>
);

export const PageHeading = styled.div`
    background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.6)
        ),
        url(${props => props.bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 0;
    position: relative;
    overflow: hidden;
    padding-bottom: 17%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    > header {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1%;

        > h1 {
            margin: 0;
            color: white;
            text-shadow: 0 1px 0 black;
            text-transform: uppercase;
            font-size: 1.6rem;
        }

        @media (min-width: 410px) {
            > h1 {
                font-size: 2rem;
            }
        }
    }
`;

const Page = ({ title, slug, bg, ...props }) => (
    <PageWrapper>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <PageHeading bg={bg || require(`../images/page_${slug}.jpg`)}>
            <header>
                <h1>{title}</h1>
            </header>
        </PageHeading>
        <ContentWrapper>{props.children}</ContentWrapper>
    </PageWrapper>
);

export const PageSummary = ({ title, slug, ...props }) => (
    <PageWrapper>
        <ContentWrapper>
            <Header as="h2" dividing>
                {title}
            </Header>
            {props.children}
            <Label ribbon as={Link} to={`/${slug}`} color="blue">
                Läs mer <Icon name="angle double right" />
            </Label>
        </ContentWrapper>
    </PageWrapper>
);

Page.Summary = PageSummary;

export default Page;
