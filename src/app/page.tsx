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
    <div>
      {/* intro */}
      <IntroHome />
      {/* order's chart */}
      <Charts />
      {/* blackhole */}
      <BlackHole />
      {/* increment card */}
      <InCrad />
      {/* slider */}
      <Zslide />
      {/* earth & plane */}
      <Gmap />
      {/* 3d earth */}
      <Mearth />
    </div>
  );
}
