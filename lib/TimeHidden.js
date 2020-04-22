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
var TimeHidden = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M24 18a7.97 7.97 0 01-.743 3.372l1.486 1.486A9.955 9.955 0 0026 18c0-5.523-4.477-10-10-10-1.763 0-3.42.456-4.858 1.257l1.487 1.486A8 8 0 0124 18z", fill: "currentColor" }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.257 11.671L6 9.414 7.414 8 25.8 26.385l-1.414 1.414-2.056-2.056A9.96 9.96 0 0116 28c-5.523 0-10-4.477-10-10 0-2.401.846-4.605 2.257-6.329zm1.423 1.423A8 8 0 0020.905 24.32L9.68 13.094z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M20 4h-8v2h6a2 2 0 002-2z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M26 18c0 1.763-.456 3.42-1.257 4.858l-13.6-13.601A9.955 9.955 0 0116 8c5.523 0 10 4.477 10 10zM8.257 11.671L6 9.414 7.414 8 25.8 26.385l-1.414 1.414-2.056-2.056A9.959 9.959 0 0116 28c-5.523 0-10-4.477-10-10 0-2.401.846-4.605 2.257-6.329zM20 4h-8v2h6a2 2 0 002-2z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(TimeHidden));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZUhpZGRlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9UaW1lSGlkZGVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxnREFBMEI7QUFFMUIsSUFBTSxVQUFVLEdBTVosVUFBQyxFQUlKLEVBQUUsR0FBRztJQUhKLElBQUEsWUFBVSxFQUFWLCtCQUFVLEVBQ1YsWUFBYyxFQUFkLG1DQUFjLEVBQ2Qsb0NBQVE7SUFHQSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUNuQyxPQUFPLENBQUMsZ0RBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsNEJBQTRCLElBQUssS0FBSyxJQUFFLEdBQUcsRUFBRSxHQUFHO1lBQUUsd0NBQU0sQ0FBQyxFQUFDLG1KQUFtSixFQUFDLElBQUksRUFBQyxjQUFjLEdBQUU7WUFBQSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsNkxBQTZMLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHdDQUFNLENBQUMsRUFBQywyQkFBMkIsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQ2xuQjtJQUdELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSx3Q0FBTSxDQUFDLEVBQUMsd1FBQXdRLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUMzYTtJQUdULE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMifQ==