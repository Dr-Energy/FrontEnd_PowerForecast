import React from 'react';
import { FaBell, FaUser} from 'react-icons/fa';
import { FaPowerOff } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { alertCountState } from '../recoil/atoms';

const Sidebar = () => {
    const alertCount = useRecoilValue(alertCountState);

return (
<div className="bg-white bg-opacity-20 text-white flex flex-col p-4 m-4 rounded-xl min-w-52">
<div className="text-3xl mb-8 flex items-center justify-center pt-3">닥터 에너지 <span className='pl-2 text-green-200 text-xl'>{<FaPowerOff/>}</span></div>
    <Link to="/">
    <SidebarItem icon={<LuLayoutDashboard />} label="Dashboard"/>
    </Link>
    <Link to="/history">
    <SidebarItem icon={<FaBell />} 
            label={
                <div className="flex items-center">
                <span>알람이력 &nbsp;</span>
                {alertCount > 0 && (
                    <span className="bg-red-500 text-white rounded-full text-xs px-2 py-1 ml-2">
                    {alertCount}
                    </span>
                )}</div>} 
    />
    </Link>
    <Link to="/myPage">
    <SidebarItem icon={<FaUser />} label="마이 페이지" />
    </Link>

</div>
);
};

const SidebarItem = ({ icon, label }) => (
<div className="flex items-center p-2 hover:bg-sky-100 hover:bg-opacity-30 hover:rounded-md cursor-pointer">
<div className="mr-2">{icon}</div>
<div className="text-lg">{label}</div>
</div>
);

export default Sidebar;