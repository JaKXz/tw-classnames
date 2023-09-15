import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function classNames(...args: ClassValue[]): string {
  return twMerge(clsx(...args));
}

export { twMerge };

export default classNames;
