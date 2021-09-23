import { Paginated, Service, ServiceAddons, Params, NullableId, Id } from '@feathersjs/feathers';
export declare type WrappedService<T, R, W> = ServiceAddons<T> & {
    cache: Record<string, T>;
} & {
    find(params?: Params): Promise<R | R[] | Paginated<R>>;
    get(id: Id, params?: Params): Promise<R>;
    create(data: Partial<W> | Partial<W>[], params?: Params): Promise<R | R[]>;
    update(id: NullableId, data: W, params?: Params): Promise<R | R[]>;
    patch(id: NullableId, data: Partial<W>, params?: Params): Promise<R | R[]>;
    remove(id: NullableId, params?: Params): Promise<R | R[]>;
    getFromCache(id: Id): R | undefined;
};
export declare const wrapService: <T extends { [D in K]: any; }, W extends WrappedService<T, any, any> = WrappedService<T, any, any>, K extends string = "id">(service: Service<T>, _id?: K) => W;
