export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg">InterviewBank</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-4 py-2 rounded font-semibold text-sm hover:bg-[#79b8ff] transition-colors">
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          AI-Powered Hiring Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Build Custom Interview Questions<br />
          <span className="text-[#58a6ff]">from Any Job Description</span>
        </h1>
        <p className="text-[#8b949e] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Paste a job description and instantly get role-specific interview questions, track candidate responses, and receive AI-suggested follow-ups — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-8 py-3 rounded-lg font-bold text-base hover:bg-[#79b8ff] transition-colors">
            Start for $16/mo
          </a>
          <a href="#features" className="border border-[#30363d] text-[#c9d1d9] px-8 py-3 rounded-lg font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">
            See How It Works
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "📋", title: "Paste & Generate", desc: "Drop in any job description and get a tailored question bank in seconds, covering technical, behavioral, and culture-fit angles." },
            { icon: "📊", title: "Track Responses", desc: "Log candidate answers directly in the app. Compare responses across candidates for the same role with ease." },
            { icon: "🤖", title: "Smart Follow-Ups", desc: "AI suggests contextual follow-up questions based on candidate answers to help you dig deeper in real time." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff] transition-colors">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple, Flat Pricing</h2>
        <p className="text-[#8b949e] mb-12">Everything you need to run better interviews — no per-seat fees.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited job descriptions",
              "AI question generation",
              "Candidate response tracking",
              "Smart follow-up suggestions",
              "Export to PDF / CSV",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] py-3 rounded-lg font-bold text-base hover:bg-[#79b8ff] transition-colors text-center">
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI generate questions?",
              a: "You paste a job description and our AI analyzes the required skills, responsibilities, and seniority level to produce a balanced set of technical, behavioral, and situational questions tailored to that exact role."
            },
            {
              q: "Can I use this for multiple roles at once?",
              a: "Yes. Your Pro subscription gives you unlimited job descriptions. Create separate question banks for every open role and manage them all from one dashboard."
            },
            {
              q: "Is there a free trial?",
              a: "We offer a 7-day money-back guarantee. If InterviewBank doesn't improve your hiring process, just email us and we'll refund you — no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] px-6 py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} InterviewBank. Built for hiring teams who care about quality.</p>
      </footer>
    </main>
  );
}
