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
var QuestionMark = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M14.977 16.695c-.122.427-.158.965-.11 1.616h2.064c-.024-.532.037-.965.183-1.296.146-.332.329-.61.548-.835a5.42 5.42 0 01.749-.639c.268-.19.517-.409.749-.657.243-.26.444-.58.603-.96.158-.378.237-.875.237-1.49 0-.534-.097-1.007-.292-1.422a3.014 3.014 0 00-.804-1.048 3.476 3.476 0 00-1.224-.674 5.083 5.083 0 00-1.497-.285c-.45-.023-.914.03-1.389.16a3.426 3.426 0 00-1.315.657c-.39.32-.724.746-1.004 1.28-.268.532-.426 1.189-.475 1.97h2.283c.049-.71.238-1.237.566-1.58.33-.344.75-.515 1.26-.515.512 0 .883.16 1.115.48.231.307.347.692.347 1.154 0 .367-.073.675-.22.923a2.928 2.928 0 01-.547.675 17.6 17.6 0 01-.676.622 4.222 4.222 0 00-.676.763 3.89 3.89 0 00-.475 1.101zm-.255 5.825c.316.32.712.48 1.187.48.487 0 .889-.16 1.205-.48.317-.331.475-.74.475-1.225 0-.485-.158-.888-.475-1.208-.316-.331-.718-.497-1.205-.497-.475 0-.87.166-1.188.497-.316.32-.474.723-.474 1.208s.158.894.475 1.225z", fill: "currentColor" }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm-1.023-10.971c-.122.426-.158.965-.11 1.616h2.065c-.025-.533.036-.965.182-1.297a2.79 2.79 0 01.548-.834c.232-.237.481-.45.749-.64s.517-.408.749-.657c.243-.26.444-.58.603-.959.158-.379.237-.876.237-1.492 0-.533-.097-1.006-.292-1.42a3.015 3.015 0 00-.804-1.048 3.476 3.476 0 00-1.224-.675 5.082 5.082 0 00-1.497-.284 4.36 4.36 0 00-1.388.16 3.426 3.426 0 00-1.316.657c-.39.32-.724.746-1.004 1.278-.268.533-.426 1.19-.475 1.972h2.283c.049-.71.238-1.238.566-1.58.33-.344.75-.516 1.26-.516.512 0 .883.16 1.115.48.231.307.347.692.347 1.154 0 .367-.073.675-.22.923a2.929 2.929 0 01-.547.675c-.207.201-.433.409-.676.622a4.225 4.225 0 00-.676.764 3.895 3.895 0 00-.475 1.1zm-.255 5.825c.316.32.712.48 1.187.48.487 0 .889-.16 1.205-.48.317-.332.475-.74.475-1.226 0-.485-.158-.888-.475-1.207-.316-.332-.718-.498-1.205-.498-.475 0-.87.166-1.188.498-.316.32-.474.722-.474 1.207 0 .486.158.894.475 1.226z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(QuestionMark));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb25NYXJrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1F1ZXN0aW9uTWFyay50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sZ0RBQTBCO0FBRTFCLElBQU0sWUFBWSxHQU1kLFVBQUMsRUFJSixFQUFFLEdBQUc7SUFISixJQUFBLFlBQVUsRUFBViwrQkFBVSxFQUNWLFlBQWMsRUFBZCxtQ0FBYyxFQUNkLG9DQUFRO0lBR0EsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDbkMsT0FBTyxDQUFDLGdEQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixJQUFLLEtBQUssSUFBRSxHQUFHLEVBQUUsR0FBRztZQUFFLHdDQUFNLENBQUMsRUFBQywwM0JBQTAzQixFQUFDLElBQUksRUFBQyxjQUFjLEdBQUU7WUFBQSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsa0pBQWtKLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUNydkM7SUFHRCxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUNwQyxPQUFPLENBQUMsZ0RBQUssS0FBSyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsNEJBQTRCLElBQUssS0FBSyxJQUFFLEdBQUcsRUFBRSxHQUFHO1lBQUUscURBQWdCLFNBQVMsZUFBVyxTQUFTLEVBQUMsQ0FBQyxFQUFDLG84QkFBbzhCLEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUMvb0M7SUFHVCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGLGtCQUFlLGVBQUssQ0FBQyxJQUFJLENBQUMsZUFBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDIn0=