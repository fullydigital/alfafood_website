import React from 'react'
import Hero from '../components/Home/Hero'
import MoreAbout from '../components/Home/MoreAbout'
import Choosing from '../components/Home/Choosing'
import Questions from '../components/Home/Questions'
import Career from "../components/Home/Career";
import Filialen from '../components/Home/Filialen'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MoreAbout />
      <Choosing />
      <Filialen />
      <Career />
      <Questions />
    </>
  )
}
