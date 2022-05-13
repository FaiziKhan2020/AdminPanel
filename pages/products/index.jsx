import React, { useEffect } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import Pagination from "~/components/elements/basic/Pagination";
import TableProjectItems from "~/components/shared/tables/TableProjectItems";
import { Select } from "antd";
import Link from "next/link";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import { connect, useDispatch } from "react-redux";
import { toggleDrawerMenu } from "~/store/app/action";

const { Option } = Select;
const ProductPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);
  return (
    <ContainerDefault title='Products'>
      <HeaderDashboard
        title='Products'
        description='Dawood Online Product Listing '
      />
      <section className='ps-items-listing'>
        <div className='ps-section__actions'>
          <Link href='/products/create-product'>
            <a className='ps-btn success'>
              <i className='icon icon-plus mr-2' />
              New Product
            </a>
          </Link>
        </div>

        <div className='ps-section__content'>
          <TableProjectItems />
        </div>
        <div className='ps-section__footer'>
          <p>Show 10 in 30 items.</p>
          <Pagination />
        </div>
      </section>
    </ContainerDefault>
  );
};
export default connect((state) => state.app)(ProductPage);
