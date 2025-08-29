import React, { forwardRef } from "react";
import empCardBG from "../assets/emp-card-bg.png";
import miniMaxLogo from "../assets/minmax-logo.png";

function Card(props, ref) {
  const {
    employeeId,
    companyName,
    address,
    profilePhoto,
    name,
    position,
    phoneNumber,
    role,
  } = props;

  return (
    <div
      ref={ref}
      id="card"
      className="relative w-96 h-[600px] print:h-[60%] print:w-[50%] bg-gradient-to-br from-white to-indigo-100 overflow-hidden rounded-3xl shadow-2xl border border-indigo-100 print:bg-white print:shadow-none print:border-2 print:border-gray-500"
    >
      {/* Background Image */}
      <img
        src={empCardBG}
        alt="Card background"
        className="absolute w-full h-full print:h-auto object-cover"
      />

      {/* Main Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Header with Logo and Company Name */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center shadow-xl border-2 border-white print:bg-white print:shadow-none print:border-gray-300">
            {/* Company Logo */}
            <img
              src={miniMaxLogo}
              alt="miniMax"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-indigo-800 tracking-wide drop-shadow-sm uppercase print:text-gray-800">
              {companyName}
            </h1>
            <span className="block text-xs text-indigo-400 font-medium tracking-wide print:text-gray-500">
              Employee Card
            </span>
          </div>
        </div>
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold text-indigo-500 tracking-wide leading-tight flex flex-col items-center print:text-gray-800">
            <span className="flex items-center gap-2">{address?.locality}</span>
            <span className="text-base text-indigo-400 print:text-gray-500">
              {address?.city}
            </span>
          </h2>
        </div>
        {/* Profile Photo Section */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full border-4 border-indigo-300 bg-gradient-to-b from-indigo-100 to-white overflow-hidden shadow-lg flex items-center justify-center print:bg-white print:shadow-none print:border-gray-300">
            {/* Profile Avatar */}
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-indigo-200 to-amber-200 flex items-center justify-center print:bg-white">
                <svg
                  className="w-16 h-16 text-indigo-400 print:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                </svg>
              </div>
            )}
          </div>
        </div>
        {/* Name and Title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-indigo-700 tracking-wide mb-1 drop-shadow-sm print:text-gray-800">
            {name}
          </h3>
          <p className="text-lg text-amber-600 font-semibold tracking-wide print:text-gray-500">
            {position}
          </p>
        </div>
        {/* Contact Information */}
        <div className="text-center mb-8 space-y-1">
          <p className="text-base text-indigo-700 font-medium print:text-gray-800">
            Employee ID:{" "}
            <span className="font-semibold text-indigo-400 print:text-gray-500">
              {employeeId}
            </span>
          </p>
          <p className="text-base text-indigo-700 font-medium print:text-gray-800">
            Phone:{" "}
            <span className="font-semibold text-indigo-400 print:text-gray-500">
              {phoneNumber}
            </span>
          </p>
        </div>
        {/* Footer Sections */}
        <div className="mt-auto flex justify-between items-end">
          <div className="text-left">
            <p className="text-xs text-indigo-400 font-bold tracking-wide border-t-2 border-indigo-400">
              {role.toUpperCase()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-indigo-400 font-bold tracking-wide border-t-2 border-indigo-400">
              {companyName.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Curved Design */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-indigo-300/30 to-transparent"></div>
    </div>
  );
}

export default forwardRef(Card);
