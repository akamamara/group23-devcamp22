import React from "react";
import { useEffect, useState } from "react";
export default function MainComponent({ type, onChange }) {
  const [preview, setPreview] = useState([]);
  const [images, setImages] = useState([]);
  const onChangeImageNFT = (e) => {
    setPreview([...e.target.files]);
  };

  useEffect(() => {
    if (preview.length < 1) return;
    const image = URL.createObjectURL(preview[0]);
    setImages((prevImages) => [image, ...prevImages]);
  }, [preview]);
  
  if (type === "problem") {
    return (
      <div>
        <div>
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            Deskripsi
          </label>
          <div className="mt-1">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 outline-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-5 min-h-[250px]"
              placeholder="Bagaimana Masalahmu"
              defaultValue={""}
              onChange={onChange}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Brief description for your problems. URLs are hyperlinked.
          </p>
        </div>
      </div>
    );
  }
  if (type === "date") {
    return (
      <input
        type="date"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Pilih tanggal"
      />
    );
  }
  if (type === "photo") {
    return (
      <div className="grid grid-cols-2 gap-5">
        {images?.map((image, ind) => (
          <img key={ind} src={image} className="min-w-[160px] h-auto" />
        ))}
        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 col-span-1 min-w-[160px]">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={onChangeImageNFT}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
    );
  }
}
