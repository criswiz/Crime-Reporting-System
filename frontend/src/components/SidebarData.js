import React from 'react';
import { FaSignOutAlt, FaFile } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: <AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'News Feed',
    path: '/',
    icon: <BiNews />,
    cName: 'nav-text',
  },
  {
    title: 'Make a Complaint',
    path: '/complaint',
    icon: <FaFile />,
    cName: 'nav-text',
  },
  {
    title: 'Logout',
    path: '/',
    icon: <FaSignOutAlt />,
    cName: 'nav-text',
  },
];
