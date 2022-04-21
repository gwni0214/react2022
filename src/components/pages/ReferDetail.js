import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

// function ReferDetail() {
//   return (
//     <div>ReferDetail</div>
//   )
// }
class ReferDetail extends React.Component {

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
    componentDidMount(){
        document.querySelector("body").style.background = "var(--light_bg)";
        this.mainAnimation();
    }
    render(){
        return (
            <>
                <Header color="light" />
                <Contents>
                <section>
                    <div className='container'>
                        <div className="reference__inner">
                            asd
                        </div>
                    </div>
                </section>                                                            
                </Contents>           
                <Footer color="light" />
            </>
        )
    }
}

export default ReferDetail