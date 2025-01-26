

import { Sidebar } from './components/Sidebar'
import { Outlet } from 'react-router-dom';
import Navbar from './../../components/Navbar';


export default function AdminLayout() {
  return (
<div>
    <Navbar />
        <div className="flex h-screen">
       
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
              <Outlet/>
            </main>
          </div>
    </div>
    </div>
  )
}

