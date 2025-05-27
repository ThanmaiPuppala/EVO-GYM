
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../shared/types';

type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage)=>void
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
   <AnchorLink className='rounded-md bg-[#FFC132] px-10 py-2 hover:bg-[#FF6B66] hover:text-white'
   onClick={()=>setSelectedPage(SelectedPage.Contact)}
   href={`#${SelectedPage.Contact}`}
   >
    {children}
   </AnchorLink>
  )
}

export default ActionButton