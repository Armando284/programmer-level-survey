import { ThemePalette } from "@angular/material/core";
import { level } from "../interfaces/types";

export function debounce(fn: Function, delay: number) {
  let timerId: ReturnType<typeof setTimeout>;
  return function (context: any, ...args: any) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(context, ...args);
    }, delay);
  }
}

export function tagColor(level: level): ThemePalette {
  const colors = {
    'beginner': undefined,
    'junior': 'primary',
    'semi-senior': 'accent',
    'senior': 'warn',
  };
  return colors[level] as ThemePalette;
}
