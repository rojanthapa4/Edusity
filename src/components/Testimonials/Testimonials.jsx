import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sita Sharma</h3>
                  <span>Edusity, NEPAL</span>
                </div>
              </div>
              <p>
                "Edusity has completely transformed my approach to learning. The
                courses are well-structured and engaging, which kept me
                motivated throughout. I now feel more confident in my skills and
                ready to tackle new challenges!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3> Rajesh Thapa</h3>
                  <span>Edusity, NEPAL</span>
                </div>
              </div>
              <p>
                "The support team at Edusity is incredible! They were always
                available to answer my questions and guide me through the
                learning process. I highly recommend Edusity to anyone looking
                to enhance their education."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Anita Gurung</h3>
                  <span>Edusity, NEPAL</span>
                </div>
              </div>
              <p>
                "I enrolled in a business course on Edusity, and it was one of
                the best decisions I've made. The practical knowledge I gained
                has already started making a difference in my career. I'm
                excited to apply what I've learned!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3> Deepak Koirala</h3>
                  <span>Edusity, NEPAL</span>
                </div>
              </div>
              <p>
                "As a working professional with a busy schedule, Edusity's
                flexible learning options were perfect for me. I could study at
                my own pace, which made it easier to balance work and education.
                I truly appreciate the convenience!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
