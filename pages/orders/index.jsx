import React, { useEffect } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import TableOrdersItems from "~/components/shared/tables/TableOrdersItems";
// import Pagination from "~/components/elements/basic/Pagination";
import { Select } from "antd";
// import Link from "next/link";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import { connect, useDispatch } from "react-redux";
import { toggleDrawerMenu } from "~/store/app/action";

const { Option } = Select;
const OrdersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);
  return (
    <ContainerDefault>
      <HeaderDashboard title='Orders' />
      <section className='ps-items-listing'>
        <div className='ps-section__content'>
          <TableOrdersItems />
        </div>
      </section>
    </ContainerDefault>
  );
};
export default connect((state) => state.app)(OrdersPage);
