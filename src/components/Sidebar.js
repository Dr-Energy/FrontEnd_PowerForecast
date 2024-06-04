import React from 'react';
import { FaBell, FaUser, FaClock, FaSitemap, FaUsers, FaFolderOpen, FaCog } from 'react-icons/fa';
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from 'react-router-dom';


const Sidebar = () => {
return (
<div className="w-64 bg-[#1F487E] text-white flex flex-col p-4 shadow-xl shadow-slate-700">
<div className="text-2xl font-bold mb-8">Dr.E</div>
<Link to="/">
<SidebarItem icon={<LuLayoutDashboard />} label="Dashboard"/>
</Link>
<Link to="/alarmHistory">
<SidebarItem icon={<FaBell />} label="알람이력" />
</Link>
<Link to="/myPage">
<SidebarItem icon={<FaUser />} label="마이 페이지" />
</Link>

</div>
);
};

const SidebarItem = ({ icon, label }) => (
<div className="flex items-center p-2 hover:bg-gray-700 cursor-pointer">
<div className="mr-2">{icon}</div>
<div className="text-lg">{label}</div>
</div>
);

export default Sidebar;