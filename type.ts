import { IconType } from "react-icons";

export interface IService {
    title: string,
    about: string,
    Icon: IconType
}

export interface ISkill {
    name: string,
    level: string,
    Icon: IconType
}

export interface IProject {
    name: string,
    image_path: string,
    description: string,
    deployed_url: string,
    github_url: string,
    category: category[],
    stack: string[],
}

export type category= 'react' | 'python' | 'typescript' | 'django' | 'tailwindcss' | 'bootstrap';