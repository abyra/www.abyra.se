import React from "react";
import { Page, FlexBox, Box } from "../components";
import Media from "react-media";
import { Image } from "semantic-ui-react";

export default class extends React.Component {
    render() {
        const { heading, content } = this.props.data.page;

        return (
            <Page
                title={heading}
                bg="//images.contentful.com/23egy2u19di5/1b9HVy0DYw82QwAcc6K6Cg/2782f7aeab60e11644865c859e54a517/aktuellt.jpg?fl=progressive">
                <FlexBox>
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
                                        src="//images.contentful.com/23egy2u19di5/iwZJTosZnq2CMY4wEUOY2/e43f5474ce026e0de75e041eae5186c9/192.jpg?w=300&h=300&fit=thumb&q=100&fl=progressive"
                                        shape="circular"
                                    />
                                </Box>
                            )}
                    </Media>
                </FlexBox>
            </Page>
        );
    }
}

export const query = graphql`
    query AktuelltPageQuery {
        page: contentfulPage(id: { eq: "c1WsaJmy164q4UicWwIq2i6" }) {
            heading
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;

export const PageSummary = () => (
    <Page.Summary title="Aktuellt" slug="aktuellt">
        <p>
            Till oss är du alltid välkommen att höra av dig. Den första
            kontakten kostar ingenting. Du kan anlita oss för såväl juridisk
            konsultation som biträde vid tvister och avtalsförhandlingar.
        </p>
    </Page.Summary>
);
