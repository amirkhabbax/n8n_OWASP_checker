import { InjectionToken } from "@angular/core";

export const BASE_URL = new InjectionToken<string>("Base URL");

export function provideBaseUrl(value: string) {
  return { provide: BASE_URL, useValue: value };
}