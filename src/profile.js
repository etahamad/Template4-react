const Profile = () => {
  return (
    <main>
      <h1>Profile</h1>
      <div className="info flex flex-col md:flex-row items-center bg-white rounded-md">
        <div>
          <img className="m-auto" src="imgs/avatar.png" alt="" />
          <h2>mostafa hassan</h2>
          <span className="level">level 20</span>
          <div className="rounded-md">
            <p className="progress h-full bg-blueColor rounded-md"></p>
          </div>
          <p className="icons">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </p>
          <span className="rating">550 rating</span>
        </div>

        <div>
          <section className="flex items-center">
            <h3>General Information</h3>

            <div>
              <span>full name:</span>
              <p>mostafa mohamed</p>
            </div>
            <div>
              <span>gender:</span>
              <p>male</p>
            </div>
            <div>
              <span>country:</span>
              <p>egypt</p>
            </div>
            <div className="toggle-btn">
              <label htmlFor="toggle-3">
                <input type="checkbox" id="toggle-3" />
                <span className="checked"></span>
              </label>
            </div>
          </section>
          <section className="flex items-center">
            <h3>Personal Information</h3>

            <div>
              <span>Email:</span>
              <p>jodat.ahmed135@gmail.com</p>
            </div>
            <div>
              <span>Phone:</span>
              <p>01014863835</p>
            </div>
            <div>
              <span>Date Of Birth:</span>
              <p>11/9/2002</p>
            </div>
            <div className="toggle-btn">
              <label htmlFor="toggle-4">
                <input type="checkbox" id="toggle-4" />
                <span className="checked"></span>
              </label>
            </div>
          </section>
          <section className="flex items-center">
            <h3>Job Information</h3>

            <div>
              <span>Title:</span>
              <p>Full Stack Developer</p>
            </div>
            <div>
              <span>Programming Language:</span>
              <p>Python</p>
            </div>
            <div>
              <span>Years Of Experience:</span>
              <p>15+</p>
            </div>
            <div className="toggle-btn">
              <label htmlFor="toggle-5">
                <input type="checkbox" id="toggle-5" />
                <span className="checked"></span>
              </label>
            </div>
          </section>
          <section className="flex items-center">
            <h3>Billing Information</h3>

            <div>
              <span>Payment Method: </span>
              <p>Paypal</p>
            </div>
            <div>
              <span>Email:</span>
              <p>jodat.ahmed135@gmail.com</p>
            </div>
            <div>
              <span>Subscription: </span>
              <p>Monthly</p>
            </div>
            <div className="toggle-btn">
              <label htmlFor="toggle-6">
                <input type="checkbox" id="toggle-6" />
                <span className="checked"></span>
              </label>
            </div>
          </section>
        </div>
      </div>
      <div className="other-info gap-5 flex items-center">
        <div className="skills grow mt-5 px-5 bg-white rounded-md">
          <h2>My Skills</h2>
          <p className="mt-1 text-sm text-shades">Complete Skills List</p>
          <div>
            <span>HTML</span>
            <span>Pugjs</span>
            <span>HAML</span>
          </div>
          <div>
            <span>CSS</span>
            <span>SASS</span>
            <span>Stylus</span>
          </div>
          <div>
            <span>JavaScript</span>
            <span>TypeScript</span>
          </div>
          <div>
            <span>Vuejs</span>
            <span>Reactjs</span>
          </div>
          <div>
            <span>Jest</span>
            <span>Jasmine</span>
          </div>
          <div>
            <span>PHP</span>
            <span>Laravel</span>
          </div>
          <div>
            <span>Python</span>
            <span>Django</span>
          </div>
        </div>
        <div className="activities grow-[2] mt-5 p-5 bg-white rounded-md">
          <h2>Latest Activities</h2>
          <p className="mt-1 text-sm text-shades">Latest Activities Done By The User</p>
          <section className="flex items-center ">
            <img src="imgs/activity-01.png" alt="" />
            <div>
              <span className="text-xl">store</span>
              <p>Bought The Mastering Python Course</p>
            </div>
            <div>
              <span>18:10</span>
              <p>Yesterday</p>
            </div>
          </section>
          <section className="flex items-center">
            <img src="imgs/activity-02.png" alt="" />
            <div>
              <span className="text-xl">Academy</span>
              <p>Got The PHP Certificate</p>
            </div>
            <div>
              <span>16:05</span>
              <p>Yesterday</p>
            </div>
          </section>
          <section className="flex items-center">
            <img src="imgs/activity-03.png" alt="" />
            <div>
              <span className="text-xl">Badges</span>
              <p>Unlocked The 10 Skills Badge</p>
            </div>
            <div>
              <span>18:05</span>
              <p>Yesterday</p>
            </div>
          </section>
          <section className="flex items-center">
            <img src="imgs/activity-01.png" alt="" />
            <div>
              <span className="text-xl">store</span>
              <p>Bought The Typescript Course</p>
            </div>
            <div>
              <span>12:05</span>
              <p>Yesterday</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Profile;
