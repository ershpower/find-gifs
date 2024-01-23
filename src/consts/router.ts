interface IRoute {
    path: string;
}

enum RouteKeys {
    AUTH = 'AUTH',
    MAIN = 'MAIN',
}
export const routes: Record<RouteKeys, string> = {
    [RouteKeys.AUTH]: '/auth',
    [RouteKeys.MAIN]: '/',
};
