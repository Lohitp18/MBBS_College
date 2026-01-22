import ChairmanMessage from "@/components/ChairmanMessage";
import Departments from "@/components/Departments";
import Programs from "@/components/Program";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Programs />
      <ChairmanMessage />
      <Departments />
    </>
  );
}
