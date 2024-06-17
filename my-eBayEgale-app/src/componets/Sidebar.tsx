import React, { MouseEventHandler } from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';

interface SidebarProps {
  openSidebarToggle: boolean;
  OpenSidebar: MouseEventHandler<HTMLSpanElement>;
}

const Sidebar: React.FC<SidebarProps> = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 /> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsGrid1X2Fill /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillArchiveFill /> Services
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsPeopleFill /> Customers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsMenuButtonWideFill /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillGearFill /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
