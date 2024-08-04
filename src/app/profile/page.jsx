import React from "react";
import Breadcrumb from "../../components/BreadCrumb/breadCrumb";
import UploadComp from "../../components/upload/uploadComp";
import { Input } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
// import NextImage from "next/image";
const pages = [{ name: "My Account", href: "#", current: false }];
function UserProfile() {
  return (
    <main className="container mx-auto border ">
      {/* <Breadcrumb pages = {pages} /> */}
      <div className="border  flex flex-col items-center gap-4 sm:mx-max-[70%] md:max-w-[60%] mx-auto">
        <div>
          {/* <Image
            // as={NextImage}
            width={140}
            height={140}
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
            className="object-cover rounded-full"
          /> */}

          <UploadComp
            width={140}
            height={140}
            alt="NextUI hero Image"
            className="object-cover rounded-full"
          />
        </div>
        <Input
          type="text"
          className="md:w-[60%] sm:w-[70%]"
          size="sm"
          label="Full Name"
        />
        <Input
          type="email"
          className="md:w-[60%] sm:w-[70%]"
          size="sm"
          label="Email"
        />
      </div>
    </main>
  );
}

export default UserProfile;
