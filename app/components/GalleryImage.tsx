'use client'

import React, { useState } from 'react'
import Image from 'next/image'
// import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css'

interface GalleryImageProps {
  src: string
  title: string
  year: string
  height: number
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  title,
  year,
  height,
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative cursor-pointer group rounded-2xl overflow-hidden">
      <div style={{ height }} className="relative w-full">
        {/* Skeleton */}
        {/* {!loaded && (
          <Skeleton
            height={height}
            className="rounded-2xl w-full"
            baseColor="#1c1c1c"
            highlightColor="#2c2c2c"
          />
        )} */}

        {/* Image */}
        <Image
          src={src}
          alt={title}
          fill
          className={`object-cover rounded-2xl transition-all duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } group-hover:scale-105`}
          onLoadingComplete={() => setLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Title */}
      <div className="absolute top-6 left-7 text-white tracking-wider">
        {title}
      </div>

      {/* Decorative corners */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left corner */}
        <div className="absolute top-0 left-0 mt-4 ms-4">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 26.5V10.5C0.5 4.97715 4.97715 0.5 10.5 0.5H26.5"
              stroke="white"
            />
          </svg>
        </div>

        {/* Top right corner */}
        <div className="absolute top-0 right-0 mt-4 me-4">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 26.5V10.5C26 4.97715 21.5228 0.5 16 0.5H-5.06639e-07"
              stroke="white"
            />
          </svg>
        </div>

        {/* Bottom right corner */}
        <div className="absolute bottom-0 right-0 mb-4 me-4">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 -1.19209e-07V16C26 21.5228 21.5228 26 16 26H-5.06639e-07"
              stroke="white"
            />
          </svg>
        </div>

        {/* Bottom left corner */}
        <div className="absolute bottom-0 left-0 mb-4 ms-4">
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 -1.19209e-07V16C0.5 21.5228 4.97715 26 10.5 26H26.5"
              stroke="white"
            />
          </svg>
        </div>
      </div>
      {/* Year + Arrow */}
      <div className="absolute bottom-6 left-7 flex items-center gap-2 text-white">
        {year}
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="white"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="inline ml-1"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default GalleryImage
