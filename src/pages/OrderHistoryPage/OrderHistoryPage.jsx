import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const expiryDate = await checkToken();
    console.log(expiryDate);
  };
  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
