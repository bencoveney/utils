/**
 * Get the query parameter with the specified name, otherwise null.
 * @param name The name of the query parameter to get.
 * @returns The query parameter value if found, otherwise null.
 */
export function getQueryParam(name: string): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

/**
 * Get the query parameter with the specified name, where:
 * - 1 is treated as true.
 * - 0 is treated as false.
 * - Any other value is treated as null.
 * @param name The name of the query parameter to get.
 * @returns true if the value is 1, false if the value is 0, otherwise null.
 */
export function getQueryBool(name: string): boolean | null {
  const result = getQueryParam(name);
  if (result === "1") {
    return true;
  }
  if (result === "0") {
    return false;
  }
  return null;
}

/**
 * Sets a query parameter with the specified name and value.
 * @param name The name of the query parameter to set.
 * @param value The value to set in the query parameter.
 */
export function setQueryParam(name: string, value: string): void {
  const params = new URLSearchParams(window.location.search);
  params.set(name, value);
  var newPathname = window.location.pathname + "?" + params.toString();
  history.replaceState(null, "", newPathname);
}

/**
 * Sets a query parameter with the specified name and boolean value, where:
 * - true will be set as 1.
 * - false will be set as 1.
 * @param name The name of the query parameter to set.
 * @param value The value to set in the query parameter.
 */
export function setQueryBool(name: string, value: boolean): void {
  return setQueryParam(name, value ? "1" : "0");
}
