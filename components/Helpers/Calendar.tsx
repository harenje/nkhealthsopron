import React, { useState } from "react";

interface Props {
  selectedDate: Date;
  onDateSelect: (selectedDate: Date) => void;
}

const Calendar = ({ selectedDate, onDateSelect }: Props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDate, setHoveredDate] = useState<Date | null>();

  /**
   * Render the calendar header displaying the current month and year.
   */
  const header = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    return (
      <div className="flex items-center justify-between border-b py-2 px-3">
        <div>
          {months[monthIndex]} {year}
        </div>
        <div>
          <button
            className="focus:shadow-outline-blue rounded-full px-3 py-1 text-sm font-semibold text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() =>
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() - 1,
                  1
                )
              )
            }
          >
            Previous
          </button>
          <button
            className="focus:shadow-outline-blue rounded-full px-3 py-1 text-sm font-semibold text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() =>
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() + 1,
                  1
                )
              )
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  /**
   * Render the days of the week.
   */
  const daysOfWeek = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayElements = days.map((day) => (
      <div
        className="text-center text-sm font-semibold text-gray-500"
        key={day}
      >
        {day}
      </div>
    ));

    return <div className="grid grid-cols-7 gap-1 py-1">{dayElements}</div>;
  };

  /**
   * Render the calendar cells for each day of the month.
   */
  const cells = () => {
    const monthStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const monthEnd = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const startOfMonth = new Date(monthStart);
    startOfMonth.setDate(startOfMonth.getDate() - startOfMonth.getDay());
    const endOfMonth = new Date(monthEnd);
    endOfMonth.setDate(endOfMonth.getDate() + (6 - endOfMonth.getDay()));

    const rows = [];
    let currentDay = new Date(startOfMonth);

    while (currentDay <= endOfMonth) {
      let days = [];

      for (let i = 0; i < 7; i++) {
        const formattedDate = currentDay.getDate();
        const isCurrentMonth = currentDay.getMonth() === currentDate.getMonth();
        const isToday = currentDay.toDateString() === new Date().toDateString();
        const isSelected =
          selectedDate.toDateString() === currentDay.toDateString();
        const isHovered =
          hoveredDate &&
          hoveredDate.toDateString() === currentDay.toDateString();

        const day = new Date(currentDay);

        days.push(
          <div
            className={`cursor-pointer py-2 text-center text-sm font-medium focus:outline-none ${
              isToday ? "text-blue-600" : isHovered ? "bg-gray-200" : ""
            } ${
              isCurrentMonth
                ? "text-gray-800 hover:bg-gray-200"
                : "text-gray-400"
            } `}
            onClick={() => handleDateSelect(day)}
            onMouseOver={() => setHoveredDate(day)}
            onMouseOut={() => setHoveredDate(null)}
            key={day.toDateString()}
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-transparent">
              {formattedDate}
            </span>
          </div>
        );

        currentDay.setDate(currentDay.getDate() + 1);
      }

      rows.push(<div className="grid grid-cols-7 gap-1">{days}</div>);

      if (currentDay > endOfMonth) {
        break;
      }
    }

    return <div className="body">{rows}</div>;
  };

  /**
   * Handle the selection of a date.
   * @param selectedDate The selected date.
   */
  const handleDateSelect = (selectedDate: Date) => {
    onDateSelect(selectedDate);
    console.log(selectedDate, "Calendar");
  };

  return (
    <div className="calendar w-2/4 rounded-lg bg-white shadow">
      {header()}
      {daysOfWeek()}
      {cells()}
    </div>
  );
};

export default Calendar;
