import { apiSlice } from "./apiSlice.js";
const USERS_URL = "/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Login
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    //Register
    register: builder.mutation({
      query: (data) => ({
        url: "https://exp-server-mikj.onrender.com/api/users/",
        method: "POST",
        body: data,
      }),
    }),
    //Logout
    logout: builder.mutation({
      query: () => ({
        url: "https://exp-server-mikj.onrender.com/api/users/logout",
        method: "POST",
      }),
    }),
    //Update
    update: builder.mutation({
      query: (data) => ({
        url: "https://exp-server-mikj.onrender.com/api/users/update",
        method: "PUT",
        body: data,
      }),
    }),
    //Add Income
    addincome: builder.mutation({
      query: (data) => ({
        url: "https://exp-server-mikj.onrender.com/api/users/addincome",
        method: "POST",
        body: data,
      }),
    }),
    //get Income
    getincome: builder.mutation({
      query: (data) => ({
        url: "https://exp-server-mikj.onrender.com/api/users/get-income",
        method: "GET",
      }),
    }),
    //Delete Income
    deleteincome: builder.mutation({
      query: (id) => ({
        url: `https://exp-server-mikj.onrender.com/api/users/delete-income/${id}`,
        method: "DELETE",
      }),
    }),
    //Add Expense
    addexpense: builder.mutation({
      query: (data) => ({
        url: "https://exp-server-mikj.onrender.com/api/users/addexpense",
        method: "POST",
        body: data,
      }),
    }),
    //get Expense
    getexpense: builder.mutation({
      query: (data) => ({
        url:  "https://exp-server-mikj.onrender.com/api/users/get-expense",
        method: "GET",
      }),
    }),
    //Delete expense
    deleteexpense: builder.mutation({
      query: (id) => ({
        url:  `https://exp-server-mikj.onrender.com/api/users/delete-expense/${id}`,
        method: "DELETE",
      }),
    }),
    //get All Transactions
    alltransaction: builder.mutation({
      query: (data) => ({
        url: "https://exp-server-mikj.onrender.com/api/users/alltransaction",
        method: "GET",
      }),
    }),
    //get All Income Ampunt
    incomeAmount: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/allincome`,
        method: "GET",
      }),
    }),
    //get All expense Ampunt
    expenseAmount: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/allexpense`,
        method: "GET",
      }),
    }),
    //get Total Ampunt
    totalAmount: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/total`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useUpdateMutation,
  useAddincomeMutation,
  useGetincomeMutation,
  useDeleteincomeMutation,
  useAddexpenseMutation,
  useDeleteexpenseMutation,
  useGetexpenseMutation,
  useAlltransactionMutation,
  useExpenseAmountMutation,
  useIncomeAmountMutation,
  useTotalAmountMutation,
} = userApiSlice;
