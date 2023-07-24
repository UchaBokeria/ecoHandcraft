<script>
    import AboutFirst from "$lib/assets/dog.svg"
    import AboutSecond from "$lib/assets/relax.svg"
    import About from "$lib/assets/buddies.svg"
</script>
<section class="bg-white ">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light  sm:text-lg">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold  dark:text-gray-700  ">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src={AboutFirst} alt="office content 1">
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src={AboutSecond} alt="office content 2">
        </div>
    </div>
</section>
<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div class="relative lg:mb-12">
                <img class="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="" />
                <div class="pl-12 pr-6">
                    <img class="relative" src={About} alt="" />
                </div>
                <div class="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                    <div class="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                        <div class="px-3 py-4 sm:px-5 sm:py-8">
                            <div class="flex items-start">
                                <p class="text-3xl sm:text-4xl">👋</p>
                                <blockquote class="ml-5">
                                    <p class="text-sm font-medium text-white sm:text-lg">“You made it so simple. My new site is so much faster and easier to work with than my old site.”</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="2xl:pl-16">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">We make things easy for projects.</h2>
                <p class="text-xl leading-relaxed text-gray-900 mt-9">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse duis enim velit mollit. Exercitation veniam.</p>
                <p class="mt-6 text-xl leading-relaxed text-gray-900">Velit officia conse duis enim velit mollit. Exercit ation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
    </div>
</section>
