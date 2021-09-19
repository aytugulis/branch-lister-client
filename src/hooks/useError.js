import { useEffect } from "react";
import { toast } from "react-toastify";

export const useError = (error) => {
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);
};
