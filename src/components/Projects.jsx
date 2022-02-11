import React from 'react'
import ecomm from '../images/e-com.jpeg'
import dlvr from '../images/livraison.jpeg'
import marjan from '../images/marjane.png'


function Projects() {

    const prj = [
        {
            src: dlvr,
            link: `https://github.com/MohamedBoumlik/Gestion_Livraison_frontend`,
            name: 'Delivery management application',
            tech: 'NodeJS, Express, MongoDB, API, ReactJS, Tailwindcss'
        },
        {
            src: ecomm,
            link: `https://github.com/MohamedBoumlik/Stage`,
            name: 'E-Commerce website',
            tech: 'Laravel, MySQL, HTML, Sass'
        },
        {
            src: marjan,
            link: `https://github.com/MohamedBoumlik/Gestion-MARJANE2-`,
            name: 'Application to manage Marjane promotions ',
            tech: 'NodeJS, Express, API, MySQL, HTML, EJS, Tailwindcss'
        },
    ]

  return (
    <div>
        
        <section class="bg-gray-800 pattern py-20">
            <div class="max-w-5xl px-6 mx-auto text-center">
                <h2 class="text-2xl font-semibold text-white">Projects</h2>

                <div class="flex items-center justify-center mt-10">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {prj.map((element,index) =>

                            <div class="max-w-xs w-full" key={index}>
                                <div class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                    <img class="object-cover" src={element.src} alt=""/>
                                </div>

                                <a href={element.link} class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                    <div class="py-2 px-3 text-center text-sm">
                                        <p class="text-gray-300">{element.name}</p>

                                        <span class="block text-gray-500 h-10 mt-2">{element.tech}</span>
                                    </div>
                                </a>
                            </div>
                        )}

                        {/* <div class="max-w-xs w-full">
                            <div class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img class="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt=""/>
                            </div>

                            <a href="#" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                </div>
                            </a>
                        </div>

                        <div class="max-w-xs w-full">
                            <div class="flex items-center justify-center h-56 bg-white border-b-8 border-teal-400 rounded-md overflow-hidden">
                                <img class="object-cover h-8" src="https://premium-tailwindcomponents.netlify.app/assets/svg/tailwindcomponent-dark.svg" alt=""/>
                            </div>

                            <a href="#" class="block bg-gray-700 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <div class="py-2 px-3 text-center text-sm">
                                    <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <span class="block text-gray-500 mt-2">tailwindcomponents.com</span>
                                </div>
                            </a>
                        </div> */}
                    </div>
                </div>

                <div class="flex items-center justify-center mt-12">
                    <a class="flex items-center text-white hover:underline hover:text-gray-200" href="https://github.com/MohamedBoumlik?tab=repositories">
                        <span>View More On Github</span>

                        <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Projects