import './Features.css'

const features = [
  {
    title: 'Academic management',
    description:
      'Courses, batches, attendance, and grades in a unified dashboard built for educators.',
    icon: '📚',
  },
  {
    title: 'Tax & compliance',
    description:
      'Automated reminders, document vault, and filing workflows aligned with regulations.',
    icon: '📋',
  },
  {
    title: 'Financial insights',
    description:
      'Fee collection, invoicing, and real-time reports so leadership can act fast.',
    icon: '📊',
  },
  {
    title: 'Secure & scalable',
    description:
      'Role-based access, audit logs, and cloud infrastructure that grows with you.',
    icon: '🔒',
  },
]

export function Features() {
  return (
    <section className="features" id="features">
      <div className="features__header">
        <h2>Everything your institution needs</h2>
        <p>
          From classroom to compliance — one platform designed for Indian
          education and tax workflows.
        </p>
      </div>
      <div className="features__grid">
        {features.map((feature) => (
          <article key={feature.title} className="features__card">
            <span className="features__icon" aria-hidden="true">
              {feature.icon}
            </span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
