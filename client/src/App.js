import React, { useEffect, useState } from "react";
import Download from "./components/Download";
import Chart from "./components/Chart2";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Read from "./components/Read";



export default function App() {

    const [data, setData] = useState();
  
    let result = [];
   
    useEffect(() => {
         
        const fetchData = async () => {
            const res = await fetch("http://localhost:5000/data");
            const data = await res.json();
            const tab = data.response.entities
            setData(result);
            console.log(data)
    
            const counts = {};
            tab.forEach(obj => {
                counts[obj.entityId] = (counts[obj.entityId] || 0) 
                + !obj.count;
            });
    
            for (let entityId in counts) {
    
                result.push({
                    entityId: entityId, count: counts[entityId]  
                });

               console.log(result);
             
            } 
        }

        fetchData();
    
    }, []);


    return (
        <div className="bg-gray-100">
            <Navbar />
            <Download />
            {/* <Read /> */}
            
            <div>
                <h1 className="ml-4 mt-4 text-center text-gray-500">
                Keywords in your text</h1>
               
                {/* <pre>{JSON.stringify(data, null, 4)}</pre>  */}
              
            </div>

            <div className="App">
                {data ? <p>{result}</p> : <p>Loading...</p>}
                <Chart data={data} />
            </div>

            <Footer />
        </div>
    ) 
}
