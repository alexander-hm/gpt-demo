import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  createBrowserRouter, Routes, Route, RouterProvider, Outlet,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Controls from './components/controls';
import 'react-toastify/dist/ReactToastify.css';

function GPT(props) {
  return (
    <div id="gpt">
      <h1>GPT 3.5 Demo</h1>
      <Controls />
      <ToastContainer />
    </div>
  );
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function Root(props) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<GPT />} />
        <Route path="*" element={<FallBack />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

// Router singleton created
const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: '/', Component: GPT },
    ],
  },
  { path: '*', Component: Root },
]);

// RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
