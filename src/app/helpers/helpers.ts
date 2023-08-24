export function debounce(fn: Function, delay: number) {
  let timerId: ReturnType<typeof setTimeout>;
  return function (context: any, ...args: any) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(context, ...args);
    }, delay);
  }
}
