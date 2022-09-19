export interface ContactInterface {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  mobile_number: string;
}

// Language: typescript
// Path: client\src\components\Form.tsx
// Compare this snippet from client\src\components\Form.tsx:
// type Props = {
//   handleFormSubmit: () => void;
//   setContactData: React.Dispatch<
//     React.SetStateAction<{
//       first_name: string;
//       last_name: string;
//       email: string;
//       mobile_phone: string;
//     }>
//   >;
//   contactData: {
