import React, { useState } from 'react';
import './About.css';
import { aboutSections } from './AboutSectionContent';
import { AboutSection } from './AboutSection';
import { AboutSlider } from './AboutSlider';

export function About() {
  //STATES
  const [openSection, setOpenSection] = useState('Info Sessions');

  return (
    <div className="about-container">
      <div className="about-header">
        <h2>ABOUT US</h2>
        <p>
          IEEE is the leading professional association for the advancement of
          technology. It is the world's largest technical society, bringing
          members access to the industry's most essential technical information,
          networking opportunities, career development tools, and many other
          exclusive benefits.
        </p>
      </div>
      <div className="about-grid">
        <div className="about-sections">
          <AboutSection
            openSection={openSection}
            setOpenSection={setOpenSection}
          />
        </div>
        <div className="about-image-slider">
          <AboutSlider />
        </div>
      </div>
    </div>
  );
}
// <section id="about" style={{ margin: '-10px 0 -10px 0' }}>
//   <div className="container">
//     <div className="row">
//       <div className="col-lg-12 col-md-12">
//         <div className="about_area">
//           <div className="heading">
//             <h2 className="wow fadeInLeftBig">About Us</h2>
//             <p>
//               IEEE is the leading professional association for the
//               advancement of technology. It is the world's largest technical
//               society, bringing members access to the industry's most
//               essential technical information, networking opportunities,
//               career development tools, and many other exclusive benefits.
//             </p>
//           </div>
//           <div className="about_content">
//             <div className="row">
//               <div className="col-lg-6 col-md-6 col-sm-12">
//                 <div className="about_featured">
//                   <div className="panel-group" id="accordion">
//                     <div className="panel panel-default wow fadeInLeft">
//                       <div className="panel-heading">
//                         <h4 className="panel-title">
//                           <a
//                             data-toggle="collapse"
//                             data-parent="#accordion"
//                             href="#collapseOne">
//                             <span className="fa fa-check-square-o"></span>
//                             Info Sessions
//                           </a>
//                         </h4>
//                       </div>
//                       <div
//                         id="collapseOne"
//                         className="panel-collapse collapse in">
//                         <div className="panel-body">
//                           One of the main goals of UF IEEE is to connect our
//                           students with industry leaders. UF IEEE hosts many
//                           info sessions with such companies to enable our
//                           students to interact with recruiters in order to
//                           obtain internships and jobs.
//                         </div>
//                       </div>
//                     </div>
//                     <div className="panel panel-default wow fadeInLeft">
//                       <div className="panel-heading">
//                         <h4 className="panel-title">
//                           <a
//                             data-toggle="collapse"
//                             data-parent="#accordion"
//                             href="#collapseTwo">
//                             <span className="fa fa-check-square-o"></span>
//                             Hardware Team
//                           </a>
//                         </h4>
//                       </div>
//                       <div
//                         id="collapseTwo"
//                         className="panel-collapse collapse">
//                         <div className="panel-body">
//                           Every year, UF IEEE participates in IEEE
//                           SoutheastCon and competes in the autonomous robot
//                           IEEE Hardware Competition. The robot must complete
//                           a set of tasks without human control. UF IEEE
//                           pushes the edge of innovation with the Hardware
//                           Team and encourages everyone that wants to be a
//                           part of a design team to join.
//                         </div>
//                       </div>
//                     </div>
//                     <div className="panel panel-default wow fadeInLeft">
//                       <div className="panel-heading">
//                         <h4 className="panel-title">
//                           <a
//                             data-toggle="collapse"
//                             data-parent="#accordion"
//                             href="#collapseThree">
//                             <span className="fa fa-check-square-o"></span>
//                             Community Service
//                           </a>
//                         </h4>
//                       </div>
//                       <div
//                         id="collapseThree"
//                         className="panel-collapse collapse">
//                         <div className="panel-body">
//                           Giving back is crucial. UF IEEE partners with the
//                           UF College of Engineering and local Gainesville
//                           library to teach electrical and computer
//                           engineering concepts to middle school and high
//                           school students.
//                         </div>
//                       </div>
//                     </div>
//                     <div className="panel panel-default wow fadeInLeft">
//                       <div className="panel-heading">
//                         <h4 className="panel-title">
//                           <a
//                             data-toggle="collapse"
//                             data-parent="#accordion"
//                             href="#collapseFour">
//                             <span className="fa fa-check-square-o"></span>
//                             Technical Workshops
//                           </a>
//                         </h4>
//                       </div>
//                       <div
//                         id="collapseFour"
//                         className="panel-collapse collapse">
//                         <div className="panel-body">
//                           With a new focus on technical development, UF IEEE
//                           will host crash courses (among other events) on
//                           courses like Digital Logic prior to the students
//                           taking it that way students are exposed to these
//                           core classes prior to having taken them.
//                         </div>
//                       </div>
//                     </div>
//                     <div className="panel panel-default wow fadeInLeft">
//                       <div className="panel-heading">
//                         <h4 className="panel-title">
//                           <a
//                             data-toggle="collapse"
//                             data-parent="#accordion"
//                             href="#collapseFive">
//                             <span className="fa fa-check-square-o"></span>
//                             Peer Advising
//                           </a>
//                         </h4>
//                       </div>
//                       <div
//                         id="collapseFive"
//                         className="panel-collapse collapse">
//                         <div className="panel-body">
//                           UF IEEE provides continuous peer advising services
//                           to aid ECE students in making decision on their
//                           course schedules. Stop by our office (NEB 213)
//                           anytime during the semester. If one of our
//                           officers or chairs are present, we will be glad to
//                           assist you. Office hours periods are as follows:
//                         </div>
//                       </div>
//                     </div>
//                     <div className="panel panel-default wow fadeInLeft">
//                       <div className="panel-heading">
//                         <h4 className="panel-title">
//                           <a
//                             data-toggle="collapse"
//                             data-parent="#accordion"
//                             href="#collapseSix">
//                             <span className="fa fa-check-square-o"></span>
//                             Social Events
//                           </a>
//                         </h4>
//                       </div>
//                       <div
//                         id="collapseSix"
//                         className="panel-collapse collapse">
//                         <div className="panel-body">
//                           Tailgates, BBQs, basketball games with the
//                           engineering faculty, and socials with other
//                           student orgs just a few examples of the events
//                           going on year-round. UF IEEE is constantly looking
//                           to connect fellow students.
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12">
//                 <div className="about_slider">
//                   <div className="featured_slider">
//                     <div className="single_iteam">
//                       <img src="img/misc/slide1.jpg" alt="img" />
//                     </div>
//                     <div className="single_iteam">
//                       <img src="img/misc/slide2.jpg" alt="img" />
//                     </div>
//                     <div className="single_iteam">
//                       <img src="img/misc/slide3.jpg" alt="img" />
//                     </div>
//                     <div className="single_iteam">
//                       <img src="img/misc/slide4.png" alt="img" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
