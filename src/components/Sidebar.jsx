// import Img from "../../public/image/title1.jpg";
// import { GiClawSlashes } from "react-icons/gi";
// import { GiMailbox } from "react-icons/gi";
// import { GiPhone } from "react-icons/gi";
// // import { GiMailbox } from "react-icons/gi";
// import { GiCalendar } from "react-icons/gi";
// import { FaLocationDot } from "react-icons/fa6";



// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//         <div className="sidebar-info">
//             <figure className="avatar-box">
//                 <img src={Img} alt="" width="80" />
//             </figure>
//             <div className="info-content">
//               <h1 className="name">SAYEDUL ISLAM</h1>
//               <p className="title">Web Developer</p>
//             </div>
//             <button  className="info_more-btn">
//               <span>Show Contacts</span>
//               <GiClawSlashes></GiClawSlashes>
//             </button>
//         </div>
//         {/* contacts info */}
//         <div className="sidebar-info_more">
//           <hr className="separator2" />
//           <ul className="contacts-list">
//             <li className="contact-item">
//               <div className="icon-box">
//                 <GiMailbox></GiMailbox>
//               </div>
//               <div className="contact-info">
//                 <p className="contact-title">Email</p>
//                 <a href="mailto:sayedulsayed20@gmail.com" className="contact-link">sayedulsayed20@gmail.com</a>
//               </div>
//             </li>
//             <li className="contact-item">
//               <div className="icon-box">
//                 <GiPhone></GiPhone>
//               </div>
//               <div className="contact-info">
//                 <p className="contact-title">Phone</p>
//                 <a href="tel:+8801727931776" className="contact-link">+8801727931776</a>
//               </div>
//             </li>
//             <li className="contact-item">
//               <div className="icon-box">
//                 <GiCalendar></GiCalendar>
//               </div>
//               <div className="contact-info">
//                 <p className="contact-title">Email</p>
//                 <time dateTime="2000-08-28" className="contact-link">August 28</time>
//               </div>
//             </li>
//             <li className="contact-item">
//               <div className="icon-box">
//                 <FaLocationDot></FaLocationDot>
//               </div>
//               <div className="contact-info">
//                 <p className="contact-title">Location</p>
//                 <address>Farmgate,Dhaka</address>
//               </div>
//             </li>
//           </ul>


//         </div>
//     </aside>
//   )
// }

// export default Sidebar
import { useState } from "react";
import Img from "../../public/image/title1.jpg";
import { GiClawSlashes } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";
import { GiPhone } from "react-icons/gi";
// import { GiMailbox } from "react-icons/gi";
import { GiCalendar } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Img} alt="Profile of Sayedul Islam" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name">SAYEDUL ISLAM</h1>
          <p className="title">Web Developer</p>
        </div>
        <button
          className="info_more-btn"
          onClick={() => setIsActive((prev) => !prev)}
        >
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>
      {/* contacts info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:sayedulsayed20@gmail.com"
                className="contact-link"
              >
                sayedulsayed20@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+8801727931776" className="contact-link">
                +8801727931776
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2000-08-28" className="contact-link">
                August 28
              </time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaLocationDot />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Farmgate, Dhaka</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
