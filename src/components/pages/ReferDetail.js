import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

// function ReferDetail(props) {
//     console.log(props);
//   return (
//     <div>ReferDetail</div>
//   )
// }

class ReferDetail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/reference");
        }
        this.mainAnimation();
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
            gsap.to(".reference__inner", {
                duration: 1.6,              
                y:0,
                opacity:1,
                delay:1,
                ease: "circ.out"
            });         
        },10)        
    }
    render(){
        const {location} = this.props;
        console.log(location.state);
        if(location.state === undefined){
            return <div>잘못된 페이지입니다.</div>
        } else {
            return (
                <>
                
                        <Header color="light" />
                        <Contents>            
                        <section className="reference__cont">
                            <div className="container">
                                <div className="reference__inner">
                                    <div className="reference__table">
                                        <h3>{location.state.title}</h3>
                                        <p>{location.state.desc}</p>                                        
                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th>특징</th>
                                                        <th>설명</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>요소</th>
                                                        <td>{location.state.element}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>닫는 태그</th>
                                                        <td>{location.state.tag}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>버전</th>
                                                        <td>{location.state.version}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>시각적 표현</th>
                                                        <td>{location.state.view}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>사용성</th>
                                                        <td>{location.state.use}</td>
                                                    </tr>
                                                </tbody>
                                            </table>                                        
                                    </div>
                                    <h3>접근성</h3>
                                    <p>{location.state.Accessibility}</p>
                                    <h3>MDN</h3>
                                    <p>{location.state.mdn}</p>
                                    <h3>W3C</h3>
                                    <p>{location.state.w3c}</p>
                                </div>
                            </div>
                        </section>
                        </Contents>           
                        <Footer color="light" />
                    </>
            )
        }
    }
}
export default ReferDetail