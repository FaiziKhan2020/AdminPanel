import React from "react";
import Link from "next/link";
import { Menu } from "antd";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Router from "next/router";
import Style from "./style.module.css";
import Spinner from "~/components/spinner/Spinner";
import Pagination from "~/pages/products/Pagination";
const TableOrdersItems = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // * Pgination
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(30);

  useEffect(() => {
    const fetchBags = async () => {
      try {
        const data = await Axios.get(`http://localhost:8080/api/v1/order/`);
        setData(data.data.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBags();
  }, []);

  // * Get current Product Page
  const indexOfLastPage = currentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage);

  // * Change current Product Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const postDelete = (id) => {
    let data = Axios.get(
      // `http://localhost:8082/api/v1/product`
      // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
      //  ` http://localhost:8080/api/v1/order/id/${id}`
      `https://dawoodddocker.herokuapp.com/api/v1/order/id/${id}`
    );
  };

  const send = (e) => {
    Router.push({
      pathname: "/orders/order-detail/",
      query: {
        e,
      },
    });
  };

  const orderDelete = (id) => {
    console.log("oderDelete");
    let data = Axios.delete(
      `http://localhost:8080/api/v1/order/delete/${id}`
      // `https://dawoodddocker.herokuapp.com/api/v1/`
    );
    window.location.reload();
  };

  const tableItemsView = loading ? (
    currentPosts.map((item) => {
      let badgeView, fullfillmentView;
      const menuView = (
        <Menu>
          <Menu.Item key={0}>
            <a className="dropdown-item" href="#">
              Edit
            </a>
          </Menu.Item>
          <Menu.Item key={0}>
            <a className="dropdown-item" href="#">
              <i className="icon-t"></i>
              Delete
            </a>
          </Menu.Item>
        </Menu>
      );
      if (item.payment) {
        badgeView = <span className="ps-badge success">Paid</span>;
      } else {
        badgeView = <span className="ps-badge gray">Unpaid</span>;
      }
      switch (item.fullfillment) {
        case "In Progress":
          fullfillmentView = (
            <span className="ps-fullfillment warning">In Progress</span>
          );
          break;
        case "Cancel":
          fullfillmentView = (
            <span className="ps-fullfillment danger">Cancel</span>
          );
          break;
        default:
          fullfillmentView = (
            <span className="ps-fullfillment success">delivered</span>
          );
          break;
      }
      return (
        <tr key={item.id}>
          <td>
            <button className={Style.btn1} onClick={() => send(item.id)}>
              {item.id}
            </button>
          </td>

          <td>
            <strong> {item.createdAt}</strong>
          </td>
          <td>
            <strong>{item.total}</strong>
          </td>
          <td>
            <strong>{item.subTotal}</strong>
          </td>
          <td>
            <button
              style={{
                backgroundColor: "purple",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                marginRight: "20px",
              }}
              onClick={() => send(item.id)}
            >
              View Detail
            </button>
            <button className={Style.btn3} onClick={() => orderDelete(item.id)}>
              Delete order
            </button>
          </td>
          <td></td>
        </tr>
      );
    })
  ) : (
    <Spinner />
  );
  return (
    <>
      <div className="table-responsive">
        <table className="table ps-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>CreatedAt</th>
              <th>Total</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>{tableItemsView}</tbody>
        </table>
      </div>
      <div className="ml-auto my-4 mr-4">
        <Pagination
          productPerPage={productPerPage}
          totalProduct={data.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default TableOrdersItems;
