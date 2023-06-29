import { createError, readBody, appendHeader } from 'h3';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    if (!config.public.backendUrl) {
        throw new Error('Missing `runtimeConfig.apiBaseUrl` configuration.');
    }

    const { method, url, headers } = event.req;
    const body = method !== 'GET' && method !== 'HEAD' ? await readBody(event) : undefined;
    let cleanUrl = url.replace(config.public.proxyUrl, '')

    try {
        const response = await $fetch.raw(cleanUrl, {
            method,
            baseURL: config.public.backendUrl,
            headers: {
                'content-type': 'application/json',
                // cookie: headers.cookie,
                ...headers
            },
            body,
        });

        for (const header of ['set-cookie', 'cache-control']) {
            if (response.headers.has(header)) {
                appendHeader(event, header, response.headers.get(header));
            }
        }

        return response._data;
    } catch (error) {
        return createError({
            statusCode: error.response.status,
            statusMessage: error.message,
            data: error.data,
        });
    }
});
