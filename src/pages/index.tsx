import { Button, Link } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <h2>Home</h2>
      <h3>Home</h3>
      <h4>Home</h4>
      <Button>Button 1</Button>
      <Button dark> Button 1</Button>
      <br />
      <Link>Button 2</Link>
      <Link dark>Button 2</Link>
    </>
  );
};

export default Home;
