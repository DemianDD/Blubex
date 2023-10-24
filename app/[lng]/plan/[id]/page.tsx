import DetailedPlan from "@/components/DetailedPlan";
import { plans } from "@/data/data";

export default function PlanDetails({params}: any) {
  const selectedPlan = plans.find(Element => Element.id === params.id);

  return (
    <div className="flex min-h-screen pt-[60px] md:p-[25px] w-full flex-col justify-start md:justify-center">
      <DetailedPlan selectedPlan={selectedPlan}/>
    </div>
  );
}