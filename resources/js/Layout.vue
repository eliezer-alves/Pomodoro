<template>
  <main class="decoration-clone bg-gradient-to-b from-gray-100 to-gray-100 rounded-lg">
    <header>
        <nav class="flex w-full items-center justify-start px-6 h-16 bg-white text-gray-700 border-b border-gray-200">
            <div class="flex w-1/4 items-center justify-between">
                <inertia-link href="/">Dashboard</inertia-link>
                <inertia-link href="/pomodoro">Pomodoro</inertia-link>
                <inertia-link href="/about">About</inertia-link>
            </div>
        </nav>
    </header>
    <article class="p-4">
      <slot />
    </article>
  </main>
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