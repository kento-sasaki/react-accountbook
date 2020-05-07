import React from "react";
import { linkTo } from "@storybook/addon-links";

export default {
  title: "Link",
};

export const first = () => (
  <button onClick={linkTo("Link", "Second")} type="button">
    Go to &#34;second&#34;
  </button>
);
export const second = () => (
  <button onClick={linkTo("Link", "First")} type="button">
    Go to &#34;first&#34;
  </button>
);
