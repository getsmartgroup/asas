"use strict";
// import { z } from 'zod'
// import { Hook, HookContext } from '@feathersjs/feathers'
// import { keep } from 'feathers-hooks-common'
// export const checkAuthorization: Hook = ctx => {
// 	if (ctx.params.authorized !== true) {
// 		ctx.statusCode = 403
// 		throw new Error('Unauthorized')
// 	}
// 	return ctx
// }
// export const authorizeInternal: Hook = ctx => {
// 	if (ctx.params.provider === undefined) {
// 		ctx.params.authorized = true
// 	}
// 	return ctx
// }
// export const authorizeAuthenticated: Hook = ctx => {
// 	if (ctx.params.authenticated) {
// 		ctx.params.authorized = true
// 	}
// 	return ctx
// }
// export const authorize: Hook = ctx => {
// 	ctx.params.authorized = true
// 	return ctx
// }
// export const unauthorize: Hook = ctx => {
// 	ctx.params.authorized = false
// 	return ctx
// }
// export const safeHook = (hook: (context: HookContext) => any) => async (
// 	context: HookContext
// ) => {
// 	try {
// 		await hook(context)
// 	} catch (error) {
// 		logErrorContext(context)
// 		throw error
// 	}
// 	return Promise.resolve(context)
// }
// export const validateExternal = (type: z.ZodType<any>) =>
// 	safeHook(context => {
// 		if (context.params.provider === undefined) {
// 			return
// 		}
// 		validate(type)(context)
// 	})
// export const validate = (type: z.ZodType<any>) =>
// 	safeHook(context => {
// 		const data = context.type === 'before' ? context.data : context.result
// 		if (Array.isArray(data)) {
// 			type.array().parse(data)
// 		} else {
// 			type.parse(data)
// 		}
// 	})
// export const makeFilteringHooks = <
// 	R extends z.ZodObject<any, any, any>,
// 	W extends z.ZodObject<any>
// >(
// 	readable: R
// ) => ({
// 	after: {
// 		all: keep(Object.keys(readable))
// 	}
// })
// export const makeValidationHooks = <
// 	R extends z.ZodObject<any, any, any>,
// 	W extends z.ZodObject<any>
// >(
// 	readable: R,
// 	writeable: W
// ) => ({
// 	before: {
// 		create: validateExternal(writeable.partial().strict()),
// 		update: validateExternal(writeable.partial().strict()),
// 		patch: validateExternal(writeable.partial().strict())
// 	},
// 	after: {
// 		all: validateExternal(readable.partial().strict())
// 	}
// })
// export const logErrorContext = safeHook(context => {
// 	console.log(
// 		'[ERROR]',
// 		`
// 		Service: ${context.type}
// 		Path: ${context.path}
// 		Method: ${context.method}
// 		Provider: ${context.params.provider}
// 		Authenticated? ${context.params.authenticated ? 'Yes' : 'No'} ${context.params
// 			.authentication?.strategy ?? ''}
// 		Message: ${context.error?.message}
// 		STACK
// 		${context.error?.stack}
// 	`
// 	)
// })
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUEwQjtBQUMxQiwyREFBMkQ7QUFDM0QsK0NBQStDO0FBRS9DLG1EQUFtRDtBQUNuRCx5Q0FBeUM7QUFDekMseUJBQXlCO0FBQ3pCLG9DQUFvQztBQUNwQyxLQUFLO0FBQ0wsY0FBYztBQUNkLElBQUk7QUFFSixrREFBa0Q7QUFDbEQsNENBQTRDO0FBQzVDLGlDQUFpQztBQUNqQyxLQUFLO0FBQ0wsY0FBYztBQUNkLElBQUk7QUFFSix1REFBdUQ7QUFDdkQsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQyxLQUFLO0FBQ0wsY0FBYztBQUNkLElBQUk7QUFFSiwwQ0FBMEM7QUFDMUMsZ0NBQWdDO0FBQ2hDLGNBQWM7QUFDZCxJQUFJO0FBRUosNENBQTRDO0FBQzVDLGlDQUFpQztBQUNqQyxjQUFjO0FBQ2QsSUFBSTtBQUVKLDJFQUEyRTtBQUMzRSx3QkFBd0I7QUFDeEIsU0FBUztBQUNULFNBQVM7QUFDVCx3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsS0FBSztBQUNMLG1DQUFtQztBQUNuQyxJQUFJO0FBRUosNERBQTREO0FBQzVELHlCQUF5QjtBQUN6QixpREFBaUQ7QUFDakQsWUFBWTtBQUNaLE1BQU07QUFDTiw0QkFBNEI7QUFDNUIsTUFBTTtBQUVOLG9EQUFvRDtBQUNwRCx5QkFBeUI7QUFDekIsMkVBQTJFO0FBQzNFLCtCQUErQjtBQUMvQiw4QkFBOEI7QUFDOUIsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixNQUFNO0FBQ04sTUFBTTtBQUVOLHNDQUFzQztBQUN0Qyx5Q0FBeUM7QUFDekMsOEJBQThCO0FBQzlCLEtBQUs7QUFDTCxlQUFlO0FBQ2YsVUFBVTtBQUNWLFlBQVk7QUFDWixxQ0FBcUM7QUFDckMsS0FBSztBQUNMLEtBQUs7QUFFTCx1Q0FBdUM7QUFDdkMseUNBQXlDO0FBQ3pDLDhCQUE4QjtBQUM5QixLQUFLO0FBQ0wsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixVQUFVO0FBQ1YsYUFBYTtBQUNiLDREQUE0RDtBQUM1RCw0REFBNEQ7QUFDNUQsMERBQTBEO0FBQzFELE1BQU07QUFDTixZQUFZO0FBQ1osdURBQXVEO0FBQ3ZELEtBQUs7QUFDTCxLQUFLO0FBRUwsdURBQXVEO0FBQ3ZELGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsTUFBTTtBQUNOLDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIsOEJBQThCO0FBQzlCLHlDQUF5QztBQUN6QyxtRkFBbUY7QUFDbkYsc0NBQXNDO0FBQ3RDLHVDQUF1QztBQUN2QyxVQUFVO0FBQ1YsNEJBQTRCO0FBQzVCLEtBQUs7QUFDTCxLQUFLO0FBQ0wsS0FBSyJ9