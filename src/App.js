import "./App.css";
import { Router } from "react-router-dom";

const user = {
  name: "jake",
  image: "https://source.unsplash.com/Sg3XwuEpybU",
  email: "1235@aaa.com",
  phone: "123512355",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com",
};

export const App = () => {
  return <Router />;
};
