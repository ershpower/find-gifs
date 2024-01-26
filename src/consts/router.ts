interface IRoute {
    path: string;
}

enum RouteKeys {
    TRENDS = 'TRENDS',
    TRENDS_INFINITY = 'TRENDS_INFINITY',
    SEARCH = 'SEARCH',
    RANDOM = 'RANDOM',
}
export const routes: Record<RouteKeys, string> = {
    [RouteKeys.TRENDS]: '/',
    [RouteKeys.TRENDS_INFINITY]: '/infinity',
    [RouteKeys.RANDOM]: 'random',
    [RouteKeys.SEARCH]: 'search',
};
