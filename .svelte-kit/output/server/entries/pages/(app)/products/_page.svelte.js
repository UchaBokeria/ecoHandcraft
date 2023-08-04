import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, i as is_promise, n as noop, d as each } from "../../../../chunks/ssr.js";
import { h as http } from "../../../../chunks/http.js";
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `  <div class="overflow-hidden bg-white rounded shadow"><div class="p-5"><div class="relative"><a${add_attribute("href", `/products/${product.id}`, 0)} title="" class="block aspect-w-4 aspect-h-3"><img class="object-cover w-full h-full"${add_attribute("src", product.icon, 0)}${add_attribute("alt", product.title, 0)}></a> <div class="absolute top-4 left-4"><span class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-[#fefbfb] rounded-full text-1xl leading-tight sm:text-xl lg:text-xl">$${escape(product.price)}</span></div></div> <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">${escape(product?.category?.name || "")}</span> <p class="mt-5 text-2xl font-semibold"><a${add_attribute("href", `/products/${product.id}`, 0)} title="" class="text-black">${escape(product.title)}</a></p> <p class="mt-4 text-base text-gray-600 font-medium truncate">${escape(product.description)}</p> <a${add_attribute("href", `/products/${product.id}`, 0)} title="" class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">See more
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a></div></div>`;
});
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-center" data-svelte-h="svelte-canl53"><div role="status"><svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg> <span class="sr-only">Loading...</span></div></div>`;
});
const InfiniteScroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { loading = false } = $$props;
  let { callback = () => {
  } } = $$props;
  let { name = "" } = $$props;
  let loadinging = false;
  let { stop = false } = $$props;
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.callback === void 0 && $$bindings.callback && callback !== void 0)
    $$bindings.callback(callback);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.stop === void 0 && $$bindings.stop && stop !== void 0)
    $$bindings.stop(stop);
  return `<div${add_attribute("class", `infinite-scroll infinite-scroll-${name} w-full min-h-screen relative`, 0)}>${loading && loadinging ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : `${slots.default ? slots.default({}) : ``}`} <div${add_attribute("class", `infinite-scroll-anchor infinite-scroll-anchor-${name} absolute bottom-0`, 0)}></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { stop = false } = $$props;
  let { observable = data.products } = $$props;
  const fetchProducts = async () => {
    data.page = data.page + 1;
    const { result } = await http.get(`api/products`, { page: data.page });
    if (!result.length)
      stop = true;
    observable = [...observable, ...result];
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.stop === void 0 && $$bindings.stop && stop !== void 0)
    $$bindings.stop(stop);
  if ($$props.observable === void 0 && $$bindings.observable && observable !== void 0)
    $$bindings.observable(observable);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<section class="py-10 bg-gray-50 sm:py-16 lg:py-8"><div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">${validate_component(InfiniteScroll, "InfiniteScroll").$$render(
      $$result,
      { callback: fetchProducts, stop },
      {
        stop: ($$value) => {
          stop = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">${function(__value) {
            if (is_promise(__value)) {
              __value.then(null, noop);
              return ` ${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})} `;
            }
            return function(products) {
              return ` ${!products?.length ? `<h3 class="font-bold leading-tight sm:text-3xl lg:text-3xl" data-svelte-h="svelte-1nqxzjp">Products not found</h3>` : `${each(products, (product) => {
                return `${validate_component(Product, "Product").$$render($$result, { product }, {}, {})}`;
              })}`} `;
            }(__value);
          }(observable)}</div>`;
        }
      }
    )}</div></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
