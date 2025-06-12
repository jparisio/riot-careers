import { useState } from "react";
import { motion } from "framer-motion";

interface FilterBarProps {
  onSearchChange?: (value: string) => void;
  onCraftChange?: (value: string) => void;
  onTeamChange?: (value: string) => void;
  onOfficeChange?: (value: string) => void;
}

const crafts = [
  "Art",
  "Design",
  "Engineering",
  "Product",
  "Analytics",
  "Audio",
  "Quality Assurance",
  "Security",
  "Esports",
  "Community",
  "Localization",
];

const teams = [
  "VALORANT",
  "League of Legends",
  "Teamfight Tactics",
  "Legends of Runeterra",
  "Wild Rift",
  "Arcane",
  "Project L",
  "Riot Forge",
  "Platform Services",
];

const offices = [
  "Los Angeles, USA",
  "Berlin, Germany",
  "Dublin, Ireland",
  "Hong Kong",
  "Seoul, South Korea",
  "Singapore",
  "São Paulo, Brazil",
  "Sydney, Australia",
];

export default function FilterBar({
  onSearchChange,
  onCraftChange,
  onTeamChange,
  onOfficeChange,
}: FilterBarProps) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCraft, setSelectedCraft] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange?.(value);
  };

  const handleCraftChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCraft(value);
    onCraftChange?.(value);
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedTeam(value);
    onTeamChange?.(value);
  };

  const handleOfficeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedOffice(value);
    onOfficeChange?.(value);
  };

  return (
    <motion.div
      className="w-full  p-6 mb-8 border-b-1 border-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search Job Titles or Job ID"
            value={searchValue}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 bg-[#dbd9d6] rounded-3xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-riotred focus:border-transparent"
          />
        </div>

        {/* Craft Dropdown */}
        <div className="relative">
          <select
            value={selectedCraft}
            onChange={handleCraftChange}
            className="w-full px-4 py-3 bg-[#dbd9d6] rounded-3xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-riotred focus:border-transparent appearance-none cursor-pointer"
          >
            <option value="">Select a Craft</option>
            {crafts.map((craft) => (
              <option key={craft} value={craft}>
                {craft}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Product Team Dropdown */}
        <div className="relative">
          <select
            value={selectedTeam}
            onChange={handleTeamChange}
            className="w-full px-4 py-3 bg-[#dbd9d6]  rounded-3xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-riotred focus:border-transparent appearance-none cursor-pointer"
          >
            <option value="">Select a Product Team</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Office Dropdown */}
        <div className="relative">
          <select
            value={selectedOffice}
            onChange={handleOfficeChange}
            className="w-full px-4 py-3 bg-[#dbd9d6] rounded-3xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-riotred focus:border-transparent appearance-none cursor-pointer"
          >
            <option value="">Select an Office</option>
            {offices.map((office) => (
              <option key={office} value={office}>
                {office}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
