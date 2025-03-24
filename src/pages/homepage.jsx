import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Homecards from '../components/homecards'
import Jobslisting from '../components/jobslisting'
import ViewAllJobs from '../components/ViewAllJobs'

const Homepage = () => {
  return (
   <>
   <Hero/>
   <Homecards/>
   <Jobslisting  ishome={true}/>
   <ViewAllJobs/>
   </>
  )
}

export default Homepage
