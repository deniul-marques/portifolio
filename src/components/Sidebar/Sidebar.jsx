import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaDribbble} from "react-icons/fa";

export default function Sidebar() {
      return (
          <div className="sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/5 bg-white p-5 text-sm">
              <img className="mx-auto" src="/image/perfil.png" alt="Imagen Profile"/>

              <h1 className="font-medium text-base text-center my-3">Deniul Marques dos Santos</h1>
              <p className="font-base text-gray-400  mb-5 text-center">Font-end Developer</p>

              <ul className="text-lg flex flex-wrap gap-2 justify-between">
                  <li className="p-2 rounded-full bg-[#FFB400]">< FaFacebookF/></li>
                  <li className="p-2 rounded-full bg-[#FFB400]">< FaInstagram/></li>
                  <li className="p-2 rounded-full bg-[#FFB400]">< FaTwitter/></li>
                  <li className="p-2 rounded-full bg-[#FFB400]">< FaLinkedinIn/></li>
                  <li className="p-2 rounded-full bg-[#FFB400]">< FaYoutube/></li>
                  <li className="p-2 rounded-full bg-[#FFB400]">< FaDribbble/></li>
              </ul>
              <hr className="my-5 text-black"/>
              <div>
                  <table className="w-full text-end text-xs">
                      <tbody className="flex flex-col space-y-2">
                      <tr className="flex gap-2 justify-between items-center">
                          <td className="font-medium bg-[#FFB400] p-1">Idade:</td>
                          <td>26</td>
                      </tr>
                      <tr className="flex gap-2 justify-between items-center">
                          <td className="font-medium bg-[#FFB400] p-1">Email:</td>
                          <td className="whitespace-nowrap">deniulmarques-10@hotmail.com</td>
                      </tr>
                      <tr className="flex gap-2 justify-between items-center">
                          <td className="font-medium bg-[#FFB400] p-1">Freelance:</td>
                          <td className="text-green-400">Dispon??vel</td>
                      </tr>
                      <tr className="flex gap-2 justify-between items-center">
                          <td className="font-medium bg-[#FFB400] p-1">Endere??o:</td>
                          <td>Cariacica, Espirito Santo</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
              <hr className="my-5 text-black"/>
              <div className="text-gray-500 space-y-10">
                  <div>
                      <h2 className="mb-4 font-semibold text-gray-700">Linguagens</h2>
                      <ul className="flex flex-col space-y-5">
                          <li>
                              <div className="flex  justify-between">
                                  <p className="mb-2">Ingl??s T??cnico</p>
                                  <span>75%</span>
                              </div>
                              <div
                                  className="w-full flex items-center border  border-[#FFB400]  rounded-full h-1 dark:bg-gray-700">
                                  <div className="bg-[#FFB400] h-1 rounded-full w-full"></div>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <hr/>
                  <div>
                      <h2 className="mb-4 font-semibold text-gray-700">Habilidade</h2>
                      <ul className="flex flex-col space-y-5">
                          <li>
                              <div className="flex justify-between">
                                  <p className="mb-2">HTML</p>
                                  <span>100%</span>
                              </div>
                              <div
                                  className="w-full flex items-center border  border-[#FFB400]  rounded-full h-1 dark:bg-gray-700">
                                  <div className="bg-[#FFB400] h-1 rounded-full w-full"></div>
                              </div>
                          </li>
                          <li>
                              <div className="flex justify-between">
                                  <p className="mb-2">CSS</p>
                                  <span>100%</span>
                              </div>
                              <div
                                  className="w-full flex items-center border  border-[#FFB400]  rounded-full h-1 dark:bg-gray-700">
                                  <div className="bg-[#FFB400] h-1 rounded-full w-full"></div>
                              </div>
                          </li>
                          <li>
                              <div className="flex justify-between">
                                  <p className="mb-2">JavaScript</p>
                                  <span>100%</span>
                              </div>
                              <div
                                  className="w-full flex items-center border  border-[#FFB400]  rounded-full h-1 dark:bg-gray-700">
                                  <div className="bg-[#FFB400] h-1 rounded-full w-full"></div>
                              </div>
                          </li>
                          <li>
                              <div className="flex justify-between">
                                  <p className="mb-2">Python</p>
                                  <span>100%</span>
                              </div>
                              <div
                                  className="w-full flex items-center border  border-[#FFB400]  rounded-full h-1 dark:bg-gray-700">
                                  <div className="bg-[#FFB400] h-1 rounded-full w-full"></div>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <hr/>
                  <div>
                      <h2 className="mb-4 font-semibold text-gray-700">Habilidades Extras</h2>
                      <ul className="flex flex-col space-y-2">
                          <li className="flex items-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                              </svg>
                              Puppeteer
                          </li>
                          <li className="flex items-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                              </svg>
                              Scrapy
                          </li>
                          <li className="flex items-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                              </svg>
                              Tailwind CSS
                          </li>
                          <li className="flex items-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                              </svg>
                              MySql
                          </li>
                          <li className="flex items-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                              </svg>
                              React JS
                          </li>
                          <li className="flex items-center">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                              </svg>
                              GIT
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      );
};