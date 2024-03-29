import { createSlice } from "@reduxjs/toolkit";


// Hum do utility functions define karte hain, loadCartItems aur saveCartItems. loadCartItems local storage se cart items ko retrieve karta hai, aur saveCartItems cart items ko local storage mein save karta hai.
const loadCartItems = () => {
  const cartItems = localStorage.getItem('cartItems'); // Cart items ko local storage se retrieve karta hai
  return cartItems ? JSON.parse(cartItems) : []; // Agar cart items mojood hain, to unhe parse karke return karta hai, nahi to khali array return karta hai
};

const saveCartItems = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Cart items ko local storage mein save karta hai
};

// Hum Redux Toolkit ka createSlice ka upayog karke ek slice banate hain.
const cartSlice = createSlice({
  name: 'cart', // Slice ka naam 'cart' hai
  initialState: {
    cartItems: loadCartItems(), // Shuruaati state mein cartItems local storage se load kiye gaye hain
  },
  reducers: {
    addItems: (state, action) => { // Items ko cart mein add karne ke liye ek reducer define kiya gaya hai
      const newItem = action.payload; // Payload se naya item extract kiya jata hai
      const existingItemIndex = state.cartItems.findIndex(item => item.id === newItem.id); // Mojud item ka index dhundha jata hai
      if (existingItemIndex !== -1) { // Agar mojud item mil jata hai
        state.cartItems[existingItemIndex].quantity += newItem.quantity; // Uski quantity ko badhaya jata hai
      } else { // Agar mojud item nahi milta
        newItem.quantity = 1; // Quantity ko 1 se shuru kiya jata hai
        state.cartItems.push(newItem); // Naya item cart mein daala jata hai
      }
      saveCartItems(state.cartItems); // Updated cart items ko local storage mein save kiya jata hai
    },
    incrementQuantity: (state, action) => { // Item ki quantity ko badhane ke liye ek reducer define kiya gaya hai
      const itemId = action.payload; // Payload se item ka ID extract kiya jata hai
      const itemToUpdate = state.cartItems.find(item => item.id === itemId); // Update karne wala item dhundha jata hai
      if (itemToUpdate) { // Agar item mojood hai
        itemToUpdate.quantity++; // Uski quantity ko badhaya jata hai
        saveCartItems(state.cartItems); // Updated cart items ko local storage mein save kiya jata hai
      }
    },
    decrementQuantity: (state, action) => { // Item ki quantity ko ghatane ke liye ek reducer define kiya gaya hai
      const itemId = action.payload; // Payload se item ka ID extract kiya jata hai
      const itemToUpdate = state.cartItems.find(item => item.id === itemId); // Update karne wala item dhundha jata hai
      if (itemToUpdate && itemToUpdate.quantity > 1) { // Agar item mojood hai aur uski quantity 1 se zyada hai
        itemToUpdate.quantity--; // Uski quantity ko ghataya jata hai
        saveCartItems(state.cartItems); // Updated cart items ko local storage mein save kiya jata hai
      }
    },
    removeItem: (state, action) => { // Item ko cart se hataane ke liye ek reducer define kiya gaya hai
      const itemToRemove = action.payload; // Payload se item extract kiya jata hai
      state.cartItems = state.cartItems.filter(item => item.id !== itemToRemove); // Diye gaye item ko cart se hata diya jata hai
      saveCartItems(state.cartItems);
    },
  },
});

// Hum action creators aur reducer ko slice se export karte hain.
export const { addItems, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
/*

Steps from Initial to Final:

1.We define two utility functions loadCartItems and saveCartItems. loadCartItems retrieves cart items from local storage, and saveCartItems saves cart items to local storage.
2.We create a slice using createSlice from Redux Toolkit.
3.In the slice, we define the initial state with cartItems loaded from local storage.
4.We define reducers to handle adding items to the cart, incrementing and decrementing item quantities, and removing items from the cart.
5.Each reducer updates the cartItems array in the state accordingly and saves the updated cart items to local storage.
6.We export the action creators and the reducer from the slice.
*/