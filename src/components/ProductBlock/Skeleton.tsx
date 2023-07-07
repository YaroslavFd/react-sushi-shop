import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./styles.module.scss";

export const Skeleton: React.FC = () => (
  <ContentLoader
    className={styles.product}
    speed={2}
    width={285}
    height={380}
    viewBox="0 0 285 380"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="285" height="190" />
    <rect x="0" y="205" rx="0" ry="0" width="285" height="24" />
    <rect x="0" y="250" rx="0" ry="0" width="260" height="42" />
    <rect x="0" y="305" rx="0" ry="0" width="40" height="20" />
    <rect x="0" y="345" rx="10" ry="10" width="95" height="30" />
    <rect x="155" y="335" rx="25" ry="25" width="130" height="45" />
  </ContentLoader>
);
