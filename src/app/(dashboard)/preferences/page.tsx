'use client';

import React, { useState, useEffect } from 'react';
import TimezoneSelect, { type ITimezone } from 'react-timezone-select';
import { useTheme } from 'next-themes';

import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { GoQuestion } from 'react-icons/go';
import { Tooltip } from 'primereact/tooltip';
import { Skeleton } from 'primereact/skeleton';

import 'primereact/resources/themes/lara-light-blue/theme.css'; // Theme (choose any theme you prefer)
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons CSS

import { MdOutlineLock } from 'react-icons/md';

import '@/styles/custom.scss';
import {
  colorItem,
  colorThemes,
  audioTypes,
  HourTypes,
  playSpeedTypes,
  widgetTypes
} from '@/constants/settings';

const Preferences = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [colorTheme, setColorTheme] = useState<colorItem>(colorThemes[0]);
  const [audioType, setAudioType] = useState('Deep Dive Podcast');
  const [contentPriority, setContentPriority] = useState('Deep Dive Podcast');
  const [colorScheme, setColorScheme] = useState('Deep Dive Podcast');
  const [stickyAudioPlayer, setStickyAudioPlayer] =
    useState('Deep Dive Podcast');
  const [titleClick, setTitleClick] = useState('Deep Dive Podcast');
  const [updateType, setUpdateType] = useState('1 hour');
  const [languageType, setLanguage] = useState('English');
  const [summaryLength, setSummaryLength] = useState('Deep Dive Podcast');
  const [voiceType, setVoiceType] = useState('Deep Dive Podcast');
  const [audioLanguage, setAudioLanguage] = useState('Deep Dive Podcast');
  const [playSpeed, setPlaySpeed] = useState('Deep Dive Podcast');
  const [widgetType, setWidgetType] = useState('Deep Dive Podcast');
  const { theme, setTheme } = useTheme();

  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setTheme('dark');
  }, [theme]);

  useEffect(() => {
    setIsClient(true);
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const setAutoDarkMode = (e: InputSwitchChangeEvent) => {
    setDarkMode(e.value);
    if (
      localStorage.theme === 'light' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="container w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-row justify-between items-center gap-2">
          <div className="flex flex-row items-center gap-2">
            <span className="text-2xl font-bold ">Preferences</span>
            <Tooltip target=".faq-icon" position="top">
              <span className="text-xs">Settings</span>
            </Tooltip>
            <Button className="faq-icon focus:ring-0 text-lg">
              <GoQuestion />
            </Button>
          </div>
          <button className="bg-[#1E222D] text-white px-4 py-2 rounded-md hover:bg-gray-600">
            Save
          </button>
        </div>

        {/* Dark Mode Section */}
        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%] flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold mb-2">Dark Mode</h3>
            <p className="text-sm text-gray-500 mb-4">
              Automatically enable dark mode at sunset based on your timezone.
            </p>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-row justify-between items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="flex flex-col justify-start items-start">
              <h3 className="text-lg font-semibold mb-2">
                Auto enable dark mode
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                We will use the timezone based in your Portfolio to determine
                sunset in your location
              </p>
            </div>
            <div className="flex justify-center items-center">
              <InputSwitch
                checked={darkMode}
                onChange={setAutoDarkMode}
                className="switch-mode"
              />
            </div>
          </div>
        </div>

        {/* Appearance Section */}
        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%] h-full flex flex-col justify-start items-start">
            <div className="w-full h-[50%] flex flex-col justify-start items-start">
              <h3 className="text-lg font-semibold mb-2">Appearance</h3>
              <p className="text-sm text-gray-500 mb-4">
                Select your preferred color theme.
              </p>
            </div>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-row justify-center items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="w-full grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
              {colorThemes.map((theme, index) => (
                <div
                  className="w-full h-full flex justify-center items-center"
                  key={index}
                >
                  <div
                    className={`w-[140px] h-[120px] flex flex-col justify-between items-start cursor-pointer p-4 border rounded-md text-center ${
                      colorTheme === theme
                        ? 'border-blue-500'
                        : 'border-gray-300'
                    }`}
                    onClick={() => setColorTheme(theme)}
                  >
                    <div className="flex flex-row">
                      <Skeleton
                        shape="circle"
                        size="10px"
                        className="mr-2"
                      ></Skeleton>
                      <Skeleton
                        shape="circle"
                        size="10px"
                        className="mr-2"
                      ></Skeleton>
                      <Skeleton
                        shape="circle"
                        size="10px"
                        className="mr-2 "
                      ></Skeleton>
                    </div>
                    <div className="flex flex-col gap-2 p-2 bg-gray-50">
                      <Skeleton
                        width="90px"
                        height="10px"
                        className={`${theme.value}`}
                      ></Skeleton>
                      <Skeleton
                        width="40px"
                        height="10px"
                        className={`${theme.value}`}
                      ></Skeleton>
                    </div>
                    <p className="text-sm font-medium">{theme.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Default Audio Type Section */}
        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%] flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold mb-2">Default Audio Type</h3>
            <p className="text-sm text-gray-500 mb-4">
              Select which audio type you want to be played by default. This
              setting applies when clicking the "Listen to" button without
              selecting a specific audio type.
            </p>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-row justify-start items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Auto Type</span>
                <MdOutlineLock />
              </div>
              <Dropdown
                value={audioType}
                options={audioTypes}
                onChange={(e) => setAudioType(e.value)}
                placeholder="Select Content Type"
                className="w-full border-[1px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%]  flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold mb-2">
              Content Type Priority
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Set the content type priority. This setting effects the order of
              the content you see in instant search results and on the Explor
              Page.
            </p>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-row justify-start items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Content Type Priority</span>
                <MdOutlineLock />
              </div>
              <Dropdown
                value={contentPriority}
                options={audioTypes}
                onChange={(e) => setContentPriority(e.value)}
                placeholder="Select Content Type"
                className="w-full border-[1px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%]  flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold mb-2">Default Color Scheme</h3>
            <p className="text-sm text-gray-500 mb-4">
              Set the default color scheme.
            </p>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-row justify-start items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Content Type Priority</span>
                <MdOutlineLock />
              </div>
              <Dropdown
                value={colorScheme}
                options={colorThemes}
                optionLabel="name"
                onChange={(e) => setColorScheme(e.value)}
                placeholder="Select Content Type"
                className="w-full border-[1px]"
              />
            </div>
          </div>
        </div>

        {/* Sticky Audio Player Section */}
        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%]  flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold mb-2">Sticky Audio Player</h3>
            <p className="text-sm text-gray-500 mb-4">
              Set whether the audio player on the Player Page will be sticky or
              not.
            </p>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-row justify-start items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Content Type Priority</span>
                <MdOutlineLock />
              </div>
              <Dropdown
                value={stickyAudioPlayer}
                options={audioTypes}
                onChange={(e) => setStickyAudioPlayer(e.value)}
                placeholder="Select Content Type"
                className="w-full border-[1px]"
              />
            </div>
          </div>
        </div>

        {/* Title Click Section */}
        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%] flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold mb-2">Title Click</h3>
            <p className="text-sm text-gray-500 mb-4">
              Set the default action when clicking the title of an item in
              search results or Explor Page (redirect to item details page or
              redirect directly to player page).
            </p>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-row justify-start items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Title Click</span>
                <MdOutlineLock />
              </div>
              <Dropdown
                value={titleClick}
                options={audioTypes}
                onChange={(e) => setTitleClick(e.value)}
                placeholder="Select Content Type"
                className="w-full border-[1px]"
              />
            </div>
          </div>
        </div>

        {/* Email Frequency Settings Section */}
        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%] flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold mb-2">
              Email Frequency Settings
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Configure how often you'd like to receive new email updates about
              newe content matching your interests.
            </p>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-row justify-start items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Receive updates every</span>
              </div>
              <div className="w-full flex flex-col lg:flex-row items-center gap-2 text-lg">
                <Dropdown
                  value={updateType}
                  options={HourTypes}
                  onChange={(e) => setUpdateType(e.value)}
                  placeholder="Select Content Type"
                  className="w-full lg:w-[30%] border-[1px]"
                />
                {isClient ? (
                  <TimezoneSelect
                    className="w-full"
                    value={selectedTimezone}
                    onChange={setSelectedTimezone}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>

        {/* General Section */}
        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%] flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold mb-2">General</h3>
            <p className="text-sm text-gray-500 mb-4">
              Manage your unique experience
            </p>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-col justify-start items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Language</span>
                <MdOutlineLock />
              </div>
              <Dropdown
                value={languageType}
                options={audioTypes}
                onChange={(e) => setLanguage(e.value)}
                placeholder="Select Content Type"
                className="w-full border-[1px]"
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <div className="w-full flex flex-col justify-start items-start">
                <h3 className="text-lg font-semibold mb-2">Summary Length</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Select how long the summary should be
                </p>
              </div>
              <Dropdown
                value={summaryLength}
                options={audioTypes}
                onChange={(e) => setSummaryLength(e.value)}
                placeholder="Select Content Type"
                className="w-full border-[1px]"
              />
            </div>
          </div>
        </div>

        {/* Auido Voice Section */}
        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%] flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold mb-2">Audio Voice</h3>
            <p className="text-sm text-gray-500 mb-4">
              Select which voice you'd like to hear to when listening to an
              article
            </p>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-col justify-start items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Select Voice</span>
                <MdOutlineLock />
              </div>
              <Dropdown
                value={voiceType}
                options={audioTypes}
                onChange={(e) => setVoiceType(e.value)}
                placeholder="Select Content Type"
                className="w-full border-[1px]"
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Audio Language</span>
                <MdOutlineLock />
              </div>
              <Dropdown
                value={audioLanguage}
                options={audioTypes}
                onChange={(e) => setAudioLanguage(e.value)}
                placeholder="Select Content Type"
                className="w-full border-[1px]"
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Default Playback Speed</span>
                <MdOutlineLock />
              </div>
              <div className="w-full grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                {playSpeedTypes.map((playspeed) => (
                  <div
                    key={playspeed}
                    className={` flex justify-center items-center cursor-pointer px-4 py-2 border rounded-md text-center ${
                      playSpeed === playspeed
                        ? 'border-blue-500'
                        : 'border-gray-300'
                    }`}
                    onClick={() => setPlaySpeed(playspeed)}
                  >
                    <p className="text-sm font-medium">{playspeed}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Widget Visibility Section */}
        <div className="w-full flex flex-col 2xl:flex-row justify-between items-start gap-2 2xl:gap-10">
          <div className="w-full 2xl:w-[30%] flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold mb-2">Widget Visibility</h3>
            <p className="text-sm text-gray-500 mb-4">
              Toggle Story Page widget visibility
            </p>
          </div>

          <div className="2xl:max-w-[65%] w-full flex flex-col justify-start items-center gap-5 px-8 py-4 border-[1px] rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-2 text-lg font-semibold mb-2">
                <span>Select Widget</span>
                <MdOutlineLock />
              </div>
              <div className="w-full grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                {widgetTypes.map((widget) => (
                  <div
                    key={widget}
                    className={` flex justify-center items-center cursor-pointer px-4 py-2 border rounded-md text-center ${
                      widgetType === widget
                        ? 'border-blue-500'
                        : 'border-gray-300'
                    }`}
                    onClick={() => setWidgetType(widget)}
                  >
                    <p className="text-sm font-medium">{widget}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button className="bg-[#1E222D] text-white px-4 py-2 rounded-md hover:bg-gray-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
