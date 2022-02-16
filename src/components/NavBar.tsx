import React from 'react'
import LoginButton from './LoginButton'

function NavBar() {
  return (
    <>
      <div className="fixed top-0 left-0 navbar bg-base-100 z-[90]">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a href="/dashboard">Demo</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <LoginButton />
            </ul>
          </div>
          <a
            className="btn btn-ghost text-xl"
            href="/">
            <img
              src="/logo.png"
              alt="logo"
              className="w-8 h-8 mr-2 rounded-lg"
            />
            Resend Cold Emailer
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li
              className="tooltip tooltip-bottom"
              data-tip="See pricing for Resend Cold Emailer">
              <a>Pricing</a>
            </li>
            <li
              className="tooltip tooltip-bottom"
              data-tip="See a demo">
              <a href="/dashboard">Demo</a>
            </li>
            <li
              className="tooltip tooltip-bottom"
              data-tip="Contact support">
              <a>Contact</a>
            </li>
            <LoginButton />
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar