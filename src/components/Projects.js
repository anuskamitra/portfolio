
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
      <SwiperSlide> <ProjectThumbNail src={diaryImage} name="Personal Diary" description="React based project where user can write their daily thougths which will be stored in firestore database, and for user authentication Firebase authentication is used." Link="https://owndiary.netlify.app/"/></SwiperSlide>
      <SwiperSlide><ProjectThumbNail src={youtbeImage}name="Youtube 2.0" description="React based project which is a perfect clone of Youtube  users where Tailwind CSS is used for design." Link="https://ownyoutube.netlify.app/"/></SwiperSlide>
    </Swiper>
    </div>
    <div id="work" className='work'>
    <div className='workExp'>
      <h2 className='mb-4'>WORK EXPERIENCE</h2>
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

