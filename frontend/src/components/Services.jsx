// eslint-disable-next-line no-unused-vars
import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1 ,
      url:"https://deowgxgt4vwfe.cloudfront.net/uploads/1626351381_large.jpg" ,
      title: "Birthday Planning"
    },
    {
      id: 2 ,
      url:"https://blog.venuelook.com/wp-content/uploads/2021/01/DOIT.jpg" ,
      title: "Anniversary Planning"
    },
    {
      id: 3,
      url:"https://th.bing.com/th/id/R.679fdeff52fdbc9f31a23b6ac83228fa?rik=vl%2fnDhAUsnx7oA&riu=http%3a%2f%2fwww.easycamp.com%2fAdmin%2fPublic%2fGetImage.ashx%3fImage%3d%2fFiles%2fImages%2fEasyCamp%2fFront%2f2021%2fStaycation_1088x612.jpg%26Width%3d1928%26Crop%3d5%26Compression%3d80&ehk=ttTAHpUamOZOXcR%2b6e8lqXybdSOe6KxvC0l6G%2bIa7lU%3d&risl=&pid=ImgRaw&r=0" ,
      title: "Camping Trip Planning"
    },
    {
      id: 4 ,
      url:"https://www.playwithapurpose.com/wp-content/gallery/game-night/Game-Night-2.JPG" ,
      title: "Game Night Planning"
    },
    {
      id: 5 ,
      url:"https://th.bing.com/th/id/OIP.EHB_08NfSQKdgR9Y6aeuvwAAAA?rs=1&pid=ImgDetMain" ,
      title: "Party Planning"
    },
    {
      id: 6 ,
      url:"https://eventsbyliz.com.ph/wp-content/uploads/2019/12/The-first-Wedding-Event-at-Acacia-Hotel.-Congratulations-JOKO-amp.xx&oh=2a65ce0fde7916aa6d97a8e3e8d59fb6&oe=5EB3092D.jpeg" ,
      title: "Wedding Event"
    }
  ];
  return (
    <div className="services container">
      <h2>OUR SERVICES</h2>
      <div className="banner">
        {
          services.map(element=>{
            return(
              <div className="item" key={element}>
                  <h3>{element.title}</h3>
                  <img src={element.url} alt={element.title} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Services