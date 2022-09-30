import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import style from "./style.module.css";
import Spinner from "~/components/spinner/Spinner";
import { useRouter } from "next/router";
import Link from "next/link";
import Pagination from "~/pages/products/Pagination";
const TableProjectItems = () => {
  const Router = useRouter();
  const { id } = Router.query;

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  // * Pgination
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(300);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await Axios.get(`http://localhost:5000/users`);
        setData(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  // * Get current Product Page
  const indexOfLastPage = currentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const currentPosts = data.slice(indexOfFirstPage, indexOfLastPage);

  // * Change current Product Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    window.location.reload();
    // Router.push({
    //   pathname: "/products",
    // });
  };
  // const update = (e) => {
  //   Router.push({
  //     pathname: "/products/update-product/",
  //     query: {
  //       e,
  //     },
  //   });
  // };

  const tableItems = loading ? (
    currentPosts
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
            <td>
              <Link href={`/products/` + item.id}>
                <button
                  style={{
                    backgroundColor: "purple",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                  // onClick={() => update(item.id)}
                >
                  update
                </button>
              </Link>
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
                  <th>Update Product</th>
                </tr>
              </thead>
              <tbody>{tableItems}</tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='ml-auto my-4 mr-4'>
        <Pagination
          productPerPage={productPerPage}
          totalProduct={data.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default TableProjectItems;
