import amazonLogo from "/assets/company/amazon.svg";
import dribbbleLogo from "/assets/company/dribbble.svg";
import hubspotLogo from "/assets/company/hubspot.svg";
import notionLogo from "/assets/company/notion.svg";
import netflixLogo from "/assets/company/netflix.svg";
import zoomLogo from "/assets/company/zoom.svg";

export default function Company() {
  return (
    <section
      id="company"
      className="flex justify-between mx-[100px] mt-[70px] mb-[140px] ">
      <img src={amazonLogo} alt="amazon logo" />
      <img src={dribbbleLogo} alt="dribbble logo" />
      <img src={hubspotLogo} alt="hubspot logo" />
      <img src={notionLogo} alt="notion logo" />
      <img src={netflixLogo} alt="netflix logo" />
      <img src={zoomLogo} alt="zoom logo" />
    </section>
  );
}
