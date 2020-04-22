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
var ReportError = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M16 20a1 1 0 110 2 1 1 0 010-2zm1-2v-8h-2v8h2z", fill: "currentColor" }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.027 4h9.946L28 11.027v9.946L20.973 28h-9.946L4 20.973v-9.946L11.027 4zM6 11.855L11.855 6h8.29L26 11.855v8.29L20.145 26h-8.29L6 20.145v-8.29z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.027 4h9.946L28 11.027v9.946L20.973 28h-9.946L4 20.973v-9.946L11.027 4zM16 20a1 1 0 110 2 1 1 0 010-2zm1-2v-8h-2v8h2z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(ReportError));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0RXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUmVwb3J0RXJyb3IudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLGdEQUEwQjtBQUUxQixJQUFNLFdBQVcsR0FNYixVQUFDLEVBSUosRUFBRSxHQUFHO0lBSEosSUFBQSxZQUFVLEVBQVYsK0JBQVUsRUFDVixZQUFjLEVBQWQsbUNBQWMsRUFDZCxvQ0FBUTtJQUdBLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ25DLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSx3Q0FBTSxDQUFDLEVBQUMsZ0RBQWdELEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHFEQUFnQixTQUFTLGVBQVcsU0FBUyxFQUFDLENBQUMsRUFBQyxrSkFBa0osRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQzNhO0lBR0QsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDcEMsT0FBTyxDQUFDLGdEQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixJQUFLLEtBQUssSUFBRSxHQUFHLEVBQUUsR0FBRztZQUFFLHFEQUFnQixTQUFTLGVBQVcsU0FBUyxFQUFDLENBQUMsRUFBQywwSEFBMEgsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQ3JVO0lBR1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixrQkFBZSxlQUFLLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyJ9