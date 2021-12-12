/**
 * Add a listener to the dom for the specified key.
 * @param key The key (event.key) to listen for.
 * @param handler The callback to trigger when the key is detected.
 * @returns A cleanup function that can unbind the listener.
 */
export function addKeyListener(
  key: string,
  handler: (event: KeyboardEvent) => void
): () => void {
  document.addEventListener("keydown", (event) =>
    event.key === key ? handler(event) : void 0
  );
  return () => document.removeEventListener("keydown", handler);
}
