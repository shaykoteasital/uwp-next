'use client'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { objectives } from '../constant/objectives'
import SectionTitle from './common/SectionTitle'

export default function Strategy() {
  return (
    <section
      id="strategy"
      className="bg-white py-12 sm:py-14 md:py-16 px-4 sm:px-5 scroll-mt-20"
    >
      <div className="max-w-content mx-auto relative">
        <SectionTitle
          title="3 Strategic Objectives"
          description="Our approach is clear, focused, and actionable. These three strategic pillars guide every policy, every decision, and every action we take."
        />
        {/* Objectives - Slider for Mobile, Grid for Desktop */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          loop
          className='!p-4 '
        >
          {objectives.map((objective, index) => (
            <SwiperSlide key={index}>
              <div className="h-full p-4 rounded-xl cursor-pointer !bg-#fff hover:bg-red-50 transition-colors shadow-sm hover:shadow-md flex flex-col">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-1 md:gap-3 mb-3">
                    <div className="shrink-0 inline-flex items-center justify-center w-14 h-14  rounded-full bg-uwp-red text-white ">
                      {objective.icons}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-xl font-bold text-dark-grey leading-tight line-clamp-2">
                      {objective.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed md:line-clamp-2 lg:line-clamp-none ">
                    {objective.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-3 mt-auto">
                    {objective.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 sm:gap-3"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-uwp-red mt-1.5 sm:mt-2"></span>
                        <span className="text-sm text-gray-600  line-clamp-1">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-10 sm:mt-11 md:mt-12">
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-6 px-4 sm:px-0">
          Every commitment in our manifesto aligns with these strategic
          objectives—ensuring coherent, effective governance that delivers
          results.
        </p>
        <a
          href="#manifesto"
          className="inline-block bg-uwp-red text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-[#c01820] transition-colors shadow-md"
        >
          Read Full Manifesto
        </a>
      </div>
    </section>
  )
}
