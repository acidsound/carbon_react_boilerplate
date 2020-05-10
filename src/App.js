import React from "react";
import "./App.scss";
import { Button } from "carbon-components-react";
import { Content } from "carbon-components-react/es/components/UIShell";
import AppHeader from "./components/AppHeader";
export default () => {
  return (
    <>
      <AppHeader />
      <Content>
        <Button>Button</Button>
      </Content>
    </>
  );
};
