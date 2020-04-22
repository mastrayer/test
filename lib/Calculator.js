"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Calculator = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M22 8H10v4h12V8zm-9 6h-2v2h2v-2zm6 4h2v6h-2v-6zm-6 0h-2v2h2v-2zm2-4h2v2h-2v-2zm6 0h-2v2h2v-2zm-6 4h2v2h-2v-2zm-2 4h-2v2h2v-2zm2 0h2v2h-2v-2z", fill: "currentColor" }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M26 4H6v24h15c1.942 0 3.25-.56 4.056-1.456.785-.873.944-1.9.944-2.544V4zM8 26V6h16v18c0 .356-.091.829-.43 1.206-.32.355-1.012.794-2.57.794H8z", fill: "currentColor" })));
    }
    if (size === 'S' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M5 4h6v2H5V4zm0 3h1v1H5V7zm1 2H5v1h1V9zm3-2h2v5H9V7zm-3 4H5v1h1v-1zm1-2h1v1H7V9zm1-2H7v1h1V7zm-1 4h1v1H7v-1z", fill: "currentColor" }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13 2H3v12h7.5c.971 0 1.625-.28 2.028-.728.393-.436.472-.95.472-1.272V2zM4 13V3h8v9a.9.9 0 01-.215.603c-.16.178-.506.397-1.285.397H4z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M26 4H6v24h16a4 4 0 004-4V4zm-4 4H10v4h12V8zm-11 6h2v2h-2v-2zm10 4h-2v6h2v-6zm-10 0h2v2h-2v-2zm6-4h-2v2h2v-2zm2 0h2v2h-2v-2zm-2 4h-2v2h2v-2zm-6 4h2v2h-2v-2zm6 0h-2v2h2v-2z", fill: "currentColor" })));
    }
    if (size === 'S' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3 2h10v10a2 2 0 01-2 2H3V2zm2 2h6v2H5V4zm1 3H5v1h1V7zM5 9h1v1H5V9zm1 2H5v1h1v-1zm1-4h1v1H7V7zm1 2H7v1h1V9zm-1 2h1v1H7v-1zm4-4H9v5h2V7z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(Calculator));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9DYWxjdWxhdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxnREFBMEI7QUFFMUIsSUFBTSxVQUFVLEdBTVosVUFBQyxFQUlKLEVBQUUsR0FBRztJQUhKLElBQUEsWUFBVSxFQUFWLCtCQUFVLEVBQ1YsWUFBYyxFQUFkLG1DQUFjLEVBQ2Qsb0NBQVE7SUFHQSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUNuQyxPQUFPLENBQUMsZ0RBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsNEJBQTRCLElBQUssS0FBSyxJQUFFLEdBQUcsRUFBRSxHQUFHO1lBQUUsd0NBQU0sQ0FBQyxFQUFDLDhJQUE4SSxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUU7WUFBQSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsK0lBQStJLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUN0Z0I7SUFHRCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUNuQyxPQUFPLENBQUMsZ0RBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsNEJBQTRCLElBQUssS0FBSyxJQUFFLEdBQUcsRUFBRSxHQUFHO1lBQUUsd0NBQU0sQ0FBQyxFQUFDLDhHQUE4RyxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUU7WUFBQSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsdUlBQXVJLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUM5ZDtJQUdELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsNktBQTZLLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUN4WDtJQUdELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMseUlBQXlJLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUNwVjtJQUdULE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMifQ==