import Axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ContactList from "../components/ContactList";
import Form from "../components/Form";
import { ContactInterface } from "../interfaces/contactInterface";
type Props = {};

const Home = (props: Props) => {
  /* Declares all the Necessary States */
  const [contactData, setContactData] = useState<ContactInterface>({
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
  });

  const [contactList, setContactList] = useState<ContactInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInserted, setIsInserted] = useState<boolean>(false);
  const [update, setUpdate] = useState<ContactInterface[]>([]);

  /*   Handle Form Submitted */
  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    if (
      contactData.email === "" ||
      contactData.first_name === "" ||
      contactData.last_name === "" ||
      contactData.mobile_number === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    await Axios.post(
      "http://localhost:5000/api/contact/createContact",
      contactData
    )
      .then((res) => {
        event.target.reset();
        toast.success("Contact created successfully");
        setIsInserted((state) => !state);
      })
      .catch((error) => {
        toast.error(error.response?.data.message);
      });
  };

  /* Fetch All the Data from  MYSQL Databases */
  useEffect(() => {
    Axios.get("http://localhost:5000/api/contact/getContacts").then((res) => {
      setContactList(res.data?.data);
      setIsLoading(true);
    });
  }, [isInserted]);

  /*  Handle Edit Contact */
  const handleEditContact = async (id: number | undefined) => {
    await Axios.get(`http://localhost:5000/api/contact/getContact/${id}`).then(
      (res) => {
        setUpdate(res.data?.data);
        setContactData({
          first_name: res.data?.data[0].first_name,
          last_name: res.data?.data[0].last_name,
          email: res.data?.data[0].email,
          mobile_number: res.data?.data[0].mobile_number,
        });
      }
    );
  };

  /*  Handle Edit FOrm */
  const handleEditForm = async (event: any) => {
    event.preventDefault();

    await Axios.put(
      `http://localhost:5000/api/contact/updateContact/${update[0].id}`,
      contactData
    )
      .then((res) => {
        toast.success("Contact updated successfully");
        setIsInserted((state) => !state);
      })
      .catch((error) => {
        toast.error(error.response?.data.message);
      });
    setUpdate([]);
  };

  return (
    <div>
      <div className="container">
        <h3>Crud Operation With MYSQL</h3>
        <Form
          handleEditForm={handleEditForm}
          handleFormSubmit={handleFormSubmit}
          setContactData={setContactData}
          contactData={contactData}
          update={update}
        />
        <hr />
        <ContactList
          contactList={contactList}
          isLoading={isLoading}
          setIsInserted={setIsInserted}
          handleEditContact={handleEditContact}
        />
      </div>
    </div>
  );
};

export default Home;
