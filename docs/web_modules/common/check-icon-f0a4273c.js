import { r as react } from './index-9e3d5f03.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var IconSize;
(function (IconSize) {
    IconSize["sm"] = "sm";
    IconSize["md"] = "md";
    IconSize["lg"] = "lg";
    IconSize["xl"] = "xl";
})(IconSize || (IconSize = {}));
const getSize = (size) => {
    switch (size) {
        case IconSize.sm:
            return '1em';
        case IconSize.md:
            return '1.5em';
        case IconSize.lg:
            return '2em';
        case IconSize.xl:
            return '3em';
        default:
            return '1em';
    }
};
let currentId = 0;
/**
 * Factory to create Icon class components for consumers
 */
function createIcon({ name, xOffset = 0, yOffset = 0, width, height, svgPath }) {
    var _a;
    return _a = class SVGIcon extends react.Component {
            constructor() {
                super(...arguments);
                this.id = `icon-title-${currentId++}`;
            }
            render() {
                const _a = this.props, { size, color, title, noVerticalAlign } = _a, props = __rest(_a, ["size", "color", "title", "noVerticalAlign"]);
                const hasTitle = Boolean(title);
                const heightWidth = getSize(size);
                const baseAlign = -0.125 * Number.parseFloat(heightWidth);
                const style = noVerticalAlign ? null : { verticalAlign: `${baseAlign}em` };
                const viewBox = [xOffset, yOffset, width, height].join(' ');
                return (react.createElement("svg", Object.assign({ style: style, fill: color, height: heightWidth, width: heightWidth, viewBox: viewBox, "aria-labelledby": hasTitle ? this.id : null, "aria-hidden": hasTitle ? null : true, role: "img" }, props),
                    hasTitle && react.createElement("title", { id: this.id }, title),
                    react.createElement("path", { d: svgPath })));
            }
        },
        _a.displayName = name,
        _a.defaultProps = {
            color: 'currentColor',
            size: IconSize.sm,
            noVerticalAlign: false
        },
        _a;
}

const CheckIconConfig = {
  name: 'CheckIcon',
  height: 512,
  width: 512,
  svgPath: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
  yOffset: 0,
  xOffset: 0,
};

const CheckIcon = createIcon(CheckIconConfig);

export { CheckIcon as C, __rest as _, __awaiter as a, __generator as b, createIcon as c, __spread as d };
