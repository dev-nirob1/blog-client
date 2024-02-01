
const ManageBlogs = () => {
    return (
        <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 md:px-6 lg:px-8 xl:px-10 text-sm md:text-base border-b">
                Column 1
              </th>
              <th className="py-2 px-4 md:px-6 lg:px-8 xl:px-10 text-sm md:text-base border-b">
                Column 2
              </th>
              <th className="py-2 px-4 md:px-6 lg:px-8 xl:px-10 text-sm md:text-base border-b">
                Column 3
              </th>
              <th className="py-2 px-4 md:px-6 lg:px-8 xl:px-10 text-sm md:text-base border-b">
                Column 4
              </th>
              <th className="py-2 px-4 md:px-6 lg:px-8 xl:px-10 text-sm md:text-base border-b">
                Column 5
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 md:px-6 lg:px-8 xl:px-10 text-sm md:text-base border-b">
                Data
              </td>
              <td className="py-2 px-4 md:px-6 lg:px-8 xl:px-10 text-sm md:text-base border-b">
                Data
              </td>
              <td className="py-2 px-4 md:px-6 lg:px-8 xl:px-10 text-sm md:text-base border-b">
                Data
              </td>
              <td className="py-2 px-4 md:px-6 lg:px-8 xl:px-10 text-sm md:text-base border-b">
                Data
              </td>
              <td className="py-2 px-4 md:px-6 lg:px-8 xl:px-10 text-sm md:text-base border-b">
                Data
              </td>
              {/* Repeat for other cells */}
            </tr>
            {/* Repeat for other rows */}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageBlogs;