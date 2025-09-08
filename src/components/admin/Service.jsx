import Howwe from "../snippits/Howwe";
import Services from "../snippits/Service";
import ServicesweSection from "../snippits/SeriviceWeOffer";
import Aiinte from "../snippits/AiInte";
import Timeline from "../snippits/Step";
import rec from "../../assets/Rectangle 3905-B9XFmqbZ.webp";
import ContactForm from "../snippits/Form";
import Trackrecord from "../snippits/Trackrecord";
import { useEffect } from "react";
export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Services />
      <ServicesweSection />
      <Timeline />
      <Trackrecord />

      <Howwe />
      <ContactForm />
    </div>
  );
}
