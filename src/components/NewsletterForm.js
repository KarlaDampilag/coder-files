import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from "styled-components"

import { BREAKPOINT } from "../utils/constants"

const Container = styled.div`
  color: var(--dark-color-light);
  display: block;
  letter-spacing: -0.003em;
  line-height: 1.5;
  margin: 0 5% 5vh 5%;
  font-family: 'Merriweather', serif;

  @media (max-width: ${BREAKPOINT}px) {
    margin: 0 0 5vh 0;
  }
`

const Input = styled.input`
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;

    @media (max-width: 650px) {
        display: block;
        width: 100%
    }
`

const Button = styled.button`
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;

    @media (max-width: 650px) {
        display: block;
        width: 100%
    }
`

export function NewsletterForm() {
    const [email, setEmail] = React.useState();
    const [name, setName] = React.useState();
    const [resultMessage, setResultMessage] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        addToMailchimp(email, {
            FNAME: name
        })
            .then((data) => {
                setResultMessage(data?.msg);
            })
            .catch((error) => {
                // Errors in here are client side
                // Mailchimp always returns a 200
                console.error(error);
            });
    };

    // TODO test the actual sign up process if it works!!!

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <h2>Newsletter</h2>
                <p>
                    Receive email updates on new blog posts. <br /> Unsubscribe anytime. No spam.
                </p>
                <div>
                    <Input
                        placeholder="Email address"
                        name="email"
                        type="text"
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <Input
                        placeholder="Name"
                        name="name"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    />


                    <Button type="submit">Subscribe</Button>
                    
                </div>
            </form>
            <p>{resultMessage}</p>
        </Container >
    )
}