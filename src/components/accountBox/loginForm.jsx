import React from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton
} from "./common";
import { Marginer } from "../marginer";

export function LoginForm(props) {
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1.6em" />
      <MutedLink href="#">Forget your password?</MutedLink>
      <SubmitButton type="submit">Signin</SubmitButton>
    </BoxContainer>
  );
}
