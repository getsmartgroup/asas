import {
	Paginated,
	Service,
	ServiceAddons,
	Params,
	NullableId,
	Id
} from '@feathersjs/feathers'
import { replaceAsync, feathersResultToArray, safeReplaceAsync } from './common'

export type WrappedService<T, R, W> = ServiceAddons<T> & {
	cache: Record<string, T>
} & {
	find(params?: Params): Promise<R | R[] | Paginated<R>>

	get(id: Id, params?: Params): Promise<R>

	create(data: Partial<W> | Partial<W>[], params?: Params): Promise<R | R[]>

	update(id: NullableId, data: W, params?: Params): Promise<R | R[]>

	patch(id: NullableId, data: Partial<W>, params?: Params): Promise<R | R[]>

	remove(id: NullableId, params?: Params): Promise<R | R[]>

	getFromCache(id: Id): R | undefined
}

export const wrapService = <
	T extends { [D in K]: any },
	W extends WrappedService<T, any, any> = WrappedService<T, any, any>,
	K extends string = 'id'
>(
	service: Service<T>,
	_id: K = 'id' as K
): W => {
	let index: Record<string, T> = {}

	const include = <D extends T | T[] | Paginated<T>>(data: D) => {
		feathersResultToArray(data).forEach(obj => {
			index[obj[_id]] = obj
		})
		return data
	}
	const exclude = <D extends T | T[] | Paginated<T>>(data: D) => {
		feathersResultToArray(data).forEach(obj => {
			if (index[obj[_id]]) {
				delete index[obj[_id]]
			}
		})
		return data
	}

	service.get = replaceAsync(
		service.get.bind(service),
		include,
		undefined,
		undefined,
		undefined,
		id => {
			const cached = index[id]
			if (cached) {
				return cached
			}
			return undefined
		}
	)
	service.find = safeReplaceAsync(service.find.bind(service), include)
	service.create = safeReplaceAsync(service.create.bind(service), include)
	service.update = safeReplaceAsync(service.update.bind(service), include)
	service.patch = safeReplaceAsync(service.patch.bind(service), include)
	service.remove = safeReplaceAsync(service.remove.bind(service), exclude)

	service.cache = index
	service.getFromCache = (id: Id) => index[id]

	return service as W
}
