import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    fname: "John",
    lname: "Carter",
    number: "+1 8015212070",
    status: "Active",
    address: "1327 Morgan Street, Alaska, Nikolski-84111",
    avatar:
      "https://images.unsplash.com/photo-1579987102269-ac45dafda12c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80",
  },
  {
    id: "2",
    fname: "Sam",
    lname: "Willson",
    number: "+1 4806073388",
    status: "Active",
    address: "15205 North Kierland Blvd. Suite 100, Scottsdale,AZ-85254",
    avatar:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
  },
  {
    id: "3",
    fname: "Victor",
    lname: "Miller",
    number: "+03 4531416234",
    status: "Active",
    address: "8F, 5-24-2, Sendagaya, Shibuya-ku, Tokyo-151-8580",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "4",
    fname: "Maria",
    lname: "Jones",
    number: "+03 4529314162",
    status: "Active",
    address: "1876 Grant 9 Sheridan, Arkansas(AR), 72150",
    avatar:
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  },
];
const reducerSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    createContact: (state, action) => {
      state.push(action.payload);
    },
    editContact: (state, action) => {
      const { id, fname, lname } = action.payload;
      const existingContact = state.find((contact) => contact.id === id);
      if (existingContact) {
        existingContact.fname = fname;
        existingContact.lname = lname;
      }
    },
    deleteContact: (state, action) => {
      const { id } = action.payload;
      const existingContact = state.find((contact) => contact.id === id);
      if (existingContact) {
        return state.filter((contact) => contact.id !== id);
      }
    },
  },
});

export const { createContact, deleteContact, editContact } =
  reducerSlice.actions;
export default reducerSlice.reducer;
