import { getTask } from "@/utils/actions";
import Link from "next/link";
import EditForm from "@/components/EditForm";

async function SingleTaskPage({ params }) {
  const task = await getTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          Back To Tasks
        </Link>
        <EditForm task={task} />
      </div>
    </>
  );
}

export default SingleTaskPage;
