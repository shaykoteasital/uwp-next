'use client'
import { Check, X } from 'lucide-react'
import { useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionTitle from './common/SectionTitle'
import 'swiper/css'
export default function Vision() {
  const [bgClass, setBgClass] = useState('bg-red-50')

  return (
    <div className="max-w-content mx-auto">
      {/* Section Label */}
      <SectionTitle
        title="A Clear Vision for Saint Lucia"
        description="The United Workers Party is committed to building a Saint Lucia where every citizen can thrive. Our vision is rooted in trust, transparency, and putting people first—creating opportunities for growth, security, and prosperity for all."
      />

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        loop
        onSlideChange={(swiper) => {
          const i = swiper.realIndex
          if (i === 0) setBgClass('bg-red-50 md:!bg-gradient-to-r')
          else if (i === 1) setBgClass('bg-green-50 md:!bg-gradient-to-l')
        }}
        className={`${bgClass} md:!from-red-50 md:!to-green-50 !rounded-2xl !p-8`}
      >
        <SwiperSlide>
          <div className=" col-span-6 ">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-grey">
                The Current Reality
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              While others offered slogans and style, the UWP delivered
              substance and results. Under previous leadership, Saint Lucia saw
              record investments, infrastructure development, and economic
              growth.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-uwp-red">
                  <X size={20} />
                </span>
                <span>Broken promises and failed policies</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-uwp-red ">
                  <X size={20} />
                </span>
                <span>Rising costs with no relief in sight</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-uwp-red">
                  <X size={20} />
                </span>
                <span>Deteriorating public services and infrastructure</span>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h3 className="text-xl md:text-2xl font-bold text-dark-grey">
                The UWP Promise
              </h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              We&apos;re committed to reclaiming that legacy—restoring trust,
              delivering relief, and building a modern economy that works for
              everyone, especially our youth and most vulnerable.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-600 ">
                  <Check size={20} />
                </span>
                <span>Trust and integrity in every action</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 ">
                  <Check size={20} />
                </span>
                <span>Real relief through the SOS Plan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 ">
                  <Check size={20} />
                </span>
                <span>Modern infrastructure and sustainable growth</span>
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
