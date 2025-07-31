import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns"
export default function DatePickerCustom({value, setValue, ref}){
    return <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker ref={ref} value={value} onChange={(newValue) =>  setValue(newValue)} className=' w-full' />
    </LocalizationProvider>
}