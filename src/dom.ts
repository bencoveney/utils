export function addKeyListener(
  key: string,
  handler: (event: KeyboardEvent) => void
): Function {
  document.addEventListener("keydown", (event) =>
    event.key === key ? handler(event) : void 0
  );
  return () => document.removeEventListener("keydown", handler);
}

// document.addEventListener("keydown", ({ key }) => console.log(key));
