// importation

import {
  FAIL_CONTACT,
  LOAD_CONTACT,
  ONE_CONTACT,
  SUCC_CONTACT,
} from "../ActionTypes/contact";

// initialState
const initialState = {
  listContacts: [],
  errors: null,
  load: false,
  contactToGet: {},
};

// pure function

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, load: true };
    case SUCC_CONTACT:
      return { ...state, load: false, listContacts: payload.listContacts };
    case FAIL_CONTACT:
      return { ...state, load: false, errors: payload };
    case ONE_CONTACT:
      return { ...state, load: false, contactToGet: payload.contactToGet };
    default:
      return state;
  }
};


export default contactReducer;