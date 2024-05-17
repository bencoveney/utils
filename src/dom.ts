/**
 * Add a listener to the DOM for the specified key.
 * @param key The key (event.key) to listen for.
 * @param handler The callback to trigger when the key is detected.
 * @returns A cleanup function that will unbind the listener. This should be called to prevent memory leaks.
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
