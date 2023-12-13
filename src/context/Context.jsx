import { createContext, useState, useEffect } from "react";
import mockUser from './Data/users';
import mockFollowers from './Data/followers';
import axios from "axios";
import followers from "./Data/followers";
 
export const GithubContext = createContext();
 const baseUrl = 'https://api.github.com'

 

const GithubProvider = ({children}) => {
     const [githubUser, setGithubUser] = useState(mockUser);
     const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
     const [requests, setRequests] = useState();
     const [error, setError] = useState({show: false, mesg: ""})
     const[isLoading, setIsLoading] = useState(false)


     const searchUser = async (text)=>{
        setIsLoading(true)
         const url = `${baseUrl}/users/${text}`;
        //  console.log(user)

         const {data} = await axios(url);
         if (data) {
            
            setGithubUser(data)
            const {followers_url} = data 
            const {data: followData} = await axios(`${followers_url}?per_page=100`)
            setGithubFollowers(followData)
         } else{
            setError({show: true, msg: "There is no user with that name"})
         }
          setIsLoading(false);
          checkReq()
     }

    const checkReq = async () =>{
        try {
            const {data: {rate: {remaining}}} =await axios(`${baseUrl}/rate_limit`)
            setRequests(remaining)

            if (remaining === 0){
               setError({show: true, msg: "Sorry you have exceeded your hourly rate limit"})
            }
        } catch (error) {
            console.log(error)
        }
     };

     useEffect(()=>{
       checkReq()
     }, [])



     return <GithubContext.Provider value={{githubUser, githubFollowers, requests, error, isLoading, searchUser}}>
        {children}
     </GithubContext.Provider>
}

export default GithubProvider