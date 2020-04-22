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
var Fonts = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.848 19.2h5.76l1.248 4.56h3.72L13.864 6H9.688L4 23.76h3.6l1.248-4.56zm4.464-4.704l.528 1.944H9.616l.528-1.944c.272-.928.536-1.88.792-2.856.256-.992.496-1.976.72-2.952h.096c.272.96.528 1.936.768 2.928.256.992.52 1.952.792 2.88zm8.347 9.316c.352.125.744.188 1.176.188.545 0 1.057-.103 1.534-.308a5.025 5.025 0 001.347-.84h.05l.188.977H28v-5.6c0-1.392-.307-2.442-.92-3.15-.614-.72-1.529-1.079-2.745-1.079-.75 0-1.472.108-2.165.325a8.245 8.245 0 00-1.807.805l.75 1.798a5.811 5.811 0 011.364-.668c.489-.16.955-.24 1.398-.24.727 0 1.187.155 1.38.463.205.297.285.696.24 1.198-1.978.058-3.404.371-4.28.942-.863.56-1.267 1.427-1.21 2.603 0 .411.068.788.205 1.13.136.343.324.64.562.89.25.24.546.429.887.566zm2.932-1.97a2.338 2.338 0 01-.989.24c-.364 0-.67-.114-.92-.342-.24-.229-.364-.542-.375-.942-.012-.342.09-.64.306-.89.228-.252.614-.417 1.16-.497.545-.08 1.119-.143 1.721-.188v1.934a3.708 3.708 0 01-.903.686z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.848 19.2h5.76l1.248 4.56h3.72L13.864 6H9.688L4 23.76h3.6l1.248-4.56zm4.464-4.704l.528 1.944H9.616l.528-1.944c.272-.928.536-1.88.792-2.856.256-.992.496-1.976.72-2.952h.096c.272.96.528 1.936.768 2.928.256.992.52 1.952.792 2.88zm8.347 9.316c.352.125.744.188 1.176.188.545 0 1.057-.103 1.534-.308a5.025 5.025 0 001.347-.84h.05l.188.977H28v-5.6c0-1.392-.307-2.442-.92-3.15-.614-.72-1.529-1.079-2.745-1.079-.75 0-1.472.108-2.165.325a8.245 8.245 0 00-1.807.805l.75 1.798a5.811 5.811 0 011.364-.668c.489-.16.955-.24 1.398-.24.727 0 1.187.155 1.38.463.205.297.285.696.24 1.198-1.978.058-3.404.371-4.28.942-.863.56-1.267 1.427-1.21 2.603 0 .411.068.788.205 1.13.136.343.324.64.562.89.25.24.546.429.887.566zm2.932-1.97a2.338 2.338 0 01-.989.24c-.364 0-.67-.114-.92-.342-.24-.229-.364-.542-.375-.942-.012-.342.09-.64.306-.89.228-.252.614-.417 1.16-.497.545-.08 1.119-.143 1.721-.188v1.934a3.708 3.708 0 01-.903.686z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(Fonts));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9udHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRm9udHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLGdEQUEwQjtBQUUxQixJQUFNLEtBQUssR0FNUCxVQUFDLEVBSUosRUFBRSxHQUFHO0lBSEosSUFBQSxZQUFVLEVBQVYsK0JBQVUsRUFDVixZQUFjLEVBQWQsbUNBQWMsRUFDZCxvQ0FBUTtJQUdBLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ25DLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsNDRCQUE0NEIsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQ3ZsQztJQUdELElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQ3BDLE9BQU8sQ0FBQyxnREFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsSUFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUc7WUFBRSxxREFBZ0IsU0FBUyxlQUFXLFNBQVMsRUFBQyxDQUFDLEVBQUMsNDRCQUE0NEIsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQ3ZsQztJQUdULE1BQU0sSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsZUFBSyxDQUFDLElBQUksQ0FBQyxlQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMifQ==