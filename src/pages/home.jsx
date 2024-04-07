import * as React from "react";
import BgVid from "../../components/bg-vid";
import Header from "../../components/header";

export default function Home() {
  const hello = "Hello React!";

  return (
    <>
      <Header/>
      <BgVid />
    </>
  );
}
