function Button({ btnAction = () => {}, children }) {
  return (
    <>
      <button className="btn-primary" onClick={btnAction}>{children}
      </button>
    </>
  );
}

export default Button;
