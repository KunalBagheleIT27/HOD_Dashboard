import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Avatar from "@/components/ui/Avatar";
import NotificationDropdown from "@/components/ui/NotificationDropdown";
import Image from "next/image";
import { User } from "@/types";
import { useState } from "react";
import { Menu, User as UserIcon, Settings, HelpCircle, LogOut } from "lucide-react";

interface HeaderProps {
  user?: User;
  onToggleSidebar?: () => void;
}

const TopBar: React.FC<HeaderProps> = ({ user, onToggleSidebar }) => {
  const [semester, setSemester] = useState("Semester One");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      {/* Main Header Row */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 h-14 sm:h-16">
        {/* Left: Hamburger + Brand */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          {/* Hamburger Menu - Mobile/Tablet */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5 text-gray-900" />
          </button>

          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex items-center justify-center bg-white flex-shrink-0">
            <Image 
              src="/images/ur-logo.jpeg" 
              alt="UR Logo" 
              width={56} 
              height={56}
              className="object-cover"
            />
          </div>
          <div className="leading-tight min-w-0">
            <h1 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 truncate">SAMPS UR</h1>
            <p className="text-xs text-gray-500 hidden md:block">HOD Dashboard</p>
          </div>
        </div>

        {/* Right: Controls (Desktop shows all, Mobile shows only notifications + avatar) */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Year Selector - Hidden on mobile, shown on md+ */}
          <Select defaultValue="2024-2025">
            <SelectTrigger className="hidden md:flex w-28 lg:w-32 h-9 bg-white border-gray-200 text-xs font-medium">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-md z-50">
              <SelectItem value="2024-2025">2024-2025</SelectItem>
              <SelectItem value="2025-2026">2025-2026</SelectItem>
              <SelectItem value="2026-2027">2026-2027</SelectItem>
            </SelectContent>
          </Select>

          {/* Semester Selector - Hidden on mobile, shown on md+ */}
          <Select value={semester} onValueChange={setSemester}>
            <SelectTrigger className="hidden md:flex w-32 lg:w-36 h-9 bg-white border-gray-200 text-xs font-medium">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-md z-50">
              <SelectItem value="Semester One">Semester One</SelectItem>
              <SelectItem value="Semester Two">Semester Two</SelectItem>
            </SelectContent>
          </Select>

          {/* Notifications Dropdown - Always visible */}
          <NotificationDropdown />

          {/* User Avatar - Always visible */}
          <div className="relative flex items-center gap-2 pl-2 flex-shrink-0">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-medium text-gray-900 truncate">{user?.name || 'Dr. Ronny'}</p>
              <p className="text-xs text-gray-500">{user?.role || 'HOD'}</p>
            </div>
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="focus:outline-none"
            >
              <Avatar name={user?.name || 'Dr. Ronny'} size="md" />
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsProfileOpen(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-40 py-2">
                  {/* User Info Header */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">{user?.name || 'Dr. Ronny'}</p>
                    <p className="text-xs text-gray-500">{user?.email || 'pbasalika@yahoo.fr'}</p>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                      <UserIcon className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Profile</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                      <Settings className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Settings</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                      <HelpCircle className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Help</span>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-1"></div>

                  {/* Log out */}
                  <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                    <LogOut className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-red-600 font-medium">Log out</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdowns Row - Only visible on mobile (below md) */}
      <div className="flex md:hidden items-center gap-2 px-3 pb-3 pt-2 border-t border-gray-100">
        {/* Year Selector - Mobile */}
        <Select defaultValue="2024-2025">
          <SelectTrigger className="flex-1 h-9 bg-white border-gray-200 text-xs font-medium">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 shadow-md z-50">
            <SelectItem value="2024-2025">2024-2025</SelectItem>
            <SelectItem value="2025-2026">2025-2026</SelectItem>
            <SelectItem value="2026-2027">2026-2027</SelectItem>
          </SelectContent>
        </Select>

        {/* SemesterSelector - Mobile */}
        <Select value={semester} onValueChange={setSemester}>
          <SelectTrigger className="flex-1 h-9 bg-white border-gray-200 text-xs font-medium">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 shadow-md z-50">
            <SelectItem value="Semester One">Semester One</SelectItem>
            <SelectItem value="Semester Two">Semester Two</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TopBar;