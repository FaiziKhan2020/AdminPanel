import React, { useEffect } from 'react';
import ContainerDefault from '~/components/layouts/ContainerDefault';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
// import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';
// import { useCart } from 'react-use-cart';
import axios from 'axios';

const FormCreateCategory = () => {
    const handleLoginSubmit = async (data) => {
        const body = {
            Name:data.Name,
            url:data.url


            // items: items.map((item) => parseInt(item.id)),
        };

        try {
            const res = await axios.post(
                // 'https://dawoodbackend.herokuapp.com/api/v1/Category/post',
                'http://localhost:8080/api/v1/Category/post',
                body
            );
            console.log('CBM', { res });
        } catch (error) {
            console.log('CBM', { error });
        }
    };

    return (
        <Form className="ps-form ps-form--new"  onFinish={handleLoginSubmit}>
            <div className="ps-form__content">
                <div className="form-group">
                <Form.Item
                                            name="Name"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'Enter Category Name',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="postalCode"
                                                placeholder=" Enter Category Name"
                                            />
                                        </Form.Item>
                </div>
                <div className="form-group">
                <Form.Item
                                            name="url"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'Enter category url',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="postalCode"
                                                placeholder="Enter category url"
                                            />
                                        </Form.Item>
                </div>
                
                
            </div>
            <div className="ps-form__bottom">
            
                <button className="ps-btn ps-btn--sumbit success">
                    Add new
                </button>
            </div>
        </Form>
    );
};

export default FormCreateCategory;


// import React from 'react';

// const FormCreateCategory = () => {
    
//     return (
//         <form className="ps-form ps-form--new" action="index.html" method="get">
//             <div className="ps-form__content">
//                 <div className="form-group">
//                     <label>
//                         Name<sup>*</sup>
//                     </label>
//                     <input
//                         className="form-control"
//                         type="text"
//                         placeholder="Enter category name"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>
//                         Slug<sup>*</sup>
//                     </label>
//                     <input
//                         className="form-control"
//                         type="text"
//                         placeholder="Enter category slug"
//                     />
//                 </div>
//                 <div className="form-group form-group--select">
//                     <label>Parent</label>
//                     <div className="form-group__content">
//                         <select className="ps-select" title="Parent">
//                             <option value="1">Parent 1</option>
//                             <option value="2">Parent 2</option>
//                             <option value="3">Parent 3</option>
//                             <option value="4">Parent 4</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <label>Description</label>
//                     <textarea
//                         className="form-control"
//                         rows="6"
//                         placeholder="Enter category description"></textarea>
//                 </div>
//             </div>
//             <div className="ps-form__bottom">
//                 <button className="ps-btn ps-btn--gray">Reset</button>
//                 <button className="ps-btn ps-btn--sumbit success">
//                     Add new
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default FormCreateCategory;