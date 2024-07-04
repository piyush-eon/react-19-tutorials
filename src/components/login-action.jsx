import { useState } from "react";
import { loginUser } from "../api/user";

const LoginAction = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (formData) => {
    setIsPending(true);
    setUser(null);
    setError(null);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await loginUser(username, password);
      setUser(response.data);
    } catch (error) {
      setError(error.error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form action={handleSubmit}>
      <div>
        <label>Username:</label>
        <input name="username" type="text" required />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password" required />
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>
      {user && <p style={{ color: "green" }}>Logged in: {user.email}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default LoginAction;
