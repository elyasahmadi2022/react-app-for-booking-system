import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useSearchHotels } from "./HotelSearchContext";
export default function DatePickerCustom({ ref }) {
  const { dates, dispatch } = useSearchHotels();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateCalendar
        ref={ref}
        value={dates}
        onChange={(value) => dispatch({type:'dates', payload: value})}
        className=" bg-white shadow-2xl absolute top-[130%] left-2/4  -translate-x-2/4 z-50"
      />
    </LocalizationProvider>
  );
}
