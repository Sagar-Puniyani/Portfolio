import React from 'react'
import { motion } from 'framer-motion'

const tabs = ['🏡 home', '👨‍🏫 experience', '🖥️ projects', '👨‍🎓 education', '📜 certificates', '📱 contact']

interface NavbarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
} 

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="flex space-x-4 bg-gray-800 p-2 rounded-lg">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          className={`capitalize px-3 py-2 rounded-md ${
            activeTab === tab ? 'bg-gray-900 text-white' : 'text-gray-300'
          } hover:text-white transition-colors`}
          onClick={() => setActiveTab(tab)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab}
        </motion.button>
      ))}
    </nav>
  )
}

export default Navbar

