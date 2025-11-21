'use client'

import { useRef, useEffect } from 'react'
import Card from './ui/Card'
import { objectives } from '../constant/objectives'
import SectionTitle from './common/SectionTitle'

export default function Strategy() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  const autoScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const maxScroll = container.scrollWidth - container.offsetWidth

      // If we're at the end, scroll back to the beginning
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      } else {
        // Otherwise, scroll to the next slide
        scroll('right')
      }
    }
  }

  useEffect(() => {
    // Start auto-scrolling every 5 seconds
    autoScrollIntervalRef.current = setInterval(autoScroll, 5000)

    // Cleanup interval on unmount
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [])

  const handleManualScroll = (direction: 'left' | 'right') => {
    // Clear auto-scroll interval
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
    }

    // Perform manual scroll
    scroll(direction)

    // Restart auto-scroll after 10 seconds of inactivity
    setTimeout(() => {
      autoScrollIntervalRef.current = setInterval(autoScroll, 5000)
    }, 10000)
  }
 

  return (
    <section id="strategy" className="bg-white py-12 sm:py-14 md:py-16 px-4 sm:px-5 scroll-mt-20">
      <div className="max-w-content mx-auto">
        {/* Section Header */}
       
        <SectionTitle 
          title='3 Strategic Objectives'
          description='Our approach is clear, focused, and actionable. These three strategic pillars guide every policy, every decision, and every action we take.'

        />

        {/* Objectives - Slider for Mobile, Grid for Desktop */}
        <div className="relative">
          {/* Slider for Mobile */}
          <div className="sm:hidden relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => handleManualScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-uwp-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-uwp-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              ref={scrollContainerRef}
              className="overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-0">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex-shrink-0 w-full snap-center px-6">
                    <Card hover>
                      <div className="flex flex-col h-full">
                        {/* Number Badge */}
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-uwp-red text-white text-xl font-bold mb-4">
                          {objective.number}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-dark-grey mb-3 leading-tight">
                          {objective.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                          {objective.description}
                        </p>

                        {/* Key Points */}
                        <ul className="space-y-2.5 mt-auto">
                          {objective.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-uwp-red mt-1.5"></span>
                              <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Hide scrollbar */}
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>

          {/* Grid for Desktop */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} hover>
                <div className="flex flex-col h-full">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-uwp-red text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-5">
                    {objective.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-dark-grey mb-3 sm:mb-4 leading-tight">
                    {objective.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                    {objective.description}
                  </p>

                  {/* Key Points */}
                  <ul className="space-y-2.5 sm:space-y-3 mt-auto">
                    {objective.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-uwp-red mt-1.5 sm:mt-2"></span>
                        <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 sm:mt-11 md:mt-12">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-6 px-4 sm:px-0">
            Every commitment in our manifesto aligns with these strategic objectives—ensuring coherent, effective governance that delivers results.
          </p>
          <a
            href="#manifesto"
            className="inline-block bg-uwp-red text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-[#c01820] transition-colors shadow-md"
          >
            Read Full Manifesto
          </a>
        </div>
      </div>
    </section>
  )
}
