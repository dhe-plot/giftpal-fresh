import React, { useState } from 'react'
import { Instagram, Linkedin, Facebook } from 'lucide-react'

const AppInput = (props) => {
  const { label, placeholder, icon, ...rest } = props;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="w-full min-w-[200px] relative">
      {label && 
        <label className="block mb-2 text-sm">
          {label}
        </label>
      }
      <div className="relative w-full">
        <input
          type="text"
          className="peer relative z-10 border-2 border-gray-600 h-12 w-full rounded-md bg-gray-800 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-gray-900 placeholder:font-medium text-white"
          placeholder={placeholder}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          {...rest}
        />
        {isHovering && (
          <>
            <div
              className="absolute pointer-events-none top-0 left-0 right-0 h-[2px] z-20 rounded-t-md overflow-hidden"
              style={{
                background: `radial-gradient(30px circle at ${mousePosition.x}px 0px, #C7D1DB 0%, transparent 70%)`,
              }}
            />
            <div
              className="absolute pointer-events-none bottom-0 left-0 right-0 h-[2px] z-20 rounded-b-md overflow-hidden"
              style={{
                background: `radial-gradient(30px circle at ${mousePosition.x}px 2px, #C7D1DB 0%, transparent 70%)`,
              }}
            />
          </>
        )}
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}

const Page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const leftSection = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - leftSection.left,
      y: e.clientY - leftSection.top
    });
  };

  const socialIcons = [
    {
      icon: <Instagram size={24} />,
      href: '#',
    },
    {
      icon: <Linkedin size={24} />,
      href: '#',
    },
    {
      icon: <Facebook size={24} />,
      href: '#',
    }
  ];

  return (
    <div className="h-screen w-full bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 w-[80%] lg:w-[70%] md:w-[55%] flex justify-between h-[600px] rounded-lg shadow-xl border border-gray-700">
        <div
          className="w-full lg:w-1/2 px-4 lg:px-16 h-full relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}>
            <div
              className={`absolute pointer-events-none w-[500px] h-[500px] bg-gradient-to-r from-purple-300/30 via-blue-300/30 to-pink-300/30 rounded-full blur-3xl transition-opacity duration-200 ${
                isHovering ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            />
            <div className="h-full z-10 relative">
              <form className="text-center py-10 md:py-20 grid gap-2 h-full" onSubmit={(e) => {e.preventDefault();}}>
                <div className="grid gap-4 md:gap-6 mb-2">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white">Sign in to GIFTPAL</h1>
                  <div className="social-container">
                    <div className="flex items-center justify-center">
                      <ul className="flex gap-3 md:gap-4">
                        {socialIcons.map((social, index) => {
                          return (
                            <li key={index} className="list-none">
                              <a
                                href={social.href}
                                className="w-[2.5rem] md:w-[3rem] h-[2.5rem] md:h-[3rem] bg-gray-700 rounded-full flex justify-center items-center relative z-[1] border-2 border-gray-600 overflow-hidden group hover:bg-gray-600 transition-colors"
                              >
                                <span className="text-white transition-all duration-500 ease-in-out z-[2]">
                                  {social.icon}
                                </span>
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                <span className="text-sm text-gray-400">or use your account</span>
              </div>
              <div className="grid gap-4 items-center">
                  <AppInput placeholder="Email" type="email" />
                  <AppInput placeholder="Password" type="password" />
                </div>
                <a href="#" className="font-light text-sm md:text-md text-gray-400 hover:text-white">Forgot your password?</a>
                <div className="flex gap-4 justify-center items-center">
                   <button 
                    className="group/button relative inline-flex justify-center items-center overflow-hidden rounded-md bg-blue-600 px-6 py-3 text-sm font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-blue-700 cursor-pointer"
                  >
                  <span className="px-2 py-1">Sign In</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                </button>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden lg:block w-1/2 h-full overflow-hidden rounded-r-lg">
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
                width={1000}
                height={1000}
                alt="GIFTPAL Login"
                className="w-full h-full object-cover transition-transform duration-300 opacity-30"
              />
         </div>
        </div>
      </div>
  )
}

export default Page
