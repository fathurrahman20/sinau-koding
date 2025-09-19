import { teams } from "@/data/teams";
import CardTeams from "./card-team";

export default function Teams() {
  return (
    <section id="teams" className="mx-[100px] mb-[100px] mt-[140px]">
      <div id="teams-header" className="flex my-auto gap-x-10 mb-[80px]">
        <h3 className="text-[40px] font-medium bg-primary rounded-[5px] px-[7px]">
          Team
        </h3>
        <p className="max-w-[600px] text-lg">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      <div
        id="card-container"
        className="flex flex-wrap justify-between lg:gap-y-10">
        {teams.map((team, key) => (
          <CardTeams
            key={key}
            name={team.name}
            title={team.title}
            description={team.description}
            image={team.image}
          />
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <button className="max-w-[269px] py-5 px-[76px] text-xl hover:cursor-pointer bg-secondary rounded-[14px] text-white">
          See all team
        </button>
      </div>
    </section>
  );
}
