import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const team = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    designation: "CEO & Founder",
    profileSummary:
      "John has over 20 years of experience in the industry and leads the company with a vision for innovation and excellence.",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    designation: "Chief Marketing Officer",
    profileSummary:
      "Jane is a strategic marketing expert with a passion for building global brands and engaging audiences.",
  },
  {
    name: "Mike Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    designation: "Head of Operations",
    profileSummary:
      "Mike ensures seamless operations and efficiency, driving the company towards consistent growth and success.",
  },
  {
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    designation: "Chief Financial Officer",
    profileSummary:
      "Emily manages the company's finances with strategic insight and ensures sustainable growth.",
  },
];

function Card({ children, className }) {
  return (
    <div className={`p-6 shadow-lg rounded-2xl bg-white ${className}`}>
      {children}
    </div>
  );
}

function ManagementTeam() {
  return (
    <section className=" bg-gradient-to-r from-yellow-600 to-white-500 py-15 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Our Management Team</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="pb-10"
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Card className="text-center transition-all duration-300 hover:bg-gray-50">
                <motion.img
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
                  src={member.image}
                  alt={member.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{member.designation}</p>
                <p className="text-gray-500 text-sm">{member.profileSummary}</p>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ManagementTeam;
