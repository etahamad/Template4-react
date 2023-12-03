/* eslint-disable jsx-a11y/anchor-is-valid */
import welcome from "../imgs/welcome.png";
const Dashboard = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="wrapper  gap-5 grid  grid-cols-dash relative">
        <div className="welcome rounded-md bg-white">
          <div className="head bg-hoverColor justify-between p-4 flex">
            <div className=" text-3xl  p-4 capitalize">
              welcome
              <span className="block mt-2.5 text-lg  text-shades">elzero</span>
            </div>
            <img className="hidden md:block w-52 " src={welcome} alt="" />
          </div>
          <img
            src="imgs/avatar.png "
            alt=""
            className="  rounded-full w-12 border-2 border-white p-0.5 shadow-md mt-[-25px] ml-8"
          />

          <div className="text flex p-2.5 text-center relative border-t border-t-hoverColor border-b border-b-hoverColor my-10 py-2.5 text-sm">
            <div className=" grow">
              <h4 className=" my-2.5">sasa mohamed</h4>
              <span className=" text-shades">developer</span>
            </div>
            <div className=" grow">
              <h4 className=" my-2.5">80</h4>
              <span className=" text-shades">projects</span>
            </div>
            <div className=" grow">
              <h4 className=" my-2.5">$8500</h4>
              <span className=" text-shades">earned</span>
            </div>
          </div>
          <a
            href="profile.html"
            className=" capitalize ml-auto mt-[-30px] mr-2 rounded-md text-white bg-blueColor px-2.5 py-1 block w-fit pr-2.5 hover:bg-bluehover"
          >
            profile
          </a>
        </div>
        <div className="draft p-2.5 rounded-md bg-white">
          <h2 className="text-3xl my-5">Quick Draft</h2>
          <p className="text-shades -mt-2.5 text-sm">
            Write A Draft htmlFor Your Ideas
          </p>
          <form className="flex flex-col gap-2.5">
            <input type="text" placeholder="title" className="rounded-md" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="your thought"
              className="rounded-md "
            ></textarea>
            <input
              type="submit"
              value="save"
              className="rounded-md text-white !bg-blueColor  cursor-pointer hover:!bg-bluehover "
            />
          </form>
        </div>
        <div className="target rounded-md bg-white p-2.5">
          <h2>yearly target</h2>
          <p>Targets Of The Year</p>
          <div className=" flex items-center gap-2.5 mt-4">
            <div className="!bg-[#cce3ff] !text-blueColor">
              <i className="fa-solid fa-dollar-sign"></i>
            </div>
            <div>
              <span>Money</span>
              <span>$20.000</span>
              <div className="!bg-[#cce3ff]">
                <span className=" !bg-blueColor w-4/5"></span>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-2.5 mt-4">
            <div className=" !bg-[#fdecce] !text-[#f59e0b]">
              <i className="fa-solid fa-code"></i>
            </div>
            <div>
              <span>Projects</span>
              <span>24</span>
              <div className="!bg-[#fdecce]">
                <span className="before:!bg-[#f59e0b] after:!border-t-[#f59e0b] !bg-[#f59e0b] w-[55%]"></span>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-2.5 mt-4">
            <div className="!bg-[#d3f3df] !text-[#22c55e]">
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <span>Team</span>
              <span>12</span>
              <div className="!bg-[#d3f3df]">
                <span className="!bg-greenColor w-3/4 before:!bg-greenColor after:!border-t-greenColor"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="stats rounded-md bg-white p-2.5">
          <h2>Tickets Statistics</h2>
          <p>Everything About Support Tickets</p>
          <div className="container">
            <div className="ticket">
              <i className=" text-[#f59e0b] fa-regular fa-rectangle-list"></i>
              <span>2500</span>
              <span>total</span>
            </div>
            <div className="ticket">
              <i className=" text-blueColor fa-solid fa-spinner"></i>
              <span>500</span>
              <span>pending</span>
            </div>
            <div className="ticket">
              <i className="text-[#22c246] fa-regular fa-circle-check"></i>
              <span>1900</span>
              <span>closed</span>
            </div>
            <div className="ticket">
              <i className=" text-[#f45021] fa-regular fa-rectangle-xmark"></i>
              <span>100</span>
              <span>deleted</span>
            </div>
          </div>
        </div>
        <div className="news rounded-md bg-white p-2.5">
          <h2>latest news</h2>
          <div>
            <img src="imgs/news-01.png" alt="" />
            <div>
              <h3>Created SASS Section</h3>
              <p>New SASS Examples & Tutorials</p>
            </div>
            <div>3 days ago</div>
          </div>
          <div>
            <img src="imgs/news-02.png" alt="" />
            <div>
              <h3>Changed The Design</h3>
              <p>A Brand New Website Design</p>
            </div>
            <div>5 Days Ago</div>
          </div>
          <div>
            <img src="imgs/news-03.png" alt="" />
            <div>
              <h3>Team Increased</h3>
              <p>3 Developers Joined The Team</p>
            </div>
            <div>7 days ago</div>
          </div>
          <div>
            <img src="imgs/news-04.png" alt="" />
            <div>
              <h3>Added Payment Gateway</h3>
              <p>Many New Payment Gateways Added</p>
            </div>
            <div>9 days ago</div>
          </div>
        </div>
        <div className="tasks rounded-md bg-white p-2.5">
          <h2 className=" !text-xl">Latest Tasks</h2>
          <div className="task">
            <div>
              <h3>Record One New Video</h3>
              <p>Record Python Create Exe Project</p>
            </div>
            <i className="fa-regular fa-trash-can active"></i>
          </div>
          <div className="task">
            <div>
              <h3>Write Article</h3>
              <p>Write Low Level vs High Level Languages</p>
            </div>
            <i className="fa-regular fa-trash-can active"></i>
          </div>
          <div className="task">
            <div>
              <h3>Finish Project</h3>
              <p>Publish Academy Programming Project</p>
            </div>
            <i className="fa-regular fa-trash-can active"></i>
          </div>
          <div className="task opacity-50">
            <div>
              <h3>
                <del>Attend The Meeting</del>
              </h3>
              <p>
                <del>Attend The Project Business Analysis Meeting</del>
              </p>
            </div>
            <i className="fa-regular fa-trash-can"></i>
          </div>
          <div className="task">
            <div>
              <h3>Finish Lesson</h3>
              <p>Finish Teaching Flex Box</p>
            </div>
            <i className="fa-regular fa-trash-can active"></i>
          </div>
        </div>
        <div className="top-search rounded-md bg-white p-2.5">
          <h2>Top Search Items</h2>
          <div className="justify-between flex">
            <p>Keyword</p>
            <p>search count</p>
          </div>
          <div className="item justify-between flex">
            <span>Programming</span>
            <span>220</span>
          </div>
          <div className="item justify-between flex">
            <span>JavaScript</span>
            <span>180</span>
          </div>
          <div className="item justify-between flex">
            <span>PHP</span>
            <span>160</span>
          </div>
          <div className="item justify-between flex">
            <span>Code</span>
            <span>145</span>
          </div>
          <div className="item justify-between flex">
            <span>Design</span>
            <span>110</span>
          </div>
          <div className="item justify-between flex">
            <span>Logic</span>
            <span>95</span>
          </div>
        </div>
        <div className="upload rounded-md bg-white p-2.5">
          <h2>Latest Uploads</h2>
          <div className="item justify-between flex">
            <div>
              <img src="imgs/pdf.svg" alt="" />
              <div>
                <h3>my-file.pdf</h3>
                <span>Elzero</span>
              </div>
            </div>
            <div>2.9mb</div>
          </div>
          <div className="item justify-between flex">
            <div>
              <img src="imgs/avi.svg" alt="" />
              <div>
                <h3>My-Video-File.avi</h3>
                <span>admin</span>
              </div>
            </div>
            <div>4.9mb</div>
          </div>
          <div className="item justify-between flex">
            <div>
              <img src="imgs/psd.svg" alt="" />
              <div>
                <h3>My-Psd-File.pdf</h3>
                <span>Osama</span>
              </div>
            </div>
            <div>4.5mb</div>
          </div>
          <div className="item justify-between flex">
            <div>
              <img src="imgs/zip.svg" alt="" />
              <div>
                <h3>My-Zip-File.pdf</h3>
                <span>User</span>
              </div>
            </div>
            <div>8.9mb</div>
          </div>
          <div className="item justify-between flex">
            <div>
              <img src="imgs/dll.svg" alt="" />
              <div>
                <h3>My-DLL-File.pdf</h3>
                <span>admin</span>
              </div>
            </div>
            <div>4.9mb</div>
          </div>
          <div className="item justify-between flex">
            <div>
              <img src="imgs/eps.svg" alt="" />
              <div>
                <h3>My-Eps-File.pdf</h3>
                <span>Designer</span>
              </div>
            </div>
            <div>8.9mb</div>
          </div>
        </div>
        <div className="latest-projects rounded-md bg-white p-2.5">
          <h2>Last Project Progress</h2>
          <ul>
            <li>Got The Project</li>
            <li>Started The Project</li>
            <li>The Project About To Finish</li>
            <li>Test The Project</li>
            <li>Finish The Project & Get Money</li>
          </ul>
          <img className="hidden md:block" src="imgs/project.png" alt="" />
        </div>
        <div className="remainders rounded-md bg-white p-2.5">
          <h2>Reminders</h2>
          <div>
            <h3>Check My Tasks List</h3>
            <p>28/09/2022 - 12:00am</p>
          </div>
          <div
            className=" before:!bg-greenColor after:!bg-greenColor
          "
          >
            <h3>Check My Projects</h3>
            <p>26/10/2022 - 12:00am</p>
          </div>
          <div
            className=" before:!bg-orangeColor after:!bg-orangeColor
          "
          >
            <h3>Call All My Clients</h3>
            <p>05/11/2022 - 12:00am</p>
          </div>
          <div
            className=" before:!bg-redColor after:!bg-redColor
          "
          >
            <h3>Finish The Development Workshop</h3>
            <p>20/12/2022 - 12:00am</p>
          </div>
        </div>
        <div className="latest-post rounded-md bg-white p-2.5">
          <h2>Latest Post</h2>
          <div className="flex text-shades items-center">
            <img className=" w-16 mr-1" src="imgs/avatar.png" alt="" />
            <div className="gap-2.5">
              <h3>Osama Elzero</h3>
              <p className="mt-1 text-xs">About 3 Hours Ago</p>
            </div>
          </div>
          <div className="quoto py-10 pt-5 border-t border-t-hoverColor border-b border-b-hoverColor my-4 leading-[1.7]">
            You Can Fool All Of The People Some Of The Time, And Some Of The People All
            Of The Time, But You Can't Fool All Of The People All Of The Time.
          </div>
          <div className="text-shades justify-between flex">
            <span>
              <i className="mr-1 fa-regular fa-heart"></i>1.8K
            </span>
            <span>
              <i className="mr-1 fa-regular fa-comments"></i>500
            </span>
          </div>
        </div>
        <div className="media-stats rounded-md bg-white p-2.5">
          <h2>Social Media Stats</h2>
          <div className="twitter bg-[#d2ecfc] flex justify-between">
            <div>
              <i className="bg-[#1da1f2] fa-brands fa-twitter"></i>
              <p className="text-[#1da1f2]">90K Followers</p>
            </div>
            <a className="bg-[#1da1f2]" href="#">
              Follow
            </a>
          </div>
          <div className="facebook bg-[#d1e4fc] flex justify-between">
            <div>
              <i className="bg-[#1877f2] fa-brands fa-facebook-f"></i>
              <p className="text-[#1877f2]">2M Like</p>
            </div>
            <a className="bg-[#1877f2]" href="#">
              Like
            </a>
          </div>
          <div className="youtube bg-[#ffcccc] flex justify-between">
            <div>
              <i className="bg-[#ff0000] fa-brands fa-youtube"></i>
              <p className="text-[#ff0000]">1M Subs</p>
            </div>
            <a className="bg-[#ff0000]" href="#">
              Subscribe
            </a>
          </div>
          <div className="bg-[#cce4f0] linkedin flex justify-between">
            <div>
              <i className="bg-[#0077b5] fa-brands fa-linkedin"></i>
              <p className="text-[#0077b5]">70K Followers</p>
            </div>
            <a className="bg-[#0077b5]" href="#">
              Follow
            </a>
          </div>
        </div>
      </div>
      <div className="projects-table rounded-md bg-white p-2.5">
        <h2 className=" py-5 text-4xl">Projects</h2>
        <div>
          <table className="fs-15 w-full">
            <thead>
              <tr>
                <td>Name</td>
                <td>Finish Date</td>
                <td>Client</td>
                <td>Price</td>
                <td>Team</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ministry Wikipedia</td>
                <td>10 May 2022</td>
                <td>Ministry</td>
                <td>$5300</td>
                <td>
                  <img src="imgs/team-01.png" alt="" />
                  <img src="imgs/team-02.png" alt="" />
                  <img src="imgs/team-03.png" alt="" />
                  <img src="imgs/team-05.png" alt="" />
                </td>
                <td>
                  <span className="label rounded-md px-3 py-2 bg-orange-500 text-white">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td>Elzero Shop</td>
                <td>12 Oct 2021</td>
                <td>Elzero Company</td>
                <td>$1500</td>
                <td>
                  <img src="imgs/team-01.png" alt="" />
                  <img src="imgs/team-02.png" alt="" />
                  <img src="imgs/team-05.png" alt="" />
                </td>
                <td>
                  <span className="label rounded-md px-3 py-2 bg-blueColor text-white">
                    In Progress
                  </span>
                </td>
              </tr>
              <tr>
                <td>Bouba App</td>
                <td>05 Sep 2021</td>
                <td>Bouba</td>
                <td>$800</td>
                <td>
                  <img src="imgs/team-02.png" alt="" />
                  <img src="imgs/team-03.png" alt="" />
                </td>
                <td>
                  <span className="label rounded-md px-3 py-2 bg-greenColor text-white">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td>Mahmoud Website</td>
                <td>22 May 2021</td>
                <td>Mahmoud</td>
                <td>$600</td>
                <td>
                  <img src="imgs/team-01.png" alt="" />
                  <img src="imgs/team-02.png" alt="" />
                </td>
                <td>
                  <span className="label rounded-md px-3 py-2 bg-greenColor text-white">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td>Sayed Website</td>
                <td>24 May 2021</td>
                <td>Sayed</td>
                <td>$300</td>
                <td>
                  <img src="imgs/team-01.png" alt="" />
                  <img src="imgs/team-03.png" alt="" />
                </td>
                <td>
                  <span className="label rounded-md px-3 py-2 bg-redColor text-white">
                    Rejected
                  </span>
                </td>
              </tr>
              <tr>
                <td>Arena Application</td>
                <td>01 Mar 2021</td>
                <td>Arena Company</td>
                <td>$2600</td>
                <td>
                  <img src="imgs/team-01.png" alt="" />
                  <img src="imgs/team-02.png" alt="" />
                  <img src="imgs/team-03.png" alt="" />
                  <img src="imgs/team-04.png" alt="" />
                </td>
                <td>
                  <span className="label rounded-md px-3 py-2 bg-greenColor text-white">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
