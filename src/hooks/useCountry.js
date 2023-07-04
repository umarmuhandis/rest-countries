import { useState, useEffect } from "react";
import { BASE_URL } from "../constant";

const fetchCountry = async (name) => {
  const response = await fetch(`${BASE_URL}/name/${name}`);
  if (!response.ok) throw new Error("Something went wrong");
  return response.json();
};

export const useCountry = (name) => {
  const [countryList, setCountryList] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) return;

    setStatus("pending");
    fetchCountry(name)
      .then((data) => {
        setStatus("resolved");
        setCountryList(data.slice(0, 25)); // TODO: remove slice once pagination is implemented
      })
      .catch((err) => {
        setStatus("rejected");
        setError(err);
        console.error(err.message);
      });
  }, [name]);

  return {
    countryList,
    isLoading: status === "pending",
    isError: status === "rejected",
    error,
  };
};
