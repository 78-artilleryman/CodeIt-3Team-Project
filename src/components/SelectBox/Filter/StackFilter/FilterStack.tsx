import styles from "./FilterStackBox.module.scss";

interface FilterSelecProps {
  image: string;
  value: string;
}

function FilterStack({ image, value }: FilterSelecProps) {
  return (
    <>
      <img src={image} alt="" className={`${styles.stackBox_stack_image}`} id={value} />
      <p className={styles.stackBox_stack_text} id={value}>
        {value}
      </p>
    </>
  );
}

export default FilterStack;
