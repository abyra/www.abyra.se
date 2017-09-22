import React from "react";
import styled from "styled-components";
import {
    PageWrapper,
    PageHeading,
    ContentWrapper,
    PageSummary
} from "../components/Page";
import { FlexBox, Box } from "../components";
import Media from "react-media";
import { Image, Button } from "semantic-ui-react";
import slugify from "slugify";
import ContactForm from "../components/ContactForm";

const StartPage = styled.div`
    display: flex;
    flex-direction: column;

    > * + * {
        margin-top: 1em;
    }
`;

const StartPageHeading = PageHeading.extend`
    padding-bottom: 60%;
    background-image: url(${props => props.bg});

    > header {
        > h1 {
            display: inline-block;
            transform: rotateY(180deg) rotateX(180deg);
            font-size: 2.5em;
        }
    }
`;

const StartPageContentWrapper = styled(ContentWrapper)`position: relative;`;

export default class Index extends React.Component {
    render() {
        const { heading, content, pushers } = this.props.data.page;

        return (
            <StartPage>
                <PageWrapper>
                    <StartPageHeading bg="//images.contentful.com/23egy2u19di5/4mR67VWLJKqgo66OCwGS08/01a3f2f2176a4c90a7e0dae6f2235bab/team_adriansson.jpg?fl=progressive&q=100&w=1200">
                        <header>
                            <h1>{heading}</h1>
                        </header>
                    </StartPageHeading>
                    <StartPageContentWrapper>
                        <FlexBox mb={2}>
                            <Box
                                width={3 / 4}
                                dangerouslySetInnerHTML={{
                                    __html: content.childMarkdownRemark.html
                                }}
                            />
                            <Media query="(min-width: 992px)">
                                {matches =>
                                    matches && (
                                        <Box width={1 / 4} ml={2} my="auto">
                                            <Image
                                                src="//images.contentful.com/23egy2u19di5/1FjK3Gw6rOEGkYwE08Y0ie/148647f6f795b4d0d8eafc7e0bbe5f26/startpage_small.jpg?w=300&h=300&fit=thumb&q=100&fl=progressive"
                                                shape="circular"
                                            />
                                        </Box>
                                    )}
                            </Media>
                        </FlexBox>
                        <ContactForm
                            onRenderTrigger={({ getTriggerProps }) => (
                                <Button
                                    content="Kontakta oss"
                                    icon="angle double right"
                                    labelPosition="right"
                                    {...getTriggerProps()}
                                />
                            )}
                        />
                    </StartPageContentWrapper>
                </PageWrapper>

                {pushers.map((pusher, index) => (
                    <PageSummary
                        key={index}
                        title={pusher.heading}
                        slug={slugify(pusher.heading, { lower: true })}>
                        <Box
                            pb={2}
                            dangerouslySetInnerHTML={{
                                __html: pusher.text.childMarkdownRemark.html
                            }}
                        />
                    </PageSummary>
                ))}
            </StartPage>
        );
    }
}

export const qyery = graphql`
    query IndexPageQuery {
        page: contentfulStartPage {
            heading
            content {
                childMarkdownRemark {
                    html
                }
            }
            pushers {
                heading
                text {
                    childMarkdownRemark {
                        html
                    }
                }
            }
        }
    }
`;
