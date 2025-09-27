import { FaUser } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import React from "react";
import NewModal from "../../ui/NewModal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiPencil, HiTrash } from "react-icons/hi";
import { HiSquare2Stack } from "react-icons/hi2";

function UserTableRow({ hotelName = "kjadfk", user }) {
  const { id, username, full_name, avatar_url, email, role } = user;
  const random = Math.round(Math.random() * 100);
  const parent = username.split(/[ -]/).join("").concat("", random);
  console.log(parent);
  return (
    <tr className="table-row ">
      <td className=" table-cell  px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="text-blue-500 border-gray-300 cursor-pointer rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
          />
          <FaUser />
        </div>
      </td>
      <td className=" table-cell px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={avatar_url}
              alt=""
            />
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">
                {full_name}
              </h2>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                {username}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className=" table-cell px-12 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

          <h2 className="text-sm font-normal text-emerald-500">Active</h2>
        </div>
      </td>
      <td className=" table-cell px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {role}
      </td>
      <td className=" table-cell px-4 py-2 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {email}
      </td>
      <td className=" table-cell px-4 py-2 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2 text-slate-600">
          <span>Email</span>
          <MdAttachEmail size={16} />
        </div>
      </td>
      <td className={` table-cell relative   ${parent}`}>
        <div className="h-full flex justify-center items-center">
          <NewModal className={`bg-orange-400`}>
            <Menus>
              <Menus.Menu>
                <Menus.Toggle id={id} />
                <Menus.List
                  parent={parent}
                  id={id}
                  className="bg-white rounded-lg shadow-xl"
                >
                  <NewModal.Open opens="deplicate">
                    <Menus.Button icon={<HiSquare2Stack />}>
                      Duplicate
                    </Menus.Button>
                  </NewModal.Open>

                  <NewModal.Open opens="edit">
                    <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                  </NewModal.Open>

                  <NewModal.Open opens="delete">
                    <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                  </NewModal.Open>
                </Menus.List>
              </Menus.Menu>

              <NewModal.Window name="edit" className={``}></NewModal.Window>

              <NewModal.Window name="delete">
                {/* <ConfirmDelete
                    resourceName="Delete a Hotel"
                    onConfirm={() => mutate(id)}
                    disabled={isDeleting}
                  /> */}
              </NewModal.Window>
              <NewModal.Window name="edit">
                {/* <ConfirmDelete
                    type="edit"
                    resourceName="Edit a Hotel"
                    onConfirm={() => mutate(id)}
                    disabled={isDeleting}
                  /> */}
              </NewModal.Window>
            </Menus>
          </NewModal>
        </div>
      </td>
    </tr>
  );
}

export default UserTableRow;
