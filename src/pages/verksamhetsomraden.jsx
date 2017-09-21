import React from "react";
import { Page, FlexBox, Box } from "../components";
import { List, Icon, Popup, Image } from "semantic-ui-react";
import Media from "react-media";

export function mapNodesToBusinessAreas(nodes) {
    return nodes.map(({ node: { name, short_description } }) => ({
        name,
        short_description
    }));
}

export const BusinessAreas = ({ areas, expanded, ...props }) => {
    const ExpandedContent = ({ name, short_description }) => (
        <List.Content>
            <List.Header>{name}</List.Header>
            <List.Description>
                {short_description ? (
                    short_description.short_description
                ) : (
                    "..."
                )}
            </List.Description>
        </List.Content>
    );

    const Content = ({ name, short_description }) => {
        const Trigger = (
            <List.Content>
                <List.Header>
                    {name} <Icon name="angle double right" />
                </List.Header>
            </List.Content>
        );

        return (
            <Popup
                position="top left"
                offset={20}
                on={"click"}
                hideOnScroll
                inverted
                trigger={Trigger}
                header={name}
                content={
                    short_description ? (
                        short_description.short_description
                    ) : (
                        "..."
                    )
                }
            />
        );
    };

    return (
        <List {...props}>
            {areas.map((area, index) => (
                <List.Item key={index}>
                    <Icon name="tag" />
                    {expanded ? (
                        <ExpandedContent {...area} />
                    ) : (
                        <Content {...area} />
                    )}
                </List.Item>
            ))}
        </List>
    );
};

export default class extends React.Component {
    render() {
        const {
            heading,
            content,
            business_areas,
            footer
        } = this.props.data.page;

        return (
            <Page
                title={heading}
                bg="//images.contentful.com/23egy2u19di5/6HTWOQjBew82YkSuks044K/7a913cdc1ab383fa41524d3d1d3b7e3c/verksamhetsomraden.jpg?fl=progressive">
                <FlexBox>
                    <Box width={3 / 4}>
                        <Box
                            mb={2}
                            dangerouslySetInnerHTML={{
                                __html: content.childMarkdownRemark.html
                            }}
                        />
                        <Media query="(max-width: 992px)">
                            {matches => (
                                <BusinessAreas
                                    expanded={matches}
                                    areas={business_areas}
                                />
                            )}
                        </Media>
                        <Box
                            mt={2}
                            dangerouslySetInnerHTML={{
                                __html: footer.childMarkdownRemark.html
                            }}
                        />
                    </Box>
                    <Media query="(min-width: 992px)">
                        {matches =>
                            matches && (
                                <Box width={1 / 4} ml={2} my="auto">
                                    <Image
                                        src="//images.contentful.com/23egy2u19di5/1Z6mDEa9FSMsE6s2CcOwEw/206b624d3088225a837d5810f6e2bb18/IMG_7176.JPG?w=300&h=300&fit=thumb&q=100&fl=progressive"
                                        shape="circular"
                                        size="medium"
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
    query BusinessAreasPageQuery {
        page: contentfulBusinessAreaPage {
            heading
            content {
                childMarkdownRemark {
                    html
                }
            }
            business_areas {
                name
                short_description {
                    short_description
                }
            }
            footer {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;
