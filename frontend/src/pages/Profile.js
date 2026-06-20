import { useState } from "react";

function Profile() {

  const [name, setName] =
    useState("Jahnavi");

  const [email, setEmail] =
    useState("jahnavi1234@gmail.com");

  const updateProfile = () => {

    alert(
      "Profile Updated Successfully"
    );

  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h1>
        My Profile
      </h1>

      <input
        type="text"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <button
        onClick={updateProfile}
      >
        Update Profile
      </button>
    </div>
  );
}

export default Profile;