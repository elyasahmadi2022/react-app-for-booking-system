import FileInput from "./FileInput";
import FormRow from "./FormRow";
import { Heading } from "./Heading";
import Input from "./Input";
import PasswordInput from "./PasswordInput";

const  PersonalForm = ({step:{step}, form})=> {

  const { register, formState, watch} = form
  const { errors } = formState;

  return (
    <div className="w-full md:w-[90%] h-auto bg-white">
      <Heading as={"h3"} className="text-center p-2">
        {step}
      </Heading>
      <div
          className="flex flex-col gap-3 w-full md:w-[90%] m-auto py-2"
          
      >
        <FormRow label="First Name" error={errors?.firstName?.message}>
          <Input
            type="text"
            placeholder="Type Your First Name"
            id="first-name"
           
            register={register("firstName", {
              required: "Please add your name to the field",
             
            })}
          />
        </FormRow>
        <FormRow label="Last Name" error={errors?.lastName?.message}>
          <Input
            type="text"
            placeholder="Type Your Last Name"
            id="last-name"
            register={register("lastName", {
              required: "Please the last name should be included!",
              
            })}
            
          />
        </FormRow>
        <FormRow label="Email Address" error={errors?.email?.message}>
          <Input
            type="email"
            placeholder="Type Your Email address"
            id="email-address"
           
            register={register("email", {
              required: "email is required",

              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please add a corrected email",
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Type Your Strong Password"
          error={errors?.password?.message}
        >
          <PasswordInput
            id="password"
          
            register={register("password", {
              minLength: 6,
              validate: (fieldValue) => {
                return (
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,}).*$/.test(
                    fieldValue
                  ) ||
                  "The password should at least 1 Uppercase, 1 lowercase, 1 spceial character, and 1 number"
                );
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Confirm Your Strong Password"
          error={errors?.confirmPassword?.message}
        >
          <PasswordInput
            id="password-confirm"
            
            register={register("confirmPassword", {
              validate: (value) => {
                return (
                  value === watch("password") ||
                  "confirmed password does not match with current password"
                );
              },
            })}
          />
        </FormRow>
        <FileInput acccept={'image/*'} className={'"w-full md:w-[90%] m-auto   bg-orange-200/30  border-2  relative   border-dashed border-orange-300 h-40 flex flex-col justify-center items-center gap-3'} register={register("avatar")} message="Drag and drop your avatar photo as png/jpg" />
      </div>
    </div>
  );
}

export default PersonalForm;
