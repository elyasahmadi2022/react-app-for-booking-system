import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getlogin } from "../../services/apiAuth";
import { Bounce } from "react-toastify";
export const useLogin = () => {
  const {
    mutate: login,
    isError,
    isPending,
  } = useMutation({
    mutationFn: getlogin,
    mutationKey: ['login'],
    onError: () => {
      toast.error("Error while Login to you account", {
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
      toast.success("Successfully Logined in your account", {
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
  });
  return { login, isPending };
};
