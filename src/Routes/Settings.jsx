import { useParams } from "react-router-dom";

const Settings = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>Welcome to settings @{username}</h1>
    </div>
  );
};
export default Settings;
