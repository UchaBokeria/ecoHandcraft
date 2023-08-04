async function handle({ event, resolve }) {
  return await resolve(event);
}
export {
  handle
};
