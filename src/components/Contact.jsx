import { useState } from "react";
import map from '../assets/images/map1.png'
import { MdContacts } from "react-icons/md";
import { FcAddressBook } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const [resultMessage, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "6c2c8d30-7148-4210-9e90-b9b9e44547e7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    const msg = data.success ? "Success!" : "Error";
    setResult(msg);

    alert(msg);
  };

  return (
    <div className="text-center my-16" id="contact">
      <h1 className=" text-center text-4xl lg:text-6xl font-bold  bg-gradient-to-b from-cyan-600 to-red-500 text-transparent bg-clip-text mb-20 ">
        Get in touch
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly lg:items-start gap-8">
        <div className="">
            <h1 className="text-center text-4xl  font-bold  bg-gradient-to-b from-cyan-600 to-red-500 text-transparent bg-clip-text  mb-10 hidden lg:block">Get in touch</h1>
            <p className="flex items-center  gap-4 text-gray-700 mb-4"><FcAddressBook/> Buner </p>
            <p className="flex items-center  gap-4 text-gray-700 mb-4"> <HiOutlineMail/>  nh0105912@gmail.com</p>
            <p className="flex items-center  gap-4 text-gray-700 mb-4"> <MdContacts/> (+92) 347-2940996</p>
            <img src={map} alt="" />

        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-8 justify-center items-center"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Full name "
            className="w-[300px]  border-2 border-gray-700 border-solid px-4 py-2 rounded-md bg-transparent outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email "
            className="w-[300px]  border-2 border-gray-700 border-solid px-4 py-2 rounded-md bg-transparent outline-none"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            className="w-[300px] h-[100px] border-2 border-gray-700 border-solid px-4 py-2 rounded-md bg-transparent outline-none"
          ></textarea>
          <button type="submit" className="border-2 border-gray-700 border-solid w-full py-2">Submit</button>
          <p>{resultMessage}</p>
        </form>
      </div>
    </div>
  );
}
