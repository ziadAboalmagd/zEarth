// React & Next
import React, { useState } from "react";

// React icons
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { CiCloudSun } from "react-icons/ci";
import { country, data } from "@/app/types";
import Image from "next/image";

// scss
import classes from "./index.module.scss";
import { Zaudio } from "../../Audio";

export const APICard = (props: { coun: country; data: data }) => {
  const [readMore, setReadmore] = useState<boolean>(false);
  const country = props.coun;
  const aData = props.data;
  return (
    <>
      <div className={`${classes.cityTitle} sm:flex-row flex-col`}>
        <h4 className="sm:!flex-row !flex-col text-3xl text-f-white tracking-widest uppercase">
          {country?.name}
          <span className="text-2xl text-f-silver tracking-wider capitalize">
            , {country?.city}
          </span>
        </h4>
      </div>
      {/* describe weather */}
      {/* <h5></h5> */}
      <h6 className="flex !flex-col !justify-between !items-end gap-3">
        <span className="text-4xl text-f-white">
          {aData?.cdegree} <span className="text-f-dblue">°C</span>
          <CiCloudSun className="!text-5xl text-f-dblue" />
        </span>
        <span>
          <span className="text-xl text-f-white">
            {aData?.time}
            <MdOutlineAccessTimeFilled />
          </span>
          <span className="text-xl text-f-white">{aData?.date}</span>
        </span>
      </h6>
      <div className="flex flex-col gap-7 mb-3 mx-3">
        <Image
          loader={() => country?.id + ".jpg"}
          src={"/countries/" + country?.id + ".jpg"}
          alt="country"
          width={200}
          height={200}
          unoptimized={true}
          className={classes.imgApi}
        />
        <div>
          <p className="text-f-white leading-7">
            {country?.desc.length > 171 ? (
              <>
                {readMore ? country?.desc : country?.desc.slice(0, 171)}
                <span onClick={() => setReadmore(!readMore)} className="text-f-dblue">
                  {readMore ? "....ReadLess" : "....ReadMore"}
                </span>
              </>
            ) : (
              country?.desc
            )}
          </p>
          {/* audio */}
          <div className="flex justify-end items-end my-3">
            <Zaudio src={String(country?.id)} />
          </div>
        </div>
      </div>
    </>
  );
};
