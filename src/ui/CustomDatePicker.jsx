import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller } from "react-hook-form";
export default function CustomDatePicker({ className, control, name, rules }) {
  Controller;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        name={name} // Pass the name prop
        control={control}
        defaultValue={null} // Set default to null
       rules={rules}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <DatePicker
            value={value}
            onChange={(newValue) => {
              onChange(newValue); // Update value in React Hook Form
            }}
            onBlur={onBlur} // Handle blur event
            renderInput={(params) => (
              <TextField
                {...params}
                inputRef={ref} // Set the ref
                className={className}
                fullWidth // Make it full width
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
}
