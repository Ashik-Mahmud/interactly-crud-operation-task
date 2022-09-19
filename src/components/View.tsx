import { ContactInterface } from "../interfaces/contactInterface";

type Props = {
  view: ContactInterface;
  setView: React.Dispatch<React.SetStateAction<ContactInterface>>;
};

const View = ({
  view: { first_name, last_name, email, mobile_number },
  setView,
}: Props) => {
  return (
    <div className="model">
      <div className="model-content">
        <div
          className="close-btn"
          onClick={() => setView({} as ContactInterface)}
        >
          &times;
        </div>
        <div className="model-header">
          <h3>View Contact</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <td>{first_name}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{last_name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>Mobile Number</th>
              <td>{mobile_number}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default View;
