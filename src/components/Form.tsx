import { ContactInterface } from "../interfaces/contactInterface";

type Props = {
  handleFormSubmit: (event: any) => void;
  setContactData: React.Dispatch<React.SetStateAction<ContactInterface>>;
  contactData: ContactInterface;
};

const Form = ({ setContactData, contactData, handleFormSubmit }: Props) => {
  return (
    <div id="crud-form">
      <form action="" onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            onChange={(event) =>
              setContactData({ ...contactData, first_name: event.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            onChange={(event) =>
              setContactData({ ...contactData, last_name: event.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(event) =>
              setContactData({ ...contactData, email: event.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile_number">Mobile Number</label>
          <input
            type="text"
            name="mobile_number"
            id="mobile_number"
            onChange={(event) =>
              setContactData({
                ...contactData,
                mobile_phone: event.target.value,
              })
            }
          />
        </div>
        <div className="input-group">
          <button>Save Contact</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
