import React from "react";
import { Phone, Email } from "./ContactUs";
import Instagram from "./Instagram";
import { Label } from "semantic-ui-react";

export default () =>
    <Label.Group size="medium" color="grey" circular>
        <Email />
        <Phone />
        <Instagram />
    </Label.Group>;
