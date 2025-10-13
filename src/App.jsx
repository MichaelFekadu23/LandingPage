import { Fragment } from 'react';
import { ArrowRight, Menu, Smartphone, Users, ShieldCheck } from './icons';

const navigation = [
  { label: 'Rider', href: '#' },
  { label: 'Driver', href: '#' },
  { label: 'API', href: '#' },
];

const stats = [
  { value: '100%', label: 'Driver Earnings' },
  { value: '24/7', label: 'Support' },
  { value: '4.9★', label: 'Average Rating' },
];

const features = [
  {
    title: 'Enter Your Ride Details',
    description:
      'Share your pickup, drop-off, schedule preference, and seat count so nearby drivers can bid on the perfect ride.',
    bullets: ['Specify pickup and drop-off locations', 'Select timing and vehicle preferences', 'Add notes or accessibility needs'],
    icon: Smartphone,
  },
  {
    title: 'Choose Your Fare Option',
    description:
      'Review competing bids in real time. Lock in the fare that matches your budget, speed, or comfort expectations.',
    bullets: ['Filter bids by price or ETA', 'Chat with drivers before booking', 'Transparent driver profiles and ratings'],
    icon: Users,
  },
  {
    title: 'Enjoy Your Trip',
    description:
      'Track your driver, stay updated with live notifications, and arrive relaxed knowing you set the terms.',
    bullets: ['Encrypted in-app messaging', 'Live GPS ride tracking', 'Cashless payments & receipts'],
    icon: ShieldCheck,
  },
];

function App() {
  return (
    <Fragment>
      <div className="relative min-h-screen overflow-hidden bg-charcoal-900">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-hero-glow blur-[100px] opacity-70" aria-hidden="true" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="border-b border-white/5 bg-charcoal/60 backdrop-blur-xl">
            <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald to-emerald-dark shadow-glow">
                  <span className="text-2xl font-semibold text-charcoal-900">N</span>
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-wide">Moto</p>
                  <p className="text-sm text-slate-400">On-Demand Rides</p>
                </div>
              </div>
              <nav className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/40 hover:text-white"
                >
                  Log In
                </button>
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald via-emerald-light to-emerald-dark px-5 py-2 text-sm font-semibold text-charcoal-900 shadow-glow transition-transform hover:scale-[1.02]"
                >
                  Get the App
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
              <button className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 md:hidden">
                <Menu className="h-5 w-5 text-slate-200" />
              </button>
            </div>
          </header>

          <main className="flex-1">
            <section className="relative isolate overflow-hidden">
              <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
              <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
                <div className="space-y-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-emerald-light">
                    Smarter Ridesharing
                  </div>
                  <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
                    Ride for <span className="bg-gradient-to-r from-emerald-light via-emerald to-emerald-dark bg-clip-text text-transparent">Less</span>
                  </h1>
                  <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                    Ride instantly, negotiate fares, or let Moto&apos;s smart bidding AI find your best deal. Drivers keep 100% of their earnings and riders pay less.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald via-emerald-light to-emerald-dark px-8 py-3 text-base font-semibold text-charcoal-900 shadow-glow transition hover:-translate-y-0.5"
                    >
                      Get the App
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40"
                    >
                      Watch Demo
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-bold text-white">
                        ▶
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-white/5 bg-white/5 px-6 py-5 backdrop-blur-xl sm:divide-x sm:divide-white/10">
                    {stats.map((stat) => (
                      <div key={stat.label} className="flex min-w-[140px] flex-col gap-1 sm:px-4">
                        <span className="text-2xl font-semibold text-white">{stat.value}</span>
                        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-emerald/20 blur-3xl" aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-charcoal-800/80 shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
                    <img
                      src="https://images.unsplash.com/photo-1520340356584-6cd738c27a46?auto=format&fit=crop&w=900&q=80"
                      alt="Rideshare passenger"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 space-y-3 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent p-6">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>Driver ETA</span>
                        <span className="font-semibold text-white">03:12</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>Current Bid</span>
                        <span className="font-semibold text-emerald-light">$18.45</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>Ride Type</span>
                        <span className="font-semibold text-white">Executive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative border-t border-white/5 bg-charcoal-800/80 py-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(26,212,142,0.12),transparent_65%)]" aria-hidden="true" />
              <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 text-center lg:px-8">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-light">
                    How Moto Works
                  </p>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Your <span className="bg-gradient-to-r from-emerald-light via-emerald to-emerald-dark bg-clip-text text-transparent">Next-Gen</span> On-Demand Rideshare Platform
                  </h2>
                  <p className="mx-auto max-w-2xl text-base text-slate-300">
                    Drivers keep 100% of their fares while riders lock in transparent pricing with driver bids tailored to every trip.
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                  {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <article
                        key={feature.title}
                        className="gradient-border relative rounded-[28px] bg-charcoal-900/70 p-[1px]"
                      >
                        <div className="card-overlay h-full rounded-[28px] p-8 text-left shadow-card">
                          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-light to-emerald-dark text-charcoal-900 shadow-glow">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                          <p className="mt-4 text-sm leading-relaxed text-slate-300">{feature.description}</p>
                          <ul className="mt-6 space-y-3 text-sm text-slate-300">
                            {feature.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-3">
                                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-br from-emerald-light to-emerald" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          </main>

          <footer className="border-t border-white/5 bg-charcoal-900/80 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row lg:px-8">
              <p>© {new Date().getFullYear()} Moto Technologies. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
