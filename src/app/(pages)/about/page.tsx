import React from "react";
import InnerHTML from "dangerously-set-html-content";
import Image from "next/image";

const Zabout = () => {
  const htmlContent = `
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/brands.min.css"
  />
  <link rel="stylesheet" href="mhgk.css" />
  <!-- <link rel="stylesheet" href="final.css"> -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
  />
  <style>
  .header {
   width: 100%;
   height: 500px;
   opacity: .8;
   background-color: var(--link-color);
   background-size: cover;
   background-position: bottom;
}

.container {
   width: 100%;
   margin: auto;
}

.container h1 {
   font-size: 40px;
}

.about {
   background-color: #1a1e23;
   text-align: justify;
   display: grid;
   grid-template-columns: auto auto;
   margin-top: 50px;
}

.about .left {

   margin-left: -15px;

}

.about .right {
   width: 825px;
   max-width: 50%;
   align-self: center;
   justify-self: center;
}


.about .left h1 {
   text-align: center;
   color: var(--link-color);
   margin: 1px 0 10px 0;
}

.about .left hr {
  width: 47%;
  border-top: 2px solid #f2a35f;
  border-bottom: none;
  margin: auto;
}

.about .left p {
   font-size: 1rem;
   margin: 30px auto;
   width: 80%;
   color: #e7d7c1;
}

.mission {
   padding: 5% 0;
   height: auto;
   background-color: #1a1e23;
   display: grid;
   grid-template-columns: auto auto;
   
}

.mission .right {
   text-align: justify;
   justify-self: center;
}

.mission .left img {
   width: 100%;
  
}
.mission .left {
   justify-self: center;
   align-self: center;
   max-width: 60%;
   border-radius: 50%;
}


.mission .right h1 {
   text-align: center;
   color: var(--link-color);
   margin: 0 0 20px 0;
}

.mission .right hr {
  width: 47%;
  border-top: 2px solid #f2a35f;
  border-bottom: none;
  margin: auto;
}

.mission .right p {
   font-size: 1rem;
   margin: 40px auto;
   width: 80%;
   color: #e7d7c1;
}

.team .card {
   background-color: #1a1e23;
   margin: 10px 6%;
   box-shadow: 0 0 20px 2px rgba(13, 13, 13, 0.915);

}

.team-section {
   display: grid;
   grid-template-columns: auto auto auto;
   max-width: 90%;
   margin: 15px auto;
 }
 
.team h2 {
   color: #e7d7c1;
   text-align: center;
}

 .team-member {
  display: flex;
  text-align: center;
  margin: 20px;
  padding: 20px;
  background-color: var(--f-lbackgroud);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(8, 8, 8, 0.21);
  transition: transform 0.3s ease-in-out;
  color: #e7d7c1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
   
 }
 .team-member h3{
   color: var(--link-color);
 }
 
 .team-member:hover {
   transform: translateY(-10px);
 }
 
 .team-member img {
   width: 150px;
   height: 150px;
   background-color: var(--f-silver);
   margin-bottom: 10px;
   border-radius: 50%;
   object-fit: cover;
 }
 
 .team-member h3 {
   font-weight: 700;
   margin: 0;
 }
 
 .team-member .role {
   color: var(--f-silver);
   margin-bottom: 10px;
 }
 
 .fa {
   font-size: 24px;
   margin: 0 10px;
   color: #000;
   transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
   text-decoration: none;
 }
 
 .team-member:hover .fa {
   transform: scale(1.2);
   color: #48a8e2;
 }

 .line {
    display: block;
    width: 71%;
    border: 2px solid #3b3a34;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
 }

 .zlinks{
  margin: 20px 0 10px;
 }

 /*@media screen and (max-width: 1000px) {
   
 
   .header {
     height: 300px; 
   }
 
   .about {
     grid-template-columns: 1fr; 
   }
 
   .about .left,
   .about .right {
     margin:  auto; 
     width: 100%; 
   }

 
   .mission {
     grid-template-columns: 1fr; 
   }
 
   .mission .left,
   .mission .right {
     margin: 0 auto; 
     width: 100%; }

   }
   @media only screen and (max-width: 480px) {
      h1 {
        font-size: 1.5em;
        text-align: center;
      }
    
      .container {
        width: 90%;
      }
    
      .image {
        width: 100%;
      }
    }*/
    @media only screen and (max-width: 768px) {

  .header {
    height: 300px; 
  }

  .container h1 {
    font-size: 30px; 
  }

  
  .team-section {
    grid-template-columns: 1fr 1fr; 
  }

  .team-member img {
    width: 100px;
    height: 100px; /* Adjust image size for smaller screens */
  }
}

.about {
  grid-template-columns: 1fr; 
}

.about .left,
.about .right {
  margin:  auto; 
  width: 100%; 
}


.mission {
  padding: 5% 0;
  height: auto;
  background-color: #1a1e23;
  display: grid;
  grid-template-columns: auto auto;
}

.mission .right {
  text-align: justify;
  justify-self: center;
}

.mission .left img {
  width: 100%;
  border-radius: 7px;
}

.mission .left {
  justify-self: center;
  align-self: center;
  max-width: 60%;
  border-radius: 50%;
}


.mission .right h1 {
  text-align: center;
  color: var(--link-color);
  margin: 0 0 20px 0;
}

h1 {
  text-align: center;
  color: var(--link-color);
  margin: 0 0 20px 0;
}

.mission .right hr {
  width: 47%;
  border-top: 2px solid #f2a35f;
  border-bottom: none;
  margin: auto;
}

hr {
  width: 47%;
  border-top: 2px solid #f2a35f;
  border-bottom: none;
  margin: 10px auto;
}

.mission .right p {
  font-size: 1rem;
  margin: 40px auto;
}
@media only screen and (max-width: 480px) {
  .team-section{
    grid-template-columns: auto;
  }
}
  </style>
  <div class="container">
  <div class="about">
    <div class="left">
      <h1>About us</h1>
      <hr />
      <p>
        <b><i>zEarth</i></b
        >, we are passionate about delivering exceptional products and
        services to our valued customers. With years of experience in the
        industry, we have established ourselves as a reputable and trusted
        company, dedicated to meeting the diverse needs of our clients.
      </p>

      <p>
        Our company is built on a foundation of innovation, quality, and
        customer satisfaction. We constantly strive to stay ahead of the
        curve by embracing cutting-edge technologies and trends, ensuring
        that we provide our customers with the latest and most effective
        solutions.
      </p>
      <p>
        Our team consists of highly skilled professionals who are experts in
        their respective fields. From research and development to
        manufacturing and customer support, every member of our team is
        committed to excellence. We work collaboratively, leveraging our
        collective expertise to deliver superior products and services that
        exceed expectations..
      </p>
    </div>

    <div class="right">
      <svg
        class="animated"
        id="freepik_stories-team-page"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        version="1.1"
        xmlns:svgjs="http://svgjs.com/svgjs"
      >
        <style>
          svg#freepik_stories-team-page:not(.animated) .animable {
            opacity: 0;
          }

          svg#freepik_stories-team-page.animated
            #freepik--background-simple--inject-241 {
            animation: 1.5s Infinite linear floating;
            animation-delay: 0s;
          }

          svg#freepik_stories-team-page.animated
            #freepik--Interface--inject-241 {
            animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38)
              slideDown;
            animation-delay: 0s;
          }

          svg#freepik_stories-team-page.animated
            #freepik--character-3--inject-241 {
            animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38)
              slideLeft;
            animation-delay: 0s;
          }

          svg#freepik_stories-team-page.animated
            #freepik--character-2--inject-241 {
            animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38)
              slideLeft;
            animation-delay: 0s;
          }

          svg#freepik_stories-team-page.animated
            #freepik--character-1--inject-241 {
            animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38)
              slideLeft;
            animation-delay: 0s;
          }

          @keyframes floating {
            0% {
              opacity: 1;
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-10px);
            }

            100% {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideLeft {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        </style>
        <g
          id="freepik--background-simple--inject-241"
          class="animable animator-active"
          style="transform-origin: 250.006px 250.609px"
        >
          <g id="elys09ejv2nlp">
            <path
              d="M67.93,167.09s-27.88,72,11.3,144.5S199.11,422.39,263.7,455.14s131.66,16.8,163.53-36.84-11.84-91.93-11.9-168.42,11.45-96.74-30-161.36-143.06-78.93-219.9-31S67.93,167.09,67.93,167.09Z"
              style="
                fill: rgb(255, 255, 255);
                opacity: 0.7;
                transform-origin: 248.588px 250.609px;
              "
              class="animable"
            ></path>
          </g>
          <path
            d="M152.68,456.71C36.51,411.86,67.21,349,45.85,265.81s-19-115,33-173.11,141.8-79.65,205.86-10.92S408.12,144,444.74,195s29.79,111.52-36.39,154.18S295.92,512,152.68,456.71Z"
            style="
              fill: rgb(146, 164, 227);
              transform-origin: 250.006px 254.949px;
            "
            id="el5k1zfbx6sbe"
            class="animable"
          ></path>
          <g id="el81dts7mu2vs">
            <path
              d="M152.68,456.71C36.51,411.86,67.21,349,45.85,265.81s-19-115,33-173.11,141.8-79.65,205.86-10.92S408.12,144,444.74,195s29.79,111.52-36.39,154.18S295.92,512,152.68,456.71Z"
              style="
                fill: rgb(255, 255, 255);
                opacity: 0.7;
                transform-origin: 250.006px 254.949px;
              "
              class="animable"
            ></path>
          </g>
        </g>
        <g
          id="freepik--Interface--inject-241"
          class="animable"
          style="transform-origin: 250.01px 249.01px"
        >
          <path
            d="M208.13,72.42c0-3.16,1.67-5,4.73-5s4.72,1.81,4.72,5V82.71c0,3.17-1.67,5-4.72,5s-4.73-1.81-4.73-5Zm3.11,10.49c0,1.42.63,2,1.62,2s1.61-.53,1.61-2V72.22c0-1.41-.62-2-1.61-2s-1.62.54-1.62,2Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 212.855px 77.565px;
            "
            id="elfj9e6brk2rk"
            class="animable"
          ></path>
          <path
            d="M222.56,67.67V82.94c0,1.41.62,1.92,1.61,1.92s1.61-.51,1.61-1.92V67.67h2.94V82.74c0,3.17-1.58,5-4.64,5s-4.63-1.81-4.63-5V67.67Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 224.085px 77.705px;
            "
            id="el6xhwz6yhv1k"
            class="animable"
          ></path>
          <path
            d="M237.34,87.46a6.06,6.06,0,0,1-.28-2.43V81.92c0-1.84-.62-2.51-2-2.51H234v8h-3.11V67.67h4.7c3.22,0,4.6,1.5,4.6,4.55v1.56c0,2-.65,3.34-2,4v0c1.55.65,2.06,2.12,2.06,4.19v3a5.82,5.82,0,0,0,.34,2.4ZM234,70.5v6.08h1.22c1.16,0,1.86-.51,1.86-2.09V72.54c0-1.42-.48-2-1.58-2Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 235.74px 77.565px;
            "
            id="elhdmbpr436do"
            class="animable"
          ></path>
          <path
            d="M245.69,67.67h9.61V70.5h-3.25v17h-3.11v-17h-3.25Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 250.495px 77.585px;
            "
            id="el34edkin52am"
            class="animable"
          ></path>
          <path
            d="M259.77,76H264v2.83h-4.27v5.8h5.37v2.82h-8.48V67.67h8.48V70.5h-5.37Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 260.86px 77.56px;
            "
            id="el76ymell8gqc"
            class="animable"
          ></path>
          <path
            d="M277.13,87.46H274l-.53-3.59h-3.82l-.54,3.59h-2.85l3.16-19.79H274ZM270,81.19h3l-1.47-10h-.05Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 271.695px 77.565px;
            "
            id="elntasndbcbb7"
            class="animable"
          ></path>
          <path
            d="M285.13,81.72h.06l2.09-14h4.33V87.46h-2.94V73.27h-.06l-2.09,14.19h-2.94l-2.26-14h-.06v14h-2.71V67.67h4.32Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 285.08px 77.565px;
            "
            id="el09uy4t7o3can"
            class="animable"
          ></path>
          <path
            d="M441.53,111.75H86.74a1,1,0,1,0,0,2H441.53a1,1,0,0,0,0-2Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 264.135px 112.75px;
            "
            id="eledb6q903ewt"
            class="animable"
          ></path>
          <path
            d="M441.53,119.77H58.47a1,1,0,0,0,0,2H441.53a1,1,0,0,0,0-2Z"
            style="fill: rgb(38, 50, 56); transform-origin: 250px 120.77px"
            id="elat497vi7pr9"
            class="animable"
          ></path>
          <path
            d="M422.68,127.78H58.47a1,1,0,0,0,0,2.05H422.68a1,1,0,1,0,0-2.05Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 240.575px 128.805px;
            "
            id="elgfew5r0xul7"
            class="animable"
          ></path>
          <path
            d="M441.53,141.46H86.74a1,1,0,1,0,0,2H441.53a1,1,0,0,0,0-2Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 264.135px 142.46px;
            "
            id="el1b60s8gw7cv"
            class="animable"
          ></path>
          <path
            d="M441.53,149.48H58.47a1,1,0,0,0,0,2.05H441.53a1,1,0,0,0,0-2.05Z"
            style="fill: rgb(38, 50, 56); transform-origin: 250px 150.505px"
            id="elzum10ynkmf"
            class="animable"
          ></path>
          <path
            d="M385,157.5H58.47a1,1,0,0,0,0,2.05H385a1,1,0,0,0,0-2.05Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 221.735px 158.525px;
            "
            id="elgufrjq28i2u"
            class="animable"
          ></path>
          <path
            d="M81.86,78.78,72.17,69.1a.86.86,0,0,0-1.22,0l-9.69,9.68a.48.48,0,0,0,.34.81H64a.52.52,0,0,1,.52.52v6.48a.52.52,0,0,0,.52.52h13a.52.52,0,0,0,.52-.52V80.11a.52.52,0,0,1,.52-.52h2.41A.48.48,0,0,0,81.86,78.78Z"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-miterlimit: 10;
              transform-origin: 71.5602px 77.9781px;
            "
            id="el2kgi9qt1oz1"
            class="animable"
          ></path>
          <path
            d="M438.88,80.09V75.87l-3.17-.28a8.46,8.46,0,0,0-.78-1.89l2-2.43-3-3-2.43,2a9,9,0,0,0-1.89-.78l-.27-3.16h-4.23l-.27,3.16a8.74,8.74,0,0,0-1.89.78l-2.43-2-3,3,2,2.43a8.49,8.49,0,0,0-.79,1.89l-3.16.28v4.22l3.16.27a8.57,8.57,0,0,0,.79,1.9l-2,2.42,3,3,2.43-2a8.74,8.74,0,0,0,1.89.78l.27,3.16h4.23l.27-3.16a9,9,0,0,0,1.89-.78l2.43,2,3-3-2-2.42a8.54,8.54,0,0,0,.78-1.9Zm-11.6,2.79a4.91,4.91,0,1,1,4.91-4.9A4.9,4.9,0,0,1,427.28,82.88Z"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-miterlimit: 10;
              transform-origin: 427.225px 77.975px;
            "
            id="el7ur9dmnwb04"
            class="animable"
          ></path>
          <polyline
            points="238.9 410.37 250 416.61 261.1 410.37"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 250px 413.49px;
            "
            id="el2r2kuw1jzat"
            class="animable"
          ></polyline>
          <polyline
            points="238.9 415.08 250 421.32 261.1 415.08"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 250px 418.2px;
            "
            id="elbfhvzklzom5"
            class="animable"
          ></polyline>
          <polyline
            points="238.9 419.79 250 426.03 261.1 419.79"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 250px 422.91px;
            "
            id="elg5nbukh4i7f"
            class="animable"
          ></polyline>
          <path
            d="M370.75,431.68H59a1.78,1.78,0,0,1-1.78-1.77V407A1.78,1.78,0,0,1,59,405.21h9.8"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 213.985px 418.445px;
            "
            id="el0vq8q9ecltsi"
            class="animable"
          ></path>
          <line
            x1="417.85"
            y1="431.68"
            x2="385.65"
            y2="431.68"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 401.75px 431.68px;
            "
            id="elcu3xmdj03tp"
            class="animable"
          ></line>
          <path
            d="M108.72,405.21H441A1.78,1.78,0,0,1,442.8,407v22.92a1.78,1.78,0,0,1-1.78,1.77H423.36"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 275.76px 418.45px;
            "
            id="el1qp7bb1k8tw"
            class="animable"
          ></path>
          <line
            x1="76.68"
            y1="405.21"
            x2="97.1"
            y2="405.21"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 86.89px 405.21px;
            "
            id="el3kg9f7zn4yq"
            class="animable"
          ></line>
        </g>
        <g
          id="freepik--character-3--inject-241"
          class="animable"
          style="transform-origin: 381.86px 285.535px"
        >
          <path
            d="M320.92,333.94H442.8a0,0,0,0,1,0,0v51.17a4.4,4.4,0,0,1-4.4,4.4H325.32a4.4,4.4,0,0,1-4.4-4.4V333.94A0,0,0,0,1,320.92,333.94Z"
            style="
              fill: rgb(38, 50, 56);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 381.86px 361.725px;
            "
            id="el4e55yxyyh5r"
            class="animable"
          ></path>
          <path
            d="M325.32,181.56H438.4a4.4,4.4,0,0,1,4.4,4.4v148a0,0,0,0,1,0,0H320.92a0,0,0,0,1,0,0V186A4.4,4.4,0,0,1,325.32,181.56Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 381.86px 257.76px;
            "
            id="ely0ohccimorm"
            class="animable"
          ></path>
          <path
            d="M336.32,264.36c.49-4.93,21-11.45,45.54-11.71,22.86-.24,44.83,7.41,47.8,12.45s-6,69-6,69H341.94S334.83,279.36,336.32,264.36Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 383.189px 293.372px;
            "
            id="eliso66z7rjba"
            class="animable"
          ></path>
          <path
            d="M396.55,254.78a16,16,0,0,1-14.23,8.15c-8.39,0-14.5-7.27-14.5-7.27,2.95-2.65,3.13-7.55,2.69-11.4a34.15,34.15,0,0,0-1.1-5.6h25.08c-1.53,5-1.47,8.62-.88,11.12C394.49,253.46,396.55,254.78,396.55,254.78Z"
            style="
              fill: rgb(191, 191, 191);
              stroke: rgb(38, 50, 56);
              stroke-miterlimit: 10;
              transform-origin: 382.185px 250.796px;
            "
            id="ela9mry7rtbvg"
            class="animable"
          ></path>
          <path
            d="M432.3,300.39s-6.15,26.34-10.63,33.67l-93.17-.12s5-7,8.76-9.45,16.56,1.24,19.08,1.24,46.71-7.08,48.38-7.64,7.06-21.16,7.06-21.16S427.45,297.59,432.3,300.39Z"
            style="
              fill: rgb(191, 191, 191);
              transform-origin: 380.4px 315.495px;
            "
            id="eliyqhtz8lnec"
            class="animable"
          ></path>
          <g
            style="
              clip-path: url('#freepik--clip-path--inject-241');
              transform-origin: 380.4px 315.545px;
            "
            id="eln8g8cie965h"
            class="animable"
          >
            <g id="elhck9t710wo">
              <path
                d="M432.3,300.39s-2.63,11.28-5.72,21.14c-2.51-1.76-6.51-3.28-12.61-2.58-12.66,1.46-21.17,3.24-21.17,3.24s-12.68,5.67-16.58,11.81l-47.72-.06s5-7,8.76-9.45,16.56,1.24,19.08,1.24,46.71-7.08,48.38-7.64,6.61-19.45,7-21a123.65,123.65,0,0,1,16.31,1.86h0A16.64,16.64,0,0,1,432.3,300.39Z"
                style="opacity: 0.15; transform-origin: 380.4px 315.545px"
                class="animable"
              ></path>
            </g>
          </g>
          <path
            d="M432.3,300.39s-6.15,26.34-10.63,33.67l-93.17-.12s5-7,8.76-9.45,16.56,1.24,19.08,1.24,46.71-7.08,48.38-7.64,7.06-21.16,7.06-21.16S427.45,297.59,432.3,300.39Z"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 380.4px 315.495px;
            "
            id="elmov8xsdpx7"
            class="animable"
          ></path>
          <path
            d="M417.2,272.43c-3.62,2.8-7.08,14.28-7.08,14.28l-1.24,13.77s17.14,2.24,22.61,10c0,0,.49-2.43,0-3.54a87.74,87.74,0,0,0,6.4-19.86c2.23-11.43-5-22.49-10.45-24.17"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 423.592px 286.695px;
            "
            id="eld5z5bwgscye"
            class="animable"
          ></path>
          <path
            d="M417.2,272.43c-3.62,2.8-7.08,14.28-7.08,14.28l-1.24,13.77"
            style="
              fill: rgb(38, 50, 56);
              stroke: rgb(255, 255, 255);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 413.04px 286.455px;
            "
            id="elj9ovh9s3ttb"
            class="animable"
          ></path>
          <path
            d="M423.59,297.66c1.9-.16,7.21,1.7,8.15,3.1s1.86,3.25.56,4.42a12.26,12.26,0,0,1,.64,3c0,1.22-1.85,1.77-1.85,1.77a2.67,2.67,0,0,1-1.43,3.45s.54,2.33-1.4,3.26l-1-.74s-6.33.93-9.41,0"
            style="
              fill: rgb(191, 191, 191);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 425.397px 307.155px;
            "
            id="el8l0bvbfl78b"
            class="animable"
          ></path>
          <path
            d="M424.34,305.78a11.17,11.17,0,0,1,1.18-1.85c.66-1.06-1.5-2-.85-2.8,1.72-2.05-.11-3-.11-3-.74-1.86-12.76,1.86-13.51-.37-1.08-3.25,5.44-9.43,1.46-12.66-.58-.48-1.27,3.88-6.3,8.23-2.57,2.22-2.65,8.47-7.52,11.26s-14.91,6.34-25.47,7.46c-5.87.62-15.84,3.59-15.84,3.59s-.11-8-2.17-12.54S338.63,296,338.63,296L333.26,307s5.9,21.13,8.68,27.1l22.16-.32a129.72,129.72,0,0,0,16.39-7,108.6,108.6,0,0,1,24.23-8.62c3-.56,15.15-1.49,16.83-2.42a2.46,2.46,0,0,0,1.21-3.33c-.47-1.25.83-2.36.83-2.36"
            style="
              fill: rgb(191, 191, 191);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 379.453px 309.582px;
            "
            id="elo6nha5j16h"
            class="animable"
          ></path>
          <path
            d="M432.3,305.18s-1.87-1.81-2.3-2.06-3.79-1.12-3.79-1.12"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 429.255px 303.59px;
            "
            id="elf95u4dm781w"
            class="animable"
          ></path>
          <path
            d="M431.09,310s-.84-1.74-2.12-2.13a29.84,29.84,0,0,0-3.32-.68"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 428.37px 308.595px;
            "
            id="elei4nc419a0s"
            class="animable"
          ></path>
          <path
            d="M429.66,313.43s-1.9-1.18-2.71-1.61a8.56,8.56,0,0,0-2.61-.56"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 427px 312.345px;
            "
            id="el2e77tlopjud"
            class="animable"
          ></path>
          <path
            d="M339.32,261.16s-9,.09-11.44,17.86c-1.38,9.81,3.16,25.9,3.72,29.07a8.13,8.13,0,0,0,3.32,4.94s10.8-6.79,21.42-6.35c0,0,1.87-5.64,0-6.2s1.87-11.4-2.38-19"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 342.396px 287.095px;
            "
            id="elmw8cki4s3v"
            class="animable"
          ></path>
          <path
            d="M357.29,304.79s1.86-5.63,0-6.19,1.86-11.4-2.38-19"
            style="
              fill: rgb(38, 50, 56);
              stroke: rgb(255, 255, 255);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 356.513px 292.195px;
            "
            id="el316ujb701ew"
            class="animable"
          ></path>
          <path
            d="M393.61,249.78c-18.12,4.75-21.72-5.6-21.72-5.6l-1.38.08a34.15,34.15,0,0,0-1.1-5.6h25.08C393,243.68,393,247.28,393.61,249.78Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 381.95px 244.844px;
            "
            id="els87ix6b6uap"
            class="animable"
          ></path>
          <path
            d="M400,221.06s2-2.2,3-1.48a4.72,4.72,0,0,1,1.63,4.63c-.55,1.87-2.89,5.11-3.07,7s-1.4,4-2.73,2.79S400,221.06,400,221.06Z"
            style="
              fill: rgb(191, 191, 191);
              stroke: rgb(38, 50, 56);
              stroke-miterlimit: 10;
              transform-origin: 401.586px 226.896px;
            "
            id="eldvso46n8l2b"
            class="animable"
          ></path>
          <path
            d="M364,221.06s-2-2.2-3-1.48a4.72,4.72,0,0,0-1.63,4.63c.54,1.87,2.89,5.11,3.07,7s1.4,4,2.73,2.79S364,221.06,364,221.06Z"
            style="
              fill: rgb(191, 191, 191);
              stroke: rgb(38, 50, 56);
              stroke-miterlimit: 10;
              transform-origin: 362.414px 226.896px;
            "
            id="elborz98kn3po"
            class="animable"
          ></path>
          <path
            d="M381.52,195.69c25.41,0,19.37,33.83,14.69,44.69-1.64,3.82-10.15,8.82-14.26,8.82-3.83,0-12.58-6-14.13-9.56C363.09,228.72,357.31,195.69,381.52,195.69Z"
            style="
              fill: rgb(191, 191, 191);
              stroke: rgb(38, 50, 56);
              stroke-miterlimit: 10;
              transform-origin: 381.999px 222.445px;
            "
            id="elync3f7jmfgd"
            class="animable"
          ></path>
          <path
            d="M385.83,216.58s6.61-2.05,8.66,2"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 390.16px 217.321px;
            "
            id="elz6e5spq0xs9"
            class="animable"
          ></path>
          <path
            d="M390.73,222.14c0,.78-.4,1.41-.89,1.41s-.88-.63-.88-1.41.39-1.42.88-1.42S390.73,221.36,390.73,222.14Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 389.845px 222.135px;
            "
            id="elcpxo1lck6ks"
            class="animable"
          ></path>
          <path
            d="M378.07,216.58s-6.61-2.05-8.66,2"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 373.74px 217.321px;
            "
            id="elt9qykz012m9"
            class="animable"
          ></path>
          <path
            d="M373.17,222.14c0,.78.4,1.41.89,1.41s.88-.63.88-1.41-.39-1.42-.88-1.42S373.17,221.36,373.17,222.14Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 374.055px 222.135px;
            "
            id="elfh54rpasoud"
            class="animable"
          ></path>
          <path
            d="M392,204.34a32.24,32.24,0,0,1-19.58,0s-3.43-.2-4.78,1.52,0,7,.36,9.21-3,3.67-2.52,9.14l-1.29,1.89s-3.59-8.8-2.69-16.38,5.69-10.53,5.69-10.53,2.18-6.54,15-6.49c13.78.05,15.17,7.51,15.17,7.51s9.34,6.23,2.43,26.53l-1.5-2.53a11.36,11.36,0,0,0-1.74-7.7c-1.2-1.75.72-7,.27-9.74S392,204.34,392,204.34Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 381.846px 209.72px;
            "
            id="el05nxtvrijbrb"
            class="animable"
          ></path>
          <path
            d="M383.46,220.72s.38,7.82,1.5,10-2.79,2.57-4.47,1.27"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 382.824px 226.727px;
            "
            id="eljedrfbjgip"
            class="animable"
          ></path>
          <path
            d="M376.39,236.17a5,5,0,0,0,2.36,3c1.74.75,7,.44,8-.19s1.49-2.65,1.49-2.65"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 382.315px 237.889px;
            "
            id="elbbtnp2z3v4h"
            class="animable"
          ></path>
          <path
            d="M375.83,236s5.26,1.49,13.13,0"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 382.395px 236.331px;
            "
            id="el6i66365qrj7"
            class="animable"
          ></path>
          <path
            d="M387.64,205.41s-2.86.06-3,1.3-.12,3.11-2.79,2.36c0,0-.94,2.28-3.17.65s-2.86.59-2.86.59-1,0-.89-1.24c0,0-2.46-.26-2.46,1.24s-3.86,2.62-3.86,1.12c0,0-.65,3.48-3.12,2.74s-3.66,3.17-3.66,3.17-1.58-2.55-.44-4.66c0,0-2.22-2.24-1.6-4.6a16.59,16.59,0,0,1,1.6-4s-2.24-3.6.94-5.34,2.56-2.67,2.56-3.07,1.36-3.14,3.85-2.27,3.29-2.24,5.31-2.86,5.75-.49,6.43,0a3.52,3.52,0,0,0,3,.5c.94-.37,3.7-1.12,4.18-.12a3.72,3.72,0,0,0,2.52,1.76c.95.22,1.95-1.22,2.94,0S387.64,205.41,387.64,205.41Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 376.452px 203.731px;
            "
            id="elcxypqnl5y5b"
            class="animable"
          ></path>
          <path
            d="M387.64,205.41c2.69-.56,3.47,1.3,3.72,2.67s2.48,1.64,2.48,1.64,1.25.84,1.25,1.22.62-.25.62-1.74c0,0,.56,2.48.84,3.85a2.68,2.68,0,0,0,3.84,1.74c1.94-.87,1.75,1.87,1.75,1.87a2.82,2.82,0,0,0,.9-3.36s1.74-2.61,1-4.85,1.24-4.35-.62-5.84-1.71-1.24-1.85-2.23.17-2.49-1.17-2.86-3.07-1.06-3.07-1.83-2.11-2.64-5.71-1.28S387.64,205.41,387.64,205.41Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 395.942px 205.294px;
            "
            id="elc2vmaz9lb7p"
            class="animable"
          ></path>
          <path
            d="M378.12,343.31H331.51a1.83,1.83,0,1,0,0,3.66h46.61a1.83,1.83,0,1,0,0-3.66Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 354.815px 345.14px;
            "
            id="elqx78unsmsl"
            class="animable"
          ></path>
          <path
            d="M433,358.34H330.71a1,1,0,1,0,0,2.05H433a1,1,0,0,0,0-2.05Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 381.855px 359.365px;
            "
            id="el264xleuqnyo"
            class="animable"
          ></path>
          <path
            d="M414.17,363.44H330.71a1,1,0,1,0,0,2.05h83.46a1,1,0,0,0,0-2.05Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 372.44px 364.465px;
            "
            id="el223xh5j1imu"
            class="animable"
          ></path>
          <path
            d="M357.64,350.25H330.71a1,1,0,1,0,0,2.05h26.93a1,1,0,0,0,0-2.05Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 344.175px 351.275px;
            "
            id="elv61patlebl"
            class="animable"
          ></path>
          <rect
            x="429.45"
            y="374.73"
            width="4.58"
            height="4.58"
            rx="1.06"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 431.74px 377.02px;
            "
            id="el2f1fs3iaoy5"
            class="animable"
          ></rect>
          <rect
            x="420.03"
            y="374.73"
            width="4.58"
            height="4.58"
            rx="1.06"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 422.32px 377.02px;
            "
            id="elkyp6u3dch3e"
            class="animable"
          ></rect>
          <rect
            x="410.61"
            y="374.73"
            width="4.58"
            height="4.58"
            rx="1.06"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 412.9px 377.02px;
            "
            id="el8dk1qsai3md"
            class="animable"
          ></rect>
        </g>
        <g
          id="freepik--character-2--inject-241"
          class="animable"
          style="transform-origin: 250px 285.535px"
        >
          <path
            d="M189.06,333.94H310.94a0,0,0,0,1,0,0v51.17a4.4,4.4,0,0,1-4.4,4.4H193.46a4.4,4.4,0,0,1-4.4-4.4V333.94A0,0,0,0,1,189.06,333.94Z"
            style="
              fill: rgb(38, 50, 56);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 250px 361.725px;
            "
            id="elcpejsicwig"
            class="animable"
          ></path>
          <path
            d="M246.26,343.31H199.65a1.83,1.83,0,1,0,0,3.66h46.61a1.83,1.83,0,1,0,0-3.66Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 222.955px 345.14px;
            "
            id="el4zea2xc19x"
            class="animable"
          ></path>
          <path
            d="M301.15,358.34H198.85a1,1,0,1,0,0,2.05h102.3a1,1,0,1,0,0-2.05Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 250px 359.365px;
            "
            id="els8bjbna3vjm"
            class="animable"
          ></path>
          <path
            d="M282.31,363.44H198.85a1,1,0,1,0,0,2.05h83.46a1,1,0,0,0,0-2.05Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 240.58px 364.465px;
            "
            id="elqxrieb9oglt"
            class="animable"
          ></path>
          <path
            d="M225.78,350.25H198.85a1,1,0,1,0,0,2.05h26.93a1,1,0,1,0,0-2.05Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 212.315px 351.275px;
            "
            id="el6zu7kqd9x0v"
            class="animable"
          ></path>
          <rect
            x="297.59"
            y="374.73"
            width="4.58"
            height="4.58"
            rx="1.06"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 299.88px 377.02px;
            "
            id="eloymvlzl63pq"
            class="animable"
          ></rect>
          <rect
            x="288.17"
            y="374.73"
            width="4.58"
            height="4.58"
            rx="1.06"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 290.46px 377.02px;
            "
            id="elxxrhkpbo8nh"
            class="animable"
          ></rect>
          <rect
            x="278.75"
            y="374.73"
            width="4.58"
            height="4.58"
            rx="1.06"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 281.04px 377.02px;
            "
            id="elmuecp7ykqi"
            class="animable"
          ></rect>
          <path
            d="M193.46,181.56H306.54a4.4,4.4,0,0,1,4.4,4.4v148a0,0,0,0,1,0,0H189.06a0,0,0,0,1,0,0V186A4.4,4.4,0,0,1,193.46,181.56Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 250px 257.76px;
            "
            id="elq7qpvkmq69"
            class="animable"
          ></path>
          <path
            d="M267.55,228.89c.85,14.47,1.5,22.63,3,34.67s.75,25.09-17.89,30.3-39.13-8.19-39.88-16.77,6.2-29.06,4.5-45.37,13.17-28.61,25.12-27.86S267,219.25,267.55,228.89Z"
            style="
              fill: rgb(146, 164, 227);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 241.889px 249.428px;
            "
            id="elewevs2ih1gi"
            class="animable"
          ></path>
          <path
            d="M257.31,249.7s-1.08,14.88,3.75,24.83"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 259.133px 262.115px;
            "
            id="el5fn15wb4kxe"
            class="animable"
          ></path>
          <path
            d="M223.5,243.43s2.87,14.9-3.16,29.87"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 222.261px 258.365px;
            "
            id="elk3ns59wkv6r"
            class="animable"
          ></path>
          <path
            d="M230.58,255.6a97.7,97.7,0,0,1-1.41,21.49"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 229.924px 266.345px;
            "
            id="eleoyqjwxeawl"
            class="animable"
          ></path>
          <path
            d="M261.06,237.41s.74,10.25,3.25,14.59"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 262.685px 244.705px;
            "
            id="elj2uc1x115x"
            class="animable"
          ></path>
          <path
            d="M310.41,326a22.51,22.51,0,0,0-3.76-4.94c-3.54-3.17-17.33-41.18-24.69-46.54L275.34,309c1.68,3,6.9,9.88,6.62,11.37s2.88,3.72,2.88,3.72c-1.49,2.43,1.5,9.89,1.5,9.89h24.07Z"
            style="
              fill: rgb(153, 153, 153);
              transform-origin: 292.875px 304.25px;
            "
            id="elwujrkja5j9m"
            class="animable"
          ></path>
          <g
            style="
              clip-path: url('#freepik--clip-path-2--inject-241');
              transform-origin: 291.503px 311.875px;
            "
            id="elbjgj4vneliv"
            class="animable"
          >
            <g id="elyokuxzsdkh">
              <path
                d="M307.65,333.94H286.34s-3-7.46-1.5-9.89c0,0-3.15-2.23-2.88-3.72S277,311.94,275.34,309l3.29-17.14,1.91-2.05s1.76,4.45,1.43,7.16a7.59,7.59,0,0,0,2.2-4s6.47,15.58,4.88,23.79c0,0,10.1-2.07,16.77,3.26,0,0-6.78-1.38-8.26,0C297.56,320,308.12,320.2,307.65,333.94Z"
                style="opacity: 0.15; transform-origin: 291.503px 311.875px"
                class="animable"
              ></path>
            </g>
          </g>
          <path
            d="M310.41,326a22.51,22.51,0,0,0-3.76-4.94c-3.54-3.17-17.33-41.18-24.69-46.54L275.34,309c1.68,3,6.9,9.88,6.62,11.37s2.88,3.72,2.88,3.72c-1.49,2.43,1.5,9.89,1.5,9.89h24.07Z"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 292.875px 304.25px;
            "
            id="els144j29bau"
            class="animable"
          ></path>
          <path
            d="M265.4,268.7s-14.74,8.39-21.43,8.39-25.38-8.57-25.38-8.57c5.9-.56,13.35-3.34,14.74-6.5.73-1.65.25-6.95-.35-11.65-.56-4.33-1.24-8.14-1.24-8.14l22.22,3a90.47,90.47,0,0,0-1.27,10.3,29.2,29.2,0,0,0,.23,6.28C254,267.43,265.4,268.7,265.4,268.7Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 241.995px 259.66px;
            "
            id="elsyttxg6rum"
            class="animable"
          ></path>
          <path
            d="M284.82,278.58c-.7-5.21-12.14-8.38-12.14-8.38L267.83,267s-16.6,8.14-23.15,8.57S218.6,267,218.6,267l-4.34,3.17s-11.44,1.15-14.56,5.42,12,58.32,12,58.32h61a158.66,158.66,0,0,1,7-22c3-7.16-2.55-12.31,1.68-25"
            style="
              fill: rgb(153, 153, 153);
              transform-origin: 242.048px 300.455px;
            "
            id="elsq9tzcej3sa"
            class="animable"
          ></path>
          <g
            style="
              clip-path: url('#freepik--clip-path-3--inject-241');
              transform-origin: 242.487px 310.81px;
            "
            id="ellhx9l4aqjm"
            class="animable"
          >
            <g id="elhuijtdkdtid">
              <path
                d="M279.67,311.94a158.66,158.66,0,0,0-7,22h-61s-3.87-13.86-7.28-28.1l9.67-18.16s5.56,3,5,5.67c0,0,4.72,17.54,11.48,18.74s14.66-4.46,25.54-2.52c10.46,1.87,20,3.2,24.42-3.9A13,13,0,0,1,279.67,311.94Z"
                style="opacity: 0.15; transform-origin: 242.487px 310.81px"
                class="animable"
              ></path>
            </g>
          </g>
          <path
            d="M284.82,278.58c-.7-5.21-12.14-8.38-12.14-8.38L267.83,267s-16.6,8.14-23.15,8.57S218.6,267,218.6,267l-4.34,3.17s-11.44,1.15-14.56,5.42,12,58.32,12,58.32h61a158.66,158.66,0,0,1,7-22c3-7.16-2.55-12.31,1.68-25"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 242.048px 300.455px;
            "
            id="el1klltrfdc6b"
            class="animable"
          ></path>
          <path
            d="M263.69,259.66a110.36,110.36,0,0,0,4.8,13.71A37.65,37.65,0,0,1,271,295.91s3.23,1,3.41-3.42,1.25-9.58-1.11-16.87c0,0,3.91,5.74,3,15.07a31.85,31.85,0,0,0-1-17.7c-3.31-9.87-3.93-10.06-5.95-19.56"
            style="
              fill: rgb(146, 164, 227);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 270.399px 274.719px;
            "
            id="elstbwxtod1mg"
            class="animable"
          ></path>
          <path
            d="M272.78,327.5s5-6.05,8.38-6.43,4.7.37,7.08,2.24l1.52,1.18s2.54-2.48,7.62-2.3c6.24.22,12.48,5.78,10.8,11.55H273.9Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 290.619px 327.357px;
            "
            id="elwf376y1smd"
            class="animable"
          ></path>
          <g
            style="
              clip-path: url('#freepik--clip-path-4--inject-241');
              transform-origin: 293.76px 327.36px;
            "
            id="el39bzk1ndo9r"
            class="animable"
          >
            <g id="elvgzcqxstudd">
              <path
                d="M304.18,333.74h-12c-.84-2.09-.68-5-1.17-5.62s-1.48-.89-2.27-1.41S288,324,287,323.47s-2.08-.29-2.47-.49-.23-1.74-1.19-2c1.92.13,3.13.89,4.92,2.3l1.52,1.18a9,9,0,0,1,3.83-1.9C302.18,325.62,303.89,331,304.18,333.74Z"
                style="opacity: 0.15; transform-origin: 293.76px 327.36px"
                class="animable"
              ></path>
            </g>
          </g>
          <path
            d="M272.78,327.5s5-6.05,8.38-6.43,4.7.37,7.08,2.24l1.52,1.18s2.54-2.48,7.62-2.3c6.24.22,12.48,5.78,10.8,11.55H273.9Z"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 290.619px 327.357px;
            "
            id="el9z4b8vk5gm6"
            class="animable"
          ></path>
          <path
            d="M230.58,321.07c12.52.38,22.14,4.66,32.15,5.22s15,.75,18.2,0S293,333.94,293,333.94H228l-12.87-4.11,7.08-7.83Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 254.065px 327.505px;
            "
            id="elg7cv3cc3cwf"
            class="animable"
          ></path>
          <path
            d="M207.14,277.09c7.65,4.85,17.74,42.68,19.53,42.31s3.91,1.67,3.91,1.67-2.39,7.69-2.56,12.87H212.17s-8.07.31-10.43-11.53c-4.54-22.78-6.72-44.39-2-46.79"
            style="
              fill: rgb(153, 153, 153);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 213.838px 304.78px;
            "
            id="el734kqddvjap"
            class="animable"
          ></path>
          <path
            d="M289.76,324.49s3.82,3.1,4.6,5.81"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 292.06px 327.395px;
            "
            id="el31c4hj282ei"
            class="animable"
          ></path>
          <path
            d="M277.71,326.71s4.38-2.06,4.94-2.22"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 280.18px 325.6px;
            "
            id="el8tfs88786i2"
            class="animable"
          ></path>
          <line
            x1="284.51"
            y1="327.36"
            x2="285.82"
            y2="326.71"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 285.165px 327.035px;
            "
            id="eljsolvpqb6gn"
            class="animable"
          ></line>
          <path
            d="M254,245.25a90.47,90.47,0,0,0-1.27,10.3,10.79,10.79,0,0,1-6.82,1.54,14.78,14.78,0,0,1-11.53-7.66l-1.36.94c-.56-4.33-1.24-8.14-1.24-8.14Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 242.89px 249.691px;
            "
            id="elduxh9hdle4p"
            class="animable"
          ></path>
          <path
            d="M225.12,229.13s-2-2.07-3-1.39a4.29,4.29,0,0,0-1.62,4.35c.54,1.75,2.89,4.81,3.07,6.58s1.39,3.8,2.72,2.62S225.12,229.13,225.12,229.13Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 223.54px 234.622px;
            "
            id="elv5jgfen5hwi"
            class="animable"
          ></path>
          <path
            d="M261.11,229.13s2-2.07,3-1.39a4.29,4.29,0,0,1,1.62,4.35c-.54,1.75-2.89,4.81-3.07,6.58s-1.39,3.8-2.72,2.62S261.11,229.13,261.11,229.13Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 262.69px 234.622px;
            "
            id="elzmckp4u6wwg"
            class="animable"
          ></path>
          <path
            d="M243.54,203.86c-25.4,0-18.53,30.71-13.85,41.57,1.64,3.82,9.74,9.16,13.85,9.16,3.83,0,11.48-5,13-8.62C261.3,235.06,267.76,203.86,243.54,203.86Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 243.114px 229.225px;
            "
            id="elherx8vz8cg"
            class="animable"
          ></path>
          <path
            d="M239.24,224.74s-6.62-2-8.66,2"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 234.91px 225.49px;
            "
            id="eldb5rrrcpgf"
            class="animable"
          ></path>
          <ellipse
            cx="235.22"
            cy="230.31"
            rx="0.89"
            ry="1.41"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 235.22px 230.31px;
            "
            id="el6ras1yi3hhl"
            class="animable"
          ></ellipse>
          <path
            d="M247,224.74s6.62-2,8.66,2"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 251.33px 225.49px;
            "
            id="elnkjswne8zxn"
            class="animable"
          ></path>
          <ellipse
            cx="251.01"
            cy="230.31"
            rx="0.89"
            ry="1.41"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 251.01px 230.31px;
            "
            id="elisjbiz399k"
            class="animable"
          ></ellipse>
          <path
            d="M244.78,229.22c-.87,2,1.86,7.95.87,8.95a4,4,0,0,1-2.53,1"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 244.495px 234.195px;
            "
            id="elcmwt94x1d55"
            class="animable"
          ></path>
          <path
            d="M249.62,241.64s-6.21,2.61-11.8,0"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 243.72px 242.22px;
            "
            id="el8kx24pk3ha6"
            class="animable"
          ></path>
          <path
            d="M239.24,208.23s-.8,12.61-4.33,14.22c-.92.42-2-.19-3.8,1.37a12.48,12.48,0,0,0,.81-4.54s-1.34,7.83-10.2,15.35c-2.36,2-4.11,1.71-4.26,0-1-11.71,0-34.1,22.35-35.47a18,18,0,0,1,21.25,8.07,42,42,0,0,1,6.5,22,32.64,32.64,0,0,1-1.25,3.83s.47,5.72-.42,8.59c0,0-4.19-11.69-7.63-14.85-2.3-2.11-2-6.45-3.67-8.63,0,0,.53,2.74-1.24,3.86-.95.6-3.13-.26-4.86-.3a4.77,4.77,0,0,0-2.62.79S245.52,213.69,239.24,208.23Z"
            style="
              fill: rgb(146, 164, 227);
              transform-origin: 242.385px 219.947px;
            "
            id="elc4kk6rvkdlj"
            class="animable"
          ></path>
          <path
            d="M220.34,236.55a4.66,4.66,0,0,1,1.38-1.92c8.75-7.64,10.2-15.35,10.2-15.35a12.48,12.48,0,0,1-.81,4.54c1.8-1.56,2.88-.95,3.8-1.37,3.53-1.61,4.33-14.22,4.33-14.22,6.28,5.46,6.63,14.28,6.63,14.28a4.77,4.77,0,0,1,2.62-.79c1.73,0,3.91.9,4.86.3,1.77-1.12,1.24-3.86,1.24-3.86,1.68,2.18,1.37,6.52,3.67,8.63,2.12,1.94,4.51,7.11,6.05,10.81"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 242.325px 222.915px;
            "
            id="elgyjg9c9fqei"
            class="animable"
          ></path>
          <path
            d="M217.27,243.43a54.87,54.87,0,0,0,.46-6.23c-1.31-10.59-2-36.56,22.08-38a18,18,0,0,1,21.25,8.07,42.21,42.21,0,0,1,6.5,23.46"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 242.39px 220.857px;
            "
            id="el4913xdzsxv5"
            class="animable"
          ></path>
          <path
            d="M254,213.86s-1.62-9.32-11.11-12"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 248.445px 207.86px;
            "
            id="elh785kaf63t"
            class="animable"
          ></path>
          <path
            d="M259.56,208.23a32.26,32.26,0,0,1,4.13,21"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 261.792px 218.73px;
            "
            id="elveqysldaswb"
            class="animable"
          ></path>
          <path
            d="M234.34,203.74s-1.91,12.58-10.15,20"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 229.265px 213.74px;
            "
            id="el9ja760qzhj"
            class="animable"
          ></path>
          <path
            d="M227.68,207.52s-9,8.27-10.47,19.79"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 222.445px 217.415px;
            "
            id="elitq32hh5a8s"
            class="animable"
          ></path>
          <path
            d="M239.24,208.23a31.47,31.47,0,0,0,0-4.49"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 239.28px 205.985px;
            "
            id="eltxvlz9tzc5"
            class="animable"
          ></path>
          <path
            d="M217.39,284.74s2.84,6.06,1.2,11.27"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 218.245px 290.375px;
            "
            id="elj3tx6ukbb6"
            class="animable"
          ></path>
          <path
            d="M284.51,290.69a9.57,9.57,0,0,1-4.33,7.76"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 282.345px 294.57px;
            "
            id="el3jk74875itr"
            class="animable"
          ></path>
          <path
            d="M287,321.07s6.14-3.31,12.9-1.65"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 293.45px 320.012px;
            "
            id="elq0q7vg2szp"
            class="animable"
          ></path>
          <path
            d="M224.19,320s-4.92,3.17-9,2.18"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 219.69px 321.186px;
            "
            id="elpd5be17n4jn"
            class="animable"
          ></path>
        </g>
        <g
          id="freepik--character-1--inject-241"
          class="animable"
          style="transform-origin: 118.14px 285.535px"
        >
          <path
            d="M57.2,333.94H179.08a0,0,0,0,1,0,0v51.17a4.4,4.4,0,0,1-4.4,4.4H61.6a4.4,4.4,0,0,1-4.4-4.4V333.94A0,0,0,0,1,57.2,333.94Z"
            style="
              fill: rgb(38, 50, 56);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 118.14px 361.725px;
            "
            id="ela255evmqxeg"
            class="animable"
          ></path>
          <path
            d="M61.6,181.56H174.68a4.4,4.4,0,0,1,4.4,4.4v148a0,0,0,0,1,0,0H57.2a0,0,0,0,1,0,0V186A4.4,4.4,0,0,1,61.6,181.56Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 118.14px 257.76px;
            "
            id="elw2q7imh2ecn"
            class="animable"
          ></path>
          <path
            d="M65.14,302.9s-6.46,10.46-7.94,11.79V328l22.52-12.57,2.4-16.42S68.77,298.69,65.14,302.9Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 69.66px 313.502px;
            "
            id="el55m20r5uj0j"
            class="animable"
          ></path>
          <g
            style="
              clip-path: url('#freepik--clip-path-5--inject-241');
              transform-origin: 69.66px 313.502px;
            "
            id="eldswu9zzh2hk"
            class="animable"
          >
            <g id="eln3755vrop9q">
              <path
                d="M65.14,302.9s-6.46,10.46-7.94,11.79V328l22.52-12.57,2.4-16.42S68.77,298.69,65.14,302.9Z"
                style="
                  fill: rgb(146, 164, 227);
                  opacity: 0.4;
                  transform-origin: 69.66px 313.502px;
                "
                class="animable"
              ></path>
            </g>
          </g>
          <path
            d="M65.14,302.9s-6.46,10.46-7.94,11.79V328l22.52-12.57,2.4-16.42S68.77,298.69,65.14,302.9Z"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 69.66px 313.502px;
            "
            id="ellbwebp4hcv9"
            class="animable"
          ></path>
          <path
            d="M89.31,261c-10.76,5-17.11,24.49-22.16,38.59,0,0-2.35,1.58-2,3.27,0,0,1.9-1.52,7.49-1s11.6,14.71,11.6,14.71l14.92-17"
            style="
              fill: rgb(146, 164, 227);
              transform-origin: 82.1372px 288.785px;
            "
            id="elioc4472xkkb"
            class="animable"
          ></path>
          <g
            style="
              clip-path: url('#freepik--clip-path-6--inject-241');
              transform-origin: 82.1372px 288.785px;
            "
            id="elm5dqgt1dudj"
            class="animable"
          >
            <g id="eltwf4e7gqr4">
              <path
                d="M89.31,261c-10.76,5-17.11,24.49-22.16,38.59,0,0-2.35,1.58-2,3.27,0,0,1.9-1.52,7.49-1s11.6,14.71,11.6,14.71l14.92-17"
                style="opacity: 0.15; transform-origin: 82.1372px 288.785px"
                class="animable"
              ></path>
            </g>
          </g>
          <path
            d="M89.31,261c-10.76,5-17.11,24.49-22.16,38.59,0,0-2.35,1.58-2,3.27,0,0,1.9-1.52,7.49-1s11.6,14.71,11.6,14.71l14.92-17"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 82.1372px 288.785px;
            "
            id="elx3we5s57z08"
            class="animable"
          ></path>
          <path
            d="M87.79,263.5A9.15,9.15,0,0,1,89.31,261c4.33-4.33,36.47-10,36.47-10A110.07,110.07,0,0,1,147.52,256c12.52,4.09,21.18,6,23.83,15.39s-2.65,33-2.65,33l-2.41,29.6H83.06s-1.48-28.74-2.5-33.12c-.59-2.55,1-14.13,3.29-24.22"
            style="
              fill: rgb(146, 164, 227);
              transform-origin: 126.264px 292.495px;
            "
            id="el0ybt0tevwtw"
            class="animable"
          ></path>
          <g
            style="
              clip-path: url('#freepik--clip-path-7--inject-241');
              transform-origin: 125.618px 308.405px;
            "
            id="el7b5ftuju6q2"
            class="animable"
          >
            <g id="elfhhfymzm7dl">
              <path
                d="M170.84,292.62c-1,6.5-2.14,11.72-2.14,11.72l-1,12.83c-3.69,4.7-10.78,12.79-18.86,16.77H104.73L89,317.81l-6.54,6.07c-.53-8.74-1.32-20.4-1.94-23.06-.47-2,.44-9.79,2-17.95l39.05,46.24,28.3-18.3,15.83-23.13Z"
                style="opacity: 0.15; transform-origin: 125.618px 308.405px"
                class="animable"
              ></path>
            </g>
          </g>
          <path
            d="M87.79,263.5A9.15,9.15,0,0,1,89.31,261c4.33-4.33,36.47-10,36.47-10A110.07,110.07,0,0,1,147.52,256c12.52,4.09,21.18,6,23.83,15.39s-2.65,33-2.65,33l-2.41,29.6H83.06s-1.48-28.74-2.5-33.12c-.59-2.55,1-14.13,3.29-24.22"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 126.264px 292.495px;
            "
            id="el6x8seucdmg6"
            class="animable"
          ></path>
          <path
            d="M112.21,238.67s5.34,11.54,0,16.36c0,0,2,8.17,5.53,10.1s21.61-10.35,21.61-10.35-4.12-12.26-2.06-16.11Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 125.78px 252.003px;
            "
            id="elwhiw2kievao"
            class="animable"
          ></path>
          <path
            d="M142.75,221.06s2-2.2,3-1.48a4.7,4.7,0,0,1,1.63,4.63c-.54,1.87-2.89,5.11-3.07,7s-1.4,4-2.73,2.79S142.75,221.06,142.75,221.06Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 144.337px 226.896px;
            "
            id="el4l8qqdqvubx"
            class="animable"
          ></path>
          <path
            d="M106.75,221.06s-2-2.2-3-1.48a4.72,4.72,0,0,0-1.63,4.63c.55,1.87,2.89,5.11,3.07,7s1.4,4,2.73,2.79S106.75,221.06,106.75,221.06Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 105.164px 226.896px;
            "
            id="elzth7iejfp7"
            class="animable"
          ></path>
          <path
            d="M124.32,195.69c25.41,0,18.53,30.71,13.86,41.57-1.64,3.82-9.74,9.16-13.86,9.16-3.82,0-11.47-5-13-8.61C106.57,226.89,100.11,195.69,124.32,195.69Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 124.752px 221.055px;
            "
            id="elsmo0z0jaot"
            class="animable"
          ></path>
          <path
            d="M128.63,216.58s6.62-2.05,8.66,2"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 132.96px 217.321px;
            "
            id="elvny19838ynk"
            class="animable"
          ></path>
          <path
            d="M133.53,222.14c0,.78-.4,1.41-.89,1.41s-.88-.63-.88-1.41.39-1.42.88-1.42S133.53,221.36,133.53,222.14Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 132.645px 222.135px;
            "
            id="el4m0j9yqzch3"
            class="animable"
          ></path>
          <path
            d="M120.87,216.58s-6.61-2.05-8.66,2"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 116.54px 217.321px;
            "
            id="el7o6spfed8xm"
            class="animable"
          ></path>
          <path
            d="M116,222.14c0,.78.4,1.41.89,1.41s.88-.63.88-1.41-.39-1.42-.88-1.42S116,221.36,116,222.14Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 116.885px 222.135px;
            "
            id="eleuazwqisbo"
            class="animable"
          ></path>
          <path
            d="M121.77,227.94c-1,1,2.36,2.71,3,2.71s3.16-1.33,3.16-2.11"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 124.758px 229.295px;
            "
            id="el8la25qa2hcr"
            class="animable"
          ></path>
          <path
            d="M108.32,224.21s1.5,6.8,2.16,7.4,3.07,2.47,3.07,2.47,4.45-2.23,5.35-2.29,3.79.54,6.14.54,4-1,5.35-.3,4.87,2.71,4.87,2.71,3.49-3,3.67-3.13,2.16-7.4,2.16-7.4l.73.62s-.79,16.94-2.11,18.75-10,7-15,7-15-5.24-15.53-6.86S107.66,225.48,108.32,224.21Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 124.96px 237.395px;
            "
            id="elum30no6cr0c"
            class="animable"
          ></path>
          <path
            d="M117.34,235.55s1.35,1.17,2.07,1a30.37,30.37,0,0,1,5-.48c1.7,0,3.48.44,4.84.51a5.42,5.42,0,0,0,2.48-.51"
            style="
              fill: none;
              stroke: rgb(255, 255, 255);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 124.535px 236.066px;
            "
            id="elw0iqvlmmtda"
            class="animable"
          ></path>
          <path
            d="M134.84,204.34a32.24,32.24,0,0,1-19.58,0s-3.42-.2-4.78,1.52,0,7,.36,9.21-3,3.67-2.52,9.14l-.45,2.07s-3.7-9.4-2.8-17,5-10.11,5-10.11,2.18-6.54,15-6.49c13.78.05,15.17,7.51,15.17,7.51s8.57,6.47,1.66,26.77l-.73-2.77a11.36,11.36,0,0,0-1.74-7.7c-1.2-1.75.72-7,.27-9.74S134.84,204.34,134.84,204.34Z"
            style="
              fill: rgb(38, 50, 56);
              transform-origin: 124.761px 209.82px;
            "
            id="elm5vxmi1hbia"
            class="animable"
          ></path>
          <path
            d="M68.71,311s1.74-10.41,3.27-11.75c4-3.47,3.85-4.91,6.36-6.24a6.82,6.82,0,0,0,3.36-5.35s4.31,1.1-.73,7.46a17.55,17.55,0,0,0-2.51,4.49c-.47,1.25,2.94,2.27,7.57,1.1,5.82-1.46,10,6.67,3,11a54,54,0,0,0-10.73,9L70,333.94H57.2V319.86S65.83,315.35,68.71,311Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 74.9458px 310.8px;
            "
            id="elam6laf81ytk"
            class="animable"
          ></path>
          <path
            d="M84.65,313.36s3.44-2.4,5.66-2.55"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 87.48px 312.085px;
            "
            id="elu1korr5fcp"
            class="animable"
          ></path>
          <path
            d="M84.65,308a14.65,14.65,0,0,0,3.13-1.89c.78-.82,3.44-3.82,3.44-3.82"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 87.935px 305.145px;
            "
            id="elsa51igllj4n"
            class="animable"
          ></path>
          <path
            d="M83,265.32c-1.67-.53-6.55,0-7.81-.47s-2.84.73-1.87,3,7.83,2.35,7.83,2.35Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 78.0097px 267.475px;
            "
            id="el68n4lrcppq6"
            class="animable"
          ></path>
          <path
            d="M76.68,267.22S71.4,266.54,70,267c-.48.14-1.66,3.5-1.12,6.76s6.16,3.56,6.16,3.56Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 72.7107px 272.08px;
            "
            id="elwyu4n80tffp"
            class="animable"
          ></path>
          <path
            d="M70.19,270.22a2.49,2.49,0,0,0,2.66,1.32"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 71.52px 270.9px;
            "
            id="elyamqx5zqohb"
            class="animable"
          ></path>
          <path
            d="M71.4,272.19s-4.34,2.19-4.7,4.05.91,4.77.91,4.77l5.24-.31Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 69.7429px 276.6px;
            "
            id="ely3pq13e1h1s"
            class="animable"
          ></path>
          <path
            d="M69.32,279.28a41.16,41.16,0,0,0-2.86,3.05c-.61.85,2.22,5.79,2.86,6.51s6.25,1.08,6.25,1.08S72.18,280.81,69.32,279.28Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 70.9722px 284.6px;
            "
            id="elapu21nydak5"
            class="animable"
          ></path>
          <path
            d="M70.19,287.46S73,287,72.56,284.6"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 71.3984px 286.03px;
            "
            id="el1l94txpvful"
            class="animable"
          ></path>
          <path
            d="M71,286c3,2.64,7.91,6.81,10.54,8.05,3.44,1.63,16.32,28,29.33,39.87h36.68s8.29-11.17,11.33-17.7S167,291.67,167,291.67l-14-4.14L139.24,303.4l-9.47,15.17s-33.71-27.08-37.68-35.48S85,265.32,83,265.32c-2.33,0-1.73,1.82-6.33,1.9-2.15,0-2.33,2.57-4.2,4.2s-3.28.84-3,6.09c.18,3.49-2.87,3.23-1,6.06"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 117.43px 299.62px;
            "
            id="ely7yl4s0v54"
            class="animable"
          ></path>
          <path
            d="M150.9,265.33c-3.85,2.2-8.72,20.73-8.21,24.82s-5.26,12.27-4.3,14.43c0,0,7.94-.72,12.51,1.45s8.42,8.42,7.7,11.78c0,0,2.4,0,2.4-1.2s8.9-13,12.51-21.41,4.39-26.23-7.44-31.64"
            style="
              fill: rgb(146, 164, 227);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 157.073px 290.685px;
            "
            id="el4l62efgrufi"
            class="animable"
          ></path>
          <path
            d="M81,296.22s1.51-4.57,7.46-9.14c3.84-2.95,5.53-2.17,5.53-2.17l3.13,4.45-.38.67a13.92,13.92,0,0,0-4.91,3,22.32,22.32,0,0,0-5.9,7.14H84.65Z"
            style="
              fill: rgb(117, 117, 117);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 89.06px 292.493px;
            "
            id="el6rpufdy2s22"
            class="animable"
          ></path>
          <path
            d="M94.7,290a4.4,4.4,0,1,1-4.39-4.39A4.4,4.4,0,0,1,94.7,290Z"
            style="
              fill: rgb(255, 255, 255);
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 90.3px 290.01px;
            "
            id="elhbip3lpt2s7"
            class="animable"
          ></path>
          <path
            d="M139.35,277.27s-.78,10.6,1.85,14.94"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 140.221px 284.74px;
            "
            id="el4st8vxivcvh"
            class="animable"
          ></path>
          <path
            d="M110.87,267.49s4.94,3.56,15.39-2.16"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 118.565px 266.957px;
            "
            id="elbxsm1y5r99a"
            class="animable"
          ></path>
          <path
            d="M87.93,321.07s9.64,10.71,14,12.87"
            style="
              fill: none;
              stroke: rgb(38, 50, 56);
              stroke-linecap: round;
              stroke-linejoin: round;
              transform-origin: 94.93px 327.505px;
            "
            id="el1czvpwcnt08"
            class="animable"
          ></path>
          <path
            d="M114.41,343.31H67.79a1.83,1.83,0,0,0,0,3.66h46.62a1.83,1.83,0,0,0,0-3.66Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 91.1px 345.14px;
            "
            id="elg70k1o9h95r"
            class="animable"
          ></path>
          <path
            d="M169.29,358.34H67a1,1,0,0,0,0,2.05h102.3a1,1,0,1,0,0-2.05Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 118.15px 359.365px;
            "
            id="elbf8zdajllmc"
            class="animable"
          ></path>
          <path
            d="M150.45,363.44H67a1,1,0,0,0,0,2.05h83.46a1,1,0,0,0,0-2.05Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 108.73px 364.465px;
            "
            id="elpfx7y50hesc"
            class="animable"
          ></path>
          <path
            d="M93.92,350.25H67a1,1,0,0,0,0,2.05H93.92a1,1,0,1,0,0-2.05Z"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 80.46px 351.275px;
            "
            id="elpizye0lczl9"
            class="animable"
          ></path>
          <rect
            x="165.73"
            y="374.73"
            width="4.58"
            height="4.58"
            rx="1.06"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 168.02px 377.02px;
            "
            id="elspb4z7r9xv"
            class="animable"
          ></rect>
          <rect
            x="156.31"
            y="374.73"
            width="4.58"
            height="4.58"
            rx="1.06"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 158.6px 377.02px;
            "
            id="elcgrklldcz6"
            class="animable"
          ></rect>
          <rect
            x="146.89"
            y="374.73"
            width="4.58"
            height="4.58"
            rx="1.06"
            style="
              fill: rgb(255, 255, 255);
              transform-origin: 149.18px 377.02px;
            "
            id="elyx76ywtvthb"
            class="animable"
          ></rect>
        </g>
        <defs>
          <filter id="active" height="200%">
            <feMorphology
              in="SourceAlpha"
              result="DILATED"
              operator="dilate"
              radius="2"
            ></feMorphology>
            <feFlood
              flood-color="#32DFEC"
              flood-opacity="1"
              result="PINK"
            ></feFlood>
            <feComposite
              in="PINK"
              in2="DILATED"
              operator="in"
              result="OUTLINE"
            ></feComposite>
            <feMerge>
              <feMergeNode in="OUTLINE"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
          <filter id="hover" height="1-">
            <feMorphology
              in="SourceAlpha"
              result="DILATED"
              operator="dilate"
              radius="2"
            ></feMorphology>
            <feFlood
              flood-color="#ff0000"
              flood-opacity="0.5"
              result="PINK"
            ></feFlood>
            <feComposite
              in="PINK"
              in2="DILATED"
              operator="in"
              result="OUTLINE"
            ></feComposite>
            <feMerge>
              <feMergeNode in="OUTLINE"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
            <feColorMatrix
              type="matrix"
              values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "
            ></feColorMatrix>
          </filter>
        </defs>
        <defs>
          <clipPath id="freepik--clip-path--inject-241">
            <path
              d="M432.3,300.39s-6.15,26.34-10.63,33.67l-93.17-.12s5-7,8.76-9.45,16.56,1.24,19.08,1.24,46.71-7.08,48.38-7.64,7.06-21.16,7.06-21.16S427.45,297.59,432.3,300.39Z"
              style="
                fill: #bfbfbf;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
          </clipPath>
          <clipPath id="freepik--clip-path-2--inject-241">
            <path
              d="M310.41,326a22.51,22.51,0,0,0-3.76-4.94c-3.54-3.17-17.33-41.18-24.69-46.54L275.34,309c1.68,3,6.9,9.88,6.62,11.37s2.88,3.72,2.88,3.72c-1.49,2.43,1.5,9.89,1.5,9.89h24.07Z"
              style="
                fill: #999;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
          </clipPath>
          <clipPath id="freepik--clip-path-3--inject-241">
            <path
              d="M284.82,278.58c-.7-5.21-12.14-8.38-12.14-8.38L267.83,267s-16.6,8.14-23.15,8.57S218.6,267,218.6,267l-4.34,3.17s-11.44,1.15-14.56,5.42,12,58.32,12,58.32h61a158.66,158.66,0,0,1,7-22c3-7.16-2.55-12.31,1.68-25"
              style="
                fill: #999;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
          </clipPath>
          <clipPath id="freepik--clip-path-4--inject-241">
            <path
              d="M272.78,327.5s5-6.05,8.38-6.43,4.7.37,7.08,2.24l1.52,1.18s2.54-2.48,7.62-2.3c6.24.22,12.48,5.78,10.8,11.55H273.9Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
          </clipPath>
          <clipPath id="freepik--clip-path-5--inject-241">
            <path
              d="M65.14,302.9s-6.46,10.46-7.94,11.79V328l22.52-12.57,2.4-16.42S68.77,298.69,65.14,302.9Z"
              style="
                fill: #fff;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
          </clipPath>
          <clipPath id="freepik--clip-path-6--inject-241">
            <path
              d="M89.31,261c-10.76,5-17.11,24.49-22.16,38.59,0,0-2.35,1.58-2,3.27,0,0,1.9-1.52,7.49-1s11.6,14.71,11.6,14.71l14.92-17"
              style="
                fill: #92a4e3;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
          </clipPath>
          <clipPath id="freepik--clip-path-7--inject-241">
            <path
              d="M87.79,263.5A9.15,9.15,0,0,1,89.31,261c4.33-4.33,36.47-10,36.47-10A110.07,110.07,0,0,1,147.52,256c12.52,4.09,21.18,6,23.83,15.39s-2.65,33-2.65,33l-2.41,29.6H83.06s-1.48-28.74-2.5-33.12c-.59-2.55,1-14.13,3.29-24.22"
              style="
                fill: #92a4e3;
                stroke: #263238;
                stroke-linecap: round;
                stroke-linejoin: round;
              "
            ></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
  <span class="line"></span>
  <div class="mission" style="display: flex; flex-direction: column;">
    <div class="right">
      <h1>Mission Statement</h1>
      <hr />
      <p>
        our mission is to delve into the intricate workings of our planet
        and uncover the mysteries surrounding Earth's temperature. We are
        dedicated to conducting comprehensive research, employing innovative
        technologies, and fostering collaborative partnerships to enhance
        our understanding of climate dynamics and temperature fluctuations..
      </p>

      <p>
        International Cooperation: We recognize that understanding Earth's
        temperature requires global collaboration and cooperation. We
        actively collaborate with international organizations, research
        institutions, and governmental bodies to share knowledge, data, and
        expertise, fostering a collective effort to address climate change
        on a global scale.
      </p>

      <p>
        By pursuing these objectives, we aspire to contribute to the global
        effort of mitigating climate change, protecting ecosystems, and
        ensuring the well-being of future generations. Through our
        endeavors, we aim to unlock the secrets of Earth's temperature,
        drive evidence-based decision-making, and inspire positive action
        for a sustainable and resilient world.
      </p>
    </div>

    <div class="left">
      <img src="/about/Earth-and-Moon-rafiki.jpeg" />
    </div>
  </div>

  <span class="line"></span>

  <div class="team">
    <h1>Our Team</h1>
    <hr />
    <div class="team-section">
      <div class="team-member">
        <img src="/about/Untitled image.jpg" alt="Team Member 3" />
        <h3>Eslam Ragaeie</h3>
        <p class="role">CEO & Founder</p>
        <p>
          development professional with a wealth of experience and
          creativity to every project.
        </p>
        <div class="zlinks"><a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-linkedin"></a></div>
      </div>
      <div class="team-member">
        <img src="/about/convert.png" alt="Team Member 1" />
        <h3>Sara Abdel-Aziz</h3>
        <p class="role">Web Designer</p>
        <p>
          With an eye for detail and a passion for user experience and
          appropriate color, crafts intuitive websites.
        </p>
        <div class="zlinks"><a target="_blank"  href="#" class="fa fa-facebook"></a>
        <a target="_blank"  href="#" class="fa fa-twitter"></a>
        <a target="_blank"  href="#" class="fa fa-linkedin"></a></div>
      </div>
      <div class="team-member">
        <img src="/about/ziad.jpeg" alt="Team Member 2" />
        <h3>Ziad Aboalmajd</h3>
        <p class="role">Technical Lead</p>
        <p>
          ziad's technical expertise and problem-solving skills ensure our
          websites are built on a strong, reliable foundation.
        </p>
        <div class="zlinks"><a target="_blank"  href="https://www.facebook.com/ziad.gamal.771/" class="fa fa-facebook"></a>
        <a target="_blank"  href="#" class="fa fa-twitter"></a>
        <a target="_blank"  href="https://www.linkedin.com/in/ziad-aboalmajd-17332b241/" class="fa fa-linkedin"></a></div>
      </div>
      <div class="team-member">
        <img src="/about/mohamed.jpeg" alt="Team Member 3" />
        <h3>Mohamed Gamal</h3>
        <p class="role">Technical Web</p>
        <p>
          With Strong backgrounds. he collaborates seamlessly to deliver
          exceptional results.
        </p>
        <div class="zlinks"><a target="_blank"  href="https://www.facebook.com/m7mDGaMaL.MGM3?mibextid=ZbWKwL" class="fa fa-facebook"></a>
        <a target="_blank" href="https://www.instagram.com/__m7md_gamal__?igsh=NTV6bHhjMGpzMXc=" class="fa fa-twitter"></a>
        <a target="_blank" href="https://www.linkedin.com/in/mohamed-abdelrehem-20607324b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="fa fa-linkedin"></a></div>
      </div>
      <div class="team-member move">
        <img
          src="/about/WhatsApp Image 2024-04-25 at 12.14.39 AM.jpeg"
          alt="Team Member 3"
        />
        <h3>Omar M. Fattouh</h3>
        <p class="role">Technical Web</p>
        <p>
          Provide individual strengths and diverse perspectives to drive
          innovation and deliver the best possible solutions.
        </p>
        <div class="zlinks"><a target="_blank"  href="https://www.facebook.com/profile.php?id=100086566063431&mibextid=ZbWKwL" class="fa fa-facebook"></a>
        <a target="_blank"  href="https://www.instagram.com/je.0mar?igsh=eWJxN3lrNDIwcHF2" class="fa fa-twitter"></a>
        <a target="_blank"  href="https://www.linkedin.com/in/omar-m-fattouh-249ba827a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="fa fa-linkedin"></a></div>
      </div>
    </div>
  </div>
</div>
        <span class="line"></span>
  `;
  return <InnerHTML html={htmlContent} />;
};
export default function About() {
  return (
    <>
      {/* about us */}
      <Zabout />
      {/* ieee */}
      <div className="flex flex-col justify-center items-center gap-10 mt-5 mb-10">
        <div className="flex flex-start">
          <Image width={300} height={300} alt="ieee" src="/about/ieee2.png" />
        </div>
        <div className="px-10">
          <Image
            width={1000}
            height={1000}
            alt="ieee"
            src="/about/ieee.png"
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
}
