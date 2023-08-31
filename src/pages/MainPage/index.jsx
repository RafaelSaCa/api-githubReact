import React from "react";

import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githublogo from "../../assets/images/github-logo.svg";

function MainPage() {
  return (
    <Container>
      <Logo src={githublogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input placeholder="usuário" />
        <Button>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
export default MainPage;
