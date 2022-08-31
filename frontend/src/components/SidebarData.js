import React from 'react';
import { FaFile, FaUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Dashboard',
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
    title: 'Profile',
    path: '/profile',
    icon: <FaUser />,
    cName: 'nav-text',
  },
];
