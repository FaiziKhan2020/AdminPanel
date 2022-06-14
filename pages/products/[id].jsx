import React, { useEffect, useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import { useRouter } from "next/router";
import axios from "axios";
const update = () => {
  const router = useRouter();
  const { id } = router.query;
  // const [data, setData] = useState([]);

  // useEffect(() => {
  const updateItem = async () => {
    try {
      const data = await axios.get(
        `https://dawoodddocker.herokuapp.com/api/v1/product/${id}`
      );
      // const result = Object.values(data.data.data);
      // setData(result);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  updateItem();

  // }, []);
  return (
    <ContainerDefault>
      <h1>Working</h1>
    </ContainerDefault>
  );
};

export default update;
