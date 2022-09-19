import { ContactInterface } from "../interfaces/contactInterface";

type Props = {
  contactList: ContactInterface[];
  isLoading: boolean;
};

const ContactList = ({ contactList, isLoading }: Props) => {
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
                      <button>Edit</button>
                      <button className="delete-btn">Delete</button>
                      <button>View</button>
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
