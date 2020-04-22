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
var Notice = function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'L' : _b, _c = _a.type, type = _c === void 0 ? 'solid' : _c, props = __rest(_a, ["size", "type"]);
    if (size === 'L' && type === 'line') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 4h-4v2.29c-2.892.86-5 3.539-5 6.71v1.86c0 1.337-.668 3.586-1.781 4.328L6 20v3h20v-3l-1.219-.813C23.668 18.447 23 16.197 23 14.86V13a7.003 7.003 0 00-5-6.71V4zm3 9a5 5 0 00-10 0v1.86c0 2.005-1.003 4.879-2.672 5.992L8.106 21h15.788l-.222-.148C22.002 19.739 21 16.865 21 14.859V13z", fill: "currentColor" }),
            react_1.default.createElement("path", { d: "M18 25a4 4 0 01-4 4v-4h4z", fill: "currentColor" })));
    }
    if (size === 'L' && type === 'solid') {
        return (react_1.default.createElement("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { ref: ref }),
            react_1.default.createElement("path", { d: "M18 4h-4v2.29c-2.892.86-5 3.539-5 6.71v1.86a4 4 0 01-1.781 3.328l-1.212.808H6V23h20v-4.004h-.007l-1.212-.808A4 4 0 0123 14.858V13a7.003 7.003 0 00-5-6.71V4zm0 21h-4v4a4 4 0 004-4z", fill: "currentColor" })));
    }
    throw new Error('invalid props');
};
exports.default = react_1.default.memo(react_1.default.forwardRef(Notice));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL05vdGljZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sZ0RBQTBCO0FBRTFCLElBQU0sTUFBTSxHQU1SLFVBQUMsRUFJSixFQUFFLEdBQUc7SUFISixJQUFBLFlBQVUsRUFBViwrQkFBVSxFQUNWLFlBQWMsRUFBZCxtQ0FBYyxFQUNkLG9DQUFRO0lBR0EsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDbkMsT0FBTyxDQUFDLGdEQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixJQUFLLEtBQUssSUFBRSxHQUFHLEVBQUUsR0FBRztZQUFFLHFEQUFnQixTQUFTLGVBQVcsU0FBUyxFQUFDLENBQUMsRUFBQyw0UkFBNFIsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFO1lBQUEsd0NBQU0sQ0FBQyxFQUFDLDJCQUEyQixFQUFDLElBQUksRUFBQyxjQUFjLEdBQUUsQ0FBTSxDQUFDLENBQUM7S0FDaGlCO0lBR0QsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7UUFDcEMsT0FBTyxDQUFDLGdEQUFLLEtBQUssRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixJQUFLLEtBQUssSUFBRSxHQUFHLEVBQUUsR0FBRztZQUFFLHdDQUFNLENBQUMsRUFBQyxxTEFBcUwsRUFBQyxJQUFJLEVBQUMsY0FBYyxHQUFFLENBQU0sQ0FBQyxDQUFDO0tBQ3hWO0lBR1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRixrQkFBZSxlQUFLLENBQUMsSUFBSSxDQUFDLGVBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyJ9