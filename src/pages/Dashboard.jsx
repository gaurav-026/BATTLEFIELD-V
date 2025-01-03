import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import SidebarRight from '../components/SidebarRight'

const Dashboard = () => {
  return (
    <div className="flex gap-2">
      <Sidebar/>
      <div className="flex-grow">
        <Outlet />
      </div>
      <SidebarRight/>
    </div>
  )
}

export default Dashboard
