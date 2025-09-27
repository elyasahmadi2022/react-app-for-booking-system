import { useForm } from "react-hook-form";
import { Heading } from "../../ui/Heading";
import HotelForm from "./HotelForm";
import { useCreateHotel } from "./useHotels";

function AddHotelForm() {
  const {formState, register, handleSubmit} = useForm()
  const { mutate, isPending: isCreating } = useCreateHotel();
  function formSubmit(data) {
    const image = data.images[0];
    mutate({ newHotel: { ...data, images: image } }); 
  
  }
 
  return <HotelForm register={register} formState={formState} isCreating={isCreating} heading={<Heading as="h3">Create New Hotel</Heading>} handleSubmit={handleSubmit} formSubmit={formSubmit}  task='create new hotel'/>
}

export default AddHotelForm;
