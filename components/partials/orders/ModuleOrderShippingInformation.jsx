import React from 'react';
import Axios from 'axios'
import Item from 'antd/lib/list/Item';
// import Axios from 'axios'
import { useState  } from 'react';
import { useRouter } from 'next/router';

 
const ModuleOrderShippingInformation = () => {
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
                    // `http://localhost:8080/api/v1/order/id/${e}`
                    `https://dawoodddocker.herokuapp.com/api/v1/order/id/${e}`
                );
                setData(data.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchBags();

  

    const tableItems = data.map((item, index) => {
        return (
            <div className="ps-card ps-card--order-information ps-card--small">
            <div className="ps-card__header">
                <h3>Shipping Information</h3>
            
            <p>
                    <strong>OrderId: <h4> DRWE{item.orderId}</h4></strong> 
                </p>
           
            </div>
            <div className="ps-card__content">
                
            <h4>Name: {item.firstName+" " +item.lastName}</h4>
                <p>
                    <strong>Address:   {item.address}</strong>
                  
                </p>    
                <p>
                    <strong>Phone No    : {item.contactNo}</strong> 
                </p>
                <p>
                    <strong>Email:{ item.Email}</strong> 
                </p>
                <p>
                    <strong>City: { item.city}</strong> 
                </p>
                <p>
                    <strong>Postal Code:  { item.postalCode}</strong> 
                </p>
                <p>
                    <strong>Shipping Charges:  { item.distance}</strong> 
                </p>
                <p>
                    <strong>Total Amount: <h1> { item.total}</h1></strong> 
                </p>
            </div>
        </div>
        );
    });

  
    return (
        // <div className="ps-card ps-card--order-information ps-card--small">
            <div className="ps-card__header">
                {tableItems}
           </div>
        // </div>
    );

    }

export default ModuleOrderShippingInformation;
