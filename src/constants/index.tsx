import { ReactNode } from 'react';
import { RiGalleryView2 } from "react-icons/ri";
import { MdOutlineAddBox } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";

import Icon from '@/molecules/Icon';

export interface category {
  name: string;
  icon: ReactNode;
  value: string;
}

export const categories: category[] = [
  { name: 'All public content', icon: <RiGalleryView2 />, value: 'public' },
  {
    name: 'My Library',
    icon: <Icon icon='library' size={16} />,
    value: 'library'
  },
  { name: 'My Collections', icon: <MdOutlineAddBox />, value: 'collection' },
  { name: 'Bookmarked', icon: <IoBookmarks />, value: 'bookmark' },
  { name: 'Recently Listened', icon: <LuClock3 />, value: 'recent' }
];

export const languages = [
  "My Language",
  "English",
  "Chinese",
  "Hindi",
  "Spanish",
  "French",
  "Russian",
  "German",
  "Japanese",
  "Korean",
  "Hebrew"
]

export const displayTypes = [
  "Title & Content",
  "Title",
  "Content"
]

export const matches = [
  "Best Match",
  "Popularity",
  "Newest",
  "Oldest"
];

export const contents = [
  "Books",
  "Knowledge",
  "Podcasts",
  "Newsletters",
  "Documents",
  "Movies",
  "Courses",
];