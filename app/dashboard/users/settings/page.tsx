import { fetchUserProfile } from "@/lib/auth";
import UpdateProfile from "../../_components/UpdateProfile";

const SettingProfile = async () => {
  const userData = await fetchUserProfile();
  return (
    <div>
      <UpdateProfile userData={userData} />
    </div>
  );
};

export default SettingProfile;
