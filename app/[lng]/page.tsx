import Footer from "@/components/starter/Footer";
import Instruction from "@/components/starter/Instruction";
import Starter from "@/components/starter/Starter";

export default function Home({ params }: {params: { lng: string }}) {

  return (
    <div className="min-h-screen">
      <Starter params={params}/>
      <Instruction/>
      <Footer params={params}/>
    </div>
  );
}


