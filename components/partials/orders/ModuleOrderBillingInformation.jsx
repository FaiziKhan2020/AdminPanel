import React from "react";
import Axios from "axios";
import Item from "antd/lib/list/Item";
// import Axios from 'axios'
import { useState } from "react";
import { useRouter } from "next/router";

const ModuleOrderBillingInformation = () => {
  const router = useRouter();
  const {
    query: { e },
  } = router;
  console.log(e);
  // console.log("hello");
  // const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const fetchBags = async () => {
    try {
      const data = await Axios.get(
        `http://localhost:8080/api/v1/order/orderItem/${e}`
      );
      setData(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchBags();
  const tableItemsView = data.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <strong>{item.id}</strong>
        </td>

        <td>
          <strong>{item.title}</strong>
        </td>
        <td>
          <strong>{item.size || "Not selected"}</strong>
        </td>
        <td>
          <strong>{item.color || "Not selected"}</strong>
        </td>

        <td>
          <img src={item.imgUrl} alt="product-img" width={100} />
        </td>

        <td>
          <strong> {item.quantity}</strong>
        </td>
        <td>
          <strong>{item.price}</strong>
        </td>

        <td>
          <strong>{item.itemTotal}</strong>
        </td>
        <td>
          <strong></strong>
        </td>
      </tr>
    );
  });
  return (
    <div className="table-responsive">
      <table className="table ps-table">
        <thead>
          <tr>
            <th>
              <storng>Product Id</storng>
            </th>
            <th>
              <strong>Title</strong>
            </th>{" "}
            <th>
              <storng>Size</storng>
            </th>
            <th>
              <storng>Color</storng>
            </th>
            <th>
              <strong>Product Image</strong>
            </th>
            <th>
              <strong>Quantity</strong>
            </th>
            <th>
              <strong>Price</strong>
            </th>
            <th>
              <strong>Itemtotal</strong>
            </th>
          </tr>
        </thead>
        <tbody>{tableItemsView}</tbody>
      </table>
    </div>
  );
};

export default ModuleOrderBillingInformation;
