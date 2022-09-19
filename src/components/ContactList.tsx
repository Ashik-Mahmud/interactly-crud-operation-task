import Axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { ContactInterface } from "../interfaces/contactInterface";
import View from "./View";
type Props = {
  contactList: ContactInterface[];
  isLoading: boolean;
  setIsInserted: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditContact: (id: number | undefined) => void;
};

const ContactList = ({
  contactList,
  isLoading,
  setIsInserted,
  handleEditContact,
}: Props) => {
  const [view, setView] = useState<ContactInterface>({} as ContactInterface);

  /* Handle Delete Contact */
  const handleDeleteContact = async (id: number | undefined) => {
    const isConfirm = window.confirm("Are you sure?");
    if (isConfirm) {
      await Axios.delete(
        `http://localhost:5000/api/contact/deleteContact/${id}`
      ).then((result) => {
        toast.success(result.data?.message);
        setIsInserted((state) => !state);
      });
    }
  };

  /* Handle View */
  const handleView = async (id: number | undefined) => {
    await Axios.get(`http://localhost:5000/api/contact/getContact/${id}`).then(
      (result) => {
        setView(result.data?.data[0]);
      }
    );
  };

  if (view?.id) {
    return <View view={view} setView={setView} />;
  }

  return (
    <div id="contact-list">
      <h3>Contact List</h3>
      {isLoading ? (
        contactList.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contactList.map(
                ({ id, first_name, last_name, email, mobile_number }) => (
                  <tr key={id}>
                    <td>{first_name}</td>
                    <td>{last_name}</td>
                    <td>
                      <a href={`mailto:${email}`}>{email}</a>
                    </td>
                    <td>
                      <a href={`tel:${mobile_number}`}>{mobile_number}</a>
                    </td>
                    <td>
                      <button onClick={() => handleEditContact(id)}>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteContact(id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                      <button onClick={() => handleView(id)}>View</button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        ) : (
          <p>No contacts found</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ContactList;
