import AutoSlider from "../components/AutoSlider";
import BookPublication from "../components/BookPublication";
import ProductVisuals from "../components/ProductVisuals";
import Publication from "../assets/Publication.jpg";
import Altimage from "../assets/alt_book.jpg";
import CoolBg from "../components/CoolBg";
import WaterBg from "../assets/moa_water.png";
import Offeibea_krom from "../assets/Offeibea_krom.jpg";
import { motion } from "framer-motion";

import Logo from "@assets/Logo.png";
import LandingPage1 from "../assets/landingPage1.png";
import LandingPage2 from "../assets/landingPage2.png";
import LandingPage3 from "../assets/landingPage3.png";
import Product_img1 from "../assets/product_img1.jpg";
import Product_img2 from "../assets/product_img2.png";
import Moa_water from "../assets/moa_water1.png";

const Home = () => {
  const slides = [
    {
      id: 1,
      image: LandingPage1,
      title: "",
      description: "",
    },
    {
      id: 2,
      image: LandingPage2,
      title: "",
      description: "",
    },
    { id: 3, image: LandingPage3, title: "", description: "" },
  ];

  const image = [
    "https://img.freepik.com/premium-photo/happy-black-boy-reading-book-library_220770-12410.jpg",
    "https://img.freepik.com/premium-photo/student-little-girl-reading-with-book-isolated-white_58409-1623.jpg?uid=R171707031&ga=GA1.1.775454794.1744728176&semt=ais_hybrid&w=740",
  ];
  return (
    <div className="mt-0">
      <AutoSlider slides={slides} />
      <motion.div
        className="container mx-auto max-w-6xl px-[6px] sm:px-2"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="">
          <motion.div
            className="flex flex-wrap md:flex-nowrap justify-center items-center gap-2 mt-8 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
              >
                {/* <ProductVisuals
                  images={
                    i === 0
                      ? [LandingPage1, Product_img1, Logo]
                      : i === 1
                      ? [
                          LandingPage2,
                          "https://img.freepik.com/free-photo/female-hand-holding-tomato-organic-farm_1150-6775.jpg?uid=R171707031&ga=GA1.1.775454794.1744728176&semt=ais_hybrid&w=740",
                          Logo,
                        ]
                      : [LandingPage3, Product_img2, Logo]
                  }
                /> */}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-20 p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-['General_Sans'] text-[25px] font-bold">
            About Moudlyne Global ltd
          </h3>
          <p className="font-['General_Sans'] text-[20.7px]">
            Moudlyne Global Limited is a Ghana-based company specializing in the
            production and distribution of high-quality organic fertilizer. Our
            organic fertilizers include{" "}
            <span className="text-green-900 font-bold ">
              Hefe MOA Liquid Organic Fertilizer
            </span>
            ,{" "}
            <span className="text-green-900 font-bold ">
              Hefe MOA Solid Organic Fertilizer
            </span>{" "}
            and <span>Hefe MOA UREA</span>. Established with a commitment to
            supporting sustainable agriculture, Moudlyne Global combines
            innovative organic solutions with the latest agricultural technology
            to promote soil health, enhance crop yield, and support eco-friendly
            farming practices. In addition to our core agricultural focus, we
            are also engaged in publication, real estate, and the production and
            distribution of drinking water.
          </p>{" "}
          <br />
          <h3 className="font-['General_Sans'] text-[25px] font-bold">
            Our Vision And Mission
          </h3>
          <p className="font-['General_Sans'] text-[20.7px]">
            To lead in the advancement of sustainable agricultural practices in
            Ghana and West Africa by providing innovative organic solutions that
            support healthier soil, stronger crops, and a cleaner environment.
            Our mission is to produce high-quality, affordable organic
            fertilizers that empower farmers, promote sustainable farming, and
            contribute to environmental stewardship.
          </p>{" "}
          <br />
          <h3 className="font-['General_Sans'] text-[25px] font-bold">
            Core Values
          </h3>
          <p className="font-['General_Sans'] text-[20.7px]">
            Our core values are rooted in sustainability, as we are committed to
            eco-friendly practices that enhance the environment. We prioritize
            innovation by continuously improving our products through research
            and technology. Customer focus is central to our mission, as we
            prioritize the needs and goals of our farming partners. Finally, we
            uphold integrity by building trust through transparency,
            reliability, and ethical practices.
          </p>
        </motion.div>
      </motion.div>

      <div>
        <BookPublication
          image={Publication}
          className="size-full w-full h-full object-cover mt-8"
          title="PUBLICATION"
        />

        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-12 container mx-auto max-w-6xl mt-20 px-2 md:px-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex-1">
            <p className="font-['General_Sans'] text-[20.7px]">
              Welcome to MOA Publishers, your trusted partner for academic
              publishing. We specialize in high-quality journals and books for
              the academic sector, serving individuals, students, companies, and
              government organizations at affordable rates. Our commitment is to
              make open access publishing accessible and sustainable, ensuring
              knowledge and research are available to all.
              <br />
              <br />
              Our books are produced to the highest standards, meeting the
              requirements of institutions and governments. With a team of
              professional designers and a dedicated quality control panel, we
              guarantee top-notch graphics and content. MOA Publishers is a
              division of MOUDLYNE GLOBAL LIMITED, a company registered and
              operating under the laws of Ghana. We offer both local and
              international printing to satisfy our customers' needs.
              <br />
              <br />
              For publication inquiries or requirements, please contact us using
              the details on our contact page. While we publish a variety of
              books, our main focus in Ghana is on Mathematics and English
              titles, from KG1 and KG2 through Basic One to Basic Six, and JHS
              (Basic Seven, Eight, and Nine). Our writers are among the best in
              Ghana. After writing, all books undergo rigorous quality control,
              including review by the Ghana Association of Writers (GAW) and
              private editors, to ensure they meet the standards of the Ghana
              Ministry of Education syllabus. Final approval is given by NACCA
              (Ghana’s National Council for Curriculum and Assessment) before
              printing and publishing.
              <br />
              <br />
              Join us in advancing academic excellence and expanding the reach
              of scholarly work.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center h-[500px] bg-white rounded-xl shadow-lg w-full max-w-md mx-auto mt-8 md:mt-0 md:top-32 z-10">
            {image ? (
              <img
                src={image[0]}
                className="w-full h-full object-cover rounded-lg "
                alt="MOA Publication"
              />
            ) : (
              <img
                src={Altimage}
                className="w-full h-full object-cover rounded-lg"
                alt="MOA Publication"
              />
            )}
          </div>
        </motion.div>

        <CoolBg
          className="relative h-[120vh] mt-20 w-full overflow-hidden"
          image={WaterBg}
        />

        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-12 container mx-auto max-w-6xl mt-20 px-2 md:px-0 justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex-1">
            <p className="font-['General_Sans'] text-[20.7px]">
              MOA Drinking Water: It is a pleasure serving the good people of
              Ghana. We do not offer just any kind of service; we bring to your
              table good and affordable drinking water. MOA Drinking Water is
              unlike any other liquid it is water without smell, very
              transparent, and without any hint of color. It is always crystal
              clear and has no taste.
              <br />
              <br />
              We understand how vital water is to the world and to every living
              thing on planet Earth. It is clear to us that it was for us, the
              living creatures, that the Almighty God created “EARTH” so far,
              the only planet in the Milky Way Galaxy with evidence of water and
              life. There is “LIFE” because water is present. Seventy-nine
              percent of the earth is made of water, and even more so, our own
              bodies. This is essentially why you need MOA Drinking Water to
              support your life.
              <br />
              <br />
              We care about you, we care about life, and that is why we bring
              you MOA Drinking Water. It is water with every good quality: it
              has no odor or smell, contains no visible solid particles, and is
              not in any way contaminated. There are no unhealthy toxins or
              chemicals. It is very rich in vital and essential minerals, all
              from nature, just as water itself should be.
              <br />
              <br />
              Though water is tasteless, one may say “It tastes good.” This is
              due to the satisfaction you get from just a sip, and also because
              when you drink MOA Water, you tend to want more especially if you
              are very thirsty and dehydrated.
              <br />
              <br />
              Drink MOA Drinking Water! Our water comes in various packaging:
              sachets (500ml), bottles (500ml and 1.5L), and dispensers (10L and
              20L). Our water is very affordable, with good packaging simple yet
              attractive and worthy of your fridge space, supermarkets, and
              shops. It is also very affordable for your occasions.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center h-[500px] bg-white rounded-xl shadow-lg w-full max-w-md mx-auto mt-8 md:mt-0 md:top-32 z-10">
            <img
              src={Moa_water}
              className="w-full h-full object-contain rounded-lg bg-white"
              alt="MOA Publication"
            />
          </div>
        </motion.div>

        <CoolBg
          className="relative h-[110vh] mt-20 w-full overflow-hidden object-cover"
          image="https://i.pinimg.com/originals/19/b9/3f/19b93f591b60f8772f59f6162530316f.jpg"
        />

        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-12 container mx-auto max-w-6xl mt-20 px-2 md:px-0 justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex-1">
            <p className="font-['General_Sans'] text-[20.7px]">
              Moudlyne Global Limited understands what it means to have a modern
              house, but preserving our beloved history and culture. Moudlyne
              Global Limited wants to bring modernization into Ghana housing yet
              preserving the beautiful history and culture of the Ghana people.
              We have a dream, a dream to build a beautiful city in the name
              “OFFEIBEA KROM”. We just don’t want to copy what we see as we
              travel outside Ghana, but we want develop every virgin area of
              tourism in our nation, to improve on job availability, climate
              conditions and improve the livelihood of the Ghanaian people. Mrs.
              Moudlyne Offeibea Asirifi is very enthusiastic when we talk about
              housing and tourism. She believes that to make it is to think of
              others. To lead is to serve; to get the beautiful blessings of God
              Almighty is to first think of others. This is what God wants from
              us. He wants that when we go down on bended knees to ask of “HIM”
              we are asking because we want to touch a life and not because of
              our own selfish desires. This is what MOA Housing stands for. “MOA
              HOUSING” we bring warmth, when there is cold.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center h-[500px] bg-white rounded-xl shadow-lg w-full max-w-md mx-auto mt-8 md:mt-0 md:top-32 z-10">
            <img
              src={Offeibea_krom}
              className="w-full h-full object-cover rounded-lg bg-white"
              alt="MOA Publication"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

// https://img.freepik.com/premium-photo/traditional-thai-house-phuket-island_979447-1121.jpg?uid=R171707031&ga=GA1.1.775454794.1744728176&semt=ais_hybrid&w=740
