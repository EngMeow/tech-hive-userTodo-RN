    const PROFILE_URL = '/users';
    import { apiSlice } from './apiSlice';

    export const ProfileApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        
        getMyProfile: builder.mutation({
        query: () => ({
            url: PROFILE_URL + '/profile',
            method: 'GET',
            credentials: 'include'
        }),
        }),

        getAllProfiles: builder.mutation({
        query: () => ({
            url: PROFILE_URL ,
            method: 'GET',
            credentials: 'include'
        }),
        }),

        getSpecProfile: builder.mutation({
        query: (id) => ({
            url: PROFILE_URL + `${id}`,
            method: 'GET',
            credentials: 'include'
        }),
        }),

        editProfile: builder.mutation({
        query: (data) => ({
            url: PROFILE_URL + 'profile',
            method: 'PUT',
            body: data,
            credentials: 'include'
        }),
        }),

        deleteProfile: builder.mutation({
        query: (id) => ({
            url: PROFILE_URL + `${id}`,
            method: 'DELETE',
            credentials: 'include'
        }),
        }),

    }),
    });

    export const {
    useGetMyProfileMutation,
    useGetSpecProfileMutation,
    useEditProfileMutation,
    useDeleteProfileMutation
    } = ProfileApiSlice;
