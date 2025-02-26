import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../services/useAuthentication";
import { logOut } from "../../services/userAPI";
import BackToTop from "./BackToTop";

const FooterMain = () => {
  const navigate = useNavigate();
  const { refetch } = useCurrentUser();

  const { mutate } = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      toast.success("Logged out successfully!");
     
   
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
