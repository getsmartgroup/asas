import feathers from '@feathersjs/feathers';
export declare const asas: <T = any>(url: URL) => {
    client: feathers.Application<T>;
    oAuthLoginURL: (provider: string) => string;
};
export default asas;
