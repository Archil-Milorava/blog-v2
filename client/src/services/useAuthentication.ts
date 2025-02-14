import { useMutation } from "@tanstack/react-query";
import { signUp as signUpFunction } from "./userAPI";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate: signUp, isPending: isSigningUp } = useMutation({
    mutationFn: signUpFunction,
    onSuccess: () => {
      toast.success("Please log in");
      navigate("/login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signUp, isSigningUp };
};
