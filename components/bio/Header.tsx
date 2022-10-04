import Chip from "components/layout/Chip";
import { FunctionComponent, useState } from "react";
import styles from "./Header.module.scss";
import { technologies } from "components/bio/ProjectTechnologies";

const { github } = technologies;

const Header: FunctionComponent = () => {
  const textClasses = `font-bold text-5xl sm:text-7xl pb-4 ${styles.text} ${styles.linear_swipe}`;

  const [isHovering, setHovering] = useState(false);

  const technologyChips = [github]?.map((technology, index) => (
    <Chip
      key={index}
      iconPath={technology.icon}
      colourName={technology.colourName}
      isHovering={isHovering}
      text={technology.name}
      hideUntilHover
      reverse={false}
      href={technology.href}
    />
  ));

  return (
    <div className="flex h-full justify-center items-center flex-col">
      <div className={textClasses}>Adam Lansley</div>
      <div
        className="flex"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {technologyChips}
      </div>
    </div>
  );
};

export default Header;
