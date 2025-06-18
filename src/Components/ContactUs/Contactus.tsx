
import { SelectedPage } from '../../shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Contactimg from '../../assets/ContactUsPageGraphic.png'
import Htext from '../../shared/Htext';

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}



const Contactus = ({setSelectedPage}: Props) => {
    const inputStyles=`mb-5 w-full rounded-lg bg-[#FF6B66] px-5 py-3 placeholder-white`
    
    const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault()
    }
  }


  return <section id='contact' className=' mx-auto min-h-full w-5/6 pt-24 pb-32'>
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
    {/* Header */}
    <motion.div
      className='md:w-3/5'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
      }}>
      <Htext><span className='text-[#FF6B66]'>Join Now</span> to Get Started</Htext>
      <p className='my-5'>
        Ready to transform your fitness journey? Join now to get started on a path to a stronger, healthier you. Our gym offers state-of-the-art equipment, expert trainers, and a motivating community designed to help you crush your goals. Whether you're a seasoned athlete or just beginning, we provide the perfect environment to push your limits and achieve results.
      </p>  
      </motion.div>
      {/* FORM AND IMAGE */}
      <div className='mt-10 justify-between gap-8 md:flex'>
        <motion.div
          className='mt-10 basis-3/5 md:mt-0'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}>
            <form target='_blank' onSubmit={onSubmit} method='POST' action='https://formsubmit.co/thanmaipuppala@gmail.com'>
            <input className={inputStyles} type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}/>
                {errors.name && (
                <p className="mt-1 text-[#FF6B66]">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-[#FF6B66]">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-[#FF6B66]">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
            <button
                type="submit"
                className="mt-5 rounded-lg bg-[#FFC132] px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
        </motion.div>
        <motion.div
        className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
        >
            <div>
                <img  className='w-full' src={Contactimg} alt="contactusgraphics" />
            </div>
        </motion.div>
      </div>
    </motion.div>

  </section>
}

export default Contactus
