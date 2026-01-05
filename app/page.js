

import Banner from "@components/home/Banner";
import HomeGallery from "@components/home/HomeGallery";
import WhyChooseUs from "@components/home/WhyChooseUs";
import PostTension from "@components/home/PostTension";
import WhatWeDo from "@components/home/WhatWeDo";

export default function Home() {
  return (
    <>
      <Banner />
      <WhatWeDo />
      <HomeGallery />
      <WhyChooseUs />
      <PostTension />
    </>
  );
}
