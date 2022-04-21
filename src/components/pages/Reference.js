import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
import ReferenceCont from "../includes/ReferenceCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";
// function Reference(){
//     return (
//         <>
//             <Header color="light" />
//             <Contents> 
//             <ContTitle title={["reference", "book"]} color="light" />           
//                 <ReferenceCont color="light" />
//                 <ContContact />
//             </Contents>           
//             <Footer color="light" />
//         </>
//     )
// }

class Reference extends React.Component {
    state = {
        isLoading : true,
        refers : [],
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
            gsap.to(".reference__inner", {
                duration: 1.6,              
                y:0,
                opacity:1,
                delay:2.4,
                ease: "circ.out"
            });             
        },10)        
    }
    getMain = async () =>{
        const {
            data: {
                data: {refer},
            },
        } = await axios.get("https://gwni0214.github.io/web_class_react/react2022/src/assets/json/reference.json");
        setTimeout(()=>{
            this.setState({refers: refer,isLoading: false});                                
            this.mainAnimation(); 
        },1600);
              
    }
    
    componentDidMount(){
        setTimeout(()=>{
            console.log("첫번째 시작");
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "var(--light_bg)";
            this.getMain();            
        },2000)
    }

    render(){
        const {isLoading, refers} = this.state;
       
        return (
            <>
                {isLoading ? (
                    <Loading color="light" />
                ) : (
                    <>
                        <Header color="light" />
                        <Contents> 
                            <ContTitle title={["reference", "book"]} color="light" />
                            <ReferenceCont refer={refers} color="light" />
                            <ContContact />
                        </Contents>           
                        <Footer color="light" />
                    </>
                )}
            </>
        )
    }
}

export default Reference;