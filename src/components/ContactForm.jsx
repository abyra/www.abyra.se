import React from "react";
import { Button, Form, Message, Modal } from "semantic-ui-react";
import { encode } from "../utils";
import styled from "styled-components";

const ContactForm = styled.div`
    /*     background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    border-radius: 5px; */
`;

export default class extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
        phone: "",
        submitted: false,
        visible: false
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    submit = event => {
        event.preventDefault();

        const { submitted, visible, ...state } = this.state;

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encode({ "form-name": "contact", ...state })
        }).then(() => {
            this.setState({ submitted: !submitted });
        });
    };

    close = () => {
        this.setState({
            name: "",
            email: "",
            message: "",
            phone: "",
            submitted: false,
            visible: false
        });
    };

    open = event => {
        event.preventDefault();
        this.setState({ visible: true });
    };

    getTriggerProps = props => {
        return {
            onClick: this.open
        };
    };

    render() {
        const { name, email, phone, message, submitted, visible } = this.state;

        return (
            <Modal
                open={visible}
                dimmer="blurring"
                onClose={this.close}
                trigger={this.props.onRenderTrigger({
                    getTriggerProps: this.getTriggerProps
                })}>
                <Message
                    attached
                    header="Kontakta oss"
                    content="Fyll i dina kontaktuppgifter nedan så kontaktar vi dig."
                    onDismiss={this.close}
                />

                <Form
                    className="segment attached"
                    success={submitted}
                    onSubmit={this.submit}>
                    <Form.Input
                        autoFocus
                        required
                        label="Ditt namn"
                        id="contact_form_name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />

                    <Form.Input
                        label="Epost"
                        id="contact_form_email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <Form.Input
                        label="Telefonnummer"
                        id="contact_form_phone"
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}
                    />
                    <Form.TextArea
                        required
                        label="Kort beskrivning av ditt ärende"
                        id="contact_form_message"
                        name="message"
                        value={message}
                        autoHeight
                        placeholder="beskriv ditt ärende..."
                        onChange={this.handleChange}
                    />
                    <Message
                        success
                        header="TACK"
                        content="Vi hör av oss så snart vi kan."
                        onDismiss={this.close}
                    />
                    <Button primary circular type="submit">
                        Skicka
                    </Button>
                </Form>
            </Modal>
        );
    }
}
