import React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
    render() {
        let css;
        if (process.env.NODE_ENV === "production") {
            css = (
                <style
                    dangerouslySetInnerHTML={{
                        __html: require("!raw!../public/styles.css")
                    }}
                />
            );
        }

        return (
            <html lang="sv">
                <head>
                    {this.props.headComponents}
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    {css}
                </head>
                <body>
                    <div
                        id="___gatsby"
                        dangerouslySetInnerHTML={{
                            __html: this.props.body
                        }}
                    />
                    {this.props.postBodyComponents}
                </body>
            </html>
        );
    }
}
