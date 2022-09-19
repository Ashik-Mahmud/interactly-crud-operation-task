type Props = {};

const ContactList = (props: Props) => {
  return (
    <div id="contact-list">
      <h3>Contact List</h3>
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
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>
              <a href="mailto:john@doe.com">john@doe.com</a>
            </td>
            <td>
              <a href="tel:1234567890">1234567890</a>
            </td>
            <td>
              <button>Edit</button>
              <button className="delete-btn">Delete</button>
              <button>View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
