import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function GuestLayyout() {
  const { currentUser, userToken } = useStateContext();

  if (userToken) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />

        <Outlet />
      </div>
    </div>
  );
}

export default GuestLayyout;
