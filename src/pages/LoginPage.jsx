import SplitText from '../components/SplitText'
import LetterGlitch from '../components/LetterGlitch'
import Login from '../components/Login'

const LoginPage = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

  const loginText ='Welcome back to StackGuard Secure your stack. Simplify your workflow.Log in to continue managing your development fortress.!'

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
            text={loginText}
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
      <Login/>
    </div>
  )
}

export default LoginPage
