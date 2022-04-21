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
        isLoading: true,
        refers: [],
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
    getRefers = async () => {
        const {
            data: {
                data: {refer},
            },
        } = await axios.get("https://gwni0214.github.io/react2022/src/assets/json/reference.json");
        setTimeout(()=>{
            this.setState({refers: refer, isLoading: false});
            this.mainAnimation();
        },1600)
       
    }
    componentDidMount(){
            setTimeout(()=>{
                document.getElementById("loading").classList.remove("loading__active"); 
                this.getRefers();
            },2000)
    }
    render(){
        const {isLoading, refers} = this.state;
        console.log(refers);
        return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Header  />
                    <Contents>            
                    <ContTitle title={["reference", "book"]}  />
                  
                    {/* <ReferenceCont refer={refers} color="light" />     */}

                    <section className="reference__cont">
                        <div className="container">
                            <div className="reference__inner">
                                <h2>HTML</h2>
                                <ul className="reference__list">
                                    {refers.map((refer)=>(
                                        <ReferenceCont 
                                            key = {refer.id}
                                            id = {refer.id}
                                            title = {refer.title}
                                            desc = {refer.desc}
                                            use = {refer.use} 
                                            desc2 = {refer.desc2}                                            
                                            element = {refer.element}                                            
                                            tag = {refer.tag}                                            
                                            version = {refer.version}                                            
                                            view = {refer.view}                                            
                                            image = {refer.image}                                            
                                            link = {refer.link}                                            
                                            definition = {refer.definition}                                            
                                            Accessibility = {refer.Accessibility}                                            
                                            mdn = {refer.mdn}                                            
                                            w3c = {refer.w3c}                                            
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                                      
                    <ContContact />
                    </Contents>           
                    <Footer  />
                </>
            )}
        </>
        )
    }

}



export default Reference;