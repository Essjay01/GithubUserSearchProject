import React from 'react'
import "../css/Followers.css"
import { useGlobalContext } from '../hooks/useGlobalContext'


const Followers = () => {
    const {githubFollowers} = useGlobalContext();
  return (
    <div className='followers-wrapper'>
        <div className="followers">
            {githubFollowers.map((follower, index)=>{
                    const {html_url, avatar_url, login} = follower;
                    return <article key={index}>
                        <img src={avatar_url} alt='{Login'/>
                        <div>
                            <h4>{login}</h4>
                            <a href={html_url}target='"_blank'>{html_url}</a>
                        </div>
                    </article>
                })
            }
        </div>
    </div>
  )
}

export default Followers