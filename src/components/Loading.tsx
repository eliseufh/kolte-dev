import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Carregando...</p>
      </div>
    </div>
  );
};

export default Loading;
