import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContContact from "../layout/ContContact";
import ContTitle from "../layout/ContTitle";
import YoutubeCont from "../includes/YoutubeCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Youtube(){
//     return (
//         <>
//             <Header />
//             <Contents>  
//             <ContTitle title={["coding", "youtuber"]}/>          
//                 <YoutubeCont /> 
//                 <ContContact />
//             </Contents>           
//             <Footer />
//         </>
//     )
// }

class Youtube extends React.Component {
    state = {
        isLoading : true,
    }

    mainAnimation = () => {
        setTimeout(()=>{
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
                        
        },10)        
    }
    getMain =() =>{
        setTimeout(()=>{
            console.log("두번째 시작");
            this.setState({isLoading: false});
            this.mainAnimation();
        },1600);
    }
    
    componentDidMount(){
        setTimeout(()=>{
            console.log("첫번째 시작");
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#000";
            this.getMain();            
        },2000)
    }

    render(){
        const {isLoading} = this.state;
        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>  
                        <ContTitle title={["coding", "youtuber"]}/>          
                            <YoutubeCont /> 
                            <ContContact />
                        </Contents>           
                        <Footer />
                    </>
                )}
            </>
        )
    }
}
export default Youtube;