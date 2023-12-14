async function getData() {
  const dataId = document.getElementById("dataId").value;

  const token = localStorage.getItem("jwtToken");

  if (!token) {
    console.error("Token not available. Please login first.");
    return;
  }

  try {
    const response = await fetch(
      `https://localhost:7145/api/Cities/${dataId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response status:", response.status);

    if (response.ok) {
      const data = await response.json();
      console.log("Data received:", data);
    } else {
      const responseText = await response.text();
      console.error("Failed to get data. Server response:", responseText);
    }
  } catch (error) {
    console.error("An error occurred while getting data:", error);
  }
}

// async function login() {
//   debugger;
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   try {
//     const response = await fetch("https://localhost:7145/api/Auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     });

//     console.log("Response status:", response.status);

//     const contentType = response.headers.get("content-type");

//     if (contentType && contentType.includes("JSON")) {
//       const data = await response.json();
//       const token = data.token;
//       console.log("Login successful. Token:", token);
//       localStorage.setItem("jwtToken", token);
//     } else {
//       const responseText = await response.text();
//       console.error("Login failed. Server response:", responseText);
//     }
//   } catch (error) {
//     console.error("An error occurred during login:", error);
//   }
// }


// async function login() {
//     debugger;
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
  
//     try {
//       const response = await fetch("https://localhost:7145/api/Auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: username,
//           password: password,
//         }),
//       });
  
//       console.log("Response status:", response.status);
  
//       const contentType = response.headers.get("content-type");
  
//       if (contentType && contentType.includes("application/json")) {
//         const data = await response.json();
//         const token = data.token;
//         console.log("Login successful. Token:", token);
//         localStorage.setItem("jwtToken", token);
//       } else {
//         const responseText = await response.text();
//         console.error("Login failed. Server response:", responseText);
//       }
//     } catch (error) {
//       console.error("An error occurred during login:", error);
//     }
//   }
  
async function login() {
    debugger;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("https://localhost:7145/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      console.log("Response status:", response.status);
  
      if (response.ok) {
        const token = await response.text();
        console.log("Login successful. Token:", token);
        localStorage.setItem("jwtToken", token);
      } else {
        const responseText = await response.text();
        console.error("Login failed. Server response:", responseText);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  }
  