import DatePicker from 'react-datepicker';
import en from 'date-fns/locale/en-GB';
import 'react-datepicker/dist/react-datepicker.css';
import "./style.css";
import { useField, useFormikContext } from "formik";

const Calendar = () => {
    const getDateFormat = date => {
        if (!date) {
            return
        }
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return "'Today', MMMM dd";
    } else if (
      date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear()
    ) {
      return "'Tomorrow', MMMM dd";
    } else {
      return 'EEEE, MMMM dd';
    }
    };

    const { setFieldValue } = useFormikContext();
    const [field] = useField("bookingDate");
  
    return (
        <DatePicker 
            {...field}
            selected={field.value}
            onChange={(value) => {
                setFieldValue(field.name, value);
            }}            
            minDate={new Date()}
            locale={en}            
            dateFormat={getDateFormat(field.value)}
            onFocus={event => event.target.blur()}
            onKeyDown={event => event.preventDefault()}
            placeholderText="Booking date" 
            // required={true}
            name="bookingDate"
        />
    )
}

export default Calendar; 