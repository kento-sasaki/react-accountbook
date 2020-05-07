import React from "react";
import { action } from "@storybook/addon-actions";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

export default {
  component: Button,
  title: "actionButton",
};

export const button = () => <Button onClick={action("clicked")}>Click Here</Button>;
