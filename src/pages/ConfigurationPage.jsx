import {useState} from 'react'
import SplitText from '../components/SplitText'
import LetterGlitch from '../components/LetterGlitch'
import Configuartion from '../components/Config'


const ConfigurationPage = () => {
   

  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

  const registerText ='Configuration Key Generated Successfully This key uniquely identifies your StackGuard environment.Copy and store it safely — you’ll need it to verify your integration and access StackGuard’s monitoring tools.'

  return (
    <div className='h-screen bg-white flex flex-row'>
      <div className='relative h-[510px] w-[800px] flex flex-col justify-center items-center rounded-[20px] mb-3 mt-[44px] ml-[44px] overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>

        <div className='relative z-10 p-4  rounded-[20px]'>
          <SplitText
            text={registerText}
            className='text-white text-5xl font-semibold text-center'
            delay={20}
            duration={2}
            ease='elastic.out'
            splitType='chars'
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin='-100px'
            textAlign='center'
            onLetterAnimationComplete={handleAnimationComplete}
            tag='h1'
          />
        </div>
      </div>

      {/* Right Section */}
      <Configuartion/>
    </div>
  )
}

export default ConfigurationPage
