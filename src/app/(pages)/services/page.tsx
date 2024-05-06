"use client";
// React & Next
import React, { useState } from "react";
import Image from "next/image";

// scss
import classes from "./index.module.scss";

// components
import { Nearth, Zmoon } from "@/app/components/Earths";

// constants
import { countries } from "@/app/constants";

// React icons
import { MdErrorOutline } from "react-icons/md";
import { Comments } from "@/app/components/services/Comments";
import { IntroServ } from "@/app/components/services/Intro";
import { CgEditBlackPoint } from "react-icons/cg";

// api utils
import { gCountry } from "@/app/utils/api";
import { useViewport } from "@/app/utils/other";

// types
import { country, data } from "@/app/types";
import { APICard } from "@/app/components/services/APICard";
import Rimage from "@/app/components/HeadlessUi/RImage";

export default function Services() {
  // loading
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // check width
  const { width } = useViewport();
  // small screens
  const isSmall = Number(width) < 530;
  // point selected
  const [point, setPoint] = useState<number>();
  // country
  const [country, setCountry] = useState<country>(
    point ? countries[Number(point)] : countries[0]
  );
  // API data
  const [aData, setAData] = useState<data>({
    time: "error, try again",
    date: "error, try again",
    cdegree: "error, try again",
    weather: "error, try again",
  });
  // handle click
  const handleClick = async (p: number) => {
    if (p !== point) {
      // loading
      setIsLoading(true);
      // update point
      setPoint(p);
      // update country
      setCountry(countries[Number(p) - 1]);
      // get data API
      try {
        const response = await gCountry(countries[p - 1].api);
        // update api data
        setAData(response);
      } catch {
        // error
        setAData({
          time: "error, try again",
          date: "error, try again",
          cdegree: "error, try again",
          weather: "error, try again",
        });
      }
      setIsLoading(false);
    }
  };
  // return
  return (
    <>
      <IntroServ />
      <div className="mx-7">
        {/* 3D Earth */}
        <div className={classes.earth}>
          {/* 3d earth */}
          <Nearth />
        </div>
        {/* API */}
        <div className="sm:mx-5 mt-11">
          {/* intro */}
          <div className={classes.intro}>
            <h2>our API</h2>
            <h4>explore places by clicking on the colored dots</h4>
            <p>
              Our API offers a comprehensive collection of data points related
              to Earth and provides programmatic access to a wealth of data
              about our planet Earth.
            </p>
          </div>
          {/* locator */}
          <div>
            {/* 2d map */}
            <div className={classes.e2d}>
              {isSmall ? (
                <Rimage
                  component={
                    <div className="relative">
                      <Image
                        src="/nEarth/2DnEarth.jpg"
                        alt="2Dearth"
                        width={1000}
                        height={1000}
                        className="transition-opacity opacity-0 duration-[2s]"
                        onLoadingComplete={(image) =>
                          image.classList.remove("opacity-0")
                        }
                      />
                      {countries.map((p, index) => (
                        <CgEditBlackPoint
                          key={index}
                          style={{
                            position: "absolute",
                            left: p.x + "%",
                            top: p.y + "%",
                            width: "7%",
                            height: "7%",
                            cursor: "pointer",
                            color: p.color,
                          }}
                        />
                      ))}
                    </div>
                  }
                  fullC={
                    <div className="relative w-rotatez">
                      <Image
                        src="/nEarth/2DnEarth.jpg"
                        alt="2Dearth"
                        width={1000}
                        height={1000}
                        className="rounded-xl"
                      />
                      {countries.map((p, index) => (
                        <CgEditBlackPoint
                          key={index}
                          style={{
                            position: "absolute",
                            left: p.x + "%",
                            top: p.y + "%",
                            width: "7%",
                            height: "7%",
                            cursor: "pointer",
                            color: p.color,
                          }}
                          onClick={() => handleClick(p.id)}
                        />
                      ))}
                    </div>
                  }
                />
              ) : (
                <div className="relative">
                  <Image
                    src="/nEarth/2DnEarth.jpg"
                    alt="2Dearth"
                    width={400}
                    height={400}
                  />
                  {countries.map((p, index) => (
                    <CgEditBlackPoint
                      key={index}
                      style={{
                        position: "absolute",
                        left: p.x + "%",
                        top: p.y + "%",
                        width: "7%",
                        height: "7%",
                        cursor: "pointer",
                        color: p.color,
                      }}
                      onClick={() => handleClick(p.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* located data */}
          {point && (
            <div className={`${classes.api} sm:mx-5 mt-11`}>
              <h2 className="font-semibold text-3xl capitalize my-5">
                results
              </h2>
              <span className="jfont w-fit mx-auto text-lg font-semibold capitalize tracking-widest">
                The world is a book, and those who do not travel read only a
                page
              </span>
              <div className={`${classes.data} min-h-60`}>
                {isLoading ? (
                  <div className="!flex !justify-center !items-center min-h-60">
                    <div className="text-f-backgroud inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                  </div>
                ) : (
                  <>
                    <APICard coun={country} data={aData} />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
        {/* comments */}
        <Comments />
        {/* redirect to contact */}
        <div className={`${classes.contact} flex items-center sm:mx-5 my-11`}>
          <MdErrorOutline className="text-2xl text-f-dpink" />
          <h6>
            If there are any bugs in the API, {"don't"} hesitate to{" "}
            <span>
              <a href="/contact" className="text-f-dpink">
                contact
              </a>
            </span>{" "}
            us.
          </h6>
        </div>
      </div>
    </>
  );
}
