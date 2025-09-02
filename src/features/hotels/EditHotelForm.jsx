import { Heading } from '../../ui/Heading'
import HotelForm from './HotelForm'

function EditHotelForm({hotelId}) {
  
  return <HotelForm task='update hotel' heading={<Heading as="h3">Update  Hotel # {hotelId}</Heading>}   />
}

export default EditHotelForm