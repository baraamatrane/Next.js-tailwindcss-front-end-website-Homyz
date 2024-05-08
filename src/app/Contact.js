import Image from "next/image";
import Bg from "../../public/contact.jpg";

const Contact = () => {
  return (
    <div className="flex md:flex-row flex-col w-full md:space-x-4 space-y-6 justify-between items-start lg:p-0 p-4">
      <div className="md:w-1/2 w-full space-y-4 p-7">
        <h3 className="text-orange-400 md:text-2xl text-xl __className_dee427 font-semibold">
          Our Contact Us
        </h3>
        <h3 className="text-[#1f3e72] md:text-3xl text-2xl __className_dee427 font-[700]">
          Easy to contact us
        </h3>
        <h4 className="text-[#b0b0b0] md:text-sm text-xs text-start __className_dee427 font-medium">
          We always ready to help by providijng the best services for you. We
          beleive a good blace to live can make your life better
        </h4>
        <div className="md:space-y-0 space-y-6">
          <div className="flex md:flex-row flex-col md:space-x-6 space-y-6 md:items-end items-center">
            <div className="bg-white shadow-md rounded-md md:w-64 w-full hover:scale-105 transition-all h-full border-[1px] border-gray-300 p-4 space-y-5">
              <div className="flex items-center gap-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-auto p-2 rounded-md text-blue-600 bg-blue-100 shadow-lg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="text-[#1f3e72] text-lg font-semibold">Call</h3>
                  <h4 className="text-[#b0b0b0] text-sm text-start __className_dee427 font-medium">
                    021 123 145 14
                  </h4>
                </div>
              </div>
              <button className="hover:bg-gradient-to-tl hover:scale-90 transition-all hover:to-blue-600 hover:from-sky-700 hover:text-white text-blue-600 font-semibold rounded-[4px] text-base p-2 w-full bg-blue-100">
                Call now
              </button>
            </div>
            <div className="bg-white shadow-md rounded-md md:w-64 w-full hover:scale-105 transition-all h-full border-[1px] border-gray-300 p-4 space-y-5">
              <div className="flex items-center gap-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-auto p-2 rounded-md text-blue-600 bg-blue-100 shadow-lg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="text-[#1f3e72] text-lg font-semibold">Chat</h3>
                  <h4 className="text-[#b0b0b0] text-sm text-start __className_dee427 font-medium">
                    021 123 145 14
                  </h4>
                </div>
              </div>
              <button className="hover:bg-gradient-to-tl hover:scale-90 transition-all hover:to-blue-600 hover:from-sky-700 hover:text-white text-blue-600 font-semibold rounded-[4px] text-base p-2 w-full bg-blue-100">
                Chat now
              </button>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:space-x-6 space-y-6 md:items-end items-center">
            <div className="bg-white shadow-md rounded-md md:w-64 w-full hover:scale-105 transition-all h-full border-[1px] border-gray-300 p-4 space-y-5">
              <div className="flex items-center gap-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-auto p-2 rounded-md text-blue-600 bg-blue-100 shadow-lg"
                >
                  <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                </svg>

                <div>
                  <h3 className="text-[#1f3e72] text-lg font-semibold">
                    Video Call
                  </h3>
                  <h4 className="text-[#b0b0b0] text-sm text-start __className_dee427 font-medium">
                    021 123 145 14
                  </h4>
                </div>
              </div>
              <button className="hover:bg-gradient-to-tl hover:scale-90 transition-all hover:to-blue-600 hover:from-sky-700 hover:text-white text-blue-600 font-semibold rounded-[4px] text-base p-2 w-full bg-blue-100">
                Video Call now
              </button>
            </div>
            <div className="bg-white shadow-md rounded-md md:w-64 w-full hover:scale-105 transition-all h-full border-[1px] border-gray-300 p-4 space-y-5">
              <div className="flex items-center gap-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-auto p-2 rounded-md text-blue-600 bg-blue-100 shadow-lg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>
                  <h3 className="text-[#1f3e72] text-lg font-semibold">
                    Message
                  </h3>
                  <h4 className="text-[#b0b0b0] text-sm text-start __className_dee427 font-medium">
                    021 123 145 14
                  </h4>
                </div>
              </div>
              <button className="hover:bg-gradient-to-tl hover:scale-90 transition-all hover:to-blue-600 hover:from-sky-700 hover:text-white text-blue-600 font-semibold rounded-[4px] text-base p-2 w-full bg-blue-100">
                Message now
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="w-full flex justify-center md:w-1/2">
        <div className="md:w-[450px] w-96 lg:h-[500px] h-80 overflow-hidden bg-white rounded-t-full">
          <Image
            src={Bg}
            alt="bg"
            width="450"
            height="550"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
