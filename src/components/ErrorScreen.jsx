function ErrorScreen({ errorMessage }) {
  return (
    <div className="error-wrapper">
      <p className="error-message">{errorMessage}</p>
      <div className="gameboy-screen">
        <img
          id="missing-no-image"
          src="../src/assets/MissingNo.svg.png"
          alt="missing-no-image"
        />
      </div>
    </div>
  );
}

export default ErrorScreen;
