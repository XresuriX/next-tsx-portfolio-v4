/* eslint-disable react/no-unescaped-entities */
///import { GetServerSidePropsContext } from "next";
import { GetStaticPropsContext } from "next";
import { title } from "process";
import { FC } from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const IndexPage: FC = (props) => {
  console.log(services)
  return <div className="flex flex-col flex-grow px-6 pt-1">
    <h5 className="p-3 my-3 font-medium text-black ">I'm a self taught Python programmer with a focus on backend web development using Python's Django module with PostgreSQL for database, 
      due to various projects both personal and professional I've greatly improved my basic knowledge of Django, HTML CSS and JavaScript and am 
      now experienced in making beautiful and interactive sites with plain Django but also RESTfull API's using DJango REST Framework as well as Django Ninja.
      In the front end Ive learned React's Next.js framework with TypeScript and styling using Storybook and TailwindCSS</h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide"> What I offer</h6>
        <div className="grid gap-6 text-black lg:grid-cols-2">
          { services.map(service => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1" key={title}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
  </div>;
};

export default IndexPage;
///
///export const getServerSideProps = async (context:GetServerSidePropsContext)=>{
///
///  const res = await fetch('http://localhost:3000/api/services')
///  const data = await res.json()
///
 /// return {
///    props: {
///      services: data.services
///}
///  }
///}

export const getStaticProps = async (context:GetStaticPropsContext)=>{

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  return {
    props: {
      services: data.services
    }
  }
} 
