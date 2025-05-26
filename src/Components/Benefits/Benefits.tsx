import { UserGroupIcon,AcademicCapIcon, HomeModernIcon } from "@heroicons/react/24/solid"
import  { SelectedPage, type BenefitType } from "../../shared/types"
import { motion } from "framer-motion";
import Htext from "../../shared/Htext";
import Benefit from "./Benfit";
import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png'
import ActionButton from "../../shared/ActionButton";

const benefits:Array<BenefitType>=[
    {
        icon:<HomeModernIcon className=" h-6 w-6"/>,
        title:"State of Art Facilities",
        description:"Push your limits with our cutting-edge equipment and dynamic training zones, designed for every fitness level and ambition."
    },
    {
        icon:<UserGroupIcon className=" h-6 w-6"/>,
        title:"100's of Diverse Classes",
        description:"From high-energy HIIT to calming yoga, our 100+ diverse classes offer a perfect fit for every fitness level and interest."
    },
    {
        icon:<AcademicCapIcon className=" h-6 w-6"/>,
        title:"Expert and Pro trainers",
        description:"Elevate your training with personalized guidance from our team of expert and pro trainers, dedicated to unlocking your full potential."
    },
]
const container={
  hidden:{},
 visible:{
    transition:{staggerChildren:0.2}
 }
}
type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {

  return <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
  <motion.div
  onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
  >
  {/* Header */}
 < motion.div 
       initial='hidden'
        whileInView='visible'
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.5}}
        variants={{
            hidden:{opacity:0,x:-50},
            visible:{opacity:1,x:0}
        }}
 className="md:my-5 md:w-3/5">
    <Htext>MORE THAN JUST GYM.</Htext>
    <p className="my-5 text-sm">Experience a comprehensive fitness journey with our state-of-the-art equipment and diverse class studios, designed to elevate every aspect of your workout. From cutting-edge cardio and strength machines to energizing group sessions, we provide everything you need to achieve your health and wellness goals.</p>
 </motion.div>
 {/* Benefits */}
 <motion.div 
 className="mt-5 items-center justify-between gap-8 md:flex"
 initial='hidden'
 whileInView="visible"
 viewport={{once:true,amount:0.5}}
 variants={container}
 >
    {benefits.map((benefit:BenefitType)=>(
   <Benefit 
   key={benefit.title} 
   icon={benefit.icon}
   title={benefit.title}
   description={benefit.description}
   setSelectedPage={setSelectedPage}
   />
    ))}
 </motion.div>
 {/* Graphics and description */}
 <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
    {/* Graphic */}
    <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />
    {/* description */}
    <div>
        {/* Title */}
        <div>
        <div >
            <motion.div
            initial='hidden'
        whileInView='visible'
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.5}}
        variants={{
            hidden:{opacity:0,x:50},
            visible:{opacity:1,x:0}
        }}
            >
                <Htext>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                    <span className="text-[#FF6B66]">FIT</span>
                </Htext>
            </motion.div>
        </div>
        </div>
        {/* Descript */}
            <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,x:50},
                visible:{opacity:1,x:0}
            }}
            >
                <p className="my-5">At Evo Gym, we're proud to be home to millions of happy members who are actively transforming their lives. Our vibrant community is a testament to the supportive environment and effective programs that empower individuals to reach their fitness goals, no matter how ambitious.</p>

                <p className="mb-5">Witness firsthand the energy of a gym where success stories are made every day. From hitting new personal bests to embracing healthier lifestyles, our members are not just getting fit – they're discovering newfound confidence and a passion for well-being.</p>
            </motion.div>
        {/* button */}
        <div className="relative mt-16">
        <div>
           <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton> 
        </div>
        </div>
    </div>
 </div>
  </motion.div>
  </section>
}

export default Benefits