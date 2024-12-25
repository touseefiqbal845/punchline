"use client";

import { HiMiniHome } from "react-icons/hi2";
import { SlMagnifier } from "react-icons/sl";
import { FaPauseCircle } from 'react-icons/fa';
import Icon from '@/molecules/Icon';

import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import Icon from "@/molecules/Icon";
import { itemRenderer } from "@/components/SideBar/SideMenu";

export const SidemenuItems = (ishidden: boolean) => [
  {
    label: "Dashboard",
    icon: <HiMiniHome />,
    href: "/dashboard",
    group: false,
    template: (item: any, options: any) =>
      itemRenderer(item, options, ishidden),
  },
  {
    label: "Explore",
    icon: <SlMagnifier />,
    group: true,
    href: "/explore",
    template: (item: any, options: any) =>
      itemRenderer(item, options, ishidden),
    items: [
      {
        label: "Books",
        group: false,
        href: "/",
        template: (item: any, options: any) =>
          itemRenderer(item, options, ishidden),
      },
      {
        label: "Knowledge",
        group: false,
        href: "/",
        template: (item: any, options: any) =>
          itemRenderer(item, options, ishidden),
      },
      {
        label: "Podcasts",
        href: "/",
        group: false,
        template: (item: any, options: any) =>
          itemRenderer(item, options, ishidden),
      },
      {
        label: "Newsletter",
        href: "/",
        group: false,
        template: (item: any, options: any) =>
          itemRenderer(item, options, ishidden),
      },
    ],
  },
  {
    label: "Collections",
    href: "/collections",
    icon: <Icon icon="collections" size={16} />,
    group: true,
    template: (item: any, options: any) =>
      itemRenderer(item, options, ishidden),
    items: [
      {
        label: "Collection ABC",
        href: "/",
        group: false,
        template: (item: any, options: any) =>
          itemRenderer(item, options, ishidden),
      },
      {
        label: "Collection XYZ",
        href: "/",
        group: false,
        template: (item: any, options: any) =>
          itemRenderer(item, options, ishidden),
      },
    ],
  },
  {
    label: "Bookmarks",
    href: "/bookmarks",
    icon: <Icon icon="bookmarks" size={16} />,
    group: false,
    template: (item: any, options: any) =>
      itemRenderer(item, options, ishidden),
  },
  {
    label: "Playlist",
    href: "/playlist",
    icon: <Icon icon="playlist" size={16} />,
    group: false,
    template: (item: any, options: any) =>
      itemRenderer(item, options, ishidden),
  },
  {
    label: "My Library",
    href: "/library",
    icon: <Icon icon="library" size={16} />,
    group: false,
    template: (item: any, options: any) =>
      itemRenderer(item, options, ishidden),
  },

  // {
  //   label: "Audio Player",
  //   href: "/audio-player",
  //   icon: <Icon icon="audio" size={16} />,
  //   group: false,
  //   template: (item: any, options: any) => itemRenderer(item, options, ishidden),
  // },
];

export const SidemenuItemsBelow = (ishidden: boolean) => [
  {
    label: "Audio Player",
    href: "/audioplayer",
    icon: <FaPauseCircle size={16} />,
    group: false,
    template: (item: any, options: any) =>
      itemRenderer(item, options, ishidden),
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: <IoIosNotificationsOutline style={{ fontSize: "16px" }} />,

    group: false,
    template: (item: any, options: any) =>
      itemRenderer(item, options, ishidden),
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <MdOutlineSettings style={{ fontSize: "16px" }}/>,
    group: false,
    template: (item: any, options: any) =>
      itemRenderer(item, options, ishidden),
  },
];

export const FooterMenuItems = [
  { label: "Dashboard", icon: <HiMiniHome /> },
  { label: "Explore", icon: <SlMagnifier /> },
  {
    label: "Library",
    icon: <Icon icon="library" size={24} />,
  },
  {
    label: "Playlist",
    icon: <Icon icon="playlist" size={24} />,
  },
  {
    label: "Settings",
    icon: <Icon icon="setting_s" size={24} />,
  },
];
