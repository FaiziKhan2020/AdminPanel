import React from "react";
import { Menu } from "antd";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "~/components/spinner/Spinner";

const TableCategoryItems = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBags = async () => {
      try {
        const data = await Axios.get(
          `https://dawoodddocker.herokuapp.com/api/v1/category/`
        );
        setData(data.data.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBags();
  }, []);

  const tableItemsView = loading ? (
    data.map((item) => {
      let badgeView, fullfillmentView;

      return (
        <tr key={item.id}>
          <td>
            <strong> {item.Name}</strong>
          </td>
          <td>{item.url}</td>
          <td>{item.createdAt}</td>
          <td>
            <strong>{item.id}</strong>
          </td>
        </tr>
      );
    })
  ) : (
    <Spinner />
  );
  return (
    <div className='table-responsive'>
      <table className='table ps-table'>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>URL</th>
            <th>CreatedAt</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>{tableItemsView}</tbody>
      </table>
    </div>
  );
};

export default TableCategoryItems;
