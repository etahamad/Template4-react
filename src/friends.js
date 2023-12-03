/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
const Friends = () => {
  return (
    <main className="friends-main pb-5">
      <h1>friends</h1>
      <div className="wrapper grid grid-cols-course gap-5">
        <div className="bg-white rounded-md p-2.5">
          <div className="contact flex items-center">
            <i className=" flex items-center fa-solid fa-phone"></i>
            <i className=" flex items-center fa-regular fa-envelope"></i>
          </div>
          <div className="info  flex items-center">
            <img src="imgs/friend-01.jpg" alt="" className="w-[100px] rounded-full" />
            <h4>Ahmed Nasser</h4>
            <p>JavaScript Developer</p>
          </div>
          <div className="flex items-center  more-info">
            <div>
              <span>
                <i className="fa-regular fa-face-smile"></i> 99 friends
              </span>
              <span>
                <i className="fa-solid fa-code-commit"></i> 15 projects
              </span>
              <span>
                <i className=" fa-solid fa-newspaper"></i> 25 articles
              </span>
            </div>
            <div className="vip">vip</div>
          </div>
          <div className="control flex items-center justify-between">
            <p>Joined 02/10/2021</p>
            <div className="flex items-center">
              <Link
                to={"/profile"}
                className="px-4 py-1 rounded-md bg-blueColor text-white"
              >
                profile
              </Link>
              <Link href="#" className="px-4 py-1 rounded-md bg-redColor text-white">
                remove
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-2.5">
          <div className="contact flex items-center">
            <i className="fa-solid fa-phone rounded-full"></i>
            <i className="fa-regular fa-envelope rounded-full"></i>
          </div>
          <div className="info flex items-center">
            <img src="imgs/friend-02.jpg" alt="" className="w-[100px] rounded-full" />
            <h4>Omar Fathy</h4>
            <p>Cloud Developer</p>
          </div>
          <div className="flex items-center more-info">
            <div className="">
              <span>
                <i className="fa-regular fa-face-smile"></i> 30 friends
              </span>
              <span>
                <i className="fa-solid fa-code-commit"></i> 11 projects
              </span>
              <span>
                <i className="fa-solid fa-newspaper"></i> 12 articles
              </span>
            </div>
          </div>
          <div className="control flex items-center justify-between">
            <p>Joined 02/08/2020</p>
            <div className="flex items-center">
              <Link
                to={"/profile"}
                className="px-4 py-1 rounded-md bg-blueColor text-white"
              >
                profile
              </Link>
              <Link href="#" className="px-4 py-1 rounded-md bg-redColor text-white">
                remove
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-2.5">
          <div className="contact flex items-center">
            <i className="fa-solid fa-phone rounded-full"></i>
            <i className="fa-regular fa-envelope rounded-full"></i>
          </div>
          <div className="info flex items-center">
            <img src="imgs/friend-04.jpg" alt="" className="w-[100px] rounded-full" />
            <h4>Omar Ahmed</h4>
            <p>Mobile Developer</p>
          </div>
          <div className="flex items-center more-info">
            <div>
              <span>
                <i className="fa-regular fa-face-smile"></i> 80 friends
              </span>
              <span>
                <i className="fa-solid fa-code-commit"></i> 20 projects
              </span>
              <span>
                <i className="fa-solid fa-newspaper"></i> 18 articles
              </span>
            </div>
          </div>
          <div className="control flex items-center justify-between">
            <p>Joined 02/06/2020</p>
            <div className="flex items-center">
              <Link
                to={"/profile"}
                className="px-4 py-1 rounded-md bg-blueColor text-white"
              >
                profile
              </Link>
              <Link href="#" className="px-4 py-1 rounded-md bg-redColor text-white">
                remove
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-2.5">
          <div className="contact flex items-center">
            <i className="fa-solid fa-phone rounded-full"></i>
            <i className="fa-regular fa-envelope rounded-full"></i>
          </div>
          <div className="info flex items-center">
            <img src="imgs/friend-02.jpg" alt="" className="w-[100px] rounded-full" />
            <h4>Shady Nabil</h4>
            <p>Back-End Developer</p>
          </div>
          <div className="flex items-center more-info">
            <div className="">
              <span>
                <i className="fa-regular fa-face-smile"></i> 70 friends
              </span>
              <span>
                <i className="fa-solid fa-code-commit"></i> 30 projects
              </span>
              <span>
                <i className="fa-solid fa-newspaper"></i> 18 articles
              </span>
            </div>
          </div>
          <div className="control flex items-center justify-between">
            <p>Joined 28/06/2020</p>
            <div className="flex items-center">
              <Link
                to={"/profile"}
                className="px-4 py-1 rounded-md bg-blueColor text-white"
              >
                profile
              </Link>
              <Link href="#" className="px-4 py-1 rounded-md bg-redColor text-white">
                remove
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-2.5">
          <div className="contact flex items-center">
            <i className="fa-solid fa-phone rounded-full"></i>
            <i className="fa-regular fa-envelope rounded-full"></i>
          </div>
          <div className="info flex items-center">
            <img src="imgs/friend-03.jpg" alt="" className="w-[100px] rounded-full" />
            <h4>Mohamed Ibrahim</h4>
            <p>Algorithm Developer</p>
          </div>
          <div className="flex items-center more-info">
            <div className="">
              <span>
                <i className="fa-regular fa-face-smile"></i> 80 friends
              </span>
              <span>
                <i className="fa-solid fa-code-commit"></i> 30 projects
              </span>
              <span>
                <i className="fa-solid fa-newspaper"></i> 18 articles
              </span>
            </div>
            <div className="vip">vip</div>
          </div>
          <div className="control flex items-center justify-between">
            <p>Joined 28/08/2020</p>
            <div className="flex items-center">
              <Link
                to={"/profile"}
                className="px-4 py-1 rounded-md bg-blueColor text-white"
              >
                profile
              </Link>
              <Link href="#" className="px-4 py-1 rounded-md bg-redColor text-white">
                remove
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-2.5">
          <div className="contact flex items-center">
            <i className="fa-solid fa-phone rounded-full"></i>
            <i className="fa-regular fa-envelope rounded-full"></i>
          </div>
          <div className="info flex items-center">
            <img src="imgs/friend-05.jpg" alt="" className="w-[100px] rounded-full" />
            <h4>Amr Hendawy</h4>
            <p>Back-End Developer</p>
          </div>
          <div className="flex items-center more-info">
            <div className="">
              <span>
                <i className="fa-regular fa-face-smile"></i> 70 friends
              </span>
              <span>
                <i className="fa-solid fa-code-commit"></i> 30 projects
              </span>
              <span>
                <i className="fa-solid fa-newspaper"></i> 18 articles
              </span>
            </div>
          </div>
          <div className="control flex items-center justify-between">
            <p>Joined 28/06/2020</p>
            <div className="flex items-center">
              <Link
                to={"/profile"}
                className="px-4 py-1 rounded-md bg-blueColor text-white"
              >
                profile
              </Link>
              <Link href="#" className="px-4 py-1 rounded-md bg-redColor text-white">
                remove
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-2.5">
          <div className="contact flex items-center">
            <i className="fa-solid fa-phone rounded-full"></i>
            <i className="fa-regular fa-envelope rounded-full"></i>
          </div>
          <div className="info flex items-center">
            <img src="imgs/friend-04.jpg" alt="" className="w-[100px] rounded-full" />
            <h4>Mahmoud Adel</h4>
            <p>Cloud Developer</p>
          </div>
          <div className="flex items-center more-info">
            <div className="">
              <span>
                <i className="fa-regular fa-face-smile"></i> 30 friends
              </span>
              <span>
                <i className="fa-solid fa-code-commit"></i> 11 projects
              </span>
              <span>
                <i className="fa-solid fa-newspaper"></i> 12 articles
              </span>
            </div>
          </div>
          <div className="control flex items-center justify-between">
            <p>Joined 02/08/2020</p>
            <div className="flex items-center">
              <Link
                to={"/profile"}
                className="px-4 py-1 rounded-md bg-blueColor text-white"
              >
                profile
              </Link>
              <Link href="#" className="px-4 py-1 rounded-md bg-redColor text-white">
                remove
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-2.5">
          <div className="contact flex items-center">
            <i className="fa-solid fa-phone rounded-full"></i>
            <i className="fa-regular fa-envelope rounded-full"></i>
          </div>
          <div className="info flex items-center">
            <img src="imgs/friend-03.jpg" alt="" className="w-[100px] rounded-full" />
            <h4>Ahmed Abuzaid</h4>
            <p>Content Creator</p>
          </div>
          <div className="flex items-center more-info">
            <div className="">
              <span>
                <i className="fa-regular fa-face-smile"></i> 80 friends
              </span>
              <span>
                <i className="fa-solid fa-code-commit"></i> 30 projects
              </span>
              <span>
                <i className="fa-solid fa-newspaper"></i> 18 articles
              </span>
            </div>
            <div className="vip">vip</div>
          </div>
          <div className="control flex items-center justify-between">
            <p>Joined 28/08/2020</p>
            <div className="flex items-center">
              <Link
                to={"/profile"}
                className="px-4 py-1 rounded-md bg-blueColor text-white"
              >
                profile
              </Link>
              <Link href="#" className="px-4 py-1 rounded-md bg-redColor text-white">
                remove
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-2.5">
          <div className="contact flex items-center">
            <i className="fa-solid fa-phone rounded-full"></i>
            <i className="fa-regular fa-envelope rounded-full"></i>
          </div>
          <div className="info flex items-center">
            <img src="imgs/friend-01.jpg" alt="" className="w-[100px] rounded-full" />
            <h4>Gareeb Elshiekh</h4>
            <p>JavaScript Developer</p>
          </div>
          <div className="flex items-center more-info">
            <div className="">
              <span>
                <i className="fa-regular fa-face-smile"></i> 90 friends
              </span>
              <span>
                <i className="fa-solid fa-code-commit"></i> 15 projects
              </span>
              <span>
                <i className="fa-solid fa-newspaper"></i> 25 articles
              </span>
            </div>
            <div className="vip">vip</div>
          </div>
          <div className="control flex items-center justify-between">
            <p>Joined 02/10/2020</p>
            <div className="flex items-center">
              <Link
                to={"/profile"}
                className="px-4 py-1 rounded-md bg-blueColor text-white"
              >
                profile
              </Link>
              <Link href="#" className="px-4 py-1 rounded-md bg-redColor text-white">
                remove
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md p-2.5">
          <div className="contact flex items-center">
            <i className="fa-solid fa-phone rounded-full"></i>
            <i className="fa-regular fa-envelope rounded-full"></i>
          </div>
          <div className="info flex items-center">
            <img src="imgs/friend-05.jpg" alt="" className="w-[100px] rounded-full" />
            <h4>Hamza</h4>
            <p>Front-End Developer</p>
          </div>
          <div className="flex items-center more-info">
            <div className="">
              <span>
                <i className="fa-regular fa-face-smile"></i> 80 friends
              </span>
              <span>
                <i className="fa-solid fa-code-commit"></i> 20 projects
              </span>
              <span>
                <i className="fa-solid fa-newspaper"></i> 18 articles
              </span>
            </div>
          </div>
          <div className="control flex items-center justify-between">
            <p>Joined 02/06/2020</p>
            <div className="flex items-center">
              <Link
                to={"/profile"}
                className="px-4 py-1 rounded-md bg-blueColor text-white"
              >
                profile
              </Link>
              <Link href="#" className="px-4 py-1 rounded-md bg-redColor text-white">
                remove
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Friends;
