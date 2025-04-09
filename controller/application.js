import Applicants from "../model/application.js";

export const applyJob = async (req, res) => {
    try {
    const newApplicants = await Applicants(req.body)
    await newApplicants.save()
    console.log({newApplicants, message:"Application saved successfully"})
    return  res.json({newApplicants, message: "Application saved successfully"});
    } catch (error) {
        return error 
        
    }

}

