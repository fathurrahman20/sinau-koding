import { accordions } from "@/data/accordion";
import AccordionCard from "./accordion-card";

export default function WorkingProcess() {
  return (
    <section id="working-process" className="mx-[100px] mt-[140px]">
      <div id="case-studies-header" className="flex my-auto gap-x-10 mb-[80px]">
        <h3 className="text-[40px] font-medium bg-primary rounded-[5px] px-[7px]">
          Our Working Process
        </h3>
        <p className="max-w-[300px] text-lg">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {accordions.map((accordion, key) => (
        <AccordionCard
          key={key}
          number={accordion.number}
          title={accordion.title}
          content={accordion.content}
        />
      ))}
    </section>
  );
}
