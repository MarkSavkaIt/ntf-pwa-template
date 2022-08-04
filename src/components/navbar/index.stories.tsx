import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NavBar } from "./index";

export default {
  title: "Example/NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const NavbarTemplate = Template.bind({});
NavbarTemplate.args = {
  titles: ["Dashboard", "About Us", "FAQ"],
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
