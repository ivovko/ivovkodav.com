import { getComments } from "./server-actions/getComments";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { submitComment } from "./server-actions/submitComment";

const queryKeys = {
  useFeedbackList: ["feedbackList"],
};

const queryClient = new QueryClient();

export const useFeedbackList = (): Feedback[] => {
  const { status, data, error } = useQuery(
    {
      queryKey: queryKeys.useFeedbackList,
      queryFn: () => {
        return getComments();
      },
    },
    queryClient
  );

  switch (status) {
    case "pending":
      return [];
    case "success":
      return data;
    case "error":
      throw Error(`Fetching feedback list failed: ${error}`);
  }
};

export const useAddFeedback = () => {
  return useMutation(
    {
      mutationFn: (data: CreateFeedback) => {
        return submitComment(data);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKeys.useFeedbackList });
      },
    },
    queryClient
  );
};
