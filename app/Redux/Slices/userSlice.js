const USERS_URL = '/auth';
import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
endpoints: (builder) => ({
    login: builder.mutation({
    query: (data) => ({
        url: USERS_URL + '/login',
        method: 'POST',
        body: data,
        credentials: 'include'
    }),
    }),
    register: builder.mutation({
    query: (data) => ({
        url: USERS_URL + '/signup',
        method: 'POST',
        body: data,
        credentials: 'include'
    }),
    
    }),
    logout: builder.mutation({
    query: () => ({
        url: USERS_URL + '/logout',
        method: 'POST',
        credentials: 'include'
    }),
    })
}),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = userApiSlice;
