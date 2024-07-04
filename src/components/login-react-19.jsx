import { useActionState } from "react";
import { loginUser } from "../api/user";

const LoginReact19 = () => {
  const [user, submitAction, isPending] = useActionState(login, {
    error: null,
    data: null,
  });

  async function login(previousState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const response = await loginUser(username, password);
      return { error: null, data: response.data };
    } catch (error) {
      return { ...previousState, error: error.error };
    }
  }

  return (
    <form action={submitAction}>
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

      {user.data && (
        <p style={{ color: "green" }}>Logged in: {user.data.email}</p>
      )}

      {user.error && <p style={{ color: "red" }}>{user.error}</p>}
    </form>
  );
};

export default LoginReact19;
