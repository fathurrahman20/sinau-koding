import hero from "/assets/hero.svg";

export default function Hero() {
  return (
    <section id="hero" className="flex justify-between mx-[100px]">
      <div className="hero-description max-w-[531px]">
        <h2 className="text-6xl font-medium leading-[125%]">
          Navigating the digital landscape for success
        </h2>
        <p className="py-[35px] leading-[28px] max-w-[400px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="py-5 px-[35px] text-xl hover:cursor-pointer bg-secondary rounded-[14px] text-white">
          Book a consultation
        </button>
      </div>
      <div>
        <img src={hero} alt="hero image" className="ml-auto" />
      </div>
    </section>
  );
}
