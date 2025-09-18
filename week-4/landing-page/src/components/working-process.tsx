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

      <AccordionCard number="01" title="Consultation">
        During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.
      </AccordionCard>
      <AccordionCard number="02" title="Research and Strategy Development">
        Based on the consultation, we will conduct in-depth market research and
        competitive analysis. From these insights, we will develop a
        comprehensive, data-driven strategy tailored to achieve your specific
        business objectives.
      </AccordionCard>
      <AccordionCard number="03" title="Implementation">
        Our expert team will execute the approved strategy, launching campaigns
        across the most effective channels. This phase covers all technical and
        creative aspects, from content creation to ad management, to engage your
        target audience.
      </AccordionCard>
      <AccordionCard number="04" title="Monitoring and Optimization">
        We continuously monitor the performance of all campaigns using key
        metrics and real-time data. This allows us to make swift and precise
        optimizations, ensuring every aspect of the campaign runs efficiently to
        maximize your return on investment (ROI).
      </AccordionCard>
      <AccordionCard number="05" title="Reporting and Communication">
        You will receive transparent and easy-to-understand performance reports
        on a regular basis. We maintain open lines of communication to discuss
        results, findings, and next steps, ensuring you are always informed of
        our progress.
      </AccordionCard>
      <AccordionCard number="06" title="Continual Improvement">
        We focus on long-term growth by analyzing data and trends over time.
        These insights are used to continually refine our strategy, adapt to
        market changes, and identify new opportunities for your business's
        advancement.
      </AccordionCard>
    </section>
  );
}
