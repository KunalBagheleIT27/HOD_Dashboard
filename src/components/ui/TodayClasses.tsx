import React from "react";

const TodayClasses: React.FC = () => {
  const handleNext = () => {
    console.log("Next button clicked");
    // Add your action here
  };

  const handleLater = () => {
    console.log("Later button clicked");
    // Add your action here
  };

  const classes = [
    {
      id: 1,
      name: "Advanced Mathematics",
      location: "Room 101",
      time: "09:00-11:00",
    },
    {
      id: 2,
      name: "Statistics",
      location: "Room 205",
      time: "14:00-16:00",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 h-full flex flex-col">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Today&apos;s Schedule</h2>

      <div className="space-y-3 flex-1">
        {classes.map((session, index) => (
          <div
            key={session.id}
            className={`rounded-lg p-4 flex items-center justify-between ${
              index === 0 ? "bg-blue-50 border border-blue-150" : "bg-white border border-gray-200"
            }`}
          >
            <div>
              <h3 className={`font-semibold text-base ${
                index === 0 ? "text-cyan-700" : "text-gray-900"
              }`}>
                {session.name}
              </h3>
              <p className={`text-sm mt-1 ${
                index === 0 ? "text-cyan-600" : "text-gray-600"
              }`}>
                {session.location} • {session.time}
              </p>
            </div>
            <button
              onClick={index === 0 ? handleNext : handleLater}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                index === 0
                  ? "text-white hover:opacity-85 hover:shadow-md"
                  : "bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200"
              }`}
              style={index === 0 ? { backgroundColor: '#026892' } : {}}
            >
              {index === 0 ? "Next" : "Later"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayClasses;


