// export default function renterDashboard() {
//   return (
//     <div className="p-8 text-center">
//       <h1 className="text-3xl font-bold text-green-700 pt-20" >Welcome, Renter!</h1>
//       <p className="mt-2 text-gray-600">Manage your tools and bookings here.</p>
//     </div>
//   );
// }

export default function RenterDashboard() {
  return (
    <div className="space-y-8">

      {/* PAGE HEADER */}
      <section>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, Farmer 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Here's what’s happening today on AgriHire.
        </p>
      </section>

      {/* KPI CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-gray-500 text-sm">Active Bookings</h3>
          <p className="text-3xl font-semibold mt-2">4</p>
          <p className="text-green-600 text-sm mt-2">+2 from last week</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-gray-500 text-sm">Tools Saved</h3>
          <p className="text-3xl font-semibold mt-2">12</p>
          <p className="text-green-600 text-sm mt-2">You’re exploring a lot!</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-gray-500 text-sm">Pending Payments</h3>
          <p className="text-3xl font-semibold mt-2">Ksh 8,200</p>
          <p className="text-red-600 text-sm mt-2">2 payments due</p>
        </div>
      </section>

      {/* GRID: RECENT BOOKINGS + NOTIFICATIONS */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* RECENT BOOKINGS */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>

          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-2">Tool</th>
                <th className="py-2">Date</th>
                <th className="py-2">Status</th>
                <th className="py-2">Amount</th>
              </tr>
            </thead>

            <tbody className="text-gray-800">
              <tr className="border-b">
                <td className="py-3">Tractor – John Deere</td>
                <td>12 Dec 2025</td>
                <td>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">
                    In Progress
                  </span>
                </td>
                <td>Ksh 3,000</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Water Pump</td>
                <td>10 Dec 2025</td>
                <td>
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">
                    Completed
                  </span>
                </td>
                <td>Ksh 1,200</td>
              </tr>

              <tr>
                <td className="py-3">Sprayer Machine</td>
                <td>8 Dec 2025</td>
                <td>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded text-xs">
                    Pending
                  </span>
                </td>
                <td>Ksh 800</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>

          <div className="space-y-4 text-sm text-gray-700">

            <div className="p-3 bg-gray-50 rounded-lg border">
              Your booking for the *Tractor – John Deere* is now active.
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border">
              Payment of *Ksh 3,000* is due for last week's Water Pump booking.
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border">
              Two new tools were added based on your preferences.
            </div>

          </div>
        </div>
      </section>

      {/* RECOMMENDED TOOLS */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recommended Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border p-5">
            <img
              src='/images/tractor.jpg'
              className="rounded-lg w-full h-40 object-cover"
            />
            <h3 className="font-semibold mt-3">Tractor – Ford 7810</h3>
            <p className="text-gray-600 text-sm mt-1">Ksh 2,800/day</p>
            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              View Tool
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border p-5">
            <img
              src='/images/plough attachment.jpg'
              className="rounded-lg w-full h-40 object-cover"
            />
            <h3 className="font-semibold mt-3">Plough Attachment</h3>
            <p className="text-gray-600 text-sm mt-1">Ksh 950/day</p>
            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              View Tool
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border p-5">
            <img
              src='/images/axial harvester.jpg'
              className="rounded-lg w-full h-40 object-cover"
            />
            <h3 className="font-semibold mt-3">Mini Harvester</h3>
            <p className="text-gray-600 text-sm mt-1">Ksh 4,200/day</p>
            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              View Tool
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
