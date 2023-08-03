<script>
	import { page } from "$app/stores"
	import { http } from "$lib/shared/http"
    import Signup from "$lib/assets/join.svg"

    let form = { newPassword: '', repeat: '' }

    const changePassword = async () => {
        if(form.newPassword != form.repeat) return alert('Please repeat password correctly')

        const { email, resetToken } = $page.params
        const user = await http.post(`/api/auth/changePassword/${email}/${resetToken}`, form)

        if(user.status == 403)
            alert('Please enter correct email')
        else if(user?.result?.token)
            console.log('Reset link has been sent')
    }
</script>

<section class="bg-white max-w-7xl m-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex flex-start justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-20">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">Create new password</h2>
                <form method="POST" class="mt-8">
                    <div class="space-y-5">
                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> New password </label>
                            <div class="mt-2.5">
                                <input
                                    bind:value={form.newPassword}
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Enter new password"
                                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Repeat password </label>
                            <div class="mt-2.5">
                                <input
                                    bind:value={form.repeat}
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Repeat password"
                                    class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <button on:click={changePassword} type="button" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">Reset password</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
                <img class="w-full mx-auto" src={Signup} alt="" />

                <div class="w-full max-w-md mx-auto xl:max-w-xl">
                    <h3 class="text-2xl font-bold text-center text-black">Crafted with Love, Powered by Nature</h3>
                    <p class="leading-relaxed text-center text-gray-500 mt-2.5">Welcome back to our sustainable community! Sign in to continue exploring our eco-friendly collection, manage your orders, and stay updated with our latest offerings and initiatives..</p>

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
