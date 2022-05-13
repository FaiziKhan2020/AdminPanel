import React from 'react';
import  { useEffect, useState } from 'react';

import { Dropdown, Menu } from 'antd';
import Axios from 'axios'
import { useRouter } from 'next/router';

const DropdownAction = () => {
    const router = useRouter();

    const { pid } = router.query;
    
    const [data, setData] = useState([]);

    
        
            
            const postDelete = (id,p)  =>
            {

             Axios.delete(
                    // `http://localhost:8082/api/v1/product`
                    // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
                    `http://localhost:8080/api/v1/product/delete/${id}`
                    )
                }
            
    
           

    // const menuView = (
    //     )
        
        return (
        
        <button onClick={postDelete(data.id)}>Delete</button>
        // <Dropdown  className="ps-dropdown">
        //     <a
               
        //         className="ps-dropdown__toggle">
        //         <i className="icon-ellipsis"></i>
        //    </a>
        // </Dropdown>
    );
};

export default DropdownAction;
