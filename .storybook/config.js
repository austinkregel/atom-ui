import React from "react";
import requireContext from "require-context.macro";
import { addDecorator, configure, addParameters, setAddon } from "@storybook/react";
import { create } from "@storybook/theming";
import JSXAddon, { jsxDecorator } from "storybook-addon-jsx";

// Load Styles
import "../node_modules/tailwindcss/dist/tailwind.css";

// Load all of the .stories files
const req = requireContext("../src", true, /.stories.(js|jsx|ts|tsx)$/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

addDecorator(jsxDecorator);
addParameters({
    options: {
        isToolshown: false,
        theme: create({
            base: "light",
            brandTitle: "Atomic UI",
        })
    }
});
addParameters({
    jsx: {
        useFragmentShortSyntax: false,
        showFunctions: true
    }
});

configure(loadStories, module);
