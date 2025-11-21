import UpdateUserProfile from "@/app/_components/UpdateUserProfile";
import { fetchUserProfile } from "@/lib/auth";

const profileSettingsPage = async () => {
  const userData = await fetchUserProfile();
  // console.log(userData);
  return (
    <div>
      <UpdateUserProfile userData={userData} />
    </div>
  );
};

export default profileSettingsPage;
