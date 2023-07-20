import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import PrivateRoute from "../hooks/PrivateRoute";
import Login from "../pages/Login";
import Employees from "../pages/Employees";
import Leaves from "../pages/Leaves";
import Typography from "../pages/Typography";
import ListLayout from "../pages/ListLayout";
import MyProfile from "../pages/MyProfile";
import MyLeaveSummary from "../pages/MyLeaveSummary";
import LeaveRequests from "../pages/LeaveRequests";
import ActivityLog from "../pages/ActivityLog";
import Notifications from "../pages/Notifications";
import LeaveRequestDetails from "../pages/LeaveRequestDetails";

const NavigationRoute = () => {

  return (
    <>
      <Router>
        <div className="leeevz">
          <Routes>
            <Route path="/activitylog" element={
              <PrivateRoute>
                <ActivityLog />
              </PrivateRoute>
            } />
              <Route path="/employees" element={
                <PrivateRoute>
                  <Employees />
                </PrivateRoute>
              } />
            <Route path="/leaves" element={
              <PrivateRoute>
                <Leaves />
              </PrivateRoute>
            } />
            <Route path="/myleavesummary" element={
              <PrivateRoute>
                <MyLeaveSummary />
              </PrivateRoute>
            } />
            <Route path="/leaverequests" element={
              <PrivateRoute>
                <LeaveRequests />
              </PrivateRoute>
            } />
            <Route path="/leaverequests/:leaveId" element={
              <PrivateRoute>
                <LeaveRequestDetails/>
              </PrivateRoute>
            } />
            <Route path="/typography" element={
              <PrivateRoute>
                <Typography />
              </PrivateRoute>
            } /> 
            <Route path="/listlayout" element={
              <PrivateRoute>
                <ListLayout />
              </PrivateRoute>
            } /> 
            <Route path="/myprofile" element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            } />
            <Route path="/notifications" element={
              <PrivateRoute>
                <Notifications />
              </PrivateRoute>
            } />
            <Route path="/" element={<Login/>} />  
          </Routes>
        </div> 
      </Router>
    </>
  )   
};

export default NavigationRoute;