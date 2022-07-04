import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// imported icons
import { VscLoading } from 'react-icons/vsc';

// imported components
import ErrorCard from '../../components/ErrorCard/ErrorCard';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password });
      setLoading(false);
    } catch ({ request }) {
      const { error } = JSON.parse(request.response);

      setErrorMessage(error);
      setLoading(false);
    }
  };

  return (
    <section className="flex w-full h-screen bg-sky-600 items-center justify-center">

      <form className="flex flex-col max-w-[340px] w-full gap-4 p-4" onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-lg text-md font-semibold text-gray-600"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-lg text-md font-semibold text-gray-600"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
          required
        />

        <button
          type="submit"
          className="w-full p-4 rounded-lg bg-teal-500 text-white text-md font-bold flex items-center gap-3 justify-center"
        >
          {loading && <VscLoading className="animate-spin text-2xl" />}
          Sign In
        </button>

        {errorMessage && <ErrorCard message={errorMessage} />}

        <Link
          to="/asdasdad"
          className="text-white text-center text-sm font-bold"
        >
          {'Don\'t have an account?'}
        </Link>

      </form>

    </section>
  );
}

export default Login;
