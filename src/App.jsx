import Navbar from './components/navbar'
import Hero from './components/hero'
import Homecards from './components/homecards'
import Jobslisting from './/components/jobslisting'

const App = ()=>  {
  

  return (
    <>
    <Navbar/>
      
   <Hero/>

   <Homecards/>
   <Jobslisting/>

   

   

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  )
}

export default App
