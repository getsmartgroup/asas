import { FC } from 'react';
import { WrappedService } from '@asas-virtuais/client';
import feathers from '@feathersjs/feathers';
export declare const createServiceContext: <S extends WrappedService<any, any, any>, US extends UseWrappedService<S, InferServiceReadable<S>> = UseWrappedService<S, InferServiceReadable<S>>>(service: S) => {
    Provider: FC<{}>;
    ContextProvider: import("react").Provider<UseWrappedService<S, InferServiceReadable<S>>>;
    service: S;
    useContext: () => UseWrappedService<S, InferServiceReadable<S>>;
};
declare type InferServiceReadable<S> = S extends WrappedService<any, infer R, any> ? R : never;
export declare type UseWrappedService<S extends WrappedService<any, any, any>, R = InferServiceReadable<S>> = {
    service: S;
    array: R[];
    index: Record<string, R>;
    errors: Error[];
    loading: boolean;
    sync: <R>(someData: R) => R;
};
export declare const useWrappedService: <S extends WrappedService<any, any, any>, R = InferServiceReadable<S>>(service: S) => UseWrappedService<S, R>;
export declare const useClient: (client: feathers.Application) => feathers.Application<{}>;
export declare const ClientContextProvider: import("react").Provider<feathers.Application<{}>>, useClientContext: () => feathers.Application<{}>;
export declare const ClientProvider: FC<{
    client: feathers.Application;
}>;
export {};
