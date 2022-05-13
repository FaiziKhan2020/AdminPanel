import React from "react";
// import DropdownAction from '~/components/elements/basic/DropdownAction';
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "~/components/spinner/Spinner";

const TableCustomerItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBags = async () => {
      try {
        const data = await Axios.get(
          `https://dawoodddocker.herokuapp.com/api/v1/Email`
        );
        setData(data.data.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBags();
  }, []);
  const tableItems = data.map((item, index) => {
    // console.log(item.id)

    return (
      <tr key={item.sku}>
        {/* <td>{index + 1}</td> */}

        <td>{item.Email}</td>
      </tr>
    );
  });
  const tableItemsView = loading ? (
    data.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <strong>{item.Email}</strong>
          </td>
        </tr>
      );
    })
  ) : (
    <Spinner />
  );
  console.log(tableItemsView);
  return (
    <div className='table-responsive'>
      <table className='table ps-table'>
        <thead>
          <tr>
            <th>Email of Subscribers</th>
          </tr>
        </thead>
        <tbody>{tableItemsView}</tbody>
      </table>
    </div>
  );
};

export default TableCustomerItems;
