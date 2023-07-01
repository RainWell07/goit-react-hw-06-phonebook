import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.items.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;

export const getContacts = state => state.contacts.items;

export const contactsReducer = contactSlice.reducer;