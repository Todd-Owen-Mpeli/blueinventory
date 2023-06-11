"use strict";
exports.__esModule = true;
exports.useDynamicPagesContext = exports.DynamicPagesContext = void 0;
var react_1 = require("react");
exports.DynamicPagesContext = react_1.createContext(undefined);
exports.useDynamicPagesContext = function () {
    var content = react_1.useContext(exports.DynamicPagesContext);
    if (content === undefined) {
        throw new Error("useDynamicPagesContext must be used to render content.");
    }
    return content;
};
