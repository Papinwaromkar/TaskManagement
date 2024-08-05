<script>
	import Footer from "../footer.svelte";
    import Layout from "../+layout.svelte";
</script>
<Layout>
<nav  class="bg-white border-gray-200 dark:bg-gray-900 top-0"  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://www.robotspace.in/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://framerusercontent.com/images/sonK02g1HhQpYMD96kBANE5hEYY.png?scale-down-to=512" class="h-8 bg-black" alt="">   
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a href="../Login">Sing in</a></button>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a href="../Register">Register</a></button>        
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex pl-4 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    
    </div>
  </nav>
</Layout>

<main>
    <div class="flex h-screen">
        <div class="m-auto"><p class=" text-gray-900 text-center text-6xl dark:text-white">Welcome to your personal <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Task Manager</span></p></div>
        
    </div>
    
    
</main>
<Footer/>
