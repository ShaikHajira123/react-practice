import "./styles.css";
import { useEffect, useState } from "react";
import { Stopwatch } from "./components/Stopwatch";

export default function App() {
  const [data, setData] = useState([]);
  const [copy, setCopy] = useState([]);
  const [filt, setFilt] = useState([]);
  useEffect(() => {
    fetch(" https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
    var copyData = [...data];
    setCopy(copyData);
  }, []);
  // console.log(data)
  const sortData = (e) => {
    if (e.target.value === "asc") {
      setData([...data.sort((a, b) => a.price - b.price)]);
    } else if (e.target.value === "des") {
      setData([...data.sort((a, b) => b.price - a.price)]);
    } else if (e.target.value === "ori") {
      setData([...copy]);
    }
  };

  const filterData = (e) => {
    setData([...data.filter((e) => e.title.includes(filt))]);
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      setData([...copy]);
    } else {
      setFilt(e.target.value);
    }
  };
  const deleteData = (id) => {
    setData([...data.filter((i) => i.id !== id)]);
  };

  return (
    <div className="App">
      <Stopwatch />
      <input
        type="text"
        placeholder="filter data"
        onChange={(e) => handleChange(e)}
      />

      <button onClick={filterData}>Filter</button>

      <select onChange={(e) => sortData(e)}>
        <option value="ori">Ori</option>
        <option value="asc">Asc</option>
        <option value="des">Des</option>
      </select>
      <p>{data.length}</p>
      {data.map((e) => {
        return (
          <>
            <button onClick={() => deleteData(e.id)}>Delete</button>
            <div>{e.price}</div>
            <p>{e.title}</p>
          </>
        );
      })}
    </div>
  );
}
