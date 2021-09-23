import { z } from 'zod';
import { Hook, HookContext } from '@feathersjs/feathers';
export declare const authorizeSameUser: (id?: string) => Hook;
export declare const checkAuthorization: Hook;
export declare const authorizeInternal: Hook;
export declare const authorizeAuthenticated: Hook;
export declare const authorize: Hook;
export declare const unauthorize: Hook;
export declare const safeHook: (hook: (context: HookContext) => any) => (context: HookContext) => Promise<HookContext<any, import("@feathersjs/feathers").Service<any>>>;
export declare const validateExternal: (type: z.ZodType<any>) => (context: HookContext) => Promise<HookContext<any, import("@feathersjs/feathers").Service<any>>>;
export declare const validate: (type: z.ZodType<any>) => (context: HookContext) => Promise<HookContext<any, import("@feathersjs/feathers").Service<any>>>;
export declare const makeFilteringHooks: <R extends z.ZodObject<any, any, any, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
}, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
}>, W extends z.ZodObject<any, "strip", z.ZodTypeAny, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
}, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
}>>(readable: R) => {
    after: {
        all: (context: HookContext) => Promise<HookContext<any, import("@feathersjs/feathers").Service<any>>>;
    };
};
export declare const makeValidationHooks: <R extends z.ZodObject<any, any, any, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
}, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
}>, W extends z.ZodObject<any, "strip", z.ZodTypeAny, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
}, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
}>>(readable: R, writeable: W) => {
    before: {
        create: (context: HookContext) => Promise<HookContext<any, import("@feathersjs/feathers").Service<any>>>;
        update: (context: HookContext) => Promise<HookContext<any, import("@feathersjs/feathers").Service<any>>>;
        patch: (context: HookContext) => Promise<HookContext<any, import("@feathersjs/feathers").Service<any>>>;
    };
    after: {
        all: (context: HookContext) => Promise<HookContext<any, import("@feathersjs/feathers").Service<any>>>;
    };
};
export declare const logErrorContext: (context: HookContext) => Promise<HookContext<any, import("@feathersjs/feathers").Service<any>>>;
