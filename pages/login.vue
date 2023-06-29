<script lang="ts" setup>
definePageMeta({middleware: ["guest"]});

const router = useRouter();
const route = useRoute();
const {login} = useAuth();

const data = reactive({
  email: "",
  password: "",
  remember: false,
});
const status = ref(
    (route.query.reset ?? "").length > 0 ? atob(route.query.reset as string) : ""
);
const errors = ref({})

async function submitLogin() {
  try {
    return await login(data);
  } catch (e) {
    errors.value = {
      "email": ["The provided credentials do not match our records."],
    };
  }
}
</script>

<template>
  <AuthCard>
    <template #logo>
      <NuxtLink to="/">
        <ApplicationLogo class="w-20 h-20 fill-current text-gray-500"/>
      </NuxtLink>
    </template>

    <!-- Session Status -->
    <AuthSessionStatus :status="status" class="mb-4"/>

    <form @submit.prevent="submitLogin">
      <!-- Email Address -->
      <div>
        <Label for="email">Email</Label>
        <Input
            id="email"
            v-model="data.email"
            :errors="errors.email?.[0]"
            autoFocus
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
            autoComplete="current-password"
            class="block mt-1 w-full"
            required
            type="password"
        />
      </div>

      <!-- Remember Me -->
      <div class="block mt-4">
        <label class="inline-flex items-center" for="remember">
          <input
              id="remember"
              v-model="data.remember"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              name="remember"
              type="checkbox"
          />
          <span class="ml-2 text-sm text-gray-600"> Remember me </span>
        </label>
      </div>

      <div class="flex items-center justify-end mt-4">
        <NuxtLink
            class="underline text-sm text-gray-600 hover:text-gray-900"
            href="/forgot-password"
        >
          Forgot your password?
        </NuxtLink>

        <Button :disabled="inProgress" class="ml-3" type="submit">Login</Button>
      </div>
    </form>
    <template #footer>
      <LinkC class="mt-6 text-sm" href="/register">Signup to get started</LinkC>
    </template>
  </AuthCard>

</template>
