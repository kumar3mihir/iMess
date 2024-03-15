import React, { useState } from 'react';

const Calendar = () => {
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const [currentMonth, setCurrentMonth] = useState(new Date());

    const prevMonth = () => {
        const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
        setCurrentMonth(prevMonthDate);
    };

    const nextMonth = () => {
        const nextMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
        setCurrentMonth(nextMonthDate);
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const renderCalendarDays = () => {
        const totalDays = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
        const firstDayOfMonth = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());
        const daysArray = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            daysArray.push(
                <td key={`empty-${i}`} className="border p-4 bg-black"></td>
            );
        }

        // Add cells for each day in the month
        for (let day = 1; day <= totalDays; day++) {
            const isToday = new Date().toDateString() === new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toDateString();
            daysArray.push(
                <td key={day} className={`border p-4 ${isToday ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200'}`}>
                    {day}
                </td>
            );
        }

        // Create rows
        const rows = [];
        let cells = [];

        daysArray.forEach((day, index) => {
            if (index % 7 !== 0) {
                cells.push(day);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(day);
            }
        });

        // Add the remaining cells
        rows.push(cells);

        // Render the rows
        return rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
                {row}
            </tr>
        ));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    &lt; Prev Month
                </button>
                <h2 className="text-xl font-bold bg-blue-800 text-white p-4 rounded">{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
                <button onClick={nextMonth} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Next Month &gt;
                </button>
            </div>
            <table className="table-fixed w-full border border-gray-800 rounded-lg">
                <thead>
                    <tr className="bg-gray-300">
                        {daysOfWeek.map(day => (
                            <th key={day} className="border p-4 bg-black text-white">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {renderCalendarDays()}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
