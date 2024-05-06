// React & Next
import Image from "next/image";

// packages
import { Oaudio } from "@/app/components/Audio";

//scss
import "./index.scss";

const Map = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105491.78852961236!2d34.521188885930506!3d31.478184228002867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2z2LrYstip!5e1!3m2!1sar!2seg!4v1714954919185!5m2!1sar!2seg"
        //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27214.45642933892!2d34.45083700895835!3d31.50198691267593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2seg!4v1714906689090!5m2!1sen!2seg"
        loading="lazy"
        style={{
          width: "100%",
          height: "300px",
          maxWidth: "700px",
          borderRadius: "11px",
          border: "none",
          outline: "none",
        }}
      />
    </>
  );
};
const Gmap = () => {
  return (
    <>
      {/* google map */}
      <div className="mx-11 my-11">
        <div>
          <div className="flex flex-row justify-between gap-5 w-fit">
            <h2 className="font-extrabold text-2xl capitalize">
              embedded Gmap
            </h2>
            <Oaudio>
              <div className="flex flex-row justify-between gap-4">
                <Image
                  src="/img/palestineM.svg"
                  alt="palestine"
                  width={20}
                  height={20}
                  className="min-w-10"
                />
                <Image
                  src="/img/palestinian.svg"
                  alt="palestine"
                  width={20}
                  height={20}
                  className="min-w-10"
                />
              </div>
            </Oaudio>
          </div>
        </div>
        {/* google embeded map */}
        <div className="Gmap flex justify-center mt-10 rounded-lg">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Gmap;
