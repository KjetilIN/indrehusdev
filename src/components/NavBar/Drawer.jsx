import React from 'react'

export const Drawer = () => {
  return (
    <div className="drawer drawer-end">
                    <input
                        id="my-drawer-4"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content">
                        <label
                            htmlFor="my-drawer-4"
                            className="drawer-button btn btn-sec"
                        >
                            Open drawer
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer-4"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Projects</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
  )
}
