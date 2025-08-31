import Prod3 from "../../snippits/Prod3";
import CloudService from "../../snippits/cloudService";
import CloudCompApproch from "../../snippits/CloudCompApp";
import Collaboration from "../../snippits/Collaboration";
import CloudDevOpsSection from "../../snippits/BookCallCloud";
import WhyChooseWebCloud from "../../snippits/WhyChooseWebCloud";
import SnippitTech from "../../snippits/SnippitTech";
import { useEffect } from "react";
import CloudLast from "../../snippits/Service/CloudLast";
import Trackrecord from "../../snippits/Trackrecord";
export default function Cloud() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Prod3 />
      <CloudService />
      <CloudCompApproch />
      <SnippitTech />

      <WhyChooseWebCloud />
      <Trackrecord />
      <Collaboration />
      <CloudLast />
    </div>
  );
}
