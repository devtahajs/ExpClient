//Api slice As Async thunk or (RTK QUERY)
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});

//We are using the createApi function from Redux Toolkit to create our API slice instead of createSlice, because it includes the middleware that we need to make requests to our server. We are passing in a baseQuery object that will be used to make our requests. We are also passing in an endpoints object that will hold all of our endpoints.
