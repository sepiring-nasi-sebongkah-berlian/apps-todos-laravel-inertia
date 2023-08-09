import CustomDrawer from "@/Components/Custom/Drawer";
import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";

const CustomRegister = ({ auth }: PageProps) => {
  return (
    <>
      <Head title="Register" />

      {/* Drawer with NavBar */}
      <CustomDrawer>
        <div className="prose mx-auto flex min-h-[calc(100vh-var(--navbar-padding,0.25rem)-4rem)] flex-col items-center justify-center p-4">
          <h3 className="transition-color duration-200">
            Custom Register User
          </h3>

          <form className="flex min-w-[20rem] flex-col">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text transition-colors duration-100">
                  Username
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered input-primary w-full max-w-xs transition-all duration-300"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text transition-colors duration-100">
                  Password
                </span>
              </label>
              <input
                type="password"
                className="input input-bordered input-primary w-full max-w-xs transition-all duration-300"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text transition-colors duration-100">
                  Password Confirmation
                </span>
              </label>
              <input
                type="password"
                className="input input-bordered input-primary w-full max-w-xs transition-all duration-300"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text transition-colors duration-100">
                  &nbsp;
                </span>
              </label>
              <Link
                href="#"
                as="button"
                className="btn btn-primary w-full max-w-xs transition-all duration-300"
              >
                <span className="label-text">Halo Dunia</span>
              </Link>
            </div>
            {/* <div className="form-control mt-2 w-full px-1 pb-2 pt-1">
              <button
                type="submit"
                className="dark:text- btn btn-primary transition-all duration-300"
              >
                <span className="label-text">Submit</span>
              </button>
            </div> */}
          </form>
        </div>
      </CustomDrawer>
    </>
  );
};

export default CustomRegister;
