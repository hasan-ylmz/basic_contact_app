import { useState } from "react";
function List({contacts}) {
const  [search, setSearch] = useState("");
  
const filtered = contacts.filter((item)=> {
  return Object.keys(item).some((key) => 
    item[key]
    .toString()
    .toLowerCase()
    .includes(search.toLowerCase())
  )
})

console.log("filtered" ,filtered);
  return (
    <>
      <center>
        <input type="text" 
        value={search} 
        onChange={(e)=> {setSearch(e.target.value)}} 
        placeholder="Filter phone "
        className="shadow appearance-none border rounded-lg sm:w-[100%]  md:w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        {filtered.map((contact, index) => {
          return <li  className="list-none" key={index}> - {contact.fullname} {contact.phone_number}</li>;
        })}
      </center>
    </>
  )
}

export default List