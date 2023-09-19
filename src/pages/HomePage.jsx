import React from 'react'
import Hero from '../components/Home/Hero'
import MoreAbout from '../components/Home/MoreAbout'
import Choosing from '../components/Home/Choosing'
import Questions from '../components/Home/Questions'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MoreAbout />
      <Choosing />
      <Questions />
    </>
  )
}
