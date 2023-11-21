import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function classNames(...args: ClassValue[]): string {
    return twMerge(clsx(...args));
}

export function withDefaults(
    defaults: ClassValue,
    ...args: ClassValue[]
): string {
    return twMerge(clsx(...args), clsx(defaults));
}

export {twMerge};

export default classNames;
