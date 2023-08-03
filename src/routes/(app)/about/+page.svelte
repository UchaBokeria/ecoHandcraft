<script>
    import AboutFirst from "$lib/assets/dog.svg"
    import AboutSecond from "$lib/assets/relax.svg"
    import About from "$lib/assets/buddies.svg"
    import Logo from "$lib/assets/logo.svg"
</script>
<section class="bg-white ">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light  sm:text-lg">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold  dark:text-gray-700  ">Who are we</h2>
            <p class="mb-4">At the heart of our brand, we are a collective of eco-conscious artisans, dedicated to creating products that balance aesthetics and sustainability. Our story is woven from the threads of innovation, creativity, and a deep-rooted passion for preserving our planet.</p>
            <p>We didn't just decide to follow the standard; we chose to rewrite it. Our journey began from the humble appreciation of natural resources and an earnest desire to make a difference. We're not here just to join the green movement, we're here to lead it</p>
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
                    <div class="max-w-xs bg-[#2ECC40] bg-opacity-90   rounded-lg sm:max-w-md xl:max-w-md">
                        <div class="px-3 py-4 sm:px-5 sm:py-8">
                            <div class="flex items-start">
                                <p class="text-3xl sm:text-4xl">👋</p>
                                <blockquote class="ml-5">
                                    <p class="text-sm font-medium text-white sm:text-lg">“Each product we create is a testament to our commitment to environmental sustainability and handcrafted quality”</p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="2xl:pl-16">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Our team</h2>
                <p class="text-xl leading-relaxed text-gray-900 mt-9">We are a unique blend of creators, thinkers, and environmental enthusiasts. Our team brings together designers who see the world in textures and shades, strategists who thrive on solving complex problems, and developers who build realities from ideas.</p>
                <p class="mt-6 text-xl leading-relaxed text-gray-900"> We may be compact in size, but we're colossal in our capacity to deliver. Our agility allows us to personalize your experience and quickly adapt to your needs, while our expansive skills ensure we can handle any project with precision and speed.</p>
            </div>
        </div>
    </div>
</section>
