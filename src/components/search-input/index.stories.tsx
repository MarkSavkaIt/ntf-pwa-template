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

export const WithConsole = Template.bind({});
WithConsole.args = {
  onChange: (value: string) => console.log(value),
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
