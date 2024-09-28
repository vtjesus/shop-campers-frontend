import ContactInformation from "@/components/about/ContactInformation";
import GoogleMap from "@/components/about/GoogleMap";
import Mission from "@/components/about/Mission";
import OurTeam from "@/components/about/OurTeam";
import PagesBanner from "@/components/ui/PagesBanner";

const About = () => {
  return (
    <>
      <PagesBanner currentPage="About" />
      <OurTeam />
      <Mission />
      <GoogleMap />
      <ContactInformation />
    </>
  );
};

export default About;
