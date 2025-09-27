import { useForm } from "react-hook-form";
import { Heading } from "../../ui/Heading";
import HotelForm from "./HotelForm";
import { useEditHotel, useHotel } from "./useHotels";
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";

function EditHotelForm({ hotelId }) {
  const { isLoading: isCreating, mutate } = useEditHotel();
  const { data, isLoading } = useHotel(hotelId);
  const { formState, handleSubmit, register, reset } = useForm({
    defaultValues: {
      hotel_name: "",
      address: "",
      contact_information: "",
      hotel_type: "",
      description: "",
      images: "",
      per_night: "",
    },
  });
  const {
    hotel_name = "",
    address = "",
    contact_information = "",
    hotel_type = "",
    description = "",
    images = "",
    per_night = "",
  } = data || {};
  useEffect(() => {
    if (data) {
      reset({
        hotel_name,
        address,
        contact_information,
        hotel_type,
        description,
        images,
        per_night,
      });
    }
  }, [data, reset]);
  const formSubmit = (formData) => {
    mutate({ ...formData, hotelId });
  };
  if (isLoading) return;
  return (
    <HotelForm
      task="update hotel"
      isCreating={isCreating}
      handleSubmit={handleSubmit}
      formState={formState}
      register={register}
      heading={<Heading as="h3">Update Hotel # {hotelId}</Heading>}
      formSubmit={formSubmit}
    />
  );
}

export default EditHotelForm;
