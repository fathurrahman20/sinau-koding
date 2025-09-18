import ArrowIcon from "@/assets/icons/arrow.svg?react";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="mx-[100px]">
      <div id="case-studies-header" className="flex my-auto gap-x-10 mb-[80px]">
        <h3 className="text-[40px] font-medium bg-primary rounded-[5px] px-[7px]">
          Case Studies
        </h3>
        <p className="max-w-[600px] text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="bg-secondary rounded-[45px] px-[60px] py-[70px]">
        <div className="flex">
          <CaseStudiesItem
            description="For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales."
          />
          <div className="inline-block h-[186px] min-h-[1em] w-0.5 self-stretch bg-white dark:bg-white/10 mx-16" />
          <CaseStudiesItem description="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic." />
          <div className="inline-block h-[186px] min-h-[1em] w-0.5 self-stretch bg-white dark:bg-white/10 mx-16" />
          <CaseStudiesItem description="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales." />
        </div>
      </div>
    </section>
  );
}

function CaseStudiesItem({ description }: { description: string }) {
  return (
    <div className="max-w-[286px]">
      <p className="mb-5 text-white">{description}</p>
      <div className="flex text-primary">
        <p>Learn more</p>
        <ArrowIcon className={`w-7 h-7 -rotate-45 cursor-pointer`} />
      </div>
    </div>
  );
}
