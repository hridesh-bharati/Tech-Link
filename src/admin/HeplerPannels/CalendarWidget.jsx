// src/components/CalendarWidget.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus } from 'lucide-react';
import "./Heplers.css"

const CalendarWidget = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([
        { id: 1, title: 'Webinar: React Hooks', date: '2024-01-20', type: 'webinar' },
        { id: 2, title: 'Exam Deadline', date: '2024-01-22', type: 'exam' },
        { id: 3, title: 'Faculty Meeting', date: '2024-01-18', type: 'meeting' },
        { id: 4, title: 'Course Launch', date: '2024-01-25', type: 'launch' },
    ]);

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayEvents = events.filter(event => event.date === dateStr);

        days.push(
            <div key={day} className={`calendar-day ${dayEvents.length > 0 ? 'has-events' : ''}`}>
                <span className="day-number">{day}</span>
                {dayEvents.length > 0 && (
                    <div className="day-events">
                        {dayEvents.map(event => (
                            <div key={event.id} className={`event-dot ${event.type}`} title={event.title}></div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    const monthYear = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const todayEvents = events.filter(event =>
        event.date === new Date().toISOString().split('T')[0]
    );

    return (
        <div className="calendar-widget">
            <div className="calendar-header">
                <div className="calendar-controls">
                    <button onClick={prevMonth} className="calendar-nav">
                        <ChevronLeft size={20} />
                    </button>
                    <h3 className="calendar-title">
                        <CalendarIcon size={20} />
                        {monthYear}
                    </h3>
                    <button onClick={nextMonth} className="calendar-nav">
                        <ChevronRight size={20} />
                    </button>
                </div>
                <button className="add-event">
                    <Plus size={16} />
                    Add Event
                </button>
            </div>

            <div className="calendar-grid">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="calendar-weekday">{day}</div>
                ))}
                {days}
            </div>

            {todayEvents.length > 0 && (
                <div className="today-events">
                    <h4>Today's Events</h4>
                    {todayEvents.map(event => (
                        <div key={event.id} className="today-event">
                            <span className={`event-type ${event.type}`}></span>
                            <span className="event-title">{event.title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CalendarWidget;