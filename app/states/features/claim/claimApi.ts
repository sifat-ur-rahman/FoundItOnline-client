import { baseApi } from "../../api/baseApi";
import { tagTypes } from "../../api/tagTypesList";

export const claimApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllClaim: builder.query({
      query: () => {
        return {
          url: `/claims`,
        };
      },
      providesTags: [tagTypes.claim],
    }),

    createClaim: builder.mutation({
      query: (info) => {
        return {
          url: `/claim`,
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: [tagTypes.claim],
    }),
    getClaimByUser: builder.query({
      query: (id) => {
        return {
          url: `/claims/${id}`,
        };
      },
      providesTags: [tagTypes.claim],
    }),
    UpdateClaimStatus: builder.mutation({
      query: (queryData) => {
        return {
          url: `/claim/${queryData.id}`,
          method: "PUT",
          body: queryData.claimStatus,
        };
      },
      invalidatesTags: [tagTypes.claim],
    }),
  }),
});

export const {
  useCreateClaimMutation,
  useGetClaimByUserQuery,
  useGetAllClaimQuery,
  useUpdateClaimStatusMutation,
} = claimApi;
