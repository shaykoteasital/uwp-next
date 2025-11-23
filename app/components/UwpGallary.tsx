'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Grid, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid'
import Link from 'next/link'
import GalleryImage from './GalleryImage'
import Image from 'next/image'

const galleryImages = [
  { src: '/images/gallery/conv1.jpg', title: 'Conversation', year: '2022' },
  { src: '/images/gallery/conv2.jpg', title: 'Conversation', year: '2023' },
  { src: '/images/gallery/conv3.jpg', title: 'Teaching', year: '2024' },
  { src: '/images/gallery/conv4.jpg', title: 'Panel', year: '2025' },
  { src: '/images/gallery/conv5.jpg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv6.jpg', title: 'Presentation', year: '2025' },
  { src: '/images/gallery/conv7.jpg', title: 'Presentation', year: '2024' },
  { src: '/images/gallery/conv8.jpg', title: 'Presentation', year: '2025' },
  { src: '/images/gallery/conv9.jpg', title: 'Presentation', year: '2021' },
  { src: '/images/gallery/conv11.jpg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv12.jpg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv13.jpg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv14.jpg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv15.jpg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv1.jpeg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv2.jpeg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv3.jpeg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv4.jpeg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv5.jpeg', title: 'Presentation', year: '2022' },
  { src: '/images/gallery/conv6.jpeg', title: 'Presentation', year: '2022' },
 
]

const UwpGallery: React.FC = () => {
  return (
    <div className="bg-black text-white pt-20 pb-5">
      <div className="max-w-7xl mx-auto px-3 md:px-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-15">
          <div className="shrink-0 md:w-1/3">
            <div className="mb-2 text-[15px] font-semibold tracking-widest text-gray-200 flex items-center gap-3 uppercase">
              <span className="w-15 h-0.5 bg-white"></span>
              GALLERY
            </div>
            <h3 className="text-white mb-3 leading-tight text-4xl sm:text-[44px] font-bold">
              United Workers Party Convention Photo Gallery
            </h3>
          </div>

          <div className="md:w-1/2">
            <div className="text-gray-200">
              Team with all the tools they need to streamline your event
              planning process. Some top artists have gained global recognition.
              Team with all the tools they need to streamline your event
              planning process.
            </div>
            {/* <div className="flex items-center mt-4 gap-4">
              <span className="tracking-widest font-semibold text-white">
                FOLLOW US
              </span>
              <span className="w-16 h-0.5 bg-white"></span>
              <Link
                href="https://www.flickr.com/photos/interamerica"
                target="_blank"
                className="flex gap-2"
              >
                <span className="w-5 h-5 rounded-full bg-blue-600 inline-block"></span>
                <span className="w-5 h-5 rounded-full bg-pink-500 inline-block"></span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Swiper Gallery */}
      <Swiper
        modules={[Autoplay, Grid, Pagination]}
        // grid={{
        //   rows: 2,
        //   fill: 'row',
        // }}
        slidesPerView={1.4}
        spaceBetween={24}
        breakpoints={{
          576: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.4 },
          992: { slidesPerView: 3.4 },
          1200: { slidesPerView: 4.4 },
          1400: { slidesPerView: 5.4 },
          1600: { slidesPerView: 5.8 },
          1700: { slidesPerView: 7.8 },
        }}
        pagination={{
          clickable: true,
        }}
        loop
        className="mySwiper "
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {galleryImages.map((img, idx) => {
          const isOdd = idx % 2 === 0
          const imageHeight = isOdd ? 300 : 400 // numeric height for skeleton
          return (
            <SwiperSlide key={idx} className="">
              <div style={{ height: imageHeight, position: 'relative' }} className="overflow-hidden rounded-2xl" >
                {/* <GalleryImage
                  src={img.src}
                  title={img.title}
                  year={img.year}
                  height={imageHeight}
                /> */}
                {/* ${loaded ? 'opacity-100' : 'opacity-0'} */}
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className={`object-cover rounded-2xl transition-all duration-300  group-hover:scale-105`}
                //   onLoadingComplete={() => setLoaded(true)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default UwpGallery
