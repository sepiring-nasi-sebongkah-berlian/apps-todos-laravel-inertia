import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

const CustomWelcome = ({
  auth,
  laravelVersion,
  phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) => {
  return (
    <>
      <Head title="Custom Welcome" />
      <div>Welcome</div>
    </>
  );
};

export default CustomWelcome;
