export default function Spinner() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center gap-3 offcanvas-backdrop show"
      style={{ zIndex: 255 }}
    >
      <div className="spinner-border text-primary" role="status">
      </div>
      <span className="sr-only text-primary">Loading...</span>
    </div>
  );
}
