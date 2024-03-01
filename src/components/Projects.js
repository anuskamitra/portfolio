
// import Card from "react-bootstrap/Card";
// function projects() {
//   return (
//     <>
//       <h4>PROJECTS</h4>
//        <div className="d-flex">
//       <Card style={{width: "20rem" }} className="m-4">    
//             <Card.Img
//               variant="top"
//               src="PersonalDiary.jpeg"
//             />
//             <Card.Body>
//             <Card.Title className="">Personal Diary</Card.Title>
//               <Card.Text>
             
//                   A react based app to write and store personal thoughts where
//                   the user authentication is done by using firebase and the data
//                   storage by firestore. The option to delete or update the
//                   thoughts is implemented by using CRUD operation provided by
//                   firebase API. The thoughts are displayed in a sorted way with
//                   the timestamp displayed to maximize readability.
//                 Github link: https://github.com/anuskamitra/personaldiary
//               </Card.Text>
//             </Card.Body>
//       </Card>
//       <Card style={{width: "20rem"}}className="m-4">
//             <Card.Img variant="top" src="Youtube.jpeg" />
          
//             <Card.Body>
//             <Card.Title>Youtube Clone</Card.Title>
//         <Card.Text>
//         YouTube clone using React, CSS styling with Tailwind CSS and
//                 Rapid API to fetch real YouTube data, a RapidAPI platform is
//                 integrated, allowing users to browse, search, and watch YouTube
//                 videos seamlessly. Github link:
//                 https://github.com/anuskamitra/youtubeclone
//         </Card.Text>
//       </Card.Body>
//       </Card>
//       <Card style={{ width: "20rem" }} className="m-4">
          
//             <Card.Img
//               variant="top"
//               src="resumebuilder.jpeg"
//             />
//             <Card.Body>
//             <Card.Title>Resume Builder</Card.Title>
//               <Card.Text>
//                 A MERN stack app that uses react components for building
//                 multistep react form which passes the information to the server
//                 side implemented using NodeJs and ExpressJs. The user
//                 authenticatication is done using google OAuth and the data of
//                 the form is stored using the CRUD operation in MongoDB.The data
//                 fetched from the server or entered by the user is embedded in
//                 the template efficiently which can be downloaded in the pdf
//                 format. Github link:
//                 https://github.com/anuskamitra/resumebuilder
//               </Card.Text>
//             </Card.Body>
//       </Card>
//       </div>
//     </>
//   );
// }

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import youtbeImage from "./Youtube.jpeg";
import resumeImage from "./resumebuilder.jpeg";
import diaryImage from "./PersonalDiary.jpeg"
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import ProjectThumbNail from './ProjectThumbNail';



 function Projects() {
  return (
  <div className='container projectSec'>
   <h2 className='text-center'>MY PROJECTS</h2>
    <div className="project">
     <Swiper
     modules={[Navigation, Mousewheel, Keyboard]} 
     slidesPerView={1} cssMode={true} navigation={true}  mousewheel={true}
        keyboard={true}  className="mySwiper"
        breakpoints={{
          500:{
            slidesPerView:1,
          },
          900:{
            slidesPerView:2,
          },

        }}  
        >
      <SwiperSlide><ProjectThumbNail src={resumeImage} name="Resume Builder" description="MERN project where users can create  and update their resume.where Googole authentication is used." Link="https://ownresumebuilder.netlify.app"/> </SwiperSlide>
      <SwiperSlide> <ProjectThumbNail src={diaryImage} name="Parsonal Diary" description="React based project where user can write their daily thougths which will be stored in firestore database, and for user authentication Firebase authentication is used." Link="https://owndiary.netlify.app/"/></SwiperSlide>
      <SwiperSlide><ProjectThumbNail src={youtbeImage}name="Youtube 2.0" description="React based project which is a perfect clone of Youtube  users where Tailwind CSS is used for design." Link="https://ownyoutube.netlify.app/"/></SwiperSlide>
    </Swiper>
    </div>
    <div id="work" className='work'>
    <div className='workExp'>
      <h2 className='mb-4'>WORK EXPERINECE</h2>
      <div className='workDesc'>
      <h5>Internship at Think Future Technologies Pvt. Ltd (November, 2023 - January,2024)</h5>
     <p>Hands-on experience in MongoDB, Express.js, React, and Node.js (MERN).</p>
     </div>
    </div>
    </div>
    </div>
  )

       
 }

export default Projects

