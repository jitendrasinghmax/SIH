export default()=>{
    const data = {
        totalApplications: 52,
        issuedApplications: 22,
        pendingApplications: 30,
        averageProcessingTime: 8,
        applicants: [
          { id: 1, name: 'Applicant Name', idNumber: '4526' },
          { id: 2, name: 'Applicant Name', idNumber: '4526' },
          { id: 3, name: 'Applicant Name', idNumber: '4526' },
          { id: 4, name: 'Applicant Name', idNumber: '4526' },
        ]
      };
    
      return (
        <div className="p-4">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">DASHBOARD</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Logout</button>
          </div>
    
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8 ">
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <p className="text-gray-500">TOTAL APPLICATION</p>
              <p className="text-3xl font-bold">{data.totalApplications}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg">
              <p className="text-gray-500">APPLICATION ISSUED</p>
              <p className="text-3xl font-bold">{data.issuedApplications}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg">
              <p className="text-gray-500">PENDING APPLICATION</p>
              <p className="text-3xl font-bold">{data.pendingApplications}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg">
              <p className="text-gray-500">AVERAGE PROCESSING TIME (IN HOUR)</p>
              <p className="text-3xl font-bold">{data.averageProcessingTime}</p>
            </div>
          </div>
    
          {/* Applicant List */}
          <div className="mt-8 w-[80%] mx-auto">
            <div className="bg-blue-600 text-white grid grid-cols-4 p-4 font-bold">
              <p>NAME</p>
              <p>ID NUMBER</p>
              <p>STATUS</p>
              <p>VIEW</p>
            </div>
            {data.applicants.map((applicant) => (
              <div key={applicant.id} className="grid grid-cols-4 items-center p-4 bg-white border-b ">
                <p className="flex items-center space-x-2">
                  <span className="bg-gray-300 rounded-full w-8 h-8 inline-block"></span>
                  <span>{applicant.name}</span>
                </p>
                <p>{applicant.idNumber}</p>
                <div className="flex space-x-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:shadow-lg">Approve</button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:shadow-lg">X</button>
                </div>
                <button className="text-blue-500 ">
                  
                </button>
              </div>
            ))}
          </div>
        </div>
      );
}