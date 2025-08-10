import { useSearchParams } from "react-router-dom";
import {
  useCountries,
  useStateByCountry,
  useStateCities,
} from "../services/apiCountry";
import FormRow from "./FormRow";
import { Heading } from "./Heading";
import Input from "./Input";
import Option from "./Option";
import { Select } from "./Select";

function ContactForm({ step:{step}, form }) {
  const { data: countries } = useCountries();
  const { data } = useStateByCountry();
  const { cities } = useStateCities();
  const [searchParams, setSearchParams] = useSearchParams();
  const { formState, register } = form
  const { errors } = formState;

  return (
    <div className="w-full md:w-[90%] h-full bg-white m-auto ">
      <Heading as={"h3"} className={"p-3 text-center"}>
        {step}
      </Heading>
      <div
        className="flex flex-col gap-3 w-full md:w-[90%] m-auto py-2"
      
      >
        <div className="w-full md:w-[90%] m-auto px-4">
          <FormRow label="country you live in" error={errors?.country?.message}>
            <Select
              onChange={(e) => {
                searchParams.set("iso2", e.target.value);
                setSearchParams(searchParams);
              }}
              name="country"
              id="country"
              register={register("country", {
                required: "The country have to be provided",
              })}
            >
              {countries?.map((country) => (
                <Option
                  label={country.name}
                  value={country.iso2}
                  key={country.id}
                />
              ))}
            </Select>
          </FormRow>
          <FormRow label="The Province You live in" error={errors?.province?.message}>
            <Select
              name="province"
              id="province"
              register={register("province")}
              onChange={(e) => {
                searchParams.set("stateISO2", e.target.value);
                setSearchParams(searchParams);
              }}
            >
              {data?.map((state) => (
                <Option
                  key={state.id}
                  value={state.iso2}
                  label={state.name}
                ></Option>
              ))}
            </Select>
          </FormRow>
          <FormRow label="The Distict You Live in" error={errors?.district?.message}>
            <Select
              name="district"
              id="district"
              register={register("district", {
                required: "The district have to be provided",
              })}
            >
              {cities?.map(city => (
                <Option key={city.id} value={city.name} label={city.name} />
              ))}
            </Select>
          </FormRow>
          <FormRow error={errors?.postcode?.message} label="PostCode" >
            <Input
              type="text"
              id="postcode"
              placeholder="####### alphanumeric characters"
              register={register("postcode", {
                required: "The Postcode have to be provided",
                validate: (value) => {
                  return /^\d{4,10}$|^([A-Z]{1,2}\d{1,2}\s?\d[A-Z]{2})$/.test(value) || 'The post code should between 4-9 digit'
                }
              })}
            />
          </FormRow>
          <FormRow label="Street Number" error={errors?.streetNum?.message}>
            <Input
              type="number"
              id="street-no"
              placeholder="## digit number"
              register={register("streetNum", {
                required: "The street number should be provided",
              })}
            />
          </FormRow>
          <FormRow label="Department Number" error={errors?.departementNum?.message}>
            <Input
              register={register("departementNum", {
                required: "the departement have to be provided",
              })}
              type="number"
              id="depart-no"
              placeholder="## digit number"
            />
          </FormRow>
          <FormRow error={errors?.telNumber?.message} label="Tel Number">
            <Input
              type="te"
              id="tel-number"
              placeholder="(country-code) ###-###-### digit"
              register={register("telNumber", {
                required: "The Tele Number have to be provided",
                validate: (value) => {
                  return /^\+?[1-9]\d{1,14}$/.test(value) || 'The tel number should be a valid phone number'
                }
              })}
            />
          </FormRow>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
