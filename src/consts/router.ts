interface IRoute {
    path: string;
}

enum RouteKeys {
    TRENDS = 'TRENDS',
    SEARCH = 'SEARCH',
    RANDOM = 'RANDOM',
}
export const routes: Record<RouteKeys, string> = {
    [RouteKeys.TRENDS]: '/',
    [RouteKeys.RANDOM]: 'random',
    [RouteKeys.SEARCH]: 'search',
};
