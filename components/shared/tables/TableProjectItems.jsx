import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import style from "./style.module.css";
import Spinner from "~/components/spinner/Spinner";

const TableProjectItems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchBags = async () => {
      try {
        const data = await Axios.get(
          `https://dawoodddocker.herokuapp.com/api/v1/product`
        );
        setData(data.data.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBags();
  }, []);

  const postDelete = async (id) => {
    await Axios.delete(
      `https://dawoodddocker.herokuapp.com/api/v1/product/delete/${id}`
    );
    console.log(id);
  };

  const tableItems = loading ? (
    data
      .filter((item) => {
        if (searchTerm == "") {
          return item;
        } else if (
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item;
        }
      })
      .map((item, index) => {
        // console.log(item.id)
        let badgeView;
        if (item.stock) {
          badgeView = <span className='ps-badge success'>Stock</span>;
        } else {
          badgeView = <span className='ps-badge gray'>Out of stock</span>;
        }
        return (
          <tr key={item.sku}>
            <td>
              <a href='#'>
                <strong>{item.id}</strong>
              </a>
            </td>
            <td>{item.title}</td>
            <td>{item.Bar_code}</td>
            <td>{item.price}</td>
            <td>
              <strong>{item.CategoryId}</strong>
            </td>

            <td>
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
                onClick={() => postDelete(item.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })
  ) : (
    <Spinner />
  );
  return (
    <>
      <input
        className={style.input}
        type='text'
        placeholder='Search Product...'
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className='conta'>
        <div className='row'>
          <div className='table-responsive'>
            <table className='table ps-table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>BarCode</th>
                  <th>Price</th>
                  <th>CategoryID</th>
                  <th>Delete product</th>
                </tr>
              </thead>
              <tbody>{tableItems}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableProjectItems;
