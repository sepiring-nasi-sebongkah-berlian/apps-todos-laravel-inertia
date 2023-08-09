import { Head } from "@inertiajs/react";

import CustomDrawer from "@/Components/Custom/Drawer";
import { PageProps } from "@/types";

const CustomWelcome = ({
  auth,
  laravelVersion,
  phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) => {
  return (
    <>
      <Head title="Custom Welcome" />

      {/* Drawer with NavBar */}
      <CustomDrawer>
        <div className="hero min-h-[calc(100vh-var(--navbar-padding,0.25rem)-4rem)] bg-base-200 bg-cover bg-center bg-no-repeat transition-all duration-500">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary transition-all duration-500">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </CustomDrawer>
    </>
  );
};

export default CustomWelcome;
