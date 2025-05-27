
import Logo  from '../../assets/Logo.png'


const Footer = () => {
  return (
    <footer className="bg-[#FFE1E0] py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
           Join our gym and become part of a community committed to your health. We offer top-tier equipment, diverse classes, and expert trainers to help you meet any fitness goal. Start your journey to a stronger, healthier you in our welcoming and energetic space.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5" id='benefits'>Benefits</p>
          <p className="my-5" id='ourclasses'>Our Classes</p>
          <p id='contact'>Contact</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Devi nagar  Vijayawada</p>
          <p>(987)654-3210</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer