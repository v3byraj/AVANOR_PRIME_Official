import { Link } from "react-router-dom";
import { Hero } from "../Components/Layout/Hero"
import { LatestInnovations } from "../Pages/LatestInnovations"
export const Home = () => {
    return (
        <>
            <Hero />


            <section className="relative bg-white py-24 overflow-hidden">
                {/* Top Vertical Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-sky-400"></div>

                {/* Bottom Vertical Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-sky-400"></div>

                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight">
                        Engineer the Future.
                        <a href="/research">
                            <span className="font-normal"> Join <i>Avanor Prime</i>.</span>
                        </a>
                    </h2>

                    <p className="mt-8 text-xl text-gray-700 leading-9 max-w-3xl mx-auto">
                        When you become a member, you will enjoy access to unparalleled
                        resources, networking opportunities, and the collective knowledge of
                        the world's leading tech professionals.
                    </p>


                    <a href="https://www.linkedin.com/company/avanorprime/?viewAsMember=true" target="_blank" rel="noreferrer">
                        <button className="mt-10 px-10 py-4 border-2 border-sky-500 rounded-full text-sky-600 font-semibold tracking-wide transition-all duration-300 hover:bg-sky-500 hover:text-white">
                            JOIN AVANOR PRIME
                        </button>
                    </a>
                </div>
            </section>

            <LatestInnovations />

        </>
    )
}