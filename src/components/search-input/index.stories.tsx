import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Search } from "./index";

export default {
  title: "Example/Search",
  component: Search,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const SearchTemplate = Template.bind({});
SearchTemplate.args = {};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
