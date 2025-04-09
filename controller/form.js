import Forms from "../model/form.js";
import bcrypt from "bcryptjs";


 export const addForm = async(req, res) =>{
    
    try {
        const userExists = await Forms.findOne({username: req.body.username});
        if ( userExists) return res.json({ message: "User already exists" });
    const newForm = await Forms(req.body)
    await newForm.save()
        console.log(newForm)
        return res.json({ message: "Account created successfully. Click on the link below to login" });
        
            
           
    } catch (error) {
        res.json({ message: "All fields are required."});
               
    }     
       
        
    };
    


export const getOneUser = async (req, res) => {
    
        try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.json({ message: "Please provide both username and password"});
        }
        const user = await Forms.findOne({username});
        if (!user) return res.json({ message: "User not found"});
        res.json(user);

        const isMatch = await bcrypt.compare(password, user.password);
        
    } catch (error) {
        res.json({ message: error.message });
    }
};
