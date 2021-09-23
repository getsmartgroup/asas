var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { keep } from 'feathers-hooks-common';
export const authorizeSameUser = (id = 'id') => context => {
    if (context.params.authenticated && context.params.user) {
        if (context.params.user[id] && context.id === context.params.user[id]) {
            context.params.authorized = true;
        }
    }
    return context;
};
export const checkAuthorization = ctx => {
    if (ctx.params.authorized !== true) {
        ctx.statusCode = 403;
        throw new Error('Unauthorized');
    }
    return ctx;
};
export const authorizeInternal = ctx => {
    if (ctx.params.provider === undefined) {
        ctx.params.authorized = true;
    }
    return ctx;
};
export const authorizeAuthenticated = ctx => {
    if (ctx.params.authenticated) {
        ctx.params.authorized = true;
    }
    return ctx;
};
export const authorize = ctx => {
    ctx.params.authorized = true;
    return ctx;
};
export const unauthorize = ctx => {
    ctx.params.authorized = false;
    return ctx;
};
export const safeHook = (hook) => (context) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield hook(context);
    }
    catch (error) {
        console.log('[HOOK]', hook);
        logErrorContext(context);
        throw error;
    }
    return Promise.resolve(context);
});
export const validateExternal = (type) => safeHook(context => {
    if (context.params.provider === undefined) {
        return;
    }
    validate(type)(context);
});
export const validate = (type) => safeHook(context => {
    const data = context.type === 'before' ? context.data : context.result;
    if (Array.isArray(data)) {
        type.array().parse(data);
    }
    else {
        type.parse(data);
    }
});
export const makeFilteringHooks = (readable) => ({
    after: {
        all: safeHook(context => {
            if (context.params.provider !== undefined) {
                return keep(...Object.keys(readable.shape))(context);
            }
        })
    }
});
export const makeValidationHooks = (readable, writeable) => ({
    before: {
        create: validateExternal(writeable.partial().strict()),
        update: validateExternal(writeable.partial().strict()),
        patch: validateExternal(writeable.partial().strict())
    },
    after: {
        all: validateExternal(readable.partial().strict())
    }
});
const contextReport = (context) => {
    var _a, _b;
    return `
	Type: ${context.type}
			Path: ${context.path}
			Method: ${context.method}
			Provider: ${context.params.provider}
			Authenticated? ${context.params.authenticated ? 'Yes' : 'No'} ${(_b = (_a = context.params
        .authentication) === null || _a === void 0 ? void 0 : _a.strategy) !== null && _b !== void 0 ? _b : ''}
`;
};
export const logErrorContext = safeHook(context => {
    var _a, _b, _c;
    console.trace();
    console.log('[ERROR]', `
		${contextReport(context)}
		Message: ${(_a = context.error) === null || _a === void 0 ? void 0 : _a.message}
		STACK
		${(_c = (_b = context.error) === null || _b === void 0 ? void 0 : _b.stack) !== null && _c !== void 0 ? _c : console.trace()}
	`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsT0FBTyxFQUFFLElBQUksRUFBbUIsTUFBTSx1QkFBdUIsQ0FBQTtBQUU3RCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQy9ELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDeEQsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3RFLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQTtTQUNoQztLQUNEO0lBQ0QsT0FBTyxPQUFPLENBQUE7QUFDZixDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBUyxHQUFHLENBQUMsRUFBRTtJQUM3QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtRQUNuQyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTtRQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0tBQy9CO0lBQ0QsT0FBTyxHQUFHLENBQUE7QUFDWCxDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBUyxHQUFHLENBQUMsRUFBRTtJQUM1QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtRQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7S0FDNUI7SUFDRCxPQUFPLEdBQUcs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