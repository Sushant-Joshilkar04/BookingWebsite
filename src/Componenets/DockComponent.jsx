import React from 'react'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import Dock from './Dock'
const DockComponent = () => {
    const items = [
        { icon: <VscHome size={18} color="white"/>, label: 'Home', onClick: () => alert('Home!') },
        { icon: <VscArchive size={18} color="white"/>, label: 'Archive', onClick: () => alert('Archive!') },
        { icon: <VscAccount size={18} color="white"/>, label: 'Profile', onClick: () => alert('Profile!') },
        { icon: <VscSettingsGear size={18} color="white"/>, label: 'Settings', onClick: () => alert('Settings!') },
      ];
  return (
    <div>
       <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
    </div>
  )
}

export default DockComponent
