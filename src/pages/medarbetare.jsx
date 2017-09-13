import React from "react";
import { Page, Text } from "../components";
import { Item, Icon, Label } from "semantic-ui-react";
import { BusinessAreas } from "../pages/verksamhetsomraden";
import {
    normalizePhoneNumberForHref,
    normalizePhoneNumberForDisplay
} from "../utils";
export default class extends React.Component {
    render() {
        const persons = this.props.data.allContentfulPerson.edges;

        return (
            <Page title="Medarbetare" slug="medarbetare">
                <Item.Group divided>
                    {persons.map(({ node: person }, index) => (
                        <Item key={index}>
                            <Item.Image
                                shape="rounded"
                                alt={person.name}
                                size="medium"
                                src={person.image.resize.src}
                            />

                            <Item.Content>
                                <Item.Header>{person.name}</Item.Header>
                                <Item.Meta>
                                    <Text italic>
                                        {person.roles
                                            .map(x => x.name)
                                            .join(", ")}
                                    </Text>
                                </Item.Meta>
                                <Item.Description>
                                    <Label.Group size="large" color="blue">
                                        <Label
                                            as="a"
                                            href={`mailto:${person.email}`}>
                                            <Icon name="mail" />
                                            {person.email}
                                        </Label>
                                        <Label
                                            as="a"
                                            href={normalizePhoneNumberForHref(
                                                person.phone
                                            )}>
                                            <Icon name="phone" />
                                            {normalizePhoneNumberForDisplay(
                                                person.phone
                                            )}
                                        </Label>
                                    </Label.Group>
                                </Item.Description>
                                <Item.Extra>
                                    {person.areas && (
                                        <BusinessAreas areas={person.areas} />
                                    )}
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    ))}
                </Item.Group>
            </Page>
        );
    }
}

export const pageQuery = graphql`
    query MedarbetarPageQuery {
        allContentfulPerson(sort: { fields: [sort_order] }) {
            edges {
                node {
                    id
                    name
                    email
                    phone
                    areas {
                        name
                        short_description {
                            short_description
                        }
                    }
                    roles {
                        name
                    }
                    image {
                        resize(
                            width: 300
                            quality: 100
                            jpegProgressive: true
                        ) {
                            src
                        }
                    }
                }
            }
        }
    }
`;
