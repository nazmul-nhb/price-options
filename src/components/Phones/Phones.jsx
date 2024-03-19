import { useEffect, useState } from "react";
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))

        // Axios

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phonesWithFakeData);
            });

    }, [])

    return (
        <div>
            <h3 className="text-3xl">Phones: {phones.length}</h3>
                <BarChart width={1400} height={400} data={phones}>
                    <Bar dataKey="price" fill="blue" />
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
        </div>
    );
};

export default Phones;