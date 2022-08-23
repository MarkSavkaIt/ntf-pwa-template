import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SidebarFilter, IProps as CategoryProps } from "./index";

export default {
  title: "Example/SidebarFilter",
  component: SidebarFilter,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SidebarFilter>;

const Template: ComponentStory<typeof SidebarFilter> = (args) => (
  <div className='font-display bg-mintify-gray-100 w-1/3 p-4'>
    <SidebarFilter {...args} />
  </div>
);

export const SidebarFilterTemplate = Template.bind({});
SidebarFilterTemplate.args = {
  categories: [
    {
      name: "Status",
      filters: [
        { status: false, title: "Selling", type: "checkbox" },
        { status: false, title: "Auction", type: "checkbox" },
      ],
    },
    {
      name: "Categories",
      filters: [
        { status: false, title: "Cartoon", type: "checkbox" },
        { status: false, title: "Movies", type: "checkbox" },
      ],
    },
  ],
};

export const WithConsole = Template.bind({});
WithConsole.args = {};

// const categories = {
//   categories: {
//     name: "Brand",
//     filters: [
//       { status: false, title: "", type: "" },
//       { status: false, title: "", type: "" },
//       { status: false, title: "", type: "" },
//     ],
//   },
// };
