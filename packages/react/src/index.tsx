import { useState, useCallback, useMemo, FC } from 'react'
import { createContext } from '@chakra-ui/react-utils'
import { safeReplaceAsync, WrappedService } from '@asas-virtuais/client'
import feathers from '@feathersjs/feathers'

export const createServiceContext = <
	S extends WrappedService<any, any, any>,
	US extends UseWrappedService<S> = UseWrappedService<S>
>(
	service: S
) => {
	const [ContextProvider, useContext] = createContext<UseWrappedService<S>>({
		name: `Context`,
		errorMessage: `useContext: \`context\` is undefined. Seems you forgot to wrap the select components in \`<Provider />\``
	})
	const Provider = (({ children }) => {
		const ctx: US = useWrappedService(service) as US
		return <ContextProvider value={ctx}>{children}</ContextProvider>
	}) as FC
	return {
		Provider,
		ContextProvider,
		service,
		useContext
	}
}

// type InferServiceEntity<S> = S extends WrappedService<infer T, any, any> ? T : never
type InferServiceReadable<S> = S extends WrappedService<any, infer R, any>
	? R
	: never
// type InferServiceWriteable<S> = S extends WrappedService<any, any, infer W> ? W : never

export type UseWrappedService<
	S extends WrappedService<any, any, any>,
	R = InferServiceReadable<S>
> = {
	service: S
	array: R[]
	index: Record<string, R>
	errors: Error[]
	loading: boolean
	sync: <R>(someData: R) => R
}
export const useWrappedService = <
	S extends WrappedService<any, any, any>,
	R = InferServiceReadable<S>
>(
	service: S
): UseWrappedService<S, R> => {
	let [loading, _setLoading] = useState(false)
	const setLoading = useMemo(
		() => ({
			on: () => _setLoading(true),
			off: () => _setLoading(false)
		}),
		[loading, _setLoading]
	)
	const [index, setIndex] = useState<Record<string, R>>(service.cache)

	const array = useMemo(() => Object.values(index), [index])

	const [errors, setErrors] = useState<Error[]>([])

	const sync = useCallback(
		<R,>(someData: R) => {
			setIndex({ ...service.cache })
			return someData
		},
		[service.cache]
	)
	const addError = useCallback((error: any) => {
		setErrors([...errors, error])
		return error
	}, [])

	const wrappedService = useMemo(() => {
		service.find = safeReplaceAsync(
			service.find.bind(service),
			sync,
			addError,
			setLoading.on,
			setLoading.off
		)
		service.get = safeReplaceAsync(
			service.get.bind(service),
			sync,
			addError,
			setLoading.on,
			setLoading.off
		)
		service.create = safeReplaceAsync(
			service.create.bind(service),
			sync,
			addError,
			setLoading.on,
			setLoading.off
		)
		service.update = safeReplaceAsync(
			service.update.bind(service),
			sync,
			addError,
			setLoading.on,
			setLoading.off
		)
		service.patch = safeReplaceAsync(
			service.patch.bind(service),
			sync,
			addError,
			setLoading.on,
			setLoading.off
		)
		service.remove = safeReplaceAsync(
			service.remove.bind(service),
			sync,
			addError,
			setLoading.on,
			setLoading.off
		)
		return service
	}, [service])

	return {
		service: wrappedService,
		array,
		index,
		errors,
		loading,
		sync
	} as UseWrappedService<S, R>
}

export const useClient = (client: feathers.Application) => {
	return useMemo(() => client, [client])
}
export const [ClientContextProvider, useClientContext] = createContext<
	ReturnType<typeof useClient>
>()

export const ClientProvider: FC<{ client: feathers.Application }> = ({
	children,
	client
}) => {
	const ctx = useClient(client)
	return <ClientContextProvider value={ctx}>{children}</ClientContextProvider>
}
