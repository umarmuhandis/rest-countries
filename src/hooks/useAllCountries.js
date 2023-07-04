import { useEffect, useState } from "react";
import { BASE_URL } from "../constant";

const fetchAllCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  if (!response.ok) throw new Error("Something went wrong");
  return response.json();
};

export const useAllCountries = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("pending");
    fetchAllCountries()
      .then((data) => {
        setStatus("resolved");
        setAllCountries(data);
      })
      .catch((err) => {
        setStatus("rejected");
        setError(err);
        console.error(err.message);
      });
  }, []);

  return {
    allCountries,
    isLoading: status === "pending",
    isError: status === "rejected",
    error,
  };
};
