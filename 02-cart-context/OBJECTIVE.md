The objective is to initialize the cart context with the current contents of the cart from the server. This will require you to add a new `CartContext` component and add it to the `layout.tsx` file.

The `layout` component already gets the current contents of the cart. All you need to do is connect it to the new `CartContext` component.

It's worth noting that properties passed to client components are serialized across the server/client boundary.
