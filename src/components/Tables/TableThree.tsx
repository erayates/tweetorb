import { Package } from "@/types/package";
import Link from "next/link";
import { IoEyeOutline, IoTrashOutline } from "react-icons/io5";
import { RiExchange2Line } from "react-icons/ri";

const packageData: Package[] = [
  {
    accountId: "1354987532135",
    username: "@erayates",
    numberOfTweets: 0.0,
    status: "Active",
  },
  {
    accountId: "1354987532135",
    username: "@test",
    numberOfTweets: 59.0,
    status: "Active",
  },
  {
    accountId: "1354987532135",
    username: "@123123",
    numberOfTweets: 99.0,
    status: "Passive",
  },
  {
    accountId: "1354987532135",
    username: "@test",
    numberOfTweets: 59.0,
    status: "Active",
  },
];

const TableThree = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[180px] px-4 py-4 text-black dark:text-white xl:pl-11">
                Account ID
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Username
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Tweets
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.accountId}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.username}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.numberOfTweets}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      packageItem.status === "Active"
                        ? "bg-success text-success"
                        : packageItem.status === "Passive"
                          ? "bg-danger text-danger"
                          : "bg-warning text-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5 text-lg">
                    <Link href={`/accounts/${packageItem.accountId}`}>
                      <button className="hover:text-primary">
                        <IoEyeOutline />
                      </button>
                    </Link>
                    <button className="hover:text-primary">
                      <RiExchange2Line />
                    </button>
                    <button className="hover:text-primary">
                      <IoTrashOutline />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
