import FileInput from "./FileInput";
import FormRow from "./FormRow";
import { Heading } from "./Heading";

function ExperinceForm({ step: { step }, form }) {
  const { formState, register, setValue } = form;

  return (
    <div className="w-full md:w-[90%] h-full bg-white m-auto ">
      <Heading as={"h3"} className={"p-3 text-center"}>
        {step}
      </Heading>
      <div className="flex flex-col gap-3 w-full md:w-[90%] m-auto py-2">
        <div className="w-full md:w-[90%] m-auto px-4">
          <FormRow
            label="upload your cv here"
            error={formState.errors?.cvDocument?.message}
          >
            <FileInput
              acccept={".pdf"}
              setValue={setValue}
              register={register("cvDocument")}
              message="Upload or Drag Your CV or resume and the format should be pdf"
              className="w-full md:w-[90%]   bg-orange-200/30  border-2  relative   border-dashed border-orange-300 h-40 flex flex-col justify-center items-center gap-3"
            />
          </FormRow>
        </div>
       
      </div>
    </div>
  );
}

export default ExperinceForm;
