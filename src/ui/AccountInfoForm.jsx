import { differenceInYears } from 'date-fns';
import CustomDatePicker from './CustomDatePicker';
import FormRow from './FormRow';
import { Heading } from './Heading';
import Input from './Input';

function AccountInfoForm({step:{step}, form} ) {
    const {formState, register, control} = form
    const {errors} = formState

  return (
      <div className="w-full md:w-[90%] h-full bg-white m-auto ">
        <Heading as={"h3"} className={"p-3 text-center"}>
          {step}
        </Heading>
        <div  className="flex flex-col gap-3 w-full md:w-[90%] m-auto py-2">
          <div className="w-full md:w-[90%] m-auto px-4">
            <FormRow label="Type The Bank Name" error={errors?.bankName?.message}>
              <Input type="text" placeholder="BANK NAME..." id="bank-name" register={register("bankName",{
                required: 'The bank name should be provided',
                validate: (value) => {
                  return /^[A-Za-z][A-Za-z\s]*[A-Za-z]$/.test(value) || 'The name should be a valid name'
                }
              })} />
            </FormRow>
            <FormRow label="Account Holder Name" error={errors?.holderName?.message}>
              <Input
              register={register("holderName", {
                required:'The holder name should be provided', 
                validate: (value) => {
                  return /^[A-Za-z][A-Za-z\s]*[A-Za-z]$/.test(value) || 'The holder name should be a valid name'
                }
              })}
                type="text"
                id="account-holder-name"
                placeholder="account name holder"
              />
            </FormRow>
            <FormRow label="Type The Account Number" error={errors?.accountNumber?.message}>
              <Input
                register={register('accountNumber', {required:'The account number should be provided', 
                validate: (value) => {
                  return /^(?:\d{4} ){2}\d{4}$/.test(value) || 'The Account Number should be 12 digit separeted space'
                }
                }
                )}
                type="text"
                id="account-number"
                placeholder="####-####-#### account Number"
              />
            </FormRow>
            <FormRow label="Expire Date" error={errors?.expireDate?.message}>
              <CustomDatePicker  rules={{
                required: 'The Expired Date should be provided', 
                validate: (value)=> {
                    return differenceInYears(new Date(), value) > 1 || 'The Exired Date at least should be greater than one year'
                }
              }}  control={control} name={"expireDate"}/>
            </FormRow>
         
          </div>
        </div>
      </div>
    );
}

export default AccountInfoForm