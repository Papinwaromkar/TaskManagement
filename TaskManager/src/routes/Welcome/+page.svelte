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
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a href="../Login">Sign in</a></button>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a href="../Register">Register</a></button>        
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
