The objective is to support the cart functionality on the client. This will require you to show the current cart count in the header, display the cart contents in a popup, and have a button to add item to the cart. (These components already exist they just aren't wired up).

The TypeScript type for a `Cart` is in the `types.ts` file.

You'll need to create a new `CartContext` client component and add it to the `layout.tsx` file.

Here an example React context:

```tsx
import React, { createContext, useState } from "react";

const useCounterState = () => useState<number>(0);

export const CounterContext = createContext<ReturnType<
  typeof useCounterState
> | null>(null);
```

And an example provider component:

```ts
const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useCountState();

  return (
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  );
};
```

As well as a custom hook to access the context:

```ts
export const useCart = () => {
  const cart = React.useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};
```

You'll need to alter these components:

- The `Header` component to display the cart count
- The `CartPopup` component to display the contents of the cart
- The `AddToCart` component to add an item to the cart

Hint:

- The output of the `addToCartAction` and `clearCartAction` are the updated `Cart` object
