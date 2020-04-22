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
var Gotomain = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M26 4H6v20a4 4 0 004 4h16v-2H10a2 2 0 01-2-2V6h16v4h2V4z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M26 16.4h-9a2 2 0 002 2h7v-2z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M26.586 15.935l-4.95 4.95 1.415 1.414 4.95-4.95-1.415-1.414z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M26.586 18.764l-4.95-4.95 1.415-1.414L28 17.349l-1.415 1.415z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M26 4H6v20a4 4 0 004 4h16v-2H10a2 2 0 01-2-2V6h16v4h2V4z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M26 16.4h-9a2 2 0 002 2h7v-2z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M26.586 15.935l-4.95 4.95 1.415 1.414 4.95-4.95-1.415-1.414z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M26.586 18.764l-4.95-4.95 1.415-1.414L28 17.349l-1.415 1.415z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(Gotomain));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR290b21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvR290b21haW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLGdEQUEwQjtBQUUxQixJQUFNLFFBQVEsR0FNVixVQUFDLEVBSUosRUFBRSxHQUFHO0lBSEosSUFBQSxZQUFVLEVBQVYsK0JBQVUsRUFDVixZQUFjLEVBQWQsbUNBQWMsRUFDZCxvQ0FBUTtJQUdBLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ25DLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsMERBQTBELEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHdDQUFNLENBQUMsRUFBQywrQkFBK0IsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFO1lBQUEsd0NBQU0sQ0FBQyxFQUFDLDhEQUE4RCxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUU7WUFBQSx3Q0FBTSxDQUFDLEVBQUMsK0RBQStELEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUMzZjtJQUdELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsMERBQTBELEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRTtZQUFBLHdDQUFNLENBQUMsRUFBQywrQkFBK0IsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFO1lBQUEsd0NBQU0sQ0FBQyxFQUFDLDhEQUE4RCxFQUFDLElBQUksRUFBQyxjQUFjLEdBQUU7WUFBQSx3Q0FBTSxDQUFDLEVBQUMsK0RBQStELEVBQUMsSUFBSSxFQUFDLGNBQWMsR0FBRSxDQUFNLENBQUMsQ0FBQztLQUMzZjtJQUdULE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMifQ==