import React from "react";
import InnerHTML from "dangerously-set-html-content";

const SlideC = () => {
  const htmlContent = `<style>
  .slider-wrapper {
    position: relative;
    margin: auto;
  }
  .slider-container {
    position: relative;
    width: 200px;
    height: 350px;
    margin: auto;
    background-color: rgb(49 56 63 / 45%);
    transition: transform 1s;
    border-radius: 10px;
  }
  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .active {
    opacity: 1;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    background-color: rgb(49 56 63 / 45%);
    color: #bfc0c0;
    border: none;
    z-index: 10;
  }
  .prev {
    left: -45px;
  }
  .next {
    right: -45px;
  }
  .fact-text {
    font-family:  ;
    font-size: 16px;
    color: #e7d7c1;
    padding-top: 70px;
    padding-right: 10px;
    padding-left: 10px;
    text-align: center;
  }
  .fact-image {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px;
    mask-image: rgb(49 56 63 / 45%);
    //mask-image: linear-gradient(to top, transparent, rgb(0, 0, 0));
  }
  @media only screen and (min-width: 600px) {
    .slider-container{
      width: 400px;
      height: 500px;
    }
    .prev {
        left: -75px;
    }
    .next {
        right: -75px;
    }
}
@media only screen and (min-width: 325px) {
  .slider-container{
    width: 250px;
    height: 400px;
  }
}
</style>
<div class="slider-wrapper">
  <button class="arrow prev" onclick="changeSlide(-1)">❮</button>
  <div class="slider-container">
    <div id="slide1" class="slide active">
      <img
        src="/slider/earth-space1.webp"
        alt="Earth from Space"
        class="fact-image"
      />
      <div class="fact-text">
        Earth is the third planet from the Sun and the only known planet to
        support life.
      </div>
    </div>
    <div id="slide2" class="slide">
      <img
        src="/slider/earth-space.jpg"
        alt="Ocean View"
        class="fact-image"
      />
      <div class="fact-text">
        Over 70% of Earth's surface is covered by water, yet less than 1% of
        it is fresh water accessible for consumption.
      </div>
    </div>
    <div id="slide3" class="slide">
      <img
        src="/slider/earth-space2.jpg"
        alt="Earth's Atmosphere"
        class="fact-image"
      />
      <div class="fact-text">
        Earth's atmosphere is the right thickness to keep the planet warm so
        living things like us can be there.
      </div>
    </div>
    <div id="slide4" class="slide">
      <img
        src="/slider/earth-space3.jpg"
        alt="Earth's Surface"
        class="fact-image"
      />
      <div class="fact-text">
        More than 95% of Earth’s ocean are still unexplored.
      </div>
    </div>
    <div id="slide5" class="slide">
      <img
        src="/slider/earth-space4.jpg"
        alt="Earth's Orbit"
        class="fact-image"
      />
      <div class="fact-text">
        It takes about eight minutes for light from the Sun to reach our
        planet.
      </div>
    </div>
  </div>
  <button class="arrow next" onclick="changeSlide(1)">❯</button>
</div>

<script>
  var currentSlide = 0;
  var slides = document.querySelectorAll(".slide");

  function changeSlide(direction) {
    slides[currentSlide].classList.remove("active");
    currentSlide =
      (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }
</script>`;
  return <InnerHTML html={htmlContent} />;
};

export const Zslide = () => {
  return (
    <>
      {/* cards increment   */}
      <div className="mx-11 mt-20 mb-11 z-10 relative">
        <h2 className="font-extrabold text-2xl capitalize">informations</h2>
        <div className="flex justify-center mt-5">
          <SlideC />
        </div>
      </div>
    </>
  );
};
