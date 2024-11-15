import OrganisationLogo1 from "../assets/OrganisationLogos/Mulearn Logo.png";
import OrganisationLogo2 from "../assets/OrganisationLogos/CSI SB CCE Logo.png";
import OrganisationLogo3 from "../assets/OrganisationLogos/RR Logo.png";
import OrganisationLogo4 from "../assets/OrganisationLogos/CCE Logo.png";
import Wrap from '../assets/Projects/WRAP-Web-Logo.png';
import CSI from '../assets/Projects/CSI-WEB-Logo.png';
import { GitHubIcon, HackeRankIcon, LinkedInIcon, SkillCss, SkillDjango, SkillFigma, SkillGit, SkillGithub, SkillHtml, SkillJs, SkillNetlify, SkillNode, SkillPostgres, SkillPostman, SkillPython, SkillReact, SkillSql, SkillVSCode } from "./imports";

export const NavbarDataset = ["Home","About","skills","Projects","Experience","Contact"];

export const SpotlightData = {
    name: "Ajay Vishnu E",
    desription : "Full Stack Developer",
    roles : ['Front End Development','Back End Development','Competitive Coding','Problem Solving']
}

export const OrganisationLogos = [OrganisationLogo1, OrganisationLogo2, OrganisationLogo3, OrganisationLogo4];

export const WhoAmIData = {
    DescriptionParagraph1:"I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    DescriptionParagraph2:"I have been recognized as one of the Top 100 Coders, and I take pride in the positive feedback I've received from both clients and colleagues. Looking forward, I believe that a great developer not only fixes codes but also contributes to solving the real world problems.",
    Highlights:["new challenges", "high-quality results", "Top 100 Coders"],
    KeyTerms1 : ["01", "YEARS OF", "EXPERIENCE"],
    KeyTerms2 : ["20", "COMPLETED", "WORKS"],
    GitHub:[GitHubIcon,"https://github.com/AjayVishnuE"],
    HackerRank:[HackeRankIcon,"https://www.hackerrank.com/profile/ajayvishnu121"],
    LinkedIn:[LinkedInIcon,"https://www.linkedin.com/in/ajayvishnue/"]
}

export const FrontendSkillSetData = {
    HTML:SkillHtml,
    CSS:SkillCss,
    REACT:SkillReact,
    DJANGO:SkillDjango,
    JS:SkillJs
}

export const BackendSkillSetData = {
    POSTGRESQL: SkillPostgres,
    NODE:SkillNode,
    MYSQL: SkillSql,
    PYTHON:SkillPython
}

export const OtherSkillSetData = {
    GIT:SkillGit,
    GITHUB:SkillGithub,
    NETLIFY:SkillNetlify,
    POSTMAN:SkillPostman,
    VSCODE:SkillVSCode,
    FIGMA:SkillFigma
}

export const ProjectDetails = {
    project1: {
        name: "WRAP",
        logo: Wrap,
        description: "Created WRAP - An online platform for e-waste buyers, sellers and all other kinds of waste management industries. ",
        highlights: [
          "WRAP"
        ],
        githubLink: "https://github.com/AjayVishnuE/WRAP-Frontend",
        websiteLink: "https://wrap-app.netlify.app"
      },
      project2: {
        name: "CSI SB CCE Website",
        logo: CSI,
        description: "Developed the official Website of Computer Society of India, Student Branch of Christ College of Engineering, Irinjalakuda.",
        highlights: [
          "Computer Society of India"
        ],
        githubLink: "https://github.com/AjayVishnuE/CSI-SB-CCE",
        websiteLink: "https://csicce.netlify.app"
      },
}