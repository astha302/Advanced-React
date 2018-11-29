"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var Dropdown_1 = require("./Dropdown");
var Label_1 = require("./../Label/Label");
var Typography_1 = require("./../Typography/Typography");
var Icon_1 = require("./../Icon/Icon");
var utils_1 = require("../../utils");
var react_2 = require("@storybook/addon-knobs/react");
react_1.storiesOf("Components/Dropdown", module).addWithJSX("Eximchain Dropdown", utils_1.wInfo("\n    ### Note\n    example Dropdown story\n    ### Usage\n    ~~~js\n    <Dropdown disabled={false}>\n      <DropdownTrigger>Dropdown <i className=\"caret\"></i></DropdownTrigger>\n      <DropdownContent>\n        <DropdownItem>Profile</DropdownItem>\n        <DropdownItem>This is some large title</DropdownItem>\n        <DropdownItem>Log Out</DropdownItem>\n      </DropdownContent>\n    </Dropdown>\n    ~~~")(function () { return (React.createElement("div", null,
    React.createElement(Dropdown_1.Dropdown, { disabled: react_2.boolean("disabled", false) },
        React.createElement(Dropdown_1.DropdownTrigger, null, "Dropdown "),
        React.createElement(Dropdown_1.DropdownContent, null,
            React.createElement(Dropdown_1.DropdownItem, null, "Profile"),
            React.createElement(Dropdown_1.DropdownItem, null, "This is some large title"),
            React.createElement(Dropdown_1.DropdownItem, null, "Log Out"))),
    React.createElement(Dropdown_1.Dropdown, { disabled: react_2.boolean("disabled", false) },
        React.createElement(Dropdown_1.DropdownTrigger, null, "Dropdown secondary"),
        React.createElement(Dropdown_1.DropdownContent, null,
            React.createElement(Dropdown_1.DropdownItem, null, "View Profile"),
            React.createElement(Dropdown_1.DropdownItem, null, "Vote"))),
    React.createElement(Dropdown_1.Dropdown, { disabled: react_2.boolean("disabled", false) },
        React.createElement(Dropdown_1.DropdownTrigger, null, "Dropdown address picker"),
        React.createElement(Dropdown_1.DropdownContent, null,
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("div", { className: "address_picker" },
                        React.createElement("a", { href: "#" },
                            React.createElement(Typography_1.Typography, { useFor: 'plexMonoReg' },
                                React.createElement(Icon_1.Icon, { for: 'blockmaker' }),
                                " 0xd309k2309if1baaeb78dd35984iuere343knakjnsvdksav")),
                        React.createElement("div", { className: "text-right" },
                            React.createElement(Label_1.Label, { color: "lightNeutral" }, "12,843.12 EXC")))),
                React.createElement("li", null,
                    React.createElement("div", { className: "address_picker" },
                        React.createElement("a", { href: "#" },
                            React.createElement(Typography_1.Typography, { useFor: 'plexMonoReg' },
                                React.createElement(Icon_1.Icon, { for: 'blockmaker' }),
                                " 0xd309k2309if1baaeb78dd35984iuere343knakjnsvdksav")),
                        React.createElement("div", { className: "text-right" },
                            React.createElement(Label_1.Label, { color: "lightNeutral" }, "12,843.12 EXC")))),
                React.createElement("li", null,
                    React.createElement("div", { className: "address_picker" },
                        React.createElement("a", { href: "#" },
                            React.createElement(Typography_1.Typography, { useFor: 'plexMonoReg' },
                                React.createElement(Icon_1.Icon, { for: 'blockmaker' }),
                                " 0xd309k2309if1baaeb78dd35984iuere343knakjnsvdksav")),
                        React.createElement("div", { className: "text-right" },
                            React.createElement(Label_1.Label, { color: "lightNeutral" }, "12,843.12 EXC")))),
                React.createElement("li", null,
                    React.createElement("div", { className: "address_picker" },
                        React.createElement("a", { href: "#" },
                            React.createElement(Typography_1.Typography, { useFor: 'plexMonoReg' },
                                React.createElement(Icon_1.Icon, { for: 'blockmaker' }),
                                " 0xd309k2309if1baaeb78dd35984iuere343knakjnsvdksav")),
                        React.createElement("div", { className: "text-right" },
                            React.createElement(Label_1.Label, { color: "lightNeutral" }, "12,843.12 EXC")))),
                React.createElement("li", { className: "active" },
                    React.createElement("div", { className: "address_picker" },
                        React.createElement("a", { href: "#" },
                            React.createElement(Typography_1.Typography, { useFor: 'plexMonoReg' },
                                React.createElement(Icon_1.Icon, { for: 'blockmaker' }),
                                " 0xd309k2309if1baaeb78dd35984iuere343knakjnsvdksav")),
                        React.createElement("div", { className: "text-right" },
                            React.createElement(Label_1.Label, { color: "lightNeutral" }, "12,843.12 EXC"))))))))); }));
//# sourceMappingURL=Dropdown.stories.js.map