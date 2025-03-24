import jobs from '../jobs.json'
import Joblist from '../components/joblist'

const Jobslisting = ({ishome = false}) => {
    
    let recentjobs = ishome ? jobs.slice(0,3) : jobs
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
             {ishome ? "Recent Jobs" : "Browse Jobs"}  
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentjobs.map((job) => (
            
           <Joblist key={job.id} job={job}/>
        ))}
        
        </div>
      </div>
    </section>
  )
}

export default Jobslisting
