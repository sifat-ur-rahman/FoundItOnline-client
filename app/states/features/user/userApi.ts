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
      query: (data) => {
        return {
          url: `/users/${data.id}/status`,
          method: "PUT",
          body: data.info,
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
} = userApi;
