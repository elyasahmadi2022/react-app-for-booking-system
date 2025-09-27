import UserHeader from "../features/users/UserHeader";
import UserTable from "../features/users/UserTable";
import UserTableRow from "../features/users/UserTableRow";
import { useAllUsers } from "../features/users/useUsers";

export default function User() {
  const {data:users, isLoading} = useAllUsers()
  if (isLoading) return;
  return (
    <section class="container px-4 mx-auto w-full ">
      <div class="flex items-center gap-x-3">
        <h2 class="text-lg font-medium text-gray-800 dark:text-white">
          All Users
        </h2>

        <span class="px-3 py-1 text-xs text-slate-100 bg-blue-300 rounded-full dark:bg-gray-800 dark:text-blue-400">
          10 users
        </span>
      </div>

      <div class="flex flex-col mt-6 w-full ">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class=" dark:border-gray-700 md:rounded-lg ">
              <UserTable
                tableHeader={<UserHeader />}
                tableBody={users?.map((user, index) => {
                   return <UserTableRow key={index} user={user}/>
                })}
              ></UserTable>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
