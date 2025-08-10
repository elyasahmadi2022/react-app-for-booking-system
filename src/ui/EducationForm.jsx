import { differenceInYears } from "date-fns";
import CustomDatePicker from "./CustomDatePicker";
import FileInput from "./FileInput";
import FormRow from "./FormRow";
import { Heading } from "./Heading";
import Option from "./Option";
import { Select } from "./Select";

function EducationForm({ step:{step}, form }) {
    const {register, formState, control, watch} = form
    const {errors : {startDate, endDate, subjectField,universtiy,degree }} = formState
  const options = [
    {
      value: "",
      label: "---",
      insititute: {
        name: "",
        label: "---",
      },
    },
    {
      value: "computer science",
      label: "computer science",
      insititute: {
        name: "kandahar",
        label: "Kandahar",
      },
    },
    {
      value: "toursit",
      label: "tour",
      insititute: {
        name: "Kabul",
        label: "Kabul",
      },
    },
    {
      value: "Geography",
      label: "Geography",
      insititute: {
        name: "Balkh",
        label: "Balkh",
      },
    },
  ];
  const degrees = [
    {value: '---', label: "---"},
    {value: 'Bachelor', label: "Bachelor"},
    {value: 'undergraduate', label: "Undergraduate"},
    {value: 'Master', label: "Master"},
    {value: 'Postgraduate', label: "postgraduate"},
    {value: 'doctorate', label: "doctorate"},
    
  ]

  return (
    <div className="w-full md:w-[90%] h-auto bg-white m-auto ">
      <Heading as={"h3"} className={"p-3 text-center"}>
        {step}
      </Heading>
      <div className="flex flex-col gap-3 w-full md:w-[90%] m-auto py-2 h-auto">
        <FormRow label="Your Subject Field " error={subjectField?.message}>
          <Select id="sub-field" register={register('subjectField', {required:{
            value: true,
            message: 'You have to add Your field of study'
          },
          
          })}>
            {options.map((option, index) => (
              <Option value={option.value} label={option.label} key={index} />
            ))}
          </Select>
        </FormRow>
        <FormRow label="Institution" error={universtiy?.message}>
          <Select name="university" id="university-name" register={register("universtiy", {required:{
            value: true,
            message:"The university name is neccessary"
          }})}>
            {options.map((option, index) => (
              <Option
                value={option.insititute.name}
                label={option.insititute.label}
                key={index}
              />
            ))}
          </Select>
        </FormRow>
        <FormRow label="University Degree" error={degree?.message}>
          <Select  id="university-degree" register={register("degree", {
            required:{
              value: true,
              message: "You have to add the name of university"
            }
          })}>
            {degrees.map((option, index) => (
              <Option
                value={option.value}
                label={option.label}
                key={index}
              />
            ))}
          </Select>
        </FormRow>
        <FormRow label="start date" error={startDate?.message}>
          <CustomDatePicker
            name="startDate"
            control={control}
            className=" w-full   m-auto"
            rules={{
              required: {
                value:true,
                message: 'Please add the start date of you studying'
              },
              validate: (value) => {
                  const currDegree = watch('degree')
                  const difference = differenceInYears(new Date(), value)
                  if (currDegree === 'Bachelor'){
                    return difference > 4 || 'The bachelor degree should at least start 4 year before now'
                  }
                  if (currDegree === 'Master'){
                    return difference > 2 || 'The master degree should at least start 2 year before now'
                  }
                  if (currDegree === 'Postgrudate'){
                    return difference > 2||  'The Postgraduate program at least start 2 year then now'
                  }
                  if (currDegree === 'doctorate'){
                    return difference > 6 || 'The doctorate programme at least start 6 year then now'
                  }
                  if(currDegree === "undergraduate"){
                    return difference > 3 || 'The undergraduate programme at least start 3 year then now'
                  }
              }
            }}
           
          />
        </FormRow>
        <FormRow label="end date" error={endDate?.message}>
          <CustomDatePicker
            name="endDate"
            control={control}
            className=" w-full  m-auto"
            rules={{
              required: "The dates are rquired",
              validate: (value) => {
                const starts = watch("startDate")
                const diff = differenceInYears(value,starts)
                const currDegree = watch('degree')
                 if (currDegree === 'Bachelor'){
                    return diff > 4 || 'The difference between start and end should be at least 4 year'
                  }
                  if (currDegree === 'Master'){
                    return diff > 2 || 'The difference between start and end should be at least 2 year'
                  }
                  if (currDegree === 'Postgrudate'){
                    return diff > 2||  'The difference between start and end should be at least 2 year'
                  }
                  if (currDegree === 'doctorate'){
                    return diff > 6 || 'The difference between start and end should be at least 6 year'
                  }
                  if(currDegree === "undergraduate"){
                    return diff > 3 || 'The difference between start and end should be at least 3 year'
                  }
              }
            }}
          />
        </FormRow>
        <div className="w-full md:w-[90%] m-auto px-4">
          <FileInput
            register={register('degreeDocument')}
            message="Upload or Drag Your Degree and the format should be pdf"
            className="w-full md:w-[90%]   bg-orange-200/30  border-2  relative   border-dashed border-orange-300 h-40 flex flex-col justify-center items-center gap-3"
          />
        </div>
        
      </div>
    </div>
  );
}

export default EducationForm;
