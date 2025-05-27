
import { SelectedPage } from '../../shared/types'
import HomePageText from '../../assets/HomePageText.png'
import HomePageGraphic from '../../assets/HomePageGraphic.png'
import SponsorRedBull from '../../assets/SponsorRedBull.png'
import SponsorForbes from '../../assets/SponsorForbes.png'
import SponsorFortune from '../../assets/SponsorFortune.png'
import useMediaQuery from '../../hooks/useMediaQuery'
import ActionButton from '../../shared/ActionButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {motion} from 'framer-motion'

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")
  return <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
  {/* Image and main header */}
  <motion.div 
  className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
  onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
  >
    {/* main header */}
    <div className='z-10 mt-32 md:basis-3/5'>
        {/* Headings */}
        <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.5}}
        variants={{
            hidden:{opacity:0,x:-50},
            visible:{opacity:1,x:0}
        }}
        className='md:-mt-20'>
            <div>
                <div>
                    <img src={HomePageText} alt="home page" />
                </div>
            </div>
            <p className='mt-8 text-sm'>Stop wishing, start doing. Evo Gym provides the ultimate environment to push your limits and achieve real, lasting fitness results.</p>
        </motion.div>
        {/* Actions */}
        <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={{once:true,amount:0.5}}
        transition={{delay:0.2,duration:0.5}}
        variants={{
            hidden:{opacity:0,x:-50},
            visible:{opacity:1,x:0}
        }}
        className='mt-8 flex items-center gap-8 '>
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink className='text-sm font-bold text-[#FF6B66] underline hover:text-[#FFC132]'
            onClick={()=>setSelectedPage(SelectedPage.Contact)}
            href={`#${SelectedPage.Contact}`}
            >
            <p>Learn More</p>
            </AnchorLink>
        </motion.div>
    </div>
    {/* image */}
     <div className='flex basis-3/5 justify-center md:z-10 md:mt-16 md:justify-items-end'>
        <img src={HomePageGraphic} alt="home-page-graphic" />
     </div>
  </motion.div>
  {/* sponsors */}
  {isAboveMediumScreens && (
    <div className='h-[150px] w-full bg-[#FFE1E0] py-10'>
    <div className='mx-auto w-5/6'>
        <div className='flex w-3/5 items-center justify-between'>
            <img src={SponsorRedBull} alt="redbullsponsor" />
            <img src={SponsorForbes} alt="sponsorforbes" />
            <img src={SponsorFortune} alt="sponsorfortune" />
         </div>
    </div>
  </div>
  )}
  
  </section>
}

export default Home