import React from 'react';
import book from '../images/books.png'

function Technologies() {

    const education = [

        { 
            name:'Simplon Certificate in Web and Mobile Development at YOUCODE ',
            year:'2020-2022'
        },
        { 
            name:"Bachelor's degree in Geography",
            year:'2017-2020'
        },
        { 
            name:'Baccalaureate',
            year:'2017'
        },

    ]
  return <div>
        <section class="bg-white py-20">
            <div class="px-6 mx-auto text-center grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">

                <div class="flex flex-col items-center justify-center mt-6 ">
                    <h2 class="text-2xl font-semibold text-gray-800">Education</h2>

                    {education.map( (element, index) =>

                        <p key={index} class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <div class="flex items-center justify-between px-4 py-2">
                                <h3 class="text-lg font-medium text-gray-700">{element.name}</h3>
                                <span class="block text-gray-600 font-light text-sm">{element.year}</span>
                            </div>
                        </p>

                    )}

                    {/* <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Pest: a delightful PHP Testing Framework</h3>
                            <span class="block text-gray-600 font-light text-sm">29 Oct 2019</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Using inline SVGs in Vue components</h3>
                            <span class="block text-gray-600 font-light text-sm">15 Oct 2019</span>
                        </div>
                    </a>

                    <a class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-indigo-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                        <div class="flex items-center justify-between px-4 py-2">
                            <h3 class="text-lg font-medium text-gray-700">Acceptance Testing Laravel & VueJs Apps with Codeception</h3>
                            <span class="block text-gray-600 font-light text-sm">3 Oct 2019</span>
                        </div>
                    </a> */}

                    <div class="flex items-center justify-center mt-12">
                        <a class="flex items-center text-gray-600 hover:underline hover:text-gray-500" href="#">
                            <span>View More</span>

                            <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </a>
                    </div>

                </div>

                <div class="flex flex-col items-center justify-center mt-6">
                    
                    <img className='w-3/4' src={book} alt="books" />

                </div>
                
            </div>
        </section>
  </div>;
}

export default Technologies;
