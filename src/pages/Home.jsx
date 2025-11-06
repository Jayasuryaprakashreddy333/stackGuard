import SplitText from '../components/SplitText'
import Register from '../components/Register'
import LetterGlitch from '../components/LetterGlitch'


const Home = () => {
    //if user navigate to any protectroute page to home then it removes users tokens user need to again enter credentails
    const keyValue = localStorage.getItem('publickey');
  const verify = localStorage.getItem('isVerified');
  if(keyValue){
    localStorage.removeItem('publickey')
  }
  if(verify){
    localStorage.removeItem('isVerified')
  }
  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

  const registerText =
    'Join StackGuard Today Build trust in your stack. Register now to secure your applications, monitor risks, and stay ahead of vulnerabilities.'

  return (
    <div className='h-screen bg-white flex flex-row'>
      <div className='relative h-[510px] w-[800px] flex flex-col justify-center items-center rounded-[20px] mt-[44px] ml-[44px] overflow-hidden'>
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
      <Register/>
    </div>
  )
}

export default Home
