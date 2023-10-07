import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuctionUserTable from './AuctionUserTable';
import UserManagementTable from './UserManagementTable';

const HomeManage = () => {
    return(
        <main aria-label="Quản lý trang chủ">
           <Routes>
              <Route path="/auction-user-table" element={<AuctionUserTable />} />
              <Route path="/user-manage-table" element={<UserManagementTable />} />
           </Routes>
        </main>
    );
}

export default HomeManage;