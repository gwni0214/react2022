import React from "react";
function Footer(props){
    return (
        <footer id="footer" className={props.color}>
            <div>
                <h4>email</h4>
                <a href="mailto:sbxjs6999@naver.com">sbxjs6999@naver.com</a>
            </div>
            <div>
                <h4>kakao</h4>
                <a href="#">gwni0214</a>
            </div>
            <div>
                <h4>social</h4>
                <ul>
                    <li><a href="/">Youtube</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Github</a></li>
                    <li><a href="/">Reference</a></li>
                    <li><a href="/">Tutorials</a></li>                    
                </ul>
            </div>
        </footer>
    )
}

export default Footer;