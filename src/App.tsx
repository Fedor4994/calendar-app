import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "./events";
import { registerLicense } from "@syncfusion/ej2-base";


registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1NpR2RGfV5ycEVBal1XTnVYUj0eQnxTdEFjUH1WcHNXRGRVU0xzXQ==')


const Calendar = () => {

  return (
    <div className="container">
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2024, 9, 1)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
