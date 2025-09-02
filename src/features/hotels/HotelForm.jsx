import { useForm } from "react-hook-form";
import { ImSpinner10 } from "react-icons/im";
import { useSearchParams } from "react-router-dom";
import { useCountries, useStateByCountry, useStateCities } from "../../services/apiCountry";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Option from "../../ui/Option";
import { Select } from "../../ui/Select";
import Spinner from "../../ui/Spinner";
import TextArea from "../../ui/TextArea";
import FileInput from './../../ui/FileInput';

function HotelForm({ isCreating, task, formSubmit, heading}) {
     const { cities } = useStateCities();
  const { data: prov } = useStateByCountry();
  const { register, formState, handleSubmit } = useForm();
  const {
    errors: {
      hotel_name,
      hotel_type,
      description,
      country,
      per_night,
      address,
      contact_information,
      images,
      city,
      province,
    },
  } = formState;
  const { data: countries, isLoading } = useCountries();
  const [searchParams, setSearchParams] = useSearchParams();
  if (isLoading)
    return (
      <div className=" w-full h-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  return (
    <form
      noValidate
      onSubmit={handleSubmit(formSubmit)}
      className={`relative px-3  w-full grid grid-cols-[1fr_0.5fr_0.5fr_1fr] gap-1.5  grid-rows-[0.1fr_0.3fr_0.3fr_0.3fr_0.3fr_0.3fr]`}
    >
      <div className=" col-span-4 row-start-1 row-end-2 pl-3 py-2 border-b-2 border-gray-500">
        {heading}
      </div>
      <FormRow
        label="Hotel Name"
        className=" col-span-2"
        error={hotel_name?.message}
      >
        <Input
          disabled={isCreating}
          type="text"
          id="hotelname"
          register={register("hotel_name", {
            required: "The field needs to be filled",
          })}
          placeholder="type hotel name"
        />
      </FormRow>
      <FormRow label="Address" className="col-span-2" error={address?.message}>
        <Input
          disabled={isCreating}
          type="text"
          id="hotelAddress"
          register={register("address", {
            required: "The field needs to be filled",
          })}
          placeholder="type hotel Address"
        />
      </FormRow>
      <FormRow label="Hotel Type" className="" error={hotel_type?.message}>
        <Input
          disabled={isCreating}
          type="text"
          id="hotelType"
          register={register("hotel_type", {
            required: "The field needs to be filled",
          })}
          placeholder="Type Hotel Type"
        />
      </FormRow>
      <FormRow
        label="Contact Information"
        className=" col-span-2"
        error={contact_information?.message}
      >
        <Input
          disabled={isCreating}
          register={register("contact_information", {
            required: "The field needs to be filled",
          })}
          type="text"
          id="contactInformation"
          placeholder="Type Contact Information"
        />
      </FormRow>
      <FormRow label="Price" className="" error={per_night?.message}>
        <Input
          disabled={isCreating}
          register={register("per_night", {
            required: "The field needs to be filled",
          })}
          type="number"
          id="price"
          placeholder="Type Price a night"
        />
      </FormRow>
      <FormRow
        label="description"
        className="col-span-2"
        error={description?.message}
      >
        <TextArea
          disabled={isCreating}
          register={register("description", {
            required: "The field needs to be filled",
          })}
          className=" col-start-1 col-end-3 row-start-5 row-end-6"
          id="description"
          placeholder="Type the description of the hotel"
        />
      </FormRow>
      <FormRow label="Country" className="col-span-2" error={country?.message}>
        <Select
          disabled={isCreating}
          id="country"
          register={register("country", {
            required: "The field needs to be filled",
          })}
          onChange={(e) => {
            searchParams.set("iso2", e.target.value);
            setSearchParams(searchParams);
          }}
        >
          {countries?.map((country) => (
            <Option
              key={country.id}
              value={country.iso2}
              label={country.name}
            ></Option>
          ))}
        </Select>
      </FormRow>
      <FormRow
        label="The Province You live in"
        error={province?.message}
        className="col-span-2"
      >
        <Select
          id="province"
          register={register("province")}
          onChange={(e) => {
            searchParams.set("stateISO2", e.target.value);
            setSearchParams(searchParams);
          }}
          disabled={isCreating}
        >
          {prov?.map((state) => (
            <Option
              key={state.id}
              value={state.iso2}
              label={state.name}
            ></Option>
          ))}
        </Select>
      </FormRow>
      <FormRow label="city" className="col-span-2" error={city?.message}>
        <Select
          disabled={isCreating}
          id="city"
          register={register("city", {
            required: "The field needs to be filled",
          })}
        >
          {cities?.map((country) => (
            <Option
              key={country.id}
              value={country.ios2}
              label={country.name}
            ></Option>
          ))}
        </Select>
      </FormRow>

      <FileInput
        type="simple"
        register={register("images")}
        message="select the image of the hotel"
        className="mx-2 col-span-2   m-auto   bg-orange-200/30  border-2  relative   border-dashed border-orange-300  flex  justify-start gap-2 items-center py-1 rounded-sm"
        error={images?.message}
        acccept="image/*"
      />

      <button
        disabled={isCreating}
        className="outline-2 p-3 absolute -bottom-14 flex items-center gap-2 capitalize tracking-wide  right-4 cursor-pointer bg-orange-400 outline-white  text-white hover:bg-orange-400/80 "
      >
        {isCreating && (
          <span>
            <ImSpinner10 size={20} className="animate-spin" />
          </span>
        )}
        <span> {task}</span>
      </button>
    </form>
  );
}

export default HotelForm;
