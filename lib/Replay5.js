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
var Replay5 = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M16 24a8 8 0 10-5.228-14.056l1.748 1.748-6.692 1.793 1.794-6.692 1.733 1.734A9.962 9.962 0 0116 6c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.1 0-7.625-2.468-9.168-6H9.07A7.997 7.997 0 0016 24z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M15.374 13.445h3.319V12h-4.465a527.42 527.42 0 01-.732 4.394l.992.294c.205-.07.414-.13.626-.176.22-.047.441-.079.661-.094.536-.016.941.11 1.217.376.284.266.425.634.425 1.104 0 .51-.145.92-.437 1.234-.283.313-.693.47-1.228.47a2.06 2.06 0 01-.65-.094 5.006 5.006 0 01-.472-.2 7.054 7.054 0 01-.355-.211 6.798 6.798 0 01-.448-.353L13 19.943c.15.14.323.274.52.399s.405.239.626.34c.228.095.468.17.72.224.252.063.516.094.791.094.473 0 .914-.074 1.323-.223a3.3 3.3 0 001.063-.646c.3-.282.532-.62.697-1.01a3.16 3.16 0 00.26-1.293 3.06 3.06 0 00-.189-1.081 2.39 2.39 0 00-.555-.87 2.528 2.528 0 00-.91-.587 3.435 3.435 0 00-1.252-.212c-.157 0-.322.008-.496.024a4.225 4.225 0 00-.52.059l.296-1.716z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M16 24a8 8 0 10-5.228-14.056l1.748 1.748-6.692 1.793 1.794-6.692 1.733 1.734A9.962 9.962 0 0116 6c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.1 0-7.625-2.468-9.168-6H9.07A7.997 7.997 0 0016 24z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M15.374 13.445h3.319V12h-4.465a527.42 527.42 0 01-.732 4.394l.992.294c.205-.07.414-.13.626-.176.22-.047.441-.079.661-.094.536-.016.941.11 1.217.376.284.266.425.634.425 1.104 0 .51-.145.92-.437 1.234-.283.313-.693.47-1.228.47a2.06 2.06 0 01-.65-.094 5.006 5.006 0 01-.472-.2 7.054 7.054 0 01-.355-.211 6.798 6.798 0 01-.448-.353L13 19.943c.15.14.323.274.52.399s.405.239.626.34c.228.095.468.17.72.224.252.063.516.094.791.094.473 0 .914-.074 1.323-.223a3.3 3.3 0 001.063-.646c.3-.282.532-.62.697-1.01a3.16 3.16 0 00.26-1.293 3.06 3.06 0 00-.189-1.081 2.39 2.39 0 00-.555-.87 2.528 2.528 0 00-.91-.587 3.435 3.435 0 00-1.252-.212c-.157 0-.322.008-.496.024a4.225 4.225 0 00-.52.059l.296-1.716z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(Replay5));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwbGF5NS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXBsYXk1LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxnREFBMEI7QUFFMUIsSUFBTSxPQUFPLEdBTVQsVUFBQyxFQUlKLEVBQUUsR0FBRztJQUhKLElBQUEsWUFBVSxFQUFWLCtCQUFVLEVBQ1YsWUFBYyxFQUFkLG1DQUFjLEVBQ2Qsb0NBQVE7SUFHQSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUNuQyxPQUFPLENBQUMsZ0RBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsNEJBQTRCLElBQUssS0FBSyxJQUFFLEdBQUcsRUFBRSxHQUFHO1lBQUUsd0NBQU0sQ0FBQyxFQUFDLGlNQUFpTSxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUU7WUFBQSx3Q0FBTSxDQUFDLEVBQUMsa3JCQUFrckIsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQ3BqQztJQUdELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSx3Q0FBTSxDQUFDLEVBQUMsaU1BQWlNLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHdDQUFNLENBQUMsRUFBQyxrckJBQWtyQixFQUFDLElBQUksRUFBQyxjQUFjLEdBQUUsQ0FBTSxDQUFDLENBQUM7S0FDcGpDO0lBR1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixrQkFBZSxlQUFLLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyJ9