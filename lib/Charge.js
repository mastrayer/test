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
var Charge = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zm-14.631 5.505a6.543 6.543 0 001.997.479v1.699H16.9v-1.765c1.001-.177 1.81-.55 2.426-1.122.616-.572.924-1.337.924-2.294a2.79 2.79 0 00-.182-1.056 2.467 2.467 0 00-.512-.809 3.224 3.224 0 00-.775-.593 9.737 9.737 0 00-.957-.495l-.924-.347v-3.201a3.446 3.446 0 011.65.875l1.238-1.436a4.237 4.237 0 00-1.354-.924 5.835 5.835 0 00-1.534-.446V8.354h-1.534v1.733a4.401 4.401 0 00-1.354.396 3.612 3.612 0 00-1.023.71 2.817 2.817 0 00-.66.973 2.968 2.968 0 00-.23 1.171c0 .43.071.809.214 1.139.143.319.33.605.561.858.231.253.49.468.775.643.287.177.573.33.859.462l.858.33v3.218a4.622 4.622 0 01-1.271-.445 4.331 4.331 0 01-1.106-.826L11.686 20.3c.495.528 1.056.93 1.683 1.205zm4.455-3.58c.22.165.33.412.33.742 0 .209-.033.385-.099.528-.066.132-.16.247-.28.346-.11.088-.242.165-.396.232a6.08 6.08 0 01-.479.148v-2.508c.396.176.704.346.924.511zm-3.3-3.911c-.22-.242-.33-.495-.33-.759 0-.297.11-.556.33-.776.22-.22.5-.373.842-.461v2.524a2.116 2.116 0 01-.842-.528z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M17.824 18.075c.22.165.33.412.33.742 0 .209-.033.385-.099.528-.066.132-.16.248-.28.347-.11.087-.242.165-.396.23a6.08 6.08 0 01-.479.149v-2.508c.396.176.704.347.924.512zm-3.3-3.911c-.22-.242-.33-.495-.33-.759 0-.297.11-.555.33-.775.22-.22.5-.375.842-.463v2.525a2.116 2.116 0 01-.842-.528z", fill: "currentColor" }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm-2.631-6.345a6.543 6.543 0 001.997.479v1.699H16.9v-1.765c1.001-.177 1.81-.55 2.426-1.123.616-.572.924-1.336.924-2.293a2.79 2.79 0 00-.182-1.056 2.467 2.467 0 00-.512-.808 3.224 3.224 0 00-.775-.595 9.737 9.737 0 00-.957-.495l-.924-.346v-3.201a3.446 3.446 0 011.65.874l1.238-1.435a4.237 4.237 0 00-1.354-.924 5.835 5.835 0 00-1.534-.446V8.505h-1.534v1.733a4.401 4.401 0 00-1.354.396 3.612 3.612 0 00-1.023.71 2.817 2.817 0 00-.66.973 2.968 2.968 0 00-.23 1.171c0 .43.071.809.214 1.139.143.319.33.605.561.858.231.253.49.467.775.644.287.175.573.33.859.462l.858.33v3.217a4.622 4.622 0 01-1.271-.445 4.331 4.331 0 01-1.106-.826l-1.303 1.585a5.118 5.118 0 001.683 1.204z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(Charge));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0NoYXJnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sZ0RBQTBCO0FBRTFCLElBQU0sTUFBTSxHQU1SLFVBQUMsRUFJSixFQUFFLEdBQUc7SUFISixJQUFBLFlBQVUsRUFBViwrQkFBVSxFQUNWLFlBQWMsRUFBZCxtQ0FBYyxFQUNkLG9DQUFRO0lBR0EsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDbkMsT0FBTyxDQUFDLGdEQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixJQUFLLEtBQUssSUFBRSxHQUFHLEVBQUUsR0FBRztZQUFFLHFEQUFnQixTQUFTLGVBQVcsU0FBUyxFQUFDLENBQUMsRUFBQyx5a0NBQXlrQyxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUUsQ0FBTSxDQUFDLENBQUM7S0FDcHhDO0lBR0QsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDcEMsT0FBTyxDQUFDLGdEQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixJQUFLLEtBQUssSUFBRSxHQUFHLEVBQUUsR0FBRztZQUFFLHdDQUFNLENBQUMsRUFBQyxpU0FBaVMsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFO1lBQUEscURBQWdCLFNBQVMsZUFBVyxTQUFTLEVBQUMsQ0FBQyxFQUFDLG11QkFBbXVCLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUM3dUM7SUFHVCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGLGtCQUFlLGVBQUssQ0FBQyxJQUFJLENBQUMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDIn0=