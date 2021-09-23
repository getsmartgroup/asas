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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientProvider = exports.useClientContext = exports.ClientContextProvider = exports.useClient = exports.useWrappedService = exports.createServiceContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_utils_1 = require("@chakra-ui/react-utils");
var client_1 = require("@asas-virtuais/client");
var createServiceContext = function (service) {
    var _a = (0, react_utils_1.createContext)({
        name: "Context",
        errorMessage: "useContext: `context` is undefined. Seems you forgot to wrap the select components in `<Provider />`"
    }), ContextProvider = _a[0], useContext = _a[1];
    var Provider = (function (_a) {
        var children = _a.children;
        var ctx = (0, exports.useWrappedService)(service);
        return (0, jsx_runtime_1.jsx)(ContextProvider, __assign({ value: ctx }, { children: children }), void 0);
    });
    return {
        Provider: Provider,
        ContextProvider: ContextProvider,
        service: service,
        useContext: useContext
    };
};
exports.createServiceContext = createServiceContext;
var useWrappedService = function (service) {
    var _a = (0, react_1.useState)(false), loading = _a[0], _setLoading = _a[1];
    var setLoading = (0, react_1.useMemo)(function () { return ({
        on: function () { return _setLoading(true); },
        off: function () { return _setLoading(false); }
    }); }, [loading, _setLoading]);
    var _b = (0, react_1.useState)(service.cache), index = _b[0], setIndex = _b[1];
    var array = (0, react_1.useMemo)(function () { return Object.values(index); }, [index]);
    var _c = (0, react_1.useState)([]), errors = _c[0], setErrors = _c[1];
    var sync = (0, react_1.useCallback)(function (someData) {
        setIndex(__assign({}, service.cache));
        return someData;
    }, [service.cache]);
    var addError = (0, react_1.useCallback)(function (error) {
        setErrors(__spreadArray(__spreadArray([], errors, true), [error], false));
        return error;
    }, []);
    var wrappedService = (0, react_1.useMemo)(function () {
        service.find = (0, client_1.safeReplaceAsync)(service.find.bind(service), sync, addError, setLoading.on, setLoading.off);
        service.get = (0, client_1.safeReplaceAsync)(service.get.bind(service), sync, addError, setLoading.on, setLoading.off);
        service.create = (0, client_1.safeReplaceAsync)(service.create.bind(service), sync, addError, setLoading.on, setLoading.off);
        service.update = (0, client_1.safeReplaceAsync)(service.update.bind(service), sync, addError, setLoading.on, setLoading.off);
        service.patch = (0, client_1.safeReplaceAsync)(service.patch.bind(service), sync, addError, setLoading.on, setLoading.off);
        service.remove = (0, client_1.safeReplaceAsync)(service.remove.bind(service), sync, addError, setLoading.on, setLoading.off);
        return service;
    }, [service]);
    return {
        service: wrappedService,
        array: array,
        index: index,
        errors: errors,
        loading: loading,
        sync: sync
    };
};
exports.useWrappedService = useWrappedService;
var useClient = function (client) {
    return (0, react_1.useMemo)(function () { return client; }, [client]);
};
exports.useClient = useClient;
exports.ClientContextProvider = (_a = (0, react_utils_1.createContext)(), _a[0]), exports.useClientContext = _a[1];
var ClientProvider = function (_a) {
    var children = _a.children, client = _a.client;
    var ctx = (0, exports.useClient)(client);
    return (0, jsx_runtime_1.jsx)(exports.ClientContextProvider, __assign({ value: ctx }, { children: children }), void 0);
};
exports.ClientProvider = ClientProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEQ7QUFDMUQsc0RBQXNEO0FBQ3RELGdEQUF3RTtBQUdqRSxJQUFNLG9CQUFvQixHQUFHLFVBSW5DLE9BQVU7SUFFSixJQUFBLEtBQWdDLElBQUEsMkJBQWEsRUFBdUI7UUFDekUsSUFBSSxFQUFFLFNBQVM7UUFDZixZQUFZLEVBQUUsc0dBQTBHO0tBQ3hILENBQUMsRUFISyxlQUFlLFFBQUEsRUFBRSxVQUFVLFFBR2hDLENBQUE7SUFDRixJQUFNLFFBQVEsR0FBRyxDQUFDLFVBQUMsRUFBWTtZQUFWLFFBQVEsY0FBQTtRQUM1QixJQUFNLEdBQUcsR0FBTyxJQUFBLHlCQUFpQixFQUFDLE9BQU8sQ0FBTyxDQUFBO1FBQ2hELE9BQU8sdUJBQUMsZUFBZSxhQUFDLEtBQUssRUFBRSxHQUFHLGdCQUFHLFFBQVEsWUFBbUIsQ0FBQTtJQUNqRSxDQUFDLENBQU8sQ0FBQTtJQUNSLE9BQU87UUFDTixRQUFRLFVBQUE7UUFDUixlQUFlLGlCQUFBO1FBQ2YsT0FBTyxTQUFBO1FBQ1AsVUFBVSxZQUFBO0tBQ1YsQ0FBQTtBQUNGLENBQUMsQ0FBQTtBQXBCWSxRQUFBLG9CQUFvQix3QkFvQmhDO0FBbUJNLElBQU0saUJBQWlCLEdBQUcsVUFJaEMsT0FBVTtJQUVOLElBQUEsS0FBeUIsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxFQUF2QyxPQUFPLFFBQUEsRUFBRSxXQUFXLFFBQW1CLENBQUE7SUFDNUMsSUFBTSxVQUFVLEdBQUcsSUFBQSxlQUFPLEVBQ3pCLGNBQU0sT0FBQSxDQUFDO1FBQ04sRUFBRSxFQUFFLGNBQU0sT0FBQSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCO1FBQzNCLEdBQUcsRUFBRSxjQUFNLE9BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxF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