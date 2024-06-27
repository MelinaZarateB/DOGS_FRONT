import React from "react";
import ContentLoader from "react-content-loader";
import style from "./Loader.module.css";

const MyLoader = (props) => {
  return (
    <div className={style.loaderContainer}>
      <ContentLoader
        speed={2}
        width={288}
        height={442}
        viewBox="0 0 288 442"
        backgroundColor="#f0f0f0"
        foregroundColor="#d8d4d4"
        {...props}
      >
        <rect x="18" y="221" rx="2" ry="2" width="196" height="17" />
        <rect x="20" y="246" rx="2" ry="2" width="220" height="35" />
        <rect x="4" y="10" rx="6" ry="6" width="286" height="200" />
        <rect x="22" y="293" rx="0" ry="0" width="90" height="13" />
        <rect x="24" y="315" rx="6" ry="6" width="79" height="33" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={288}
        height={442}
        viewBox="0 0 288 442"
        backgroundColor="#f0f0f0"
        foregroundColor="#d8d4d4"
        {...props}
      >
        <rect x="18" y="221" rx="2" ry="2" width="196" height="17" />
        <rect x="20" y="246" rx="2" ry="2" width="220" height="35" />
        <rect x="4" y="10" rx="6" ry="6" width="286" height="200" />
        <rect x="22" y="293" rx="0" ry="0" width="90" height="13" />
        <rect x="24" y="315" rx="6" ry="6" width="79" height="33" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f0f0f0"
        foregroundColor="#d8d4d4"
        {...props}
      >
        <rect x="18" y="221" rx="2" ry="2" width="196" height="17" />
        <rect x="20" y="246" rx="2" ry="2" width="220" height="35" />
        <rect x="4" y="10" rx="6" ry="6" width="286" height="200" />
        <rect x="22" y="293" rx="0" ry="0" width="90" height="13" />
        <rect x="24" y="315" rx="6" ry="6" width="79" height="33" />
      </ContentLoader>
    </div>
  );
};

export default MyLoader;