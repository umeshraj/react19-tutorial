export const Alert = ({ children, type = "success" }) => {
  return (
    <div
      style={{
        backgroundColor: type === "success" ? "#d4edda" : "#f8d7da",
        color: "#155724",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #c3e6cb",
        marginBottom: "15px",
      }}
    >
      {children}{" "}
    </div>
  );
};
