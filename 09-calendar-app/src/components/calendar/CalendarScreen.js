import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import { NavBar } from '../ui/NavBar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';

moment.locale('es');

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const events = [{
    title: 'Cumpleaños del jefe',
    start: moment().toDate(),
    end: moment().add( 2, 'hour' ).toDate(),
    bgcolor: '#fafafa'
}]

export const CalendarScreen = () => {
    return (
        <div className="calendar-screen">
            <NavBar />

            <Calendar
                localizer={localizer}
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={messages}
            />

        </div>
    )
}
