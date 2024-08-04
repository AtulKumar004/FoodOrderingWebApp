"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import axios from "axios";

export default function UploadComp({ width, height, alt, className }) {
  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("/api/upload", formData)
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Image
        // as={NextImage}
        width={width ?? 100}
        height={height ?? 100}
        alt={alt ?? "image"}
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        className={className}
      />
      <input type="file" accept="image" onChange={handleUpload} />
    </>
  );
}
