import Axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ContactList from "../components/ContactList";
import Form from "../components/Form";
type Props = {};

const Home = (props: Props) => {
  const [contactData, setContactData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_phone: "",
  });

  /*   Handle Form Submitted */
  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    if (
      contactData.email === "" ||
      contactData.first_name === "" ||
      contactData.last_name === "" ||
      contactData.mobile_phone === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    await Axios.post(
      "http://localhost:5000/api/contact/createContact",
      contactData
    ).then((res) => {
      console.log(res);
      toast.success("Contact created successfully");
    });
  };

  return (
    <div>
      <div className="container">
        <h3>Crud Operation With MYSQL</h3>
        <Form
          handleFormSubmit={handleFormSubmit}
          setContactData={setContactData}
          contactData={contactData}
        />
        <hr />
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
