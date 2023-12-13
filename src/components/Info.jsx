import React from 'react';
import "../css/Info.css"
import { useGlobalContext } from '../hooks/useGlobalContext';
import {FiUsers, FiUserPlus } from "react-icons/fi"
import {BiGitRepoForked} from "react-icons/bi"

const Info = () => {
  const {githubUser} = useGlobalContext();
  const {followers, following, public_repos} =githubUser;

  const userInfo = [
    {
      id: 1,
      icon: <BiGitRepoForked className="Icon" />,
      label: "Repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="Icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="Icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
  ]

  return (
    <section className='section'>
        <div className="section-center info-card">
          {
            userInfo.map((item)=>{
              const {id, color, icon, value, label} = item;
              return <article className='item'key={id}>
                <span className={color}>{icon}</span>
                <div>
                  <h3>{value}</h3>
                  <p>{label}</p>
                </div>
              </article>
            })
          }
        </div>
    </section>
  )
}

export default Info