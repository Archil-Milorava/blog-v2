import { useMutation, useQueryClient } from "@tanstack/react-query";
import BackToTop from "./BackToTop";
import { logOut } from "../../services/userAPI";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const FooterMain = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      toast.success("Logged out successfully!");
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to log out");
    },
  });

  function handleLogout() {
    mutate();
  }

  return (
    <footer className="my-2 w-full h-[5rem] flex items-center justify-between">
      <BackToTop />
      <button
        className="hover:underline"
        type="button"
        onClick={handleLogout} // Fixed here
      >
        Logout
      </button>
    </footer>
  );
};

export default FooterMain;
