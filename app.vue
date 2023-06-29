<script lang="ts" setup>
// import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'
// await tryLoadAndStartRecorder({
//   projectId: 'PT9P3QI6U6wcbcdxbi8CJfasSS1FnboSA6fAVsAH',
// });

</script>

<template>
  <Head>
    <Link
        href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
        rel="stylesheet"
    />
  </Head>
  <Body class="antialiased">
  <NuxtLayout>
    <client-only>
      <NuxtPage/>
    </client-only>
  </NuxtLayout>
  </Body>
</template>
