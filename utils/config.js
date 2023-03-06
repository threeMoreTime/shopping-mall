/* APP调试 */
export const requestUrl = 'http://192.168.1.99:8860';
// export const requestUrl = 'http://192.168.1.39:8860';

/* H5调试 */
export const H5TestUrl =
// #ifdef H5
 '/dev';
// #endif
// #ifndef H5
 requestUrl;
// #endif