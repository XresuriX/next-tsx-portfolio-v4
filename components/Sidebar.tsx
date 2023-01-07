import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { AiFillTwitterSquare } from 'react-icons/ai'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <div>
      <Image
        className="w-32 h-32 mx-auto border rounded-full "
        src="/images/propic.jpg"
        alt="leslie"
        width={300}
        height={300}
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
        <span className='text-blue-800 font-Bold'>Leslie</span> Taffe
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'> Fullstack Web Developer </p>
      <a className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500'> 
      <GiTie className='w-6 h-6 dark:bg-dark-200' /> Download Resume </a>
      {/* //social icons this can be made dynamic*/}
      <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full '>
            <a href=''>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href=''>
               <AiFillGithub className='w-8 h-8 cursor-pointer' />{' '}
            </a>
            <a href=''>
               <AiFillTwitterSquare className='w-8 h-8 cursor-pointer' />{' '}
            </a>
         </div>

      {/* address */}
      <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500'
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className='flex items-center justify-center'>
            <GoLocation className='mr-2' /> <span> Kingston, Jamaica</span>
        </div>
        <p className='my-2 '> taffe.leslie@gmail.com </p>
        <p className='my-2 '> 1-(876)3321880</p>
      </div>
      {/* email button */}
      <button className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'
      onClick={() => window.open('mailto:taffe.leslie@gmail.com')}>
        Email me
      </button>
      <button 
      onClick={changeTheme}
      className='w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105'>
        Toggle theme
        </button>
    </>
  );
};

export default Sidebar; 
