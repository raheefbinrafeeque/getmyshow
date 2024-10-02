import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/page-not-found.json'; // Replace with the correct path to your JSON file

export const Lottie = () => {
  return (
    <div className='max-w-80 mx-auto dark:invert brightness-200'>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  )
}
