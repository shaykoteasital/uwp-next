'use client'
import { commitments } from "../constant/commitments"
import SectionTitle from "./common/SectionTitle"
import Button from "./ui/Button"

export default function ManifestoSummaryTow() {
    return (
        <div className="py-12 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-content mx-auto">
                <SectionTitle
                    title="6 Key Commitments for Saint Lucia"
                    description="A clear, focused agenda built on trust, relief, safety, growth, investment, and people-first development."
                />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {commitments.map((commitment, index) => (
                        <div key={index} className="">
                            <div className=' border space-y-2'>
                                <div className="flex items-center">
                                    <Button className="group! bg-uwp-red h-24 w-28 rounded-none flex items-center justify-center shrink-0">
                                        {commitment.icon}
                                    </Button>
                                    <div className="w-full group relative 
                                    bg-[#f8f8f8] 
                                     hover:bg-black/5 h-24 px-2 flex items-center cursor-pointer transition-all duration-300">
                                        {/* Title (default state) */}
                                        <span
                                            className="text-lg font-bold text-black mb-0 
                                            transition-all duration-300 ease-in-out
                                                group-hover:-translate-y-full group-hover:opacity-0"
                                        >
                                            {commitment.title}
                                        </span>
                                        <span
                                            className="absolute shrink-0 line-clamp-2 text-sm text-black opacity-0 translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                                        >
                                            {commitment.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Hide scrollbar globally */}
                <style
                    jsx>{`.scrollbar-hide::-webkit-scrollbar {display: none;}`}
                </style>
            </div>
        </div>
    )
}
