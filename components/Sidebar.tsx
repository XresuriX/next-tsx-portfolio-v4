const Sidebar = () => {
  return (
    <div className="align-center">
      <img
        className="img rounded"
        src="https://media.licdn.com/dms/image/D5635AQE7A5FQx5ix7w/profile-framedphoto-shrink_100_100/0/1650390889345?e=1672948800&v=beta&t=1AnznRrnIhb6h1hKwuVjRgFekYnlURwseUAOKW8hyCc"
        alt="leslie"
      />
      <h3>
        {" "}
        <span>Leslie</span> Taffe{" "}
      </h3>
      <p> Fullstack Web Developer </p>
      <p> Download Resume </p>
      {/* //social icons this can be linked to the back end in the future*/}

      {/* address */}
      <div>
        <div>
          <span> Kingston, Jamaica</span>
        </div>
        <p> taffe.leslie@gmail.com </p>
        <p> 1-(876)3321880</p>
      </div>
      {/* email button */}
      <button>Email me</button>
      <button>Toggle theme</button>
    </div>
  );
};

export default Sidebar;
