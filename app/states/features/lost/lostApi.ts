import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../api/tagTypesList";

export const lostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLost: builder.query({
      query: () => {
        return {
          url: `/lost-items`,
        };
      },
      providesTags: [tagTypes.lost],
    }),

    createLost: builder.mutation({
      query: (info) => {
        return {
          url: `/lost-items`,
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: [tagTypes.lost],
    }),
    getLostByUser: builder.query({
      query: (id) => {
        return {
          url: `/lost-items/${id.userId}`,
        };
      },
      providesTags: [tagTypes.found],
    }),
  }),
});

export const {
  useCreateLostMutation,
  useGetLostByUserQuery,
  useGetAllLostQuery,
} = lostApi;
