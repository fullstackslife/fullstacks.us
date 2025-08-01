export default function Counters() {
  return (
    <section className="counters">
      <div className="container">
        <div>
          <i className="far fa-clock fa-4x"></i>
          <div className="counter" data-target="13500">0</div>
          <h3>Working Hours</h3>
        </div>
        <div>
          <i className="fas fa-gift fa-4x"></i>
          <div className="counter" data-target="720">0</div>
          <h3>Completed Projects</h3>
        </div>
        <div>
          <i className="fas fa-users fa-4x"></i>
          <div className="counter" data-target="480">0</div>
          <h3>Happy Clients</h3>
        </div>
        <div>
          <i className="fas fa-award fa-4x"></i>
          <div className="counter" data-target="120">0</div>
          <h3>Awards Received</h3>
        </div>
      </div>
    </section>
  );
} 