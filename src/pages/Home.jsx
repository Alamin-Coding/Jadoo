import React from 'react'
import Banner from '../components/Banner'
import ServiceSection from '../components/ServiceSection'
import Map from '../components/Map'
import ReactPlayer from 'react-player'
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";
import DestinationSection from '../components/sections/DestinationSection'
import NextTripSection from '../components/sections/NextTripSection'

const Home = () => {
  return (
    <>
      <Banner />
      <ServiceSection />
      <DestinationSection />
      <NextTripSection />
      {/* <MediaPlayButton /> */}
      {/* <ReactPlayer src='https://youtu.be/sYga7EYOQ0Q?si=YGXoUA_D3rMXuPu9' /> */}
    </>
  )
}

export default Home
