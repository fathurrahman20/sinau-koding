import type { CardTeamsProps } from "@/components/card-team";
import team1 from "/assets/teams/team-1.webp";
import team2 from "/assets/teams/team-2.webp";
import team3 from "/assets/teams/team-3.webp";
import team4 from "/assets/teams/team-4.webp";
import team5 from "/assets/teams/team-5.webp";
import team6 from "/assets/teams/team-6.webp";

export const teams: CardTeamsProps[] = [
  {
    name: "John Smith",
    title: "CEO and Founder",
    image: team1,
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    title: "Director of Operations",
    image: team2,
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    image: team3,
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    name: "Emily Johnson",
    title: "PPC Manager",
    image: team4,
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    name: "Brian Williams",
    title: "Social Media Specialist",
    image: team5,
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    name: "Sarah Kim",
    title: "Content Creator",
    image: team6,
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];
