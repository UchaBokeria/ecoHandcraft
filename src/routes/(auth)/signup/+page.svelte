<script>
    import Signup from "$lib/assets/join.svg"
	import { http } from "$lib/shared/http"

    let form = { email: '', passcode: '', repeat: '', fullname: '', agreed: false }

    const signup = async () => {
        if(!Boolean(form.agreed)) return console.log(`Please agree terms and conditions to continue`)
        const user = await http.post('api/auth/signup', {...form, email: form.email.toLowerCase()})

        if(user.status == 403) 
            alert('Email is already in use')

        else if(user.status == 500) 
            alert('Something went wrong, please check entered email')

        else if(user?.result?.token) 
            console.log('');
    }
</script>

<section class="bg-white max-w-7xl m-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 ">
        <div class="flex flex-start px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-20">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
                <p class="mt-2 text-base text-gray-600">Already have an account? <a href="/signin" title="" class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Sign in</a></p>

                <form  method="POST" class="mt-8">
                    <div class="space-y-5">
                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Full Name </label>
                            <div class="mt-2.5">
                                <input
                                    bind:value={form.fullname}
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter your full name"
                                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                            <div class="mt-2.5">
                                <input
                                    bind:value={form.email}
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter email to get started"
                                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Password </label>
                            <div class="mt-2.5">
                                <input
                                    bind:value={form.passcode}
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Enter your password"
                                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input bind:value={form.agreed} type="checkbox" name="agree" id="agree" class="w-5 h-5 text-blue-600 bg-white border-gray-200 rounded" />

                            <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
                                I agree to Postcraft’s <a href="/terms" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</a> and <a href="/terms" title="" class="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a>
                            </label>
                        </div>

                        <div>
                            <button on:click={signup} type="button" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                Create free account
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
                <img class="w-full mx-auto" src={Signup} alt="" />

                <div class="w-full max-w-md mx-auto xl:max-w-xl">
                    <h3 class="text-2xl font-bold text-center text-black">Designing Green, Living Clean</h3>
                    <p class="leading-relaxed text-center text-gray-500 mt-2.5">Become a part of our journey towards a more sustainable future. Let's start making a difference, together.</p>

                    <div class="flex items-center justify-center mt-10 space-x-3">
                        <div class="bg-orange-500 rounded-full w-20 h-1.5"></div>

                        <div class="bg-gray-200 rounded-full w-12 h-1.5"></div>

                        <div class="bg-gray-200 rounded-full w-12 h-1.5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
