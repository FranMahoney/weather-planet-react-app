import React from "react";
import "./WeekForecast.css";

export default function WeekForecast() {
  return (
    <div className="WeekForecast">
      <div className="row" id="dailyForecast">
        <div className="col-2">
          <h3 className="day">Sun</h3>
          <img src=" " alt="cloudy" className="weeklyTempIcon" />
          <h3>
            <span className="temp-max">12</span>°
            <span className="temp-min">11</span>°
          </h3>
        </div>
        <div className="col-2">
          <h3 className="day">Mon</h3>
          <img src=" " alt="cloudy" className="weeklyTempIcon" />
          <h3>
            <span className="temp-max">12</span>°
            <span className="temp-min">11</span>°
          </h3>
        </div>
        <div className="col-2">
          <h3 className="day">Tue</h3>
          <img src=" " alt="cloudy" className="weeklyTempIcon" />
          <h3>
            <span className="temp-max">12</span>°
            <span className="temp-min">11</span>°
          </h3>
        </div>
        <div className="col-2">
          <h3 className="day">Wed</h3>
          <img src=" " alt="cloudy" className="weeklyTempIcon" />
          <h3>
            <span className="temp-max">12</span>°
            <span className="temp-min">11</span>°
          </h3>
        </div>
        <div className="col-2">
          <h3 className="day">Thu</h3>
          <img src=" " alt="cloudy" className="weeklyTempIcon" />
          <h3>
            <span className="temp-max">12</span>°
            <span className="temp-min">11</span>°
          </h3>
        </div>
        <div className="col-2">
          <h3 className="day">Fri</h3>
          <img src=" " alt="cloudy" className="weeklyTempIcon" />
          <h3>
            <span className="temp-max">12</span>°
            <span className="temp-min">11</span>°
          </h3>
        </div>
      </div>
    </div>
  );
}
