import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../api/tagTypesList";

export const foundApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllfound: builder.query({
      query: () => {
        return {
          url: `/found-items`,
        };
      },
      providesTags: [tagTypes.found],
    }),

    createFound: builder.mutation({
      query: (info) => {
        return {
          url: `/found-items`,
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: [tagTypes.found],
    }),
    getFoundByUser: builder.query({
      query: (id) => {
        return {
          url: `/found-items/${id}`,
        };
      },
      providesTags: [tagTypes.found],
    }),
  }),
});

export const {
  useCreateFoundMutation,
  useGetFoundByUserQuery,
  useGetAllfoundQuery,
} = foundApi;
