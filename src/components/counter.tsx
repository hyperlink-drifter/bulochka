import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$<{ initial?: number }>(({ initial = 0 }) => {
  const count = useSignal(initial);

  return (
    <>
      <p>Count: {count.value}</p>
      <button onClick$={() => count.value++}>Increment</button>
    </>
  );
});
