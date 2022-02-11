import pic from './images/programming.png'
import './App.css'
import Footer from './components/Footer'
import About from './components/About'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
import { Spring, animated } from 'react-spring'
import Projects from './components/Projects'


function App() {

  return (
    <div className="App">

        <main class="font-sans bg-white">
            
            <div>

                <Navbar/>  
                
                <section class="bg-white mt-20">
                    <div class="max-w-2xl px-6 text-center mx-auto">
                        

                            <Spring
                                loop
                                from={{ opacity: 0, color: 'red' }}
                                to={[
                                { opacity: 1, color: '#ffaaee' },
                                { opacity: 0, color: 'rgb(14,26,19)' },
                                ]}>
                                {styles => ( <animated.div style={styles}><h1 class="text-3xl font-semibold">Hi I'm Mohamed</h1></animated.div> )}
                            </Spring>
                        

                        {/* <h2 class="text-3xl font-semibold text-gray-800">Hi, <span class="bg-indigo-600 text-white rounded px-1">I’m Mohamed</span> </h2> */}
                        <p class="text-gray-600 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam veniam suscipit eaque iure, eligendi harum expedita cupiditate sequi, culpa autem! Quaerat ex fugit iste suscipit reiciendis, accusamus ipsum quae.</p>

                        <div class="flex items-end justify-center mt-16">
                            <img src={pic} alt="" />
                        </div>
                    </div>
                </section>

                <About/>

                <Technologies/>

               <Projects/>

                <Footer/>

            </div>
        </main>

    </div>
  )
}

export default App
