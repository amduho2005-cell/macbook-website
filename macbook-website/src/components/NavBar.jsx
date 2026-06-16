import React from 'react'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Apple Logo" />

            <ul>
                {[
                    { Label: "Store" },
                    { Label: "Mac" },
                    { Label: "iPhone" },
                    { Label: "Watch" },
                    { Label: "Vision" },
                    { Label: "AirPods" },
                    
                ] .map((link) => (
                    <li key={link.Label}>
                        <a href="{link.Label}">{link.Label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default NavBar