import ArrowIcon from "@/assets/icons/arrow.svg?react";

interface CardServiceProps {
  title: string;
  titleBgColor: "primary" | "secondary" | "tertiary";
  bgColor: "primary" | "secondary" | "tertiary";
  arrowColor?: "primary" | "secondary";
  arrowBgColor?: "tertiary" | "secondary";
  image: string;
}

export default function CardService({
  title,
  titleBgColor,
  bgColor,
  arrowColor = "primary",
  arrowBgColor = "secondary",
  image,
}: CardServiceProps) {
  return (
    <div
      className={`card-service lg:max-w-[48%] lg:justify-between xl:min-w-[48%] bg-${bgColor} border-1 rounded-[45px] flex p-[50px] shadow-bottom gap-x-[69px]`}>
      <div className="flex flex-col justify-between">
        <p
          className={`px-[2px] bg-${titleBgColor} rounded-[2px] text-xl font-medium`}>
          {title}
        </p>
        <div className="flex gap-x-[14px]">
          <ArrowIcon
            className={`w-7 h-7 bg-${arrowBgColor} rounded-full text-${arrowColor} -rotate-45 cursor-pointer`}
          />
          <p className={`my-auto text-lg text-${arrowBgColor}`}>Learn more</p>
        </div>
      </div>
      <img src={image} className="w-[40%]" alt="seo icon" />
    </div>
  );
}
