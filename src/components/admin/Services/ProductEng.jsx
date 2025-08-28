import Product1 from "../../snippits/Service/Product1";
import Collaboration from "../../snippits/Collaboration";
import SnippitTech from "../../snippits/SnippitTech";
import Trackrecord from "../../snippits/Trackrecord";
import ProcessOfProductEng from "../../snippits/ProcessOfProductEng";
import { useEffect } from "react";
export default function ProductEngi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-r from-blue-100 to-white">
      <Product1 />
      <div className="ml-15 lg:ml-[10vw] mt-[8vh] mb-[8vh]">
        <div>
          <div>
            <p className="text-3xl lg:text-4xl mt-[-13vh] font-bold ">
              Our Client-Centric Product <br />
              Engineering Services
            </p>
            <p className="text-lg w-[70vw] lg:w-[50vw] mt-[3vh] text-gray-700 font-semibold">
              Web Blocks empowers businesses with innovative product engineering
              solutions tailored to their goals. We combine technical excellence
              with a deep understanding of market needs to turn concepts into
              scalable, revenue-generating products.
            </p>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-9 w-[76vw] mt-[6vh]">
            <div className="w-[70vw] lg:w-[37vw] h-auto lg:h-[26vh] rounded-md">
              <div className="py-4 px-2 b rounded-md font-semibold">
                <p>Product Engineering Consulting</p>
              </div>
              <hr />
              <div className="px-4 py-4 text-gray-600">
                <p>
                  In our product engineering consulting services, we identify
                  the best-suited tech stack for your product and create a
                  product roadmap. We assess the product architecture reviews
                  and explore product modernization options to find the
                  technologies required. We also present client-specific
                  innovation labs and new-age technology consulting in IoT and
                  Machine Learning areas.
                </p>
              </div>
            </div>
            <div className="w-[70vw] lg:w-[37vw] h-auto lg:h-[26vh]  rounded-md">
              <div className="py-4 px-2  rounded-md font-semibold">
                <p>Product Development</p>
              </div>
              <hr />
              <div className="px-4 py-4 text-gray-600">
                <p>
                  Once the consultation is complete and the tech stack is
                  finalized, we cover the entire product development lifecycle
                  maintaining the precision and your vision. In the process, our
                  team develops the concept, documents all specifications and
                  requirements, creates engineering designs and then initiates
                  the product development with the ideal technologies.
                </p>
              </div>
            </div>
            <div className="w-[70vw] lg:w-[37vw] h-auto lg:h-[30vh] rounded-md ">
              <div className="py-4 px-2 rounded-md font-semibold">
                <p>Product Modernization</p>
              </div>
              <hr />
              <div className="px-4 py-4 text-gray-600">
                <p>
                  With the aid of new-age technologies, we revive and
                  re-engineer existing products and portfolios keeping up with
                  the latest innovations. Our product modernization domain
                  knowledge and experience include technological upgrades, UX
                  rejuvenation, architecture modernization, analytics
                  enablement, and more. The existing product after modernization
                  becomes compatible and equivalent to a new product.
                </p>
              </div>
            </div>
            <div className="w-[70vw] lg:w-[37vw] h-auto lg:h-[26vh]  rounded-md ">
              <div className="py-4 px-2  rounded-md font-semibold">
                <p>Product Testing</p>
              </div>
              <hr />
              <div className="px-4 py-4 text-gray-600">
                <p>
                  end-to-end testing to secure the quality and reliability of
                  the new product. Our product testing includes functional
                  testing (manual/automated), integration testing, performance
                  testing, mobile app testing, compatibility testing, security
                  testing, and graphic user interface (GUI) testing. So the
                  product will have a shorter time to market and meet customer
                  demands swiftly.
                </p>
              </div>
            </div>
            <div className="w-[70vw] h-auto lg:h-[26vh]  rounded-md ">
              <div className="py-4 px-2  rounded-md font-semibold">
                <p>Product Support & Maintenance</p>
              </div>
              <hr />
              <div className="px-4 py-4 text-gray-600">
                <p>
                  Our product maintenance services cater to a wide spectrum of
                  portfolios and products. We provide product support services,
                  product sustenance engineering, and product rationalization to
                  support software environment, user experience, and operational
                  efficiency. Our goal is to achieve reliability and utmost
                  upgradation in your product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProcessOfProductEng />
      <SnippitTech />
      <Trackrecord />
      <Collaboration />
    </div>
  );
}
