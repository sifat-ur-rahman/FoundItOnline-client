import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../api/tagTypesList";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => {
        return {
          url: `/my-profile`,
        };
      },
      providesTags: [tagTypes.user],
    }),
    getAllUsers: builder.query({
      query: () => {
        return {
          url: `/all-users`,
        };
      },
      providesTags: [tagTypes.user],
    }),

    editProfile: builder.mutation({
      query: (info) => {
        return {
          url: `/my-profile`,
          method: "PUT",
          body: info,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    UpdateUserStatus: builder.mutation({
      query: (queryData) => {
        return {
          url: `/user/${queryData.id}/status`,
          method: "PUT",
          body: queryData.userStatus,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useEditProfileMutation,
  useUpdateUserStatusMutation,
  useGetAllUsersQuery,
} = userApi;
