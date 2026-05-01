import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const Barchart = () => {
  const margin = {
  top: 10,
  right: 30,
  left: 20,
  bottom: 5,
};

const data = [
  {
    st_name: 'Suhel',
    
    amount:500,

  },
   {
    st_name: 'Mizan Khan',
    amount:1000,
    
  },
  {
    st_name: 'Shubham Singh',
    amount:2000
    
  }, 
   {
    st_name: "Aman",
    amount: 1200,
  },
  {
    st_name: "Rahul",
    amount: 800,
  },
  {
    st_name: "Zaid",
    amount: 1500,
  },
  {
    st_name: "Imran",
    amount: 950,
  },


]
  return (
    <>
    <BarChart width={600} height={200} data={data} margin={margin}

     >

      <XAxis dataKey="st_name" stroke="black" />
      <YAxis stroke="black" />
        <Tooltip  />
        <CartesianGrid stroke="#333" strokeDasharray="" opacity={0.1} />
<Bar dataKey="amount" fill="orange" barSize={30} />
      <RechartsDevtools />
       <RechartsDevtools />
    </BarChart>
    </>
  );
}

export default Barchart;
