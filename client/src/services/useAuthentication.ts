import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  logIn as logInFunction,
  signUp as signUpFunction,
} from "./userAPI";

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

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: logInFunction,
    onSuccess: () => {
      toast.success("welcome");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLoggingIn };
};

export const useCurrentUser = () => {
  const {
    data: currentUserData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: 0,
  });

  return { currentUserData, isLoading, refetch };
};
