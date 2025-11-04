// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // for hamburger icons

// const Nav = () => {
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     { item: "HOME", to: "/" },
//     { item: "SERVICES", to: "/services" },
//     { item: "GROWTH", to: "/growth" },
//     { item: "CONTACTS", to: "/contacts" },
//   ];

//   return (
//     <nav className="bg-yellow-950 text-white">
//       {/* Desktop Navbar */}
//       <div className="flex justify-between items-center px-6 py-4">
//         <h1 className="kanit text-xl font-semibold">PORTFOLIO</h1>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-16 text-lg">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               className="hover:border-b hover:border-b-white p-1"
//             >
//               {item.item}
//             </NavLink>
//           ))}
//         </div>

//         {/* Mobile Menu Icon */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-white focus:outline-none"
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="flex flex-col items-center space-y-4 pb-4 md:hidden text-lg">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               onClick={() => setOpen(false)}
//               className="hover:border-b hover:border-b-white p-1"
//             >
//               {item.item}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Nav;


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = ({
  onProfileClick,
  onOverviewClick,
  onAchievementsClick,
  onSkillsClick,
  onCertificationsClick,
  onAwardsClick,
  onEducationClick,
  onContactClick,
}) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { item: 'OVERVIEW', onClick: onOverviewClick },
    { item: 'ACHIEVEMENTS', onClick: onAchievementsClick },
    { item: 'SKILLS', onClick: onSkillsClick },
    { item: 'CONTACT', onClick: onContactClick },
  ];

  return (
    <nav className="bg-yellow-950 text-white fixed w-full z-50">
      {/* Desktop Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="kanit text-xl font-semibold">PORTFOLIO</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-lg">
          {navItems.map((nav, i) => (
            <button
              key={i}
              onClick={() => {
                nav.onClick();
                setOpen(false);
              }}
              className="hover:border-b hover:border-b-white p-1 focus:outline-none"
            >
              {nav.item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col items-center space-y-4 pb-4 md:hidden text-lg">
          {navItems.map((nav, i) => (
            <button
              key={i}
              onClick={() => {
                nav.onClick();
                setOpen(false);
              }}
              className="hover:border-b hover:border-b-white p-1"
            >
              {nav.item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
