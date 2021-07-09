<template>
  <div class="w-full h-screen p-4 flex justify-center items-center">
    <main class="w-full md:w-4/6 h-9/10 bg-gray-100 rounded-lg">
      <header>
          <nav class="w-full flex items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200">
              <div class="flex w-5/12  items-center justify-between">
                  <inertia-link href="/">Dashboard</inertia-link>
                  <inertia-link href="/pomodoro">PomoVue</inertia-link>
                  <inertia-link href="/about">About</inertia-link>
              </div>
              <div class="w-1/4 flex items-center justify-end">
                  <inertia-link href="/login">Logout</inertia-link>
              </div>
          </nav>
      </header>
      <article class="p-4">
        <slot />
      </article>
    </main>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
    },
    watch: {
      title: {
        immediate: true,
        handler(title) {
          document.title = title
        },
      },
    },
  }
</script>