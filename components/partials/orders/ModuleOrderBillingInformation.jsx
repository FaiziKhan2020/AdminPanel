import React from 'react';
import Axios from 'axios'
import Item from 'antd/lib/list/Item';
// import Axios from 'axios'
import { useState  } from 'react';
import { useRouter } from 'next/router';

 
const ModuleOrderBillingInformation = () => {
    const router = useRouter();
    const {
        query:{e}
    }=router
    console.log(e);
    // console.log("hello");
    // const dispatch = useDispatch();
    const [data, setData] = useState([]);
    
        const fetchBags = async () => {
            try {
                const data = await Axios.get(
                    // `http://localhost:8082/api/v1/product`
                    // `https://dawoodbackend.herokuapp.com/api/v1/product/id/5`
                    // `http://localhost:8080/api/v1/order/orderItem/${e}`
                    `https://dawoodddocker.herokuapp.com/api/v1/order/orderItem/${e}`
                );
                setData(data.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();
        const tableItemsView = data.map((item) => {            
            return (
                <tr key={item.id}>
                    
                    <td>                            
                        <strong>{item.id}</strong>
                    </td>
                    
                  
                    <td>
                        <strong>{item.title}</strong>
                    </td>
                  
                    <td>
                        <strong> {item.quantity}</strong>
                    </td>
                    <td>
                        <strong>{item.price}</strong>   
                    </td>
                    
                  <td><strong>{item.itemTotal}</strong></td>
                    <td>
                        <strong></strong>
                    </td>
                </tr>
            );
        });
        return (
            <div className="table-responsive">
                <table className="table ps-table">
                    <thead>
                        <tr>
                            
                            <th><storng>Product Id</storng></th>
                            <th><strong>Title</strong></th>
                            <th><strong>Quantity</strong></th>
                             <th><strong>Price</strong></th>
                             <th><strong>Itemtotal</strong></th>

                           
                        </tr>
                    </thead>
                    <tbody>{tableItemsView}</tbody>
                </table>
            </div>
        );

    }

export default ModuleOrderBillingInformation;
