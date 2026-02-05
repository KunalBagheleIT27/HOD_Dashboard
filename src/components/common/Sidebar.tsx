import Link from "next/link";
import { useState } from "react";
import {
  Home,
  BookOpen,
  FileText,
  Users,
  TrendingUp,
  ChevronRight,
  ChevronDown,
  ClipboardList,
  Clock,
  Calendar,
  MessageSquare,
  CheckCircle,
  Bookmark,
  Copy,
  User,
  UserPlus,
  CalendarCheck,
  BookMarked,
  DollarSign,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SubMenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
  href?: string;
  hasSubmenu?: boolean;
  submenu?: SubMenuItem[];
}

const navItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
    active: true,
    href: "/",
  },
  {
    id: "academic-management",
    label: "Academic Management",
    icon: BookOpen,
    hasSubmenu: true,
    href: "/teaching/modules",
    submenu: [
      {
        id: "teaching-plans",
        label: "Teaching Plans",
        icon: ClipboardList,
        href: "/academic/teaching-plans",
      },
      {
        id: "attendance",
        label: "Attendance",
        icon: Clock,
        href: "/academic/attendance",
      },
      {
        id: "timetables",
        label: "Timetables",
        icon: Calendar,
        href: "/academic/timetables",
      },
      {
        id: "student-requests",
        label: "Student Requests",
        icon: MessageSquare,
        href: "/academic/student-requests",
      },
    ],
  },
  {
    id: "academic-records",
    label: "Academic Records",
    icon: FileText,
    hasSubmenu: true,
    href: "/students/class-lists",
    submenu: [
      {
        id: "marks-submitted",
        label: "Marks Submitted",
        icon: CheckCircle,
        href: "/academic-records/marks-submitted",
      },
      {
        id: "classes-marks",
        label: "Classes Marks",
        icon: Bookmark,
        href: "/academic-records/classes-marks",
      },
      {
        id: "students-transcripts",
        label: "Students Transcripts",
        icon: Copy,
        href: "/academic-records/students-transcripts",
      },
      {
        id: "student-records",
        label: "Student Records",
        icon: User,
        href: "/academic-records/student-records",
      },
    ],
  },
  {
    id: "staff-management",
    label: "Staff Management",
    icon: Users,
    hasSubmenu: true,
    href: "/students/leave-management",
    submenu: [
      {
        id: "lecturer-registration",
        label: "Lecturer Registration",
        icon: UserPlus,
        href: "/staff/lecturer-registration",
      },
      {
        id: "leave-requests",
        label: "Leave Requests",
        icon: CalendarCheck,
        href: "/staff/leave-requests",
      },
      {
        id: "modules-allocation",
        label: "Modules Allocation",
        icon: BookMarked,
        href: "/staff/modules-allocation",
      },
      {
        id: "assign-claims",
        label: "Assign Claims",
        icon: DollarSign,
        href: "/staff/assign-claims",
      },
      {
        id: "set-submissions",
        label: "Set Submissions",
        icon: Send,
        href: "/staff/set-submissions",
      },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: TrendingUp,
    href: "/analytics",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleSubmenu = (id: string) => {
    setExpandedMenus(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-14 sm:top-16 left-0 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] w-72 bg-white border-r border-gray-200 z-40 transition-transform duration-300 lg:translate-x-0 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedMenus.includes(item.id);

            return (
              <div key={item.id}>
                {item.hasSubmenu ? (
                  <button
                    onClick={() => toggleSubmenu(item.id)}
                    className={cn(
                      "group w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      item.active
                        ? "text-cyan-700 bg-green-50"
                        : "text-gray-800 hover:bg-green-50 hover:text-[#026892]"
                    )}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Icon className={cn(
                        "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-colors duration-200",
                        item.active ? "text-cyan-600" : "text-gray-600 group-hover:text-[#026892]"
                      )} />
                      <span className="text-left whitespace-nowrap truncate">{item.label}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 flex-shrink-0 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 flex-shrink-0 text-gray-400" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href || "/"}
                    onClick={() => onToggle()}
                    className={cn(
                      "group w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      item.active
                        ? "text-cyan-700 bg-green-50"
                        : "text-gray-800 hover:bg-green-50 hover:text-[#026892]"
                    )}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Icon className={cn(
                        "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-colors duration-200",
                        item.active ? "text-cyan-600" : "text-gray-600 group-hover:text-[#026892]"
                      )} />
                      <span className="text-left whitespace-nowrap truncate">{item.label}</span>
                    </div>
                  </Link>
                )}

                {/* Submenu */}
                {item.hasSubmenu && isExpanded && item.submenu && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.submenu.map((subItem) => {
                      const SubIcon = subItem.icon;
                      return (
                        <Link
                          key={subItem.id}
                          href={subItem.href}
                          onClick={() => {
                            onToggle();
                            if (window.innerWidth < 1024) {
                              setExpandedMenus([]);
                            }
                          }}
                          className="group flex items-center gap-3 px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-[#026892] transition-all duration-200"
                        >
                          <SubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-gray-500 group-hover:text-[#026892]" />
                          <span className="whitespace-nowrap truncate">{subItem.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;