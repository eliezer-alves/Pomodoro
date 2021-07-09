<style>
    .btn{
        @apply w-full focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-purple-500 hover:bg-purple-600 hover:shadow-lg
    }
    .input{
        @apply w-full rounded-md
    }
</style>

<template>
  <div class="w-full h-screen p-4 flex justify-center items-center">
        <main class="w-full md:w-5/6 xl:w-4/6 h-9/10 flex items-center bg-gray-100 rounded-lg font-mono">
            <div class="w-full sm:w-1/2 md:w-1/3 p-10 grid grid-cols-1 space-y-4">
                <!-- <img src="images/undraw/playful_cat_re_bxiu.svg" alt=""> -->
                <span class="font-bold text-2xl">Faça seu Login</span>
                <div class="space-y-2">
                    <input class="input" type="text" placeholder="Username">
                    <input class="input" type="password" placeholder="Password">
                    <button class="btn">Entrar</button>
                </div>
                <a href="#" class="flex justify-around">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Não tenho cadastro</span>
                </a>
            </div>
            <div class="hidden sm:inline sm:w-1/2 md:w-2/3 p-10 md:p-20">
                <img src="images/undraw/rocket.svg" alt="">
            </div>
        </main>
    </div>
</template>
