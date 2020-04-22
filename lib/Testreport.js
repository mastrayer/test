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
var Testreport = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M24 18l2-2V4H6v24h14l-2-2H8V6h16v12z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M10 10h12v2H10v-2zm12 6H10v2h12v-2zm7.326 3.973l-6.364 6.364-3.537-3.535 1.415-1.415 2.121 2.122 4.95-4.95 1.415 1.414z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6 4v24h16.91L18 23.5l4.5-4.5 2 2 1.5-1.5V4H6zm16 5H10v2h12V9zm-12 6h12v2H10v-2z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M24.536 26.778l6.364-6.364L29.486 19l-4.95 4.95-2.122-2.122L21 23.243l3.536 3.535z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(Testreport));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdHJlcG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXN0cmVwb3J0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxnREFBMEI7QUFFMUIsSUFBTSxVQUFVLEdBTVosVUFBQyxFQUlKLEVBQUUsR0FBRztJQUhKLElBQUEsWUFBVSxFQUFWLCtCQUFVLEVBQ1YsWUFBYyxFQUFkLG1DQUFjLEVBQ2Qsb0NBQVE7SUFHQSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUNuQyxPQUFPLENBQUMsZ0RBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsNEJBQTRCLElBQUssS0FBSyxJQUFFLEdBQUcsRUFBRSxHQUFHO1lBQUUsd0NBQU0sQ0FBQyxFQUFDLHNDQUFzQyxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUU7WUFBQSx3Q0FBTSxDQUFDLEVBQUMseUhBQXlILEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUNoVztJQUdELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsa0ZBQWtGLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHdDQUFNLENBQUMsRUFBQyxvRkFBb0YsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQy9ZO0lBR1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixrQkFBZSxlQUFLLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyJ9