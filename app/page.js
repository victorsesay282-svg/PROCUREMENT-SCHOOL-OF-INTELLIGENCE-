import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="nav">
        <Link href="/" className="brand">
          <span className="brandMark">PSI</span>
          <span>
            <strong>Procurement School</strong>
            <small>of Intelligence</small>
          </span>
        </Link>

        <nav>
          <Link href="/courses">Courses</Link>
          <Link href="/login">Student Login</Link>
          <Link href="/register" className="navButton">
            Get Started
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">
            PROCUREMENT • LOGISTICS • SUPPLY CHAIN
          </p>

          <h1>Build practical skills for the world of procurement.</h1>

          <p className="heroLead">
            Learn procurement, logistics and supply chain management through
            practical, beginner-friendly courses designed for students and
            professionals.
          </p>

          <div className="actions">
            <Link href="/courses" className="primary">
              Explore Courses
            </Link>

            <Link href="/register" className="secondary">
              Create Student Account
            </Link>
          </div>
        </div>

        <div className="heroCard">
          <div className="cardTop">Featured course</div>

          <div className="courseIcon">📦</div>

          <h2>Logistics & Inventory Management</h2>

          <p>
            Build a strong foundation in inventory control, logistics
            operations and stock management.
          </p>

          <Link
            href="/courses/logistics-inventory"
            className="cardLink"
          >
            View Course →
          </Link>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">WHY PSI</p>

        <h2>Learning that connects knowledge to practice.</h2>

        <div className="features">
          <div>
            <span>01</span>
            <h3>Practical learning</h3>
            <p>
              Understand concepts through real business situations and simple
              examples.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Structured courses</h3>
            <p>
              Move from lessons to quizzes, assignments and certificates as PSI
              grows.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Career focused</h3>
            <p>
              Develop skills relevant to procurement, logistics and supply
              chain careers.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <strong>Procurement School of Intelligence</strong>
        <p>Learn. Practice. Build your career.</p>
      </footer>
    </main>
  );
    }
