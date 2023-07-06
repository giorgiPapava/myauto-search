import { type ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];
}

export const createQueryString = (searchParamsObject: Record<string, any>) => {
  const params = new URLSearchParams();
  Object.entries(searchParamsObject).forEach(([key, value]) => {
    params.set(key, value);
  });

  return params.toString();
};
