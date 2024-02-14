import styles from "./FilterStackBox.module.scss";

interface FilterSelecProps {
  image: string;
  name: string;
}

function FilterStack({ image, name }: FilterSelecProps) {
  return (
    <>
      <img src={image} alt="" className={`${styles.stackBox_stack_image}`} />
      <p className={styles.stackBox_stack_text}>{name}</p>
    </>
  );
}

export default FilterStack;
