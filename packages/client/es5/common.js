"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.feathersResultToArray = exports.isPaginated = exports.maybeArray = exports.chunk = exports.safeReplaceAsync = exports.replaceAsync = void 0;
// prettier-ignore
var replaceAsync = function (_f, effect, capture, filter, final, early) {
    var f = _f;
    return (function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function () {
            var res, params, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        res = undefined;
                        params = filter ? filter.apply(void 0, p) : p;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, 8, 9]);
                        if (!early) return [3 /*break*/, 3];
                        return [4 /*yield*/, early.apply(void 0, params)];
                    case 2:
                        res = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!(res === undefined)) return [3 /*break*/, 5];
                        return [4 /*yield*/, f.apply(void 0, params)];
                    case 4:
                        res = _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, effect(res)];
                    case 6:
                        res = _a.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        error_1 = _a.sent();
                        if (capture)
                            capture(error_1);
                        throw error_1;
                    case 8:
                        if (final)
                            final(res);
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, res];
                }
            });
        });
    }).bind(_this);
};
exports.replaceAsync = replaceAsync;
var safeReplaceAsync = function (_f, effect, capture, filter, final, early) {
    var f = _f;
    return (function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function () {
            var res, params, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (filter)
                            filter.apply(void 0, p);
                        params = p;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        if (early)
                            early.apply(void 0, params);
                        return [4 /*yield*/, f.apply(void 0, params)];
                    case 2:
                        res = _a.sent();
                        if (effect)
                            effect(res);
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        if (capture)
                            capture(error_2);
                        throw error_2;
                    case 4:
                        if (final)
                            final(res);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/, res];
                }
            });
        });
    }).bind(_this);
};
exports.safeReplaceAsync = safeReplaceAsync;
var chunk = function (array, size) {
    return Array.from(Array(Math.ceil(array.length / size)).keys()).map(function (i) {
        return array.slice(i * size, i * size + size);
    });
};
exports.chunk = chunk;
var maybeArray = function (maybe) {
    return Array.isArray(maybe) ? maybe : [maybe];
};
exports.maybeArray = maybeArray;
var isPaginated = function (data) { return data.data !== undefined; };
exports.isPaginated = isPaginated;
var feathersResultToArray = function (data) {
    return Array.isArray(data) ? data : (0, exports.isPaginated)(data) ? data.data : [data];
};
exports.feathersResultToArray = feathersResultToArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBK0VBOzs7QUEzRUEsa0JBQWtCO0FBQ1gsSUFBTSxZQUFZLEdBQUcsVUFDM0IsRUFBSyxFQUNMLE1BQXdDLEVBQ3hDLE9BQThCLEVBQzlCLE1BQStDLEVBQy9DLEtBQTRCLEVBQzVCLEtBQTRCO0lBRTVCLElBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNaLE9BQU8sQ0FBQztRQUFPLFdBQVc7YUFBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO1lBQVgsc0JBQVc7Ozs7Ozs7d0JBQ3JCLEdBQUcsR0FBRyxTQUFTLENBQUE7d0JBQ2IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxlQUFLLENBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTs7Ozs2QkFFdEQsS0FBSyxFQUFMLHdCQUFLO3dCQUNGLHFCQUFNLEtBQUssZUFBSSxNQUFNLEdBQUM7O3dCQUE1QixHQUFHLEdBQUcsU0FBc0IsQ0FBQTs7OzZCQUV6QixDQUFBLEdBQUcsS0FBSyxTQUFTLENBQUEsRUFBakIsd0JBQWlCO3dCQUNkLHFCQUFNLENBQUMsZUFBSSxNQUFNLEdBQUM7O3dCQUF4QixHQUFHLEdBQUcsU0FBa0IsQ0FBQTs7NEJBRW5CLHFCQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQXZCLEdBQUcsR0FBRyxTQUFpQixDQUFBOzs7O3dCQUV2QixJQUFJLE9BQU87NEJBQUUsT0FBTyxDQUFDLE9BQUssQ0FBQyxDQUFBO3dCQUMzQixNQUFNLE9BQUssQ0FBQTs7d0JBRVgsSUFBSSxLQUFLOzRCQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTs7NEJBRXRCLHNCQUFPLEdBQUcsRUFBQTs7OztLQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMs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