import React from 'react'
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from "react-icons/fi";
import GlassIcons from './GlassIcons';

const GlassIconsButtons = () => {
    const items = [
        { icon: <FiFileText />, color: 'red', label: 'Files' },
        { icon: <FiBook />, color: 'red', label: 'Books' },
        { icon: <FiHeart />, color: 'red', label: 'Health' },
        { icon: <FiCloud />, color: 'red', label: 'Weather' },
        { icon: <FiEdit />, color: 'red', label: 'Notes' },
        { icon: <FiBarChart2 />, color: 'red', label: 'Stats' },
      ];
  return (
    <div style={{ height: '600px', position: 'relative' }}>
  <GlassIcons items={items} className="custom-class"/>
    </div>
  )
}

export default GlassIconsButtons
