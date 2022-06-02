import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContactMenu from "../includes/ContactMenu";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Contact(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <ContactMenu />
//             </Contents>
//             <Footer />
//         </>
//     )
// }
class Contact extends React.Component {
  state = {
    isLoading: true,
  };

  getSite = () => {
    setTimeout(() => {
      gsap.to("#header", {
        duration: 0.8,
        top: 0,
        ease: "circ.out",
      });
      gsap.to("#footer", {
        duration: 0.8,
        bottom: 0,
        delay: 0.2,
        ease: "circ.out",
      });
      gsap.to(".text > div:nth-child(1)", {
        duration: 0.8,
        opacity: 1,
        y: 0,
        delay: 1.2,
        ease: "circ.out",
      });
      gsap.to(".text > div:nth-child(2)", {
        duration: 1,
        opacity: 1,
        y: 0,
        delay: 1.8,
        ease: "circ.out",
      });
      gsap.to(".text > div:nth-child(3)", {
        duration: 1.2,
        opacity: 1,
        y: 0,
        delay: 2.4,
        ease: "circ.out",
      });
      gsap.to(".desc", {
        duration: 1.4,
        opacity: 1,
        y: 0,
        delay: 3.2,
        ease: "circ.out",
      });
    }, 800);
  };
  getMain = () => {
    setTimeout(() => {
      this.setState({ isLoading: false });
      this.getSite();
    }, 1200);
  };
  //외부 간섭으로 인한 이벤트에 대처하는 함수 : 생명주기
  componentDidMount() {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");
      document.querySelector("body").style.background = "#000";
      this.getMain();
    }, 1000);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <ContactMenu />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}
export default Contact;
