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
        url: `${USERS_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
    //Logout
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    //Update
    update: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/update`,
        method: "PUT",
        body: data,
      }),
    }),
    //Add Income
    addincome: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/addincome`,
        method: "POST",
        body: data,
      }),
    }),
    //get Income
    getincome: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/get-income`,
        method: "GET",
      }),
    }),
    //Delete Income
    deleteincome: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/delete-income/${id}`,
        method: "DELETE",
      }),
    }),
    //Add Expense
    addexpense: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/addexpense`,
        method: "POST",
        body: data,
      }),
    }),
    //get Expense
    getexpense: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/get-expense`,
        method: "GET",
      }),
    }),
    //Delete expense
    deleteexpense: builder.mutation({
      query: (id) => ({
        url: `${USERS_URL}/delete-expense/${id}`,
        method: "DELETE",
      }),
    }),
    //get All Transactions
    alltransaction: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/alltransaction`,
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
