
import { SelectedPage } from '../../shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {motion} from 'framer-motion'

const childVariant={
  hidden:{opacity:0,scale:0.9},
  visible:{opacity:1,scale:1},
}
type Props = {
    icon: React.ReactElement;
    title:string;
    description:string;
    setSelectedPage:(value:SelectedPage)=>void;
}

const Benefit = ({icon,title,description,setSelectedPage}: Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className='mt-5 rounded-md border border-gray-200 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className=' rounded-full border-2 border-gray-100 bg-[#FFE1E0] p-4'>
                {icon}
            </div>
        </div>
        <h4 className='font-bold'>{title}</h4>
        <p className=' my-3'>{description}</p>
        <AnchorLink className='text-sm font-bold text-[#FF6B66] underline hover:text-[#FFC132]'
        onClick={()=>setSelectedPage(SelectedPage.Contact)}
        href={`#${SelectedPage.Contact}`}
        >
        <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit