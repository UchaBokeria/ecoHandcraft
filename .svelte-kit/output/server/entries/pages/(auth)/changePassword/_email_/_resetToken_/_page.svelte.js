import { c as create_ssr_component, s as subscribe, a as add_attribute } from "../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../chunks/stores.js";
import "../../../../../../chunks/http.js";
import { S as Signup } from "../../../../../../chunks/join.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let form = { newPassword: "", repeat: "" };
  $$unsubscribe_page();
  return `<section class="bg-white max-w-7xl m-auto"><div class="grid grid-cols-1 lg:grid-cols-2"><div class="flex flex-start justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-20"><div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto"><h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl" data-svelte-h="svelte-mpaeik">Create new password</h2> <form method="POST" class="mt-8"><div class="space-y-5"><div><label for="" class="text-base font-medium text-gray-900" data-svelte-h="svelte-12lsimr">New password</label> <div class="mt-2.5"><input type="password" name="" id="" placeholder="Enter new password" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"${add_attribute("value", form.newPassword, 0)}></div></div> <div><label for="" class="text-base font-medium text-gray-900" data-svelte-h="svelte-1gvbhy">Repeat password</label> <div class="mt-2.5"><input type="password" name="" id="" placeholder="Repeat password" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"${add_attribute("value", form.repeat, 0)}></div></div> <div><button type="button" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700" data-svelte-h="svelte-pplwpj">Reset password</button></div></div></form></div></div> <div class="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8" data-svelte-h="svelte-14yh2kw"><div><img class="w-full mx-auto"${add_attribute("src", Signup, 0)} alt=""> <div class="w-full max-w-md mx-auto xl:max-w-xl"><h3 class="text-2xl font-bold text-center text-black">Crafted with Love, Powered by Nature</h3> <p class="leading-relaxed text-center text-gray-500 mt-2.5">Welcome back to our sustainable community! Sign in to continue exploring our eco-friendly collection, manage your orders, and stay updated with our latest offerings and initiatives..</p> <div class="flex items-center justify-center mt-10 space-x-3"><div class="bg-orange-500 rounded-full w-20 h-1.5"></div> <div class="bg-gray-200 rounded-full w-12 h-1.5"></div> <div class="bg-gray-200 rounded-full w-12 h-1.5"></div></div></div></div></div></div></section>`;
});
export {
  Page as default
};