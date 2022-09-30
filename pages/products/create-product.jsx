import React, { useEffect, useState } from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import Router from "next/router";
import { Form, Input } from "antd";
import Axios from "axios";
import { useRouter } from "next/router";
const CreateProductPage = () => {
  const handleLoginSubmit = async (data) => {
    const body = {
      title: data.title,
      Department: data.Department,
      Brand_Name: data.Brand_Name,
      Main_Category: data.Main_Category,
      Sub_Cat: data.Sub_Cat,
      Bar_code: data.Bar_code,
      price: data.price,
      imgUrl: data.imgUrl,
      CategoryId: data.CategoryId,
    };

    try {
      const res = await Axios.post(
        "https://dawoodddocker.herokuapp.com/api/v1/product/post",
        body
      );

      if (res.data.success) {
        Router.push({
          pathname: "/products",
        });
      }
      console.log("CBM", { res });
    } catch (error) {
      console.log("CBM", { error });
    }
  };
  const [data, setData] = useState([]);
  const router = useRouter();
  const {
    query: { e },
  } = router;

  useEffect(() => {
    const fetchBags = async () => {
      try {
        const data = await Axios.get(
          `https://dawoodddocker.herokuapp.com/api/v1/product/id/84`
        );
        console.log(data);
        setData(data.data.data);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBags();
  }, []);
  const send = (e) => {
    Router.push({
      pathname: "/grocery/dairy/filter",
      query: {
        e,
      },
    });
  };
  return (
    <ContainerDefault title='Create new product'>
      <section className='ps-new-item'>
        <Form
          className='ps-form ps-form--new-product'
          onFinish={handleLoginSubmit}
        >
          <div className='ps-form__content'>
            <div className='row'>
              <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                <figure className='ps-block--form-box'>
                  <figcaption>General</figcaption>
                  <div className='ps-block__content'>
                    <Form.Item
                      name='title'
                      rules={[
                        {
                          required: true,
                          message: "Enter Product Title",
                        },
                      ]}
                    >
                      <Input
                        className='form-control'
                        type='postalCode'
                        placeholder='Enter product title'
                      />
                    </Form.Item>
                    <div className='form-group'>
                      <Form.Item
                        name='Department'
                        rules={[
                          {
                            required: true,
                            message: "Enter Dempartment name",
                          },
                        ]}
                      >
                        <Input
                          className='form-control'
                          type='postalCode'
                          placeholder='Enter Dempartment name'
                        />
                      </Form.Item>
                    </div>
                    <div className='form-group'>
                      <Form.Item
                        name='Brand_Name'
                        rules={[
                          {
                            required: true,
                            message: "Enter Brand_Name",
                          },
                        ]}
                      >
                        <Input
                          className='form-control'
                          type='postalCode'
                          placeholder='Enter Brand_Name'
                        />
                      </Form.Item>
                    </div>
                    <div className='form-group'>
                      <Form.Item
                        name='Main_Category'
                        rules={[
                          {
                            required: true,
                            message: "Enter Category name",
                          },
                        ]}
                      >
                        <Input
                          className='form-control'
                          type='postalCode'
                          placeholder='Enter Category name'
                        />
                      </Form.Item>
                    </div>
                    <div className='form-group'>
                      <Form.Item
                        name='Sub_cat'
                        rules={[
                          {
                            required: true,
                            message: "Enter Sub_Category Name",
                          },
                        ]}
                      >
                        <Input
                          className='form-control'
                          type='postalCode'
                          placeholder='Enter Sub_Category Name'
                        />
                      </Form.Item>
                    </div>
                    <div className='form-group'>
                      <Form.Item
                        name='Bar_code'
                        rules={[
                          {
                            required: true,
                            message: "Enter Barcode",
                          },
                        ]}
                      >
                        <Input
                          className='form-control'
                          type='postalCode'
                          placeholder='Enter Barcode'
                        />
                      </Form.Item>
                    </div>
                    <div className='form-group'>
                      <Form.Item
                        name='imgUrl'
                        rules={[
                          {
                            required: true,
                            message: "Enter Image URL",
                          },
                        ]}
                      >
                        <Input
                          className='form-control'
                          type='postalCode'
                          placeholder='Enter Image URL'
                        />
                      </Form.Item>
                    </div>

                    <div className='form-group'>
                      <Form.Item
                        name='price'
                        rules={[
                          {
                            required: true,
                            message: "Enter  price",
                          },
                        ]}
                      >
                        <Input
                          className='form-control'
                          type='postalCode'
                          placeholder='Enter price'
                        />
                      </Form.Item>
                    </div>

                    <div className='form-group'>
                      <Form.Item
                        name='CategoryId'
                        rules={[
                          {
                            required: true,
                            message: "Enter CategoryId",
                          },
                        ]}
                      >
                        <Input
                          className='form-control'
                          type='CategoryId'
                          placeholder='Enter CategoryId'
                        />
                        {/* <div class='dropdown show'>
                          <a
                            class='btn btn-secondary dropdown-toggle'
                            href='#'
                            role='button'
                            id='dropdownMenuLink'
                            data-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            Filters
                          </a>
                          <div className='mb-4 '>
                            <div
                              class='dropdown-menu'
                              aria-labelledby='dropdownMenuLink'
                            >
                              {data.map((item, index) => (
                                <a
                                  class='dropdown-item'
                                  onClick={() => send(item.send)}
                                >
                                  {item.title}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div> */}
                      </Form.Item>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className='ps-form__bottom'>
            <a className='ps-btn ps-btn--black' href='products.html'>
              Back
            </a>
            <button className='ps-btn ps-btn--gray'>Cancel</button>
            <button className='ps-btn'>Submit</button>
          </div>
        </Form>
      </section>
    </ContainerDefault>
  );
};
export default CreateProductPage;
