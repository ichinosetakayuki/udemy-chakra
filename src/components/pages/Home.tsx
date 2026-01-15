import { memo } from "react";
import HeaderLayout from "../templates/HeaderLayout";

const Home = memo(() => {
  return (
    <>
      <HeaderLayout>
        <p>Homeページです。</p>
      </HeaderLayout>
    </>
  );
});

export default Home;
