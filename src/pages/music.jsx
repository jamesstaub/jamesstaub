import React from 'react';
import { PageTemplate } from "../components/layout";
import { musicData } from "../data";

const Music = () => {
  return <PageTemplate pageName="Music" items={musicData} />
};

export default Music;
