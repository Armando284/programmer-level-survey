export function debounce(fn: Function, delay: number) {
  let timerId: ReturnType<typeof setTimeout>;
  return function (context: any, ...args: any) {
    console.log(context, ...args);

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(context, ...args);
    }, delay);
  }
}
