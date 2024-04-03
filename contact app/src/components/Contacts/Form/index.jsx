import { useEffect, useState } from "react"

const initialFormValues ={ fullname: "", phone_number: "" }
function Form( {addContacts ,contacts}) {
   // console.log(addContacts);
    const [form, setForm] = useState(initialFormValues)

    useEffect(()=>{
        setForm(initialFormValues)
    },[contacts])

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value }
        )
    }

    const onSubmıt=(e) => {
        e.preventDefault();
        if(form.fullname === "" || form.phone_number===""){
            alert( "Tüm alanları doldurun - Please fill out all fields.") 
            return false;
        }
        

        addContacts([...contacts ,form])
        // setForm(initialFormValues)
    } 
    return (
        <>
            <center>
                <input name="fullname" value={form.fullname} onChange={onChangeForm} className="shadow appearance-none border rounded-lg sm:w-[100%]  md:w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter name " /> <br /> <br />
                <input name="phone_number" value={form.phone_number} onChange={onChangeForm} className="shadow appearance-none border rounded-lg sm:w-[100%]  md:w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter phone number" />

                <br />
                <br />
                <button onClick={onSubmıt} type="button" className="text-white sm:w-[100%]  md:w-[70%] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Add Phone </button>
            </center>
        </>
    )
}

export default Form