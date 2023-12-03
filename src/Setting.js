/* eslint-disable jsx-a11y/anchor-is-valid */
const Setting = () => {
  return (
    <main>
      <h1>settings</h1>
      <div className="wrapper grid grid-cols-dash gap-5">
        <div className="site-control bg-white rounded-md p-2.5">
          <h2 className="text-3xl my-3">Site Control</h2>
          <p className="text-shades">Control The Website If There Is Maintenance</p>
          <div className="flex items-center justify-between">
            <section>
              <h3 className="my-3 text-lg">Website Control</h3>
              <p>Open/Close Website And Type The Reason</p>
            </section>
            <div className="toggle-btn">
              <label htmlFor="toggle">
                <input type="checkbox" id="toggle" />
                <span className="checked"></span>
              </label>
            </div>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="close message content"
          ></textarea>
        </div>
        <div className="general-info bg-white rounded-md p-2.5">
          <h2 className="text-3xl my-3">General Info</h2>
          <p className="text-shades">General Information About Your Account</p>
          <div>
            <label className="text-lg" htmlFor="firstn">
              First Name
            </label>
            <input type="text" placeholder="first name" id="firstn" />
          </div>
          <div>
            <label className="text-lg" htmlFor="lastn">
              last Name
            </label>
            <input type="text" placeholder="last name" id="lastn" />
          </div>
          <div>
            <label className="text-lg" htmlFor="email">
              Email
            </label>
            <div className="flex items-center justify-between">
              <input type="email" placeholder="o@mn.sa" id="email" disabled />
              <a href="#">change</a>
            </div>
          </div>
        </div>
        <div className="security-info bg-white rounded-md p-2.5">
          <h2 className="text-3xl my-3">Security Info</h2>
          <p className="text-shades">Security Information About Your Account</p>
          <div className="flex items-center justify-between">
            <div>
              <h3 className=" py-2 text-lg">Password</h3>
              <p className=" py-2"> Last Change On 25/10/2021</p>
            </div>
            <a href="#" className="bg-blueColor  rounded-lg text-white">
              change
            </a>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className=" py-2 text-lg">Two-Factor Authentication</h3>
              <p className=" py-2">Enable/Disable The Feature</p>
            </div>
            <div className="toggle-btn">
              <label htmlFor="toggle-2">
                <input type="checkbox" name="" id="toggle-2" />
                <span className="checked"></span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="py-2 text-lg">Devices</h3>
              <p className="py-2 ">Check The Login Devices List</p>
            </div>
            <a href="#" className="rounded-lg devices">
              devices
            </a>
          </div>
        </div>
        <div className="social-info bg-white rounded-md p-2.5">
          <h2 className="text-3xl my-3">Social Info</h2>
          <p className="text-shades">Social Media Information</p>
          <div className="flex">
            <i className="fa-brands fa-twitter flex"></i>
            <input type="text" placeholder="Twitter Username" />
          </div>
          <div className="flex">
            <i className="fa-brands fa-facebook-f flex"></i>
            <input type="text" placeholder="Facebook Username" />
          </div>
          <div className="flex">
            <i className="fa-brands fa-linkedin-in flex"></i>
            <input type="text" placeholder="Linkedin Username" />
          </div>
          <div className="flex">
            <i className="fa-brands fa-youtube flex"></i>
            <input type="text" placeholder="Youtube Username" />
          </div>
        </div>
        <div className="widgets bg-white rounded-md p-2.5">
          <h2 className="text-3xl my-3">Widgets Control</h2>
          <p className="text-shades">Show/Hide Widgets</p>
          <div className="custom-check">
            <input type="checkbox" name="widgets" id="widget-1" />
            <label htmlFor="widget-1"> Quick Draft </label>
          </div>
          <div className="custom-check">
            <input type="checkbox" name="widgets" id="widget-2" />
            <label htmlFor="widget-2"> Yearly Targets </label>
          </div>
          <div className="custom-check">
            <input type="checkbox" name="widgets" id="widget-3" />
            <label htmlFor="widget-3"> Tickets Statistics </label>
          </div>
          <div className="custom-check">
            <input type="checkbox" name="widgets" id="widget-4" />
            <label htmlFor="widget-4"> Latest News </label>
          </div>
          <div className="custom-check">
            <input type="checkbox" name="widgets" id="widget-5" />
            <label htmlFor="widget-5"> Latest Tasks </label>
          </div>
          <div className="custom-check">
            <input type="checkbox" name="widgets" id="widget-6" />
            <label htmlFor="widget-6"> Top Search Items </label>
          </div>
        </div>
        <div className="backup bg-white rounded-md p-2.5">
          <h2 className="text-3xl my-3">Backup Manager</h2>
          <p className="text-shades">Control Backup Time And Location</p>
          <div>
            <div className="circle-rad">
              <input type="radio" name="backup-time" id="daily" />
              <label htmlFor="daily">
                <p>
                  <span></span>
                </p>
                daily
              </label>
            </div>
            <div className="circle-rad">
              <input type="radio" name="backup-time" id="weekly" />
              <label htmlFor="weekly">
                <p>
                  <span></span>
                </p>
                weekly
              </label>
            </div>
            <div className="circle-rad">
              <input type="radio" name="backup-time" id="monthly" />
              <label htmlFor="monthly">
                <p>
                  <span></span>
                </p>
                monthly
              </label>
            </div>
          </div>
          <div className="flex around">
            <div className="square-rad">
              <input type="radio" id="mega" name="size" />
              <label htmlFor="mega" className="flex">
                <i className="fa-solid fa-server"></i>megaman
              </label>
            </div>
            <div className="square-rad">
              <input type="radio" id="zero" name="size" />
              <label htmlFor="zero" className="flex">
                <i className="fa-solid fa-server"></i>zero
              </label>
            </div>
            <div className="square-rad">
              <input type="radio" id="sigma" name="size" />
              <label htmlFor="sigma" className="flex">
                <i className="fa-solid fa-server"></i>sigma
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Setting;
