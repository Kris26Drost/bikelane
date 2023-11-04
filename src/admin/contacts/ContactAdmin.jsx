import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import Error from "../../components/Error";
import Loader from "../../components/Loader";


const ContactAdmin = () => {
  const { data, loading, error, makeRequest } = useRequestData();


  useEffect(() => {
    makeRequest("inqueries/admin");
  }, []);

    
  const updateRead = (id, currentValue) => {
    const newValue = !currentValue;
     makeRequest(`inqueries/admin/${id}`, "PATCH", { read: newValue });
  };

  return (
    <section className="md:pt-10 pt-20">
      <div className="bg-primary md:p-10 p-5 text-white">
        <h1 className="text-3xl font-semibold">Administrerer Contact</h1>
      </div>
      {error && <Error errorMessage="Admin Contact" />}
      {loading && <Loader />}
      <div>
        <div className="lg:flex items-center justify-center m-5 table-auto">
          <table className="w-full text-sm text-left bg-white">
            <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Phone</th>
                <th className="p-2">Message</th>
                <th className="p-2">Read</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) &&
                data
                  .sort(
                    (a, b) =>
                      new Date(a.received).getTime() -
                      new Date(b.received).getTime()
                  )
                  .reverse()
                  .map((inqueries) => (
                    <tr
                      key={inqueries._id}
                      className="hover:bg-cultured border-b"
                    >
                      <td className="p-2"> {inqueries.name}</td>
                      <td className="p-2"> {inqueries.email}</td>
                      <td className="p-2"> {inqueries.phone}</td>
                      <td className="p-2"> {inqueries.message}</td>
                      <td className="p-2">
                        <input
                          type="checkbox"
                          className={`p-10 ${
                            inqueries.read ? "bg-green-300" : "bg-red-300"
                          }`}
                          checked={inqueries.read}
                          onChange={(e) =>{
                            e.preventDefault();
                            updateRead(inqueries._id, e.target.checked)
                          }}
                        />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ContactAdmin;
