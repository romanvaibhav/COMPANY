import Prod3 from "../../snippits/Prod3";
import CloudService from "../../snippits/cloudService";
import CloudCompApproch from "../../snippits/CloudCompApp";
import Collaboration from "../../snippits/Collaboration";
import CloudDevOpsSection from "../../snippits/BookCallCloud";
import WhyChooseWebCloud from "../../snippits/WhyChooseWebCloud";
import SnippitTech from "../../snippits/SnippitTech";
export default function Cloud() {
  return (
    <div className="bg-gradient-to-r from-orange-100 to-white">
      <Prod3 />
      <CloudService />
      <CloudCompApproch />
      <SnippitTech />

      <WhyChooseWebCloud />
      <CloudDevOpsSection />
      <Collaboration />
    </div>
  );
}
