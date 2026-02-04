"use client";

import React, { useState } from "react";
import { Bell, FileText, Clock, Users, Calendar } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
  color: "blue" | "orange" | "green" | "purple";
  read?: boolean;
}

interface NotificationDropdownProps {
  notifications?: Notification[];
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
  notifications = [
    {
      id: "1",
      title: "New assignment submitted",
      description: "Advanced Mathematics - Assignment 3",
      time: "2 minutes ago",
      icon: <FileText className="w-4 h-4" />,
      color: "blue",
      read: false,
    },
    {
      id: "2",
      title: "Assignment deadline approaching",
      description: "Statistics - Due in 2 hours",
      time: "1 hour ago",
      icon: <Clock className="w-4 h-4" />,
      color: "orange",
      read: false,
    },
    {
      id: "3",
      title: "Student attendance updated",
      description: "Class attendance for today recorded",
      time: "3 hours ago",
      icon: <Users className="w-4 h-4" />,
      color: "green",
      read: false,
    },
    {
      id: "4",
      title: "Exam schedule published",
      description: "",
      time: "1 day ago",
      icon: <Calendar className="w-4 h-4" />,
      color: "purple",
      read: true,
    },
  ],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 text-blue-500";
      case "orange":
        return "bg-orange-50 text-orange-500";
      case "green":
        return "bg-emerald-50 text-emerald-500";
      case "purple":
        return "bg-purple-50 text-purple-500";
      default:
        return "bg-gray-50 text-gray-500";
    }
  };

  const getDotColor = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-500";
      case "orange":
        return "bg-orange-500";
      case "green":
        return "bg-emerald-500";
      case "purple":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="relative">
      {/* Bell Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Bell className="w-5 h-5 text-gray-600" />
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[calc(100vw-2rem)] sm:w-80 max-w-md bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-100">
            <h3 className="text-sm sm:text-base font-semibold text-gray-900">Notifications</h3>
            <span className="text-xs sm:text-sm text-gray-500 font-medium">{unreadCount} new</span>
          </div>

          {/* Notifications List - Hidden Scrollbar */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {/* Hide scrollbar with CSS */}
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="px-4 py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors last:border-b-0"
              >
                <div className="flex gap-3">
                  {/* Icon with colored background */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${getColorClasses(
                      notification.color
                    )}`}
                  >
                    {notification.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">
                        {notification.title}
                      </h4>
                      <div
                        className={`flex-shrink-0 w-2 h-2 rounded-full ${
                          !notification.read ? getDotColor(notification.color) : "bg-gray-300"
                        } mt-1.5`}
                      />
                    </div>
                    {notification.description && (
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {notification.description}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Link */}
          <div className="border-t border-gray-100 p-4 bg-gray-50">
            <button 
              className="w-full text-center text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: '#026892' }}
            >
              View all notifications
            </button>
          </div>
        </div>
      )}

      {/* Close on outside click */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default NotificationDropdown;
