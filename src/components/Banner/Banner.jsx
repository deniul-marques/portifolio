import {BsArrowRightShort} from "react-icons/bs";

export default function Banner() {
      return (
            <div className="w-4/5 flex-auto h-min ">
                  <div className="bg-white">
                      <div className="px-16 py-20">
                          <div className="grid grid-cols-2">
                              <div className="space-y-6">
                                  <h1 className="font-semibold text-5xl">Eu sou Deniul Marques<br /><span className="text-[#FFB400]">Front-end</span> Developer </h1>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
                                  <button className="flex rounded items-center uppercase bg-[#FFB400] px-4 py-1" href="#">Hire Me <span className="text-2xl"><BsArrowRightShort /></span></button>
                              </div>
                          </div>
                      </div>
                  </div>
                
                <div className="flex flex-col justify-center items-center my-10 text-center gap-5">
                    <h2 className="text-2xl font-bold underline underline-offset-8">Meus Serviços</h2>
                    <p className="max-w-[45ch]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                </div>
            </div>
      );
};