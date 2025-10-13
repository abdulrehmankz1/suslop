"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { X } from "lucide-react";

const teamData = [
  {
    image: "/assets/images/team-1.png",
    name: "Qasim Saddique",
    role: "Principal Consultant",
    description:
      "Qasim is a management consultant and economist. For the past 15 years, he has worked in strategy, sustainability, environmental and impact assessments, socio-economic development, and research in diverse industries. Qasim has had the privilege of working with different levels of government, industry, and Indigenous communities across Canada. He has led national, regional, and local research projects which helped formulate policy that underpinned socio-economic development and sustainability initiatives. He has also advised mining companies on sustainability strategy and Indigenous partnership frameworks. Qasim holds an M.B.A. from the Schulich School of Business at York University and an M.Sc. in the Political Economy of Development from SOAS University of London. He is also a Ph.D. candidate in Strategy and Policy at Schulich.",
  },
  {
    image: "/assets/images/team-2.png",
    name: "Ariane Heisey",
    role: "Senior Consultant",
    description:
      "Ariane Heisey is a recognized leader in environmental assessment in Ontario with more than 33 years of government, academic and professional experience. She holds a master’s degree in Environmental Studies (Environmental Assessment and Planning) from York University. Her focus has been on environmental assessment and impact assessment processes in Ontario; policy development and implementation; Indigenous engagement and consultation; project management and delivery; Ontario and Canada’s environmental legislative frameworks; and government decision-making processes.",
  },
  {
    image: "/assets/images/team-3.png",
    name: "Kathleen Wood",
    role: "Director",
    description:
      "Kathleen is a community and Indigenous engagement consultation professional with over 15 years of experience working with Indigenous communities, local communities, stakeholders, and industry, as part of interdisciplinary project teams requiring coordination of work effort and the influencing of stakeholders to arrive at consensus on controversial and complex issues. Kathleen has negotiated and implemented project partnership and equity partnership agreements with Indigenous communities and has led the development and implementation of engagement plans that require innovative approaches to inclusion.",
  },
  {
    image: "/assets/images/team-4.png",
    name: "Taha Ahmed",
    role: "Community Engagement Lead",
    description:
      "Taha is passionate about creating meaningful collaborations and delivering impactful community programs.",
  },
  {
    image: "/assets/images/Large.webp",
    name: "Morgan Peters",
    role: "Manager",
    description:
      "Morgan is an experienced management consultant and project manager who has undertaken research, evaluation, engagement, and strategic planning exercises with Indigenous nations to enable sustainable social and economic development. Morgan also brings over 10 years of management experience in the non-profit sector, including several years supporting small businesses in rural Mi'kma'ki (Atlantic Canada) and 2 years leading a charitable organization dedicated to fostering better relationships between land use professionals and Indigenous nations in Ontario. Morgan holds an M.B.A. from the Schulich School of Business at York University along with a Certificate in Non Profit Management and Leadership.",
  },
  {
    image: "/assets/images/Medium-8.webp",
    name: "Victoria Bikowski",
    role: "Consultant",
    description:
      "Victoria first started working at Suslop as a Junior Consultant in 2018. She has worked with Indigenous communities and organisations on development projects at the local, regional, and national level. Victoria has supported communities and organisations through consultation and engagement activities and research on major infrastructure projects, mining, environmental and impact assessments, impact benefit agreements, risk management, and more. Victoria holds an M.A. in Political Science from York University where she is currently completing her Ph.D. in Political Science. Her doctoral dissertation examines the role provincial policies on the duty to consult play in establishing greater certainty around land and natural resource management.",
  },
  {
    image: "/assets/images/Christine+Foster+Headshot.webp",
    name: "Christine Foster",
    role: "Senior Consultant",
    description:
      "Christine Foster is an experienced project manager and social impact professional passionate about collaboration with clients, communities, government, and other stakeholders, to create sustainable and mutually beneficial projects. Christine has over 10 years of experience in the private sector working on cross-sector partnerships, engagement and strategic planning in the energy, mining, infrastructure, technology, and international governance sectors, through both consulting and in-house roles. She also has experience in the field of international affairs and sustainable development, including NGO work in Canada, Rwanda, Ghana and Israel, and employment with the Federal Government in Ottawa and at the Canadian Mission to the United Nations in Geneva, Switzerland. Christine holds a BA in Political Science and International Development from McGill University and an MA in Public and International Affairs from the University of Ottawa.",
  },
];

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState<
    null | (typeof teamData)[0]
  >(null);
  const swiperRef = useRef<any>(null);

  // handle modal open
  const openModal = (member: (typeof teamData)[0]) => {
    setSelectedMember(member);
    swiperRef.current?.autoplay?.stop();
  };

  // handle modal close
  const closeModal = () => {
    setSelectedMember(null);
    swiperRef.current?.autoplay?.start();
  };

  // 🔒 Disable body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMember]);

  return (
    <section className="pt_100 px-3 md:px-4 lg:px-5">
      <div>
        <div className="2xl:w-[45%] xl:w-[55%] lg:w-[70%] md:w-[80%] w-full mx-auto text-center lg:mb-12 mb-7">
          <h2 className="mb-3 text-dark">Meet Our Team</h2>
        </div>
        <div className="mt-12">
          <Swiper
            className="ourTeamSlider"
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={"auto"}
            centeredSlides={false}
            grabCursor={true}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            watchSlidesProgress={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {teamData.map((member, idx) => (
              <SwiperSlide
                key={idx}
                className="transition-all duration-500 ease-in-out"
              >
                <div
                  className="team_card cursor-pointer"
                  onClick={() => openModal(member)}
                  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                  onMouseLeave={() =>
                    !selectedMember && swiperRef.current?.autoplay?.start()
                  }
                >
                  <TeamImageCard member={member} />
                  <h4 className="text-dark opacity-[0.7]">{member.name}</h4>
                  <div className="text-[#0E0E0E80]">{member.role}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="container mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl w-full p-8 relative animate-fadeIn mx-auto max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
              >
                <X size={24} className="text-gray-700" />
              </button>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[350px] flex-shrink-0">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    sizes="(max-width:768px) 80vw, 280px"
                    className="object-cover rounded-xl"
                    draggable="false"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-dark">{selectedMember.name}</h3>
                  <h4 className="text-black md:mb-7 mb-3">
                    {selectedMember.role}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedMember.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Reusable Image Card with Loader
const TeamImageCard = ({ member }: { member: (typeof teamData)[0] }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image_wrapper mb-4 mx-auto relative w-[250px] h-[250px]">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-[10px] mr-5" />
      )}
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(max-width:768px) 80vw, 250px"
        className={`object-cover rounded-[10px] transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setLoaded(true)}
        draggable="false"
      />
    </div>
  );
};

export default OurTeam;
