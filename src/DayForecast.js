import React from "react";
import "./DayForecast.css";

export default function DayForecast() {
  return (
    <div className="DayForecast">
      <div className="full-day-temp">
        <div className="row" id="forecast">
          <div className="col-2">
            <h3>16:00</h3>
            <img scr=" " alt="sun" />
            <div>
              <span className="temp-max">11</span>°
              <span className="temp-min">10</span>°
            </div>
          </div>
          <div className="col-2">
            <h3>19:00</h3>
            <img scr=" " alt="sun" />
            <div>
              <span className="temp-max">11</span>°
              <span className="temp-min">10</span>°
            </div>
          </div>
          <div className="col-2">
            <h3>22:00</h3>
            <img scr=" " alt="sun" />
            <div>
              <span className="temp-max">11</span>°
              <span className="temp-min">10</span>°
            </div>
          </div>
          <div className="col-2">
            <h3>01:00</h3>
            <img scr=" " alt="sun" />
            <div>
              <span className="temp-max">11</span>°
              <span className="temp-min">10</span>°
            </div>
          </div>
          <div className="col-2">
            <h3>04:00</h3>
            <img scr=" " alt="sun" />
            <div>
              <span className="temp-max">11</span>°
              <span className="temp-min">10</span>°
            </div>
          </div>
          <div className="col-2">
            <h3>07:00</h3>
            <img scr=" " alt="sun" />
            <div>
              <span className="temp-max">11</span>°
              <span className="temp-min">10</span>°
            </div>
          </div>
        </div>
      </div>
      <div className="weekly-temp">
        <div className="row" id="dailyForecast"></div>
      </div>
    </div>
  );
}
