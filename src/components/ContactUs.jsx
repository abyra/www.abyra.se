import React from "react";
import { Label, Icon } from "semantic-ui-react";

export const Email = () =>
    <Label as="a" href={`mailto:info@abyra.se`} rel="email">
        <Icon name="mail" />
        info@abyra.se
    </Label>;

export const Phone = () =>
    <Label as="a" href={`tel://+4618341400`}>
        <Icon name="phone" />
        +46 (0)18 34-14-00
    </Label>;

const ContactUs = props =>
    <Label.Group {...props}>
        <Label as="a" href={`mailto:info@abyra.se`}>
            <Icon name="mail" />
            info@abyra.se
        </Label>
        <Label as="a" href={`tel://+4618341400`}>
            <Icon name="phone" />
            +46 (0)18 34-14-00
        </Label>
    </Label.Group>;

ContactUs.defaultProps = {
    size: "large",
    color: "blue"
};

export default ContactUs;
