const inputValidate = {
  name: {
    required: "Name is required",
    minLength: { value: 1, message: "Name must be at least 6 character." },
  },
  detail: {
    // required: "Detail is required",
    // minLength: { value: 1, message: "Detail must be at least 10 character." },
  },
  price: {
    required: "Price is required",
    pattern: {
      value: /[0-9]/,
      message: "Please Enter number Only",
    },
  },
  amount: {
    required: "Amount is required",
    min:{
      value: 1,
      message: "At least 1",
    },
    pattern: {
      value: /[0-9]/,
      message: "Please Enter number Only",
    },
  },
  dropDown: {
    required: "Please Select",
  },
};

export default inputValidate;
