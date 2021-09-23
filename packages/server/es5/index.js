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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logErrorContext = exports.makeValidationHooks = exports.makeFilteringHooks = exports.validate = exports.validateExternal = exports.safeHook = exports.unauthorize = exports.authorize = exports.authorizeAuthenticated = exports.authorizeInternal = exports.checkAuthorization = exports.authorizeSameUser = void 0;
var feathers_hooks_common_1 = require("feathers-hooks-common");
var authorizeSameUser = function (id) {
    if (id === void 0) { id = 'id'; }
    return function (context) {
        if (context.params.authenticated && context.params.user) {
            if (context.params.user[id] && context.id === context.params.user[id]) {
                context.params.authorized = true;
            }
        }
        return context;
    };
};
exports.authorizeSameUser = authorizeSameUser;
var checkAuthorization = function (ctx) {
    if (ctx.params.authorized !== true) {
        ctx.statusCode = 403;
        throw new Error('Unauthorized');
    }
    return ctx;
};
exports.checkAuthorization = checkAuthorization;
var authorizeInternal = function (ctx) {
    if (ctx.params.provider === undefined) {
        ctx.params.authorized = true;
    }
    return ctx;
};
exports.authorizeInternal = authorizeInternal;
var authorizeAuthenticated = function (ctx) {
    if (ctx.params.authenticated) {
        ctx.params.authorized = true;
    }
    return ctx;
};
exports.authorizeAuthenticated = authorizeAuthenticated;
var authorize = function (ctx) {
    ctx.params.authorized = true;
    return ctx;
};
exports.authorize = authorize;
var unauthorize = function (ctx) {
    ctx.params.authorized = false;
    return ctx;
};
exports.unauthorize = unauthorize;
var safeHook = function (hook) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, hook(context)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log('[HOOK]', hook);
                (0, exports.logErrorContext)(context);
                throw error_1;
            case 3: return [2 /*return*/, Promise.resolve(context)];
        }
    });
}); }; };
exports.safeHook = safeHook;
var validateExternal = function (type) {
    return (0, exports.safeHook)(function (context) {
        if (context.params.provider === undefined) {
            return;
        }
        (0, exports.validate)(type)(context);
    });
};
exports.validateExternal = validateExternal;
var validate = function (type) {
    return (0, exports.safeHook)(function (context) {
        var data = context.type === 'before' ? context.data : context.result;
        if (Array.isArray(data)) {
            type.array().parse(data);
        }
        else {
            type.parse(data);
        }
    });
};
exports.validate = validate;
var makeFilteringHooks = function (readable) { return ({
    after: {
        all: (0, exports.safeHook)(function (context) {
            if (context.params.provider !== undefined) {
                return feathers_hooks_common_1.keep.apply(void 0, Object.keys(readable.shape))(context);
            }
        })
    }
}); };
exports.makeFilteringHooks = makeFilteringHooks;
var makeValidationHooks = function (readable, writeable) { return ({
    before: {
        create: (0, exports.validateExternal)(writeable.partial().strict()),
        update: (0, exports.validateExternal)(writeable.partial().strict()),
        patch: (0, exports.validateExternal)(writeable.partial().strict())
    },
    after: {
        all: (0, exports.validateExternal)(readable.partial().strict())
    }
}); };
exports.makeValidationHooks = makeValidationHooks;
var contextReport = function (context) {
    var _a, _b;
    return "\n\tType: " + context.type + "\n\t\t\tPath: " + context.path + "\n\t\t\tMethod: " + context.method + "\n\t\t\tProvider: " + context.params.provider + "\n\t\t\tAuthenticated? " + (context.params.authenticated ? 'Yes' : 'No') + " " + ((_b = (_a = context.params
        .authentication) === null || _a === void 0 ? void 0 : _a.strategy) !== null && _b !== void 0 ? _b : '') + "\n";
};
exports.logErrorContext = (0, exports.safeHook)(function (context) {
    var _a, _b, _c;
    console.trace();
    console.log('[ERROR]', "\n\t\t" + contextReport(context) + "\n\t\tMessage: " + ((_a = context.error) === null || _a === void 0 ? void 0 : _a.message) + "\n\t\tSTACK\n\t\t" + ((_c = (_b = context.error) === null || _b === void 0 ? void 0 : _b.stack) !== null && _c !== void 0 ? _c : console.trace()) + "\n\t");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsK0RBQTZEO0FBRXRELElBQU0saUJBQWlCLEdBQUcsVUFBQyxFQUFTO0lBQVQsbUJBQUEsRUFBQSxTQUFTO0lBQVcsT0FBQSxVQUFBLE9BQU87UUFDNUQsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN4RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3RFLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTthQUNoQztTQUNEO1FBQ0QsT0FBTyxPQUFPLENBQUE7SUFDZixDQUFDO0FBUHFELENBT3JELENBQUE7QUFQWSxRQUFBLGlCQUFpQixxQkFPN0I7QUFFTSxJQUFNLGtCQUFrQixHQUFTLFVBQUEsR0FBRztJQUMxQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtRQUNuQyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTtRQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0tBQy9CO0lBQ0QsT0FBTyxHQUFHLENBQUE7QUFDWCxDQUFDLENBQUE7QUFOWSxRQUFBLGtCQUFrQixzQkFNOUI7QUFFTSxJQUFNLGlCQUFpQixHQUFTLFVBQUEsR0FBRztJQUN6QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtRQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7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