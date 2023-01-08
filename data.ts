import { RiComputerLine } from 'react-icons/ri'
import { IconType } from 'react-icons'
import { IService, ISkill, IProject } from './type'
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from 'react-icons/bs'

export const services:IService[] =[
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
      },
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "handle database, server, api using <b>Express </b> & other popular frameworks",
      },
      {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
      },
      {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
      },
      {
        Icon: AiOutlineAntDesign,
        title: "UI/UX designer",
        about:
          "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
      },
      {
        Icon: RiComputerLine,
        title: "Whatever",
        about:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
      },
    ];

    export const languages:ISkill[] =[
      {
          Icon: BsCircleFill,
          name: "Python",
          level:
            "80%",
        },
        {
          Icon:BsCircleFill,
          name: "JavaScript/TypeScript",
          level:
            "50%",
        },
        {
          Icon: BsCircleFill,
          name: "API Development",
          level:
            "80%",
        },
        {
          Icon: BsCircleFill,
          name: "Competitive Coder",
          level: "80%",}
      ];  
      
      export const tools:ISkill[] =[
        {
            Icon: BsCircleFill,
            name: "Frontend Development",
            level:
              "80%",
          },
          {
            Icon: BsCircleFill,
            name: "Backend  Development",
            level:
              "80%",
          },
          {
            Icon: BsCircleFill,
            name: "API Development",
            level:
              "80%",
          },
        ];

        export const projects:IProject[] =[
          {
            name: 'Portfolio Site',
            image_path: '/images/site_pic.png',
            description: 'This very site ',
            deployed_url: 'lorem',
            github_url: '',
            category: ['react', 'typescript', 'django', 'python'],
            stack: ['React', 'typescript', 'django', 'python'],
            },
            {
              name: 'Portfolio Site',
            image_path: '/images/site_pic.png',
            description: 'This very site ',
            deployed_url: 'lorem',
            github_url: '',
            category: ['react', 'typescript', 'django', 'python'],
            stack: ['React', 'typescript', 'django', 'python'],
            },
            {
              name: 'Portfolio Site',
            image_path: '/images/site_pic.png',
            description: 'This very site ',
            deployed_url: 'lorem',
            github_url: '',
            category: ['react', 'typescript', 'django', 'python', 'tailwindcss'],
            stack: ['React', 'typescript', 'django', 'python'],
            },
            {
              name: 'Portfolio Site',
            image_path: '/images/site_pic.png',
            description: 'This very site ',
            deployed_url: 'lorem',
            github_url: '',
            category: ['bootstrap', 'tailwindcss'],
            stack: ['React', 'typescript', 'django', 'python'],
            },
          ];