'use client'
import { useEffect } from "react";
import HarshalFlix from "./harshalflix/page";

const page = () => {
  useEffect(() => {
    alert("Access movies using your Atmiya University gmail only! Example: 156121⁕⁕⁕⁕@atmiyauni.edu.in");
  }, []);
  return (
    <>
      <HarshalFlix />
    </>
  )
}

export default page;