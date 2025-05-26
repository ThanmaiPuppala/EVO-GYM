import React from 'react'
import { SelectedPage, type ClassType } from '../../shared/types'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'
import { motion } from 'framer-motion'
import Htext from '../../shared/Htext'
import Class from './Class'

const classes:Array<ClassType>=[
  {
    name:'Weight Training Classes',
    description:'Build strength and muscle with our weight training classes, designed for all levels.',
    image:image1
  },
  {
    name:'Yoga Classes',
    description:'Find balance and flexibility with our calming yoga classes, suitable for all abilities.',
    image:image2
  },
  {
    name:'Cardio Classes',
    description:'Get your heart pumping with our high-energy cardio classes, perfect for burning calories.',
    image:image3
  },
  {
    name:'Pilates Classes',
    description:'Strengthen your core and improve posture with our focused Pilates classes.',
    image:image4
  },
  {
    name:'Dance Fitness Classes',
    description:'Have fun while you burn calories in our energetic dance fitness classes.',
    image:image5
  },
  {
    name:'HIIT Classes',
    description:'Maximize your workout in minimal time with our high-intensity interval training classes.',
    image:image6
  }

]
type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const Classes = ({setSelectedPage}: Props) => {
  return <section id='ourclasses' className='w-full  bg-[#FFE1E0] py-40'>
    <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
        className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <div  className="md:w-3/5">
                <Htext>OUR CLASSES</Htext>
                <p className='py-5'>
                    Step into a world of diverse and energizing group fitness classes designed to cater to every interest and fitness level. Whether you're looking to push your limits with high-intensity interval training, find your flow in a calming yoga session, or build strength with dynamic resistance classes, our extensive timetable offers something for everyone. Led by passionate and certified instructors, each class provides expert guidance, a supportive community, and an invigorating atmosphere to help you achieve your personal best.
                </p>
            </div>
        </motion.div>
          <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className=' w-[2000px] whitespace-nowrap'>
            {
              classes.map((item:ClassType, index) => (
                <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                
                />
              ))
            }
          </ul>
          </div>
    </motion.div>
  </section>
}

export default Classes