import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./DateRangePicker.module.css";

function DateRangePicker({ startDate, setStartDate, endDate, setEndDate, optionDate, setOptionDate, formatDate }) {
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const [showOptionCalendar, setShowOptionCalendar] = useState(false);

  const handleStartDateChange = date => {
    const formattedDate = formatDate(date);
    setStartDate(formattedDate);
    setShowEndCalendar(true);
    setShowStartCalendar(false);
  };

  const handleEndDateChange = date => {
    const formattedDate = formatDate(date);
    setEndDate(formattedDate);
    setShowEndCalendar(false);
  };

  const handleOptionDateChange = date => {
    setOptionDate(date);
    setShowOptionCalendar(false);
  };



  const parseDate = dateString => {
    if (!dateString) return null;
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  const formattedDateRange = startDate && endDate ? ` ${startDate}~${endDate}` : "";
  const formattedOptionDate = optionDate ? formatDate(optionDate) : "";

  let optionValue = "";
  if (!startDate || !endDate) {
    optionValue = "진행 기간을 먼저 설정해주세요";
  } else if (optionDate) {
    optionValue = formattedOptionDate;
  } else {
    optionValue = "모집 마감일을 설정해주세요";
  }

  return (
    <div className={styles.date_grid_box}>
      <div>
        <label className={styles.select_title}>진행 기간</label>
        <div className={styles.selected_value_input_wrapper}>
          <input
            placeholder="📆 진행 기간"
            className={styles.selected_value_input}
            value={"📆" + formattedDateRange}
            readOnly
          />
          <img
            src={`${process.env.PUBLIC_URL}/Icon/caretDown.svg`}
            className={styles.input_down_icon}
            onClick={() => setShowStartCalendar(!showStartCalendar)}
          />
        </div>
      </div>

      {showStartCalendar && (
        <div>
          <label>프로젝트 시작일을 선택해주세요</label>
          <Calendar
            onChange={handleStartDateChange}
            value={startDate ? parseDate(startDate) : null}
            minDate={new Date()} // 오늘 이전의 날짜는 선택할 수 없도록 설정
          />
        </div>
      )}

      {showEndCalendar && startDate && (
        <div>
          <label>프로젝트 마감일을 선택해주세요</label>
          <Calendar
            onChange={handleEndDateChange}
            value={endDate ? parseDate(endDate) : null}
            minDate={parseDate(startDate)}
          />
        </div>
      )}

      <div className={styles.option_day}>
        <label className={styles.select_title}>모집마감일</label>
        <div className={styles.selected_value_input_wrapper}>
          <input
            placeholder="📆 모집마감일"
            className={styles.selected_value_input}
            value={"📆 " + optionValue}
            readOnly
          />
          <img
            src={`${process.env.PUBLIC_URL}/Icon/caretDown.svg`}
            className={styles.option_down_icon}
            onClick={() => {
              if (startDate && endDate) {
                setShowOptionCalendar(!showOptionCalendar);
              }
            }}
          />
        </div>
      </div>

      {showOptionCalendar && (
        <div>
          <label>마감일을 선택해주세요</label>
          <Calendar
            onChange={handleOptionDateChange}
            value={optionDate}
            minDate={startDate ? parseDate(startDate) : new Date()}
            maxDate={endDate ? parseDate(endDate) : null}
          />
        </div>
      )}
    </div>
  );
}

export default DateRangePicker;
