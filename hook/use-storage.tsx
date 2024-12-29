import { useEffect, useState } from "react";

const UseLocalStorage = (name: string) => {
  const [nameOfCookie, setNameOfCookie] = useState("");

  useEffect(() => {
    const cookie = localStorage.getItem(name);
    setNameOfCookie(cookie as string);
  }, [name]);

  return { nameOfCookie };
};

export default UseLocalStorage;
