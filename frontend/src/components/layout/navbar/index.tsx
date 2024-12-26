import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

import logo from "@/assets/logo.png";
import { Avatar } from "./customs";
import { nav_links } from "@/utils";
import Theme from "@/components/contants/theme";

const Navbar: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <header>
      <nav className='bg-green-700 border-b border-green-500'>
        <div className='container'>
          <div className='flex h-20 items-center justify-between'>
            <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
              {/* <!-- Logo --> */}
              <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
                <div className='h-10 w-10 rounded-full overflow-hidden'>
                  <img className='object-cover' src={logo} alt='IT Jobs' />
                </div>
                <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                  IT Jobs
                </span>
              </NavLink>
              <div className='ml-auto'>
                <div className='flex space-x-2'>
                  {nav_links.map(({ _id, label, to }) => (
                    <NavLink
                      key={_id}
                      to={to}
                      className={({ isActive }) =>
                        cn("text-white px-3 py-2 rounded-md", {
                          "bg-green-900": isActive,
                          "hover:bg-gray-900 hover:text-white": !isActive,
                        })
                      }
                    >
                      {label}
                    </NavLink>
                  ))}

                  <Theme />
                  {isAuthenticated && <Avatar />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
