import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../layout/ContTitle";
import PortCont from "../includes/PortCont";
import ContContact from "../layout/ContContact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

// function Portfolio(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <ContTitle title={["portfolio", "site"]} />
//                 <PortCont />
//                 <ContContact />
//             </Contents>
//             <Footer />
//         </>
//     )
// }

class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [],
  };
  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", {
        duration: 0.8,
        top: 0,
        ease: "circ.out",
      });
      gsap.to("#footer", {
        duration: 0.8,
        bottom: 0,
        delay: 0.4,
        ease: "circ.out",
      });
      gsap.to(".cont__title strong", {
        duration: 2,
        y: 0,
        opacity: 1,
        delay: 1.2,
        ease: "circ.out",
      });
      gsap.to(".cont__title em", {
        duration: 2,
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: "circ.out",
      });
      gsap.to(".port__inner", {
        duration: 1.6,
        y: 0,
        opacity: 1,
        delay: 2.4,
        ease: "circ.out",
      });
    }, 10);
  };

  getPorts = async () => {
    //필요한 데이터만 불러오는 경로 설정 data-data-ports
    const {
      data: {
        data: { ports },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/dothome1/portfolio.json"
    );

    this.setState({ ports: ports });

    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false });
      this.mainAnimation();
    }, 1000);
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작");
      document.getElementById("loading").classList.remove("loading__active");
      document.querySelector("body").style.background = "#000";
      this.getPorts();
    }, 1000);
  }

  render() {
    const { isLoading, ports } = this.state;
    console.log(ports);
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <ContTitle title={["portfolio", "site"]} />

              <PortCont port={ports} />

              <ContContact />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Portfolio;
