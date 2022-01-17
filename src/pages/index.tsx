import { Button, Link, TextSection } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <TextSection
        title="Create and share your photo stories"
        text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        imgUrls={{
          mobile: "/assets/home/mobile/create-and-share.jpg",
          tablet: "/assets/home/tablet/create-and-share.jpg",
          desktop: "/assets/home/desktop/create-and-share.jpg",
        }}
        link={{
          text: "Get an Invite",
          href: "/",
        }}
        dark
      />

      <TextSection
        title="Beautiful stories every time"
        text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        imgUrls={{
          mobile: "/assets/home/mobile/beautiful-stories.jpg",
          tablet: "/assets/home/tablet/beautiful-stories.jpg",
          desktop: "/assets/home/desktop/beautiful-stories.jpg",
        }}
        link={{
          text: "View the stories",
          href: "/stories",
        }}
      />

      <TextSection
        title="Designed for everyone"
        text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        imgUrls={{
          mobile: "/assets/home/mobile/designed-for-everyone.jpg",
          tablet: "/assets/home/tablet/designed-for-everyone.jpg",
          desktop: "/assets/home/desktop/designed-for-everyone.jpg",
        }}
        link={{
          text: "View the stories",
          href: "/stories",
        }}
      />
    </>
  );
};

export default Home;
