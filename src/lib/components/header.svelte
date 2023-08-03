<script lang="ts">
	import { goto } from "$app/navigation";
	import { User } from "$lib/shared/store";
    import Logo from "$lib/assets/logo.svg"
	import { clickOutside } from "$lib/shared/outsideclick";

    let dropdown = false

    const logout = () => {
        User.set(null)
        goto('/')
    }
</script>

<header class="bg-white lg:py-3 ">
    <div class=" mx-auto max-w-7xl sm:px-6 ">
        <!-- lg+ -->
        <nav class="relative flex items-center justify-between h-16 bg-white lg:rounded-md lg:h-24 lg:py-6">
            <div class="flex-shrink-0">
                <a href="/" title="" class="flex">
                    <img class="w-auto h-8 lg:h-[4rem]" src={Logo} alt="" />
                </a>
            </div>

            <button type="button" class="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>

                <!-- <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg> -->
            </button>

            <div class="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
                <a href="/" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-[#2ECC40] focus:text-[#2ECC40]"> Home </a>

                <a href="/products" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-[#2ECC40] focus:text-[#2ECC40]"> Products </a>

                <a href="/contact" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-[#2ECC40] focus:text-[#2ECC40]"> Contact </a>

                <a href="/about" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-[#2ECC40] focus:text-[#2ECC40]"> About </a>

            </div>

            {#if !$User}
                <div class="hidden lg:flex lg:items-center lg:space-x-10">
                    <a href="/signup" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-[#2ECC40] focus:text-[#2ECC40]"> Sign up </a>

                    <a href="/signin" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-[#2ECC40] focus:text-[#2ECC40]"> Sign in </a>
                </div>
            {:else}
                <div class="hidden lg:flex lg:items-center lg:space-x-10">
                    <button class="bg-[#2ECC40] hover:bg-[#2d9739] transition duration-300 text-white font-bold rounded w-12 h-12 rounded-full flex items-center justify-center"
                            on:click={() => dropdown = !dropdown}>
                        {($User?.fullname?.charAt(0).toUpperCase()) || ' '}
                    </button>
                    <!-- <div use:clickOutside={() => dropdown = false} class:hidden={!dropdown} 
                        class=" origin-top-right absolute top-20 right-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a href="/cart" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Cart</a>
                            <a href="/orders" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">My Orders</a>
                            <a href="/terms" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Terms</a>
                            <a on:click={logout} href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Log Out</a>
                        </div>
                    </div> -->
                    <div use:clickOutside={() => dropdown = false} class:hidden={!dropdown}  
                        class="absolute top-20 right-10 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div>{$User.fullname}</div>
                            <div class="font-medium truncate">{$User.email}</div>
                        </div>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                        <ul on:click={() => dropdown = false} class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                            <li>
                                <a href="/cart" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cart</a>
                            </li>
                            <li>
                                <a href="/orders" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Orders</a>
                            </li>
                            <li>
                                <a href="/terms" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Terms And Conditions</a>
                            </li>
                        </ul>
                        <div class="py-1">
                            <a on:click={logout} href="#/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>
                </div>
            {/if}
        </nav>

        <!-- xs to lg -->
        <nav class="flex flex-col py-4 space-y-2 lg:hidden">
            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-[#2ECC40]"> Home </a>
            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-[#2ECC40]"> Products </a>
            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-[#2ECC40]"> Contact </a>
            <a href="#" title="" class="py-2 text-base font-medium text-black transition-all duration-200 focus:text-[#2ECC40]"> About </a>
        </nav>
    </div>
</header>
