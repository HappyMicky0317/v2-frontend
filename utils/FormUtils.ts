export type inlineErrorsCleanerType = {
    errors: Object,
    keyToModify: string
}

/**
 * in case of inline forms errors, this function will clean the errors object from the parent errors for example
 * smppConnectionData.host will be host
 * smppConnectionData.port will be port
 * etc'
 * When embeding laravel-data we will need to change the error array in the inline form to work.
 * example: /resources/js/Pages/Routing/Routes/Create.vue
 *
 * @param data
 */
export const inlineErrorsCleaner = (data: inlineErrorsCleanerType) => {
    return Object.fromEntries(
        Object.entries(data.errors)
            .filter(([key, _]) => key.startsWith(data.keyToModify + "."))
            .map(([key, value]) => [key.replace(data.keyToModify + ".", ""), value])
    );
}