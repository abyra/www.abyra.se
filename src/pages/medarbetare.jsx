import React from "react";
import { Page, Text } from "../components";
import { Item, Icon, Label } from "semantic-ui-react";
import {
    BusinessAreas,
    all_business_areas as areas
} from "../pages/verksamhetsomraden";

const roles = {
    Lawyer: "Advokat",
    Partner: "Partner",
    Associate: "Biträdande Jurist"
};

const persons = [
    {
        name: "Anders Adriansson",
        slug: "anders",
        image:
            "https://res.cloudinary.com/abyra-se/image/upload/s--x8QQ6h1X--/f_auto,q_jpegmini:2/v1503043035/medarbetare/anders.jpg",
        email: "anders@abyra.se",
        phone: "706673857",
        phone_display: "+46 (0) 70- 667 38 57",
        roles: [roles.Lawyer, roles.Partner],
        business_areas: [
            areas.BusinessLaw,
            areas.ContractLaw,
            areas.Construction,
            areas.PropertyLaw,
            areas.DisputeResolutionAndLitigation
        ]
    },
    {
        name: "Sebastian Ländin",
        slug: "sebastian",
        image:
            "http://res.cloudinary.com/abyra-se/image/upload/s--wHUfQgAZ--/f_auto,q_jpegmini:2/v1503043327/medarbetare/sebastian.jpg",
        email: "sebastian@abyra.se",
        phone: "706000406",
        phone_display: "+46 (0) 70-600 04 06",
        roles: [roles.Lawyer, roles.Partner],
        business_areas: [
            areas.BusinessLaw,
            areas.ContractLaw,
            areas.Claims,
            areas.Construction,
            areas.DisputeResolutionAndLitigation
        ]
    },
    {
        name: "Mia Bohlin Adriansson",
        slug: "mia",
        image:
            "http://res.cloudinary.com/abyra-se/image/upload/s--w4Oi7_rg--/f_auto,q_jpegmini:2/v1503043517/medarbetare/mia.jpg",
        email: "mia@abyra.se",
        phone: "703683857",
        phone_display: "+46 (0) 70- 368 38 57",
        roles: ["Administrativ Chef"]
    },
    {
        name: "Jeanette Jacobsson",
        slug: "jeanette",
        image:
            "http://res.cloudinary.com/abyra-se/image/upload/s--wDLwUCpq--/f_auto,q_jpegmini:2/v1503043633/medarbetare/jeanette.jpg",
        email: "jeanette@abyra.se",
        phone: "703414066",
        phone_display: "+46 (0) 70-34 14 066",
        roles: [roles.Associate],
        business_areas: [
            areas.BusinessLaw,
            areas.FamilyLaw,
            areas.ContractLaw,
            areas.PropertyLaw,
            areas.DisputeResolutionAndLitigation,
            areas.Counsel
        ]
    },
    {
        name: "Karl Bertrandt",
        slug: "karl",
        image:
            "http://res.cloudinary.com/abyra-se/image/upload/s--oAMswr7e--/f_auto,q_jpegmini:2/v1503401632/medarbetare/karl.jpg",
        email: "karl@abyra.se",
        phone: "760091662",
        phone_display: "+46 (0) 76-009 16 62",
        roles: [roles.Associate],
        business_areas: [
            areas.BusinessLaw,
            areas.ContractLaw,
            areas.Claims,
            areas.DisputeResolutionAndLitigation,
            areas.Insolvency,
            areas.HorseLaw
        ]
    }
];

export default class extends React.Component {
    render() {
        return (
            <Page title="Medarbetare" slug="medarbetare">
                <Item.Group divided>
                    {persons.map((person, index) =>
                        <Item key={index}>
                            <Item.Image
                                shape="rounded"
                                alt={person.slug}
                                size="medium"
                                src={person.image}
                            />

                            <Item.Content>
                                <Item.Header>
                                    {person.name}
                                </Item.Header>
                                <Item.Meta>
                                    <Text italic>
                                        {person.roles.join(", ")}
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
                                            href={`tel://+46${person.phone}`}>
                                            <Icon name="phone" />
                                            {person.phone_display}
                                        </Label>
                                    </Label.Group>
                                </Item.Description>
                                <Item.Extra>
                                    {person.business_areas &&
                                        <BusinessAreas
                                            areas={person.business_areas}
                                        />}
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    )}
                </Item.Group>
            </Page>
        );
    }
}
