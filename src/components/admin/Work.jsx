import Hero from "../snippits/Service/Hero";
import Works from "../snippits/Service/Work";
import Howwe from "../snippits/Howwe";
import ContactForm from "../snippits/Form";
import { useEffect } from "react";
const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Works />
      <Howwe />
      <ContactForm />
    </>
  );
};
export default Work;
