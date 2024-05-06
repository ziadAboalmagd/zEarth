// components
import { Mearth } from "@/app/components/Earths";
import Charts from "@/app/components/home/Charts";
import Gmap from "@/app/components/home/Gmap";
import { BlackHole } from "@/app/components/home/BlackHoles";
import { Zslide } from "@/app/components/home/Slider";
import { InCrad } from "@/app/components/home/Increment";
import { IntroHome } from "@/app/components/home/IntroHome";

// scss
import "./App.scss";

export default function Home() {
  return (
    <main>
      {/* intro */}
      <IntroHome />
      {/* order's chart */}
      <div className="astronaut mt-3">
        <Charts />
      </div>
      {/* blackhole */}
      <BlackHole />
      {/* increment card */}
      <InCrad />
      {/* slider */}
      <Zslide />
      {/* earth & plane */}
      <Gmap />
      {/* 3d earth */}
      <div className="hidden zearth:!flex flex-col gap-3 mt-20">
        <span className="jfont w-fit mx-auto text-2xl font-semibold capitalize tracking-widest">
          embark on a journey to discover the marvels of our planet with us
        </span>
        <div className="my-5 mb-11 overflow-hidden">
          <Mearth />
        </div>
      </div>
    </main>
  );
}
