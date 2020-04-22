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
var Paper = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M22 10H10v2h12v-2zm-12 5h12v2H10v-2zm12 5H10v2h12v-2z", fill: "currentColor" }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6 28V4h20v20a4 4 0 01-4 4H6zM8 6h16v18a2 2 0 01-2 2H8V6z", fill: "currentColor" })));
    }
    if (size === 'S' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M5 6h6v1H5V6zm6 3H5v1h6V9z", fill: "currentColor" }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3 2v12h8a2 2 0 002-2V2H3zm9 1H4v10h7a1 1 0 001-1V3z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M26 4H6v24h16a4 4 0 004-4V4zm-4 6H10v2h12v-2zm-12 5h12v2H10v-2zm12 5H10v2h12v-2z", fill: "currentColor" })));
    }
    if (size === 'S' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3 2v12h8a2 2 0 002-2V2H3zm2.093 4.033h6v1h-6v-1zM11.095 9h-6v1h6V9z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(Paper));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUGFwZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLGdEQUEwQjtBQUUxQixJQUFNLEtBQUssR0FNUCxVQUFDLEVBSUosRUFBRSxHQUFHO0lBSEosSUFBQSxZQUFVLEVBQVYsK0JBQVUsRUFDVixZQUFjLEVBQWQsbUNBQWMsRUFDZCxvQ0FBUTtJQUdBLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ25DLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSx3Q0FBTSxDQUFDLEVBQUMsdURBQXVELEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHFEQUFnQixTQUFTLGVBQVcsU0FBUyxFQUFDLENBQUMsRUFBQywyREFBMkQsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQzNWO0lBR0QsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDbkMsT0FBTyxDQUFDLGdEQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixJQUFLLEtBQUssSUFBRSxHQUFHLEVBQUUsR0FBRztZQUFFLHdDQUFNLENBQUMsRUFBQyw0QkFBNEIsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFO1lBQUEscURBQWdCLFNBQVMsZUFBVyxTQUFTLEVBQUMsQ0FBQyxFQUFDLHNEQUFzRCxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUUsQ0FBTSxDQUFDLENBQUM7S0FDM1Q7SUFHRCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUNwQyxPQUFPLENBQUMsZ0RBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsNEJBQTRCLElBQUssS0FBSyxJQUFFLEdBQUcsRUFBRSxHQUFHO1lBQUUscURBQWdCLFNBQVMsZUFBVyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGtGQUFrRixFQUFDLElBQUksRUFBQyxjQUFjLEdBQUUsQ0FBTSxDQUFDLENBQUM7S0FDN1I7SUFHRCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUNwQyxPQUFPLENBQUMsZ0RBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsNEJBQTRCLElBQUssS0FBSyxJQUFFLEdBQUcsRUFBRSxHQUFHO1lBQUUscURBQWdCLFNBQVMsZUFBVyxTQUFTLEVBQUMsQ0FBQyxFQUFDLHNFQUFzRSxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUUsQ0FBTSxDQUFDLENBQUM7S0FDalI7SUFHVCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGLGtCQUFlLGVBQUssQ0FBQyxJQUFJLENBQUMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDIn0=