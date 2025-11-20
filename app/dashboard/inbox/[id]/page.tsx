import { fetchSingleContact } from "@/app/actions/contact/getContact";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const singleContact = async (props: Props) => {
  const { id } = await props.params;
  const contact = await fetchSingleContact(id);
  //   console.log(contact);
  return (
    <div>
      <div className="flex justify-between items-center mx-5 mt-3">
        <h1 className="text-[20px] font-semibold">Contact Information</h1>
        <Link href="/dashboard/inbox">
          <button className="text-[20px] font-semibold">Back</button>
        </Link>
      </div>
      <div className="flex flex-col gap-2 m-5">
        <p className="text-[18px] font-semibold flex items-end gap-3">
          Product Id:{" "}
          <span className="text-[16px] font-stretch-50% capitalize text-muted-foreground">
            {contact?._id}
          </span>
        </p>
        <span className="w-full h-[2px] bg-muted-foreground rounded"></span>
        <p className="text-[18px] font-semibold flex items-end gap-3">
          Name:{" "}
          <span className="text-[16px] font-stretch-50% capitalize text-muted-foreground">
            {contact?.name}
          </span>
        </p>
        <span className="w-full h-[2px] bg-muted-foreground rounded"></span>
        <p className="text-[18px] font-semibold flex items-end gap-3">
          Email:{" "}
          <span className="text-[16px] font-stretch-50% capitalize text-muted-foreground">
            {contact?.email}
          </span>
        </p>
        <span className="w-full h-[2px] bg-muted-foreground rounded"></span>
        <p className="text-[18px] font-semibold flex items-end gap-3">
          Phone:{" "}
          <span className="text-[16px] font-stretch-50% capitalize text-muted-foreground">
            {contact?.phone}
          </span>
        </p>
        <span className="w-full h-[2px] bg-muted-foreground rounded"></span>
        <p className="text-[18px] font-semibold flex items-end gap-3">
          Message:{" "}
          <span className="text-[16px] font-stretch-50% capitalize text-muted-foreground">
            {contact?.message}
          </span>
        </p>
        <span className="w-full h-[2px] bg-muted-foreground rounded"></span>
        <p className="text-[18px] font-semibold flex items-end gap-3">
          Email:{" "}
          <span className="text-[16px] font-stretch-50% capitalize text-muted-foreground">
            {contact?.email}
          </span>
        </p>

        <span className="w-full h-[2px] bg-muted-foreground rounded"></span>
        <p className="text-[18px] font-semibold flex items-end gap-3">
          Order Time/Date:{" "}
          <span className="text-[16px] font-stretch-50% capitalize text-muted-foreground">
            {contact?.created_at}
          </span>
        </p>
        <span className="w-full h-[2px] bg-muted-foreground rounded"></span>
        <p className="text-[18px] font-semibold flex items-end gap-3">
          Last Updated:{" "}
          <span className="text-[16px] font-stretch-50% capitalize text-muted-foreground">
            {contact?.updated_at}
          </span>
        </p>
        <span className="w-full h-[2px] bg-muted-foreground rounded"></span>
      </div>
    </div>
  );
};

export default singleContact;
