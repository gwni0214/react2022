import React, { useEffect, useState } from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import MovieList from '../includes/MovieList';
import MovieSearch from '../includes/MovieSearch';


function Script(){
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
            gsap.to(".script__inner", {
                duration: 1.6,              
                y:0,
                opacity:1,
                delay:2.4,
                ease: "circ.out"
            });

        },2000)
    }

    const search = (query) =>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
    }

    useEffect(()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=spider-man-no-way-home`, requestOptions)
        .then(response => response.json())
        .then(result => {
            setVideos(result.results)
            mainAnimation();
            document.querySelector("body").style.background = "var(--light_bg)";
        })        
        .catch(error => console.log('error', error));
    }, []);
    return (
        <>
         <Loading color="light" />
            <Header color="light"/>
            <Contents>
            <ContTitle title={["script", "book"]} color="light"/>
            <section className="script__cont light">
                <div className='container'>
                <div className="script__inner">
                <MovieSearch onSearch={search} />
                <MovieList videos={videos} />          
                {/* <ScriptCont videos={videos} onSearch={search} color="light"/> */}
                </div>
                </div>
                </section>
                <ContContact />
            </Contents>           
            <Footer color="light"/>
        </>
    )
}



export default Script;

