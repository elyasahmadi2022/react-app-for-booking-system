import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createHotel,
  deleteHotel,
  editHotel,
  getHotel,
  getHotels,
} from "../../services/apiHotels";
import { Bounce, toast } from "react-toastify";

export function useHotels() {
  const { data, isLoading } = useQuery({
    queryFn: getHotels,
    queryKey: ["hotels"],
  });

  return { data, isLoading };
}
export function useHotel(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["hotel", id],
    queryFn: () => getHotel(id),
  });
  if (error) throw new Error(error);
  return { data, isLoading };
}
export function useCreateHotel() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createHotel,
    mutationKey: ["newHotel"],
    onError: (error) => {
      toast.error(error.message || "Error while creating hotel", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    },
    onSuccess: async () => {
      toast.success("Successfully created hotel", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      await queryClient.invalidateQueries({
        queryKey: ["hotels"],
        exact: true,
      });
    },
  });
  return { mutate, isPending };
}

export function useDeleteHotel() {
  const clientQuery = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteHotel,
    mutationKey: ["delete"],
    onError: () => {
      toast.error("Error while Deleting hotel", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    },
    onSuccess: async () => {
      toast.success("Successfully Deleted hotel", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      await clientQuery.invalidateQueries({
        queryKey: ["hotels"],
        exact: true,
      });
    },
  });
  return { isDeleting, mutate };
}

export function useEditHotel() {
  const clientQuery = useQueryClient()
  const { mutate, isLoading, error } = useMutation({
    mutationFn:  editHotel,
    mutationKey: ["edithotel"],
    onError: () => {
      toast.error("Error while Deleting hotel", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    },
    onSuccess: async () => {
      toast.success("Successfully Deleted hotel", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      await clientQuery.invalidateQueries({
        queryKey: ["edithotel"],
        exact: true,
      });
    },
  });
  console.log(error)

  return { mutate, isLoading };
}
