import { FaLinkedinIn } from "react-icons/fa";

export interface CardTeamsProps {
  image: string;
  name: string;
  title: string;
  description: string;
}

export default function CardTeams({
  image,
  name,
  title,
  description,
}: CardTeamsProps) {
  return (
    <div className="card-team max-w-[360px] border-1 rounded-[45px] shadow-bottom px-[35px] py-[40px]">
      <div className="card-header relative">
        <div className="flex gap-x-[20px]">
          <img src={image} alt="team-1" />
          <div className="self-end">
            <p className="font-medium text-[20px]">{name}</p>
            <p>{title}</p>
          </div>
        </div>
        <div className="absolute cursor-pointer top-0 right-0 mx-auto py-[6px] bg-black w-7 h-7 rounded-full">
          <FaLinkedinIn className="text-primary mx-auto" />
        </div>
      </div>
      <div className="w-full h-px bg-[#000] mx-auto relative z-10 my-[28px]" />
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
}
