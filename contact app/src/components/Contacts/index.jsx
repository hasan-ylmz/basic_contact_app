import { useEffect, useState } from "react"
import Form from "./Form"
import List from "./List"

function Contact() {
  const [contacts, setContacts] = useState([
    {fullname: "Burak" , phone_number:545454},
    {fullname: "Cemre", phone_number:343434},
    {fullname:"Mehmet", phone_number:616161},
  ])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <>
      <h1 className="text-3xl flex justify-center">Phone Book App</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
      
    </>
  )
}

export default Contact