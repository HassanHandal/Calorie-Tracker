function ClickCounter(props) {
  const onClickHandeler = () => {
    // props.setclickcounter(props.clickcounter + 1);
    props.setclickcounter((previousvalue) => previousvalue + 1);
  };
  return (
    <button type="button" onClick={onClickHandeler}>
      Click Me
    </button>
  );
}
export default ClickCounter;
