import React, { useEffect, useState } from 'react'
import ContContact from '../layout/ContContact'
import Contents from '../layout/Contents'
import ContTitle from '../layout/ContTitle'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import YoutubeList from '../includes/YoutubeList'
import YoutubeSearch from '../includes/YoutubeSearch'
import Loading from '../basics/Loading'
import { gsap } from "gsap";

//npm i dotenv

function Youtube() {
    
    
    const [videos, setVideos] = useState([]);

    const mainAnimation = ()=>{
        
        setTimeout(()=>{
            document.getElementById("loading").classList.remove("loading__active");
            gsap.to("#header", {
                duration: 0.8,
                top: 0,
                ease: "circ.out"
            });
            gsap.to("#footer", {
                duration: 0.8,
                bottom: 0,
                delay:0.4,
                ease: "circ.out"
            });
            gsap.to(".cont__title strong", {
                duration: 2,                
                y:0,
                opacity:1,
                delay:1.2,
                ease: "circ.out"
            });
            gsap.to(".cont__title em", {
                duration: 2,                
                y:0,
                opacity:1,
                delay:1.5,
                ease: "circ.out"
            });
            gsap.to(".youtube__inner", {
                duration: 1.6,              
                y:0,
                opacity:1,
                delay:2.4,
                ease: "circ.out"
            });

        },2000)
    }

    const search = (query)=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=28&q=${query}&key=${process.env.REACT_APP_API}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };
            
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=28&q=blackpink&key=${process.env.REACT_APP_API}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.items);
                mainAnimation();
                }
            )
            .catch(error => console.log('error', error));
    }, []);


    

  return (
      
        <>
            <Loading />
            <Header  />
            <Contents>  
            <ContTitle title={["youtube", "reference"]}/>
            <section className="youtube__cont">       
            <div className="youtube__inner"> 
                <YoutubeSearch onSearch={search}/>          
                <YoutubeList videos={videos} />
            </div>
            </section>
                <ContContact />
            </Contents>           
            <Footer  />
        </>
       
    
  )
}

export default Youtube