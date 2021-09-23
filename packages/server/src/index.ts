import { z } from 'zod'
import { Hook, HookContext } from '@feathersjs/feathers'
import { keep, iff, isProvider } from 'feathers-hooks-common'

export const authorizeSameUser = (id = 'id'): Hook => context => {
	if (context.params.authenticated && context.params.user) {
		if (context.params.user[id] && context.id === context.params.user[id]) {
			context.params.authorized = true
		}
	}
	return context
}

export const checkAuthorization: Hook = ctx => {
	if (ctx.params.authorized !== true) {
		ctx.statusCode = 403
		throw new Error('Unauthorized')
	}
	return ctx
}

export const authorizeInternal: Hook = ctx => {
	if (ctx.params.provider === undefined) {
		ctx.params.authorized = true
	}
	return ctx
}

export const authorizeAuthenticated: Hook = ctx => {
	if (ctx.params.authenticated) {
		ctx.params.authorized = true
	}
	return ctx
}

export const authorize: Hook = ctx => {
	ctx.params.authorized = true
	return ctx
}

export const unauthorize: Hook = ctx => {
	ctx.params.authorized = false
	return ctx
}

export const safeHook = (hook: (context: HookContext) => any) => async (
	context: HookContext
) => {
	try {
		await hook(context)
	} catch (error) {
		console.log('[HOOK]', hook)
		logErrorContext(context)
		throw error
	}
	return Promise.resolve(context)
}

export const validateExternal = (type: z.ZodType<any>) =>
	safeHook(context => {
		if (context.params.provider === undefined) {
			return
		}
		validate(type)(context)
	})

export const validate = (type: z.ZodType<any>) =>
	safeHook(context => {
		const data = context.type === 'before' ? context.data : context.result
		if (Array.isArray(data)) {
			type.array().parse(data)
		} else {
			type.parse(data)
		}
	})

export const makeFilteringHooks = <
	R extends z.ZodObject<any, any, any>,
	W extends z.ZodObject<any>
>(
	readable: R
) => ({
	after: {
		all: safeHook(context => {
			if (context.params.provider !== undefined) {
				return keep(...Object.keys(readable.shape))(context)
			}
		})
	}
})

export const makeValidationHooks = <
	R extends z.ZodObject<any, any, any>,
	W extends z.ZodObject<any>
>(
	readable: R,
	writeable: W
) => ({
	before: {
		create: validateExternal(writeable.partial().strict()),
		update: validateExternal(writeable.partial().strict()),
		patch: validateExternal(writeable.partial().strict())
	},
	after: {
		all: validateExternal(readable.partial().strict())
	}
})

const contextReport = (context: HookContext) => `
	Type: ${context.type}
			Path: ${context.path}
			Method: ${context.method}
			Provider: ${context.params.provider}
			Authenticated? ${context.params.authenticated ? 'Yes' : 'No'} ${context.params
	.authentication?.strategy ?? ''}
`

export const logErrorContext = safeHook(context => {
	console.trace()
	console.log(
		'[ERROR]',
		`
		${contextReport(context)}
		Message: ${context.error?.message}
		STACK
		${context.error?.stack ?? console.trace()}
	`
	)
})
