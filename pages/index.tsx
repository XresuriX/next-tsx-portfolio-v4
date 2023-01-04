import { GetServerSidePropsContext } from "next";
import { FC } from "react";
import { services } from "../data";

const IndexPage: FC = (props) => {
  console.log(services)
  return <div className="text-6xl font-bold underline text-lime-400"></div>;
};

export default IndexPage;

export const getServerSideProps = async (context:GetServerSidePropsContext)=>{

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  return {
    props: {
      services: data.services
    }
  }
}
