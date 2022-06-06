import React, { useEffect, useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import { useRouter } from "next/router";
import axios from "axios";
const update = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateItem = async () => {
      try {
        const data = await axios.get(
          `https://dawoodddocker.herokuapp.com/api/v1/product/${id}`
        );
        setData(data.data.data);
        console.log(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    updateItem();
  }, []);
  return (
    <ContainerDefault>
      <h1>Working</h1>
      {/* <div>
        {" "}
        {data.map((item) => {
          <div>{item.price}</div>;
        })}{" "}
      </div> */}
    </ContainerDefault>
  );
};

export default update;
