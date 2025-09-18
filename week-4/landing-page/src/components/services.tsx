import CardService from "./card-service";
import seo from "/assets/services/seo.svg";
import advertising from "/assets/services/advertising.svg";
import sosmedMarketing from "/assets/services/sosmed-marketing.svg";
import emailMarketing from "/assets/services/email-marketing.svg";
import contentCreation from "/assets/services/content-creation.svg";
import analytics from "/assets/services/analytics.svg";

export default function Services() {
  return (
    <section id="services" className="mx-[100px] mb-[100px]">
      <div id="services-header" className="flex my-auto gap-x-10">
        <h3 className="text-[40px] font-medium bg-primary rounded-[5px] px-[7px]">
          Services
        </h3>
        <p className="max-w-[600px] text-lg">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="flex flex-wrap gap-[40px] mt-[80px]">
        <CardService
          title="Search engine optimization"
          titleBgColor="primary"
          bgColor="tertiary"
          image={seo}
        />
        <CardService
          title="Pay-per-click advertising"
          titleBgColor="tertiary"
          bgColor="primary"
          image={advertising}
        />
        <CardService
          title="Social Media Marketing"
          titleBgColor="tertiary"
          bgColor="secondary"
          arrowBgColor="tertiary"
          arrowColor="secondary"
          image={sosmedMarketing}
        />
        <CardService
          title="Email Marketing"
          titleBgColor="primary"
          bgColor="tertiary"
          image={emailMarketing}
        />
        <CardService
          title="Content Creation"
          titleBgColor="tertiary"
          bgColor="primary"
          image={contentCreation}
        />
        <CardService
          title="Analytics and Tracking"
          titleBgColor="primary"
          arrowBgColor="tertiary"
          arrowColor="secondary"
          bgColor="secondary"
          image={analytics}
        />
      </div>
    </section>
  );
}
