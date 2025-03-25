import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, isBefore, addDays } from "date-fns";

export const DateTimePicker = ({ selectedDate, onChange }) => {
  const now = new Date();

  const filterTime = (time) => {
    const hour = time.getHours();
    const minutes = time.getMinutes();
    if (hour < 10 || hour > 21) return false;
    return minutes === 0 || minutes === 30;
  };

  const handleChange = (date) => {
    if (isBefore(date, now)) {
      onChange(now);
    } else {
      onChange(date);
    }
  };

  return (
    <div className="flex pr-3">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        showTimeSelect
        placeholderText="Select date and time"
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
        minDate={now}
        minTime={setHours(setMinutes(new Date(), 0), 10)}
        maxTime={setHours(setMinutes(new Date(), 30), 21)}
        filterTime={filterTime}
        maxDate={addDays(new Date(), 5)}
        popperPlacement="top-end"
      />
    </div>
  );
};
