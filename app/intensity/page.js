import Chart from "./LineChart";

//fetch data from api
const getData=async()=>{
  try {
    const res=await fetch("http://localhost:3000/api/dataSample")
    return res.json();
  } catch (error) {
    console.error("Error while loading data",error)
  }
}

const Intensity = async () => {
  const {sample}=await getData();
  return (
    <div>
      <h2>Intensity graph</h2>
      <Chart sample={sample} />
    </div>
  )
}

export default Intensity