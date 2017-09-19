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
import { slugify } from "../utils";
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

export default class Index extends React.Component {
    render() {
        const { heading, content, pushers } = this.props.data.page;

        return (
            <StartPage>
                <PageWrapper>
                    <StartPageHeading bg="//images.contentful.com/23egy2u19di5/4mR67VWLJKqgo66OCwGS08/01a3f2f2176a4c90a7e0dae6f2235bab/team_adriansson.jpg?fl=progressive">
                        <header>
                            <h1>{heading}</h1>
                        </header>
                    </StartPageHeading>
                    <ContentWrapper>
                        <FlexBox>
                            <Box>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: content.childMarkdownRemark.html
                                    }}
                                />
                                <Box mt={2}>
                                    <ContactForm
                                        onRenderTrigger={({
                                            getTriggerProps
                                        }) => (
                                            <Button
                                                content="Kontakta oss"
                                                icon="angle double right"
                                                labelPosition="right"
                                                {...getTriggerProps()}
                                            />
                                        )}
                                    />
                                </Box>
                            </Box>
                            <Media query="(min-width: 992px)">
                                {matches =>
                                    matches && (
                                        <FlexBox.Item
                                            align-self="center"
                                            ml={2}>
                                            <Image
                                                src="//images.contentful.com/23egy2u19di5/1FjK3Gw6rOEGkYwE08Y0ie/148647f6f795b4d0d8eafc7e0bbe5f26/startpage_small.jpg?w=300&h=300&fit=thumb&q=100&fl=progressive"
                                                shape="circular"
                                                size="big"
                                            />
                                        </FlexBox.Item>
                                    )}
                            </Media>
                        </FlexBox>
                    </ContentWrapper>
                </PageWrapper>

                {pushers.map((pusher, index) => (
                    <PageSummary
                        key={index}
                        title={pusher.heading}
                        slug={slugify(pusher.heading)}>
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
