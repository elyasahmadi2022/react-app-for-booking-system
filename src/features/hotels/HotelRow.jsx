import { HiPencil, HiTrash } from "react-icons/hi";
import { HiSquare2Stack } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import NewModal from "../../ui/NewModal";
import { formatCurrency } from "./../../utils/helper";
import { useDeleteHotel } from "./useHotels";
import EditHotelForm from './EditHotelForm';
function HotelRow({ hotel }) {
  const {
    hotel_name: hotelName,
    address,
    contact_information: contactInformation,
    hotel_type: type,
    per_night: perNight,
    id,
  } = hotel;
  const { mutate, isDeleting  } = useDeleteHotel();
  const random = Math.round(Math.random() * 100);
  const parent = hotelName.split(/[ -]/).join("").concat("", random);

  return (
    <div className=" py-2  h-10 odd:bg-slate-300/60  transition-all duration-100 ease-out cursor-pointer  table-row [&>div]:text-sm [&>div]:lowercase">
      <div className=" table-cell  align-middle text-[9px] md:text-[10px] box-border px-1.5  text-sm font-medium text-neutral-600 capitalize tracking-wider">
        {hotelName}
      </div>
      <div className=" table-cell  align-middle text-[9px] md:text-[10px] box-border px-1.5  text-sm font-medium text-neutral-600 capitalize tracking-wider">
        {address}
      </div>
      <div className=" table-cell  align-middle text-[9px] md:text-[10px] box-border px-1.5  text-sm font-medium text-neutral-600 capitalize tracking-wider">
        {type}
      </div>
      <div className=" table-cell  align-middle text-[9px] md:text-[10px] box-border px-1.5  text-sm font-medium text-neutral-600 capitalize tracking-wider">
        {contactInformation}
      </div>
      <div className=" table-cell  align-middle text-[9px] md:text-[10px] box-border px-1.5  text-sm font-medium text-neutral-600 capitalize tracking-wider">
        {formatCurrency(perNight)}
      </div>

      <div className={`table-cell relative target-element ${parent} `}>
        <NewModal className={`bg-orange-400`}>
          <Menus>
            <Menus.Menu>
              <Menus.Toggle id={id} />
              <Menus.List
                parent={parent}
                id={id}
                className="bg-white rounded-lg shadow-xl"
              >
                <NewModal.Open opens='deplicate'>

                <Menus.Button icon={<HiSquare2Stack />} >Duplicate</Menus.Button>
                </NewModal.Open>

                <NewModal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </NewModal.Open>

                <NewModal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </NewModal.Open>
              </Menus.List>
            </Menus.Menu>

            <NewModal.Window name="edit" className={`overflow-y-auto  w-[95%] md:[80%] [&>*]:text-sm md:[&>*]:text-[15px]   lg:w-[60%] h-[530px]`}>
              <EditHotelForm  hotelId={id}/>
            </NewModal.Window>

            <NewModal.Window name="delete">
              <ConfirmDelete
                resourceName="Hotel"
                onConfirm={() => mutate(id)}
                disabled={isDeleting}
              />
            </NewModal.Window>
          </Menus>
        </NewModal>
      </div>
    </div>
  );
}

export default HotelRow;
