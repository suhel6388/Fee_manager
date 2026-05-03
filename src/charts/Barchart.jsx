import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';


const CustomTooltipBar = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "#1a1a2e",
        border: "1px solid #FFA500",
        borderRadius: 8,
        padding: "8px 14px",
        fontSize: 13,
        color: "#fff",
      }}>
        <p style={{ margin: 0, fontWeight: 600, color: "#FFA500" }}>{label}</p>
        <p style={{ margin: "4px 0 0", color: "#fff" }}>Deposit: <strong>{payload[0].value.toLocaleString()}</strong></p>
      </div>
    );
  }
  return null;
};


const Barchart = ({data_is, height = 200, width=700, Xdata = 'st_name', barData = 'amount', fill = 'orange' }) => {
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
    amount:2000,
  
    
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
    <BarChart width={width } height={height} data={data} margin={margin}

     >

      <XAxis dataKey={Xdata} 
      tick={{ fontSize: 12, fill: "#999" }}
                axisLine={false}
                tickLine={false}
       />
      <YAxis stroke="black"
      axisLine= {false}
      tickLine= {false}
       tick={{ fontSize: 12, fill: "#999" }}
       />
        <Tooltip content={<CustomTooltipBar />} cursor={{ fill: "rgba(255,165,0,0.08)" }} />
        <CartesianGrid 
        strokeDasharray="4 4" 
        stroke="#f0ede8"
         vertical={false}

         />
<Bar
 dataKey={barData} fill={fill} barSize={30} radius={[6, 6, 0, 0]
  
}

 />
      <RechartsDevtools />
       <RechartsDevtools />
    </BarChart>
    </>
  );
}

export default Barchart;
