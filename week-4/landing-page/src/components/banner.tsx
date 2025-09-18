import banner from "/assets/banner.svg";

export default function Banner() {
  return (
    <section
      id="banner"
      className="flex justify-between bg-tertiary rounded-[45px] mt-32 mb-[140px] mx-[100px] relative">
      <div className="max-w-[500px] py-[60px] pl-[60px]">
        <h3 className="text-[30px] font-medium">Let's make things happen</h3>
        <p className="text-[18px] my-[26px]">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="py-[20px] px-[35px] rounded-[14px] bg-secondary text-white hover:cursor-pointer">
          Get your free proposal
        </button>
      </div>
      <div className="absolute right-0 -top-5">
        <img src={banner} alt="" />
      </div>
    </section>
  );
}
