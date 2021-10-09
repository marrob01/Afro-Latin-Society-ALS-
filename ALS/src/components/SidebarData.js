import React from "react"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as GiIcons from "react-icons/gi"

// {/* Inspiration from the Navbar concept here --  https://www.youtube.com/watch?v=CXa0f4-dWi4*/}

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/history-page``",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Our Goals",
    path: "/goals-page",
    icon: <GiIcons.GiStairsGoal />,
    cName: "nav-text",
  },
  {
    title: "Founders",
    path: "/founders-page",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },

  {
    title: "Contact Us",
    path: "/contact-page",
    icon: <AiIcons.AiFillMail />,
    cName: "nav-text",
  },
]


export const TopNaVData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Our Goals",
    path: "/goals-page",
    icon: <GiIcons.GiStairsGoal />,
    cName: "nav-text",
  },
  {
    title: "Logo",
    path: "/",
    icon: <GiIcons.GiStairsGoal />,
    cName: "nav-text nav-logo",
  },
  {
    title: "Founders",
    path: "/founders-page",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },

  {
    title: "Contact Us",
    path: "/contact-page",
    icon: <AiIcons.AiFillMail />,
    cName: "nav-text",
  },
]
