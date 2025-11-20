import { fetchAllContact } from "@/app/actions/contact/getContact";
import { columns } from "@/lib/data/ContactColumns";
import { DataTable } from "../_components/data-table";

const inboxPage = async () => {
  const contacts = await fetchAllContact();
  // console.log(contacts)
  return (
    <div>
      <h1 className="text-xl">All contacts</h1>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={contacts} />
      </div>
    </div>
  );
};

export default inboxPage;
