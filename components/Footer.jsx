const Footer = () => {
  return (
    <div className="bg-blue-500 min-h-full text-white rounded-md w-full">
      <div className=" w-screen h-full py-20 g:flex lg:flex-row lg:w-full md:w-[60%] sm:w-[100%] sm:flex-wrap font-sans rounded-md">
        <h3>Developed by Emmanuel Wangila</h3>
        <h4>phone: 0798719417</h4>
        <h4>@2024 All Rights Reserved</h4>
      </div>
      <div className=" ml-2  p-2 lg:flex justify-evenly sm:mx-auto mx-3    ">
        <ul>Twitter</ul>
        <ul>LInkedIn</ul>
        <ul>emmanuelwangila1@gmail.com</ul>
        <ul>Github</ul>
      </div>
    </div>
  );
};

export default Footer;
