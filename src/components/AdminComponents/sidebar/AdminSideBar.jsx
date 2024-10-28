import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxDashboard } from "react-icons/rx";
import { UserCircleIcon, PowerIcon } from "@heroicons/react/24/solid";
import {
  MdAdminPanelSettings,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { ImUsers } from "react-icons/im";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col w-[20rem] rounded-lg text-white h-[94vh] min-w-[15rem] p-4 shadow-[1px_1px_6px_6px_rgba(0,0,0,0.3)] m-5 z-10 bg-gradient-to-r from-darkMode via-gray-800 to-darkMode">
        <Typography variant="h5" color="white" className="flex items-center gap-2">
          <RxDashboard />
          Dashboard
        </Typography>

        <List className="text-white">
          <Typography as={Link} to="/admin/admins">
            <ListItem>
              <ListItemPrefix>
                <MdAdminPanelSettings className="h-5 w-5" />{" "}
              </ListItemPrefix>
              Admins
            </ListItem>
          </Typography>
          <Typography as={Link} to="/admin/users">
            <ListItem>
              <ListItemPrefix>
                <ImUsers className="h-5 w-5 " />
              </ListItemPrefix>
              Users
            </ListItem>
          </Typography>
          <Typography as={Link} to="/admin/products">
            <ListItem>
              <ListItemPrefix>
                <MdProductionQuantityLimits className="h-5 w-5 " />
              </ListItemPrefix>
              Products
            </ListItem>
          </Typography>
          {/*<Typography as={Link} to="/admin/users">
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5 " />
              </ListItemPrefix>
              Profile
            </ListItem>
          </Typography>*/}
          <Typography as={Link} to="/admin/users">
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5 " />
              </ListItemPrefix>
              Log out
            </ListItem>
          </Typography>
        </List>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden z-10">
        <button
          onClick={toggleDropdown}
          className="bg-gray-800 text-white p-2 rounded-lg m-5"
        >
          <RxHamburgerMenu size={40} />
        </button>
        {isOpen && (
          <div className="absolute bg-gray-800 text-white w-full mt-2 rounded-md shadow-lg">
            <List className="text-white">
              <ListItem>
                <ListItemPrefix>
                  <MdAdminPanelSettings className="h-5 w-5" />
                </ListItemPrefix>
                <Typography as={Link} to="/admin/admins">
                  Admins
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ImUsers className="h-5 w-5 " />
                </ListItemPrefix>
                <Typography as={Link} to="/admin/users">
                  Users
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <MdProductionQuantityLimits className="h-5 w-5 " />
                </ListItemPrefix>
                <Typography as={Link} to="/admin/products">
                  Products
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5 " />
                </ListItemPrefix>
                Profile
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5 " />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </List>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
