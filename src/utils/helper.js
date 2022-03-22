import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const errorConsole = (error) => {
  console.log(error);
  console.log(error.response, "message");
  if (
    error.response.status == 401 &&
    error.response.statusText == "Unauthorized"
  ) {
    localStorage.removeItem("token");
    window.location.replace("/login");
    toast("Token Expired!!");
  }
};
export { errorConsole };
