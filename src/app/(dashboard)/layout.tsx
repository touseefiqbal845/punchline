'use client';

import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import Footer from '@/components/Footer';
import { FilterProvider } from '../context/FilterContext';
import AudioPlayer from '@/components/AudioPlayer';
import { usePathname } from 'next/navigation';

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const isOpenAudio = path === '/player';
  console.log(path);

  return (
    <FilterProvider>
      <div className="flex flex-col">
        <div
          className="w-full flex flex-row overflow-hidden"
          style={{ height: isOpenAudio ? 'calc(100vh - 120px)' : '100vh' }}
        >
          <SideBar />
          <div className="w-full h-full flex flex-col overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {/* <div className="px-4 py-2 lg:px-40 lg:py-20 bg-[#F8FCFF]"> */}
              <div className="px-4 py-2 lg:px-40 lg:py-20">
              {children}
            </div>
          </div>
          <Footer />
        </div>
        <Footer />
      </div>
      {isOpenAudio && <AudioPlayer />}
    </div>
    </FilterProvider >
  );
}
