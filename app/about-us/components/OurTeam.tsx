"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const teamData = [
    {
        image: "/assets/images/team-1.png",
        name: "Qasim Saddique",
        role: "Principal Consultant",
    },
    {
        image: "/assets/images/team-2.png",
        name: "Ariane Heisey",
        role: "Senior Consultant",
    },
    {
        image: "/assets/images/team-3.png",
        name: "Sara Ahmed",
        role: "Community Engagement Lead",
    },
    {
        image: "/assets/images/team-4.png",
        name: "Taha Ahmed",
        role: "Community Engagement Lead",
    },
    {
        image: "/assets/images/team-1.png",
        name: "Qasim Saddique",
        role: "Principal Consultant",
    },
    {
        image: "/assets/images/team-2.png",
        name: "Ariane Heisey",
        role: "Senior Consultant",
    },
    {
        image: "/assets/images/team-3.png",
        name: "Sara Ahmed",
        role: "Community Engagement Lead",
    },
    {
        image: "/assets/images/team-4.png",
        name: "Taha Ahmed",
        role: "Community Engagement Lead",
    },
    {
        image: "/assets/images/team-1.png",
        name: "Qasim Saddique",
        role: "Principal Consultant",
    },
    {
        image: "/assets/images/team-2.png",
        name: "Ariane Heisey",
        role: "Senior Consultant",
    },
    {
        image: "/assets/images/team-3.png",
        name: "Sara Ahmed",
        role: "Community Engagement Lead",
    },
    {
        image: "/assets/images/team-4.png",
        name: "Taha Ahmed",
        role: "Community Engagement Lead",
    },
];

const OurTeam = () => {
    return (
        <section className="our_team">
            <div>
                <h2 className="text-center text-dark">Meet Our Team</h2>

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
                    >
                        {teamData.map((member, idx) => (
                            <SwiperSlide
                                key={idx}
                                className="transition-all duration-500 ease-in-out"
                            >
                                <div className="team_card">
                                    <div className="image_wrapper mb-4 mx-auto">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            draggable="false"
                                            className="object-cover rounded-[10px] transition-all duration-500 ease-in-out"
                                        />
                                    </div>
                                    <h4 className="text-dark opacity-[0.7]">{member.name}</h4>
                                    <div className="text-[#0E0E0E80]">{member.role}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
