import Jobs from "../model/job.js";

 export const addJob = async(req, res) =>{
    try {
    const newJob = await Jobs(req.body)
    await newJob.save()
        console.log(newJob)
          return  res.json({message:"Your post has been uploaded successfully"});   
           
    } catch (error) {
        res.json({message: "Fill the required fields"});
               
    }     
       
        
    };

    export const getJobs = async(req, res) => {
        try {
            const jobs = await Jobs.find()
            res.json(jobs);
        } catch (error) {
            res.status(500).json({ msg: error.message || "Something went wrong" });
        }
    };
    