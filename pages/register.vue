<script lang="ts" setup>
definePageMeta({middleware: ["guest"]});

const router = useRouter();
const {register} = useAuth();

const data = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const {
  submit,
  inProgress,
  validationErrors: errors,
} = useSubmit(() => register(data), {
  onSuccess: () => router.push("/dashboard"),
});
</script>

<template>
  <AuthCard>
    <template #logo>
      <NuxtLink href="/">
        <ApplicationLogo class="w-20 h-20 fill-current text-gray-500 mb-4"/>
      </NuxtLink>
    </template>

    <form @submit.prevent="submit">
      <!-- Name -->
      <div>
        <Label for="name">Name</Label>
        <Input
            id="name"
            v-model="data.name"
            :errors="errors.name"
            autoFocus
            class="block mt-1 w-full"
            required
            type="text"
        />
      </div>

      <!-- Email Address -->
      <div class="mt-4">
        <Label for="email">Email</Label>
        <Input
            id="email"
            v-model="data.email"
            :errors="errors.email"
            class="block mt-1 w-full"
            required
            type="email"
        />
      </div>

      <!-- Password -->
      <div class="mt-4">
        <Label for="password">Password</Label>
        <Input
            id="password"
            v-model="data.password"
            :errors="errors.password"
            autoComplete="new-password"
            class="block mt-1 w-full"
            required
            type="password"
        />
      </div>

      <!-- Confirm Password -->
      <div class="mt-4">
        <Label for="password_confirmation">Confirm Password</Label>
        <Input
            id="password_confirmation"
            v-model="data.password_confirmation"
            :errors="errors.password_confirmation"
            class="block mt-1 w-full"
            required
            type="password"
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <NuxtLink
            class="underline text-sm text-gray-600 hover:text-gray-900"
            href="/login"
        >
          Already registered?
        </NuxtLink>

        <Button :disabled="inProgress" class="ml-3" type="submit">Register</Button>
      </div>
    </form>
  </AuthCard>
</template>
