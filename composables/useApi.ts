import {UseSubmitOptions, ValidationErrors} from "~/composables/useSubmit";

export function useApi<T>(
    fetchable: () => Promise<T>,
    options: UseSubmitOptions = {}
) {
    const validationErrors = ref<ValidationErrors>({});
    const error = ref<Error | null>(null);
    const inProgress = ref(false);
    const succeeded = ref<Boolean | null>(null);

    async function submit() {
        validationErrors.value = {};
        error.value = null;
        inProgress.value = true;
        succeeded.value = null;

        try {
            const data = await fetchable();
            succeeded.value = true;
            // @ts-ignore
            options.onSuccess?.(data);
            // @ts-ignore
            return data;
        } catch (e: any) {
            if (!e) {
                throw e;
            }
            console.log(e)
            error.value = e.data.errors;
            succeeded.value = false;
            options?.onError?.(e.data);
            validationErrors.value = e.data?.errors;

            if (e.status !== 422) throw e;
        } finally {
            inProgress.value = false;
        }
    }

    return {
        submit,
        inProgress,
        succeeded,
        validationErrors,
        error,
    };
}