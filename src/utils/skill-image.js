import html from "../assets/skills-svg/html.svg";
import css from "../assets/skills-svg/css.svg";
import javascript from "../assets/skills-svg/javascript.svg";
import react from "../assets/skills-svg/react.svg";
import typescript from "../assets/skills-svg/typescript.svg";
import bootstrap from "../assets/skills-svg/bootstrap.svg";
import tailwind from "../assets/skills-svg/tailwind.svg";
import c from "../assets/skills-svg/c.svg";
import python from "../assets/skills-svg/python.svg";
import django from "../assets/skills-svg/django.svg";
import git from "../assets/skills-svg/git.svg";
import canva from "../assets/skills-svg/canva.svg";
import node from "../assets/skills-svg/node.svg";
import express from "../assets/skills-svg/express.svg"
import mongo from "../assets/skills-svg/mongo.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongo":
      return mongo;
    case "tailwind":
      return tailwind;
    case "express":
      return express
    case "c":
      return c;
    case "python":
      return python;
    case "django":
      return django;
    case "git":
      return git;
    case "canva":
      return canva;
    case "node":
      return node;
    default:
      break;
  }
};