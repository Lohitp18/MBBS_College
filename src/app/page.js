import ChairmanMessage from "@/components/ChairmanMessage";
import Departments from "@/components/Departments";
import Programs from "@/components/Program";
import Ourstory from "@/components/Ourstory";



export default function Home() {
  return (
    <>
      <Programs />
      <ChairmanMessage />
      <Departments />
      <Ourstory/>

    </>
  );
}
